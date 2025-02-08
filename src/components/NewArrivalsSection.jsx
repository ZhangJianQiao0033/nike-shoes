import { Card } from "./Card";

export function NewArrivalsSection({ items, onClickCard }) {
  return (
    <div className="mt-10">
      <div className="flex-center">
        <div className="text-4xl font-extrabold  bg-[url('./assets/lines.png')] bg-center dark:text-white">
          NEW ARRIVALS
        </div>
      </div>

      <div className="justify-between mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-x-6 gap-y-24">
        {items.map((item, index) => {
          return <Card item={item} key={index} onClick={onClickCard} />;
        })}
      </div>
    </div>
  );
}
