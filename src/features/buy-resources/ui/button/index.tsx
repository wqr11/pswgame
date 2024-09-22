'use client';

export const BuyButton = () => {
  return (
    <button
      className="active:opacity-40"
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // add logic for toggling menu
      }}
    >
      <BuyResourceIcon />
    </button>
  );
};
