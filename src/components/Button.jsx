export const Button = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`${isActive && 'bg-slate'} cursor-pointer rounded-lg px-3 py-2 text-sm font-bold text-cream`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
