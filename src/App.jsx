// import { Nav } from "./components/Nav";

import { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import { NavBar } from "./components/NavBar";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };
  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updateItems = [...cartItems];

      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updateItems[existingItemIndex].qty = qty;
        updateItems[existingItemIndex].size = size;
      } else {
        updateItems.push({ product, qty, size });
      }
      setCartItems(updateItems);
      console.log(cartItems);
    }
  };

  const removeFromCart = (productId) => {
    const updateItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updateItems.splice(existingItemIndex, 1);
    setCartItems(updateItems);
  };
  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
      <NavBar onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>

      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
