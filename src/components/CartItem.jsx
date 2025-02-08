import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";

export function CartItem({ item: { product, qty, size }, onClickTrash }) {
  return (
    <div className="bg-gray-50 hover:bg-[#DAFFA2]  p-2 dark:bg-transparent dark:hover:bg-night-50 cursor-pointer">
      <div className="flex space-x-2  cursor-pointer">
        <img src={product.src} alt="" className="h-24" />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>

        <div className="dark:text-white">{product.price * qty}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
              defaultValue={size}
              value={size}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              options={QTY}
              title=""
              className={"w-16 p-1 pl-2"}
              defaultValue={qty}
              value={qty}
            />
          </div>
        </div>
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
