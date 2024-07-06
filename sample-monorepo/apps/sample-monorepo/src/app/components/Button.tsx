interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-600 border-gray-500 border-solid border-[0.5px] opacity-80 rounded-md px-4 py-2 hover:opacity-100 w-36 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
