interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-bulldog-red px-4 py-2 font-bold uppercase text-white duration-150 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
