'use client';

export const BuyButton = () => {
  return (
    <button
      className="active:opacity-40 flex justify-center items-center"
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // add logic for toggling menu
      }}
    >
      <div className="p-2 border-white border-[2px]">BUY</div>
    </button>
  );
};
