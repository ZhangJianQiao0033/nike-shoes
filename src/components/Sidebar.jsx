export function Sidebar({ isOpen, children, onClickClose }) {
  return (
    <div>
      <div
        className={`dark:bg-night z-50 fixed right-0 top-0 h-full w-full p-5 md:w-[50%] lg:w-[30%] transition transform duration-300 shadow-lg bg-white ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <button
          className="absolute right-4 top-4 p-2 font-bold text-black dark:text-white"
          onClick={onClickClose}
        >
          X
        </button>
        {children}
      </div>

      {isOpen && (
        <div className="z-20 fixed left-0 top-0 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
