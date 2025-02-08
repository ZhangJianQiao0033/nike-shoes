import { CartItem } from "./CartItem";

export function Cart({ cartItems, onClickTrash }) {
  return (
    <div>
      <h2 className="mb-10 text-4xl font-bold dark:text-white">Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} onClickTrash={onClickTrash} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
