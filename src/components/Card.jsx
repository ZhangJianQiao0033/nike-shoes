export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="font-semibold mt-10 underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>

      <img
        src={item.src}
        alt=""
        className="h-40 w-56 absolute left-[40%] top-5"
      />
    </div>
  );
}
