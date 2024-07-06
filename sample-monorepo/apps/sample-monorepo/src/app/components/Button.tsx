interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`opacity-80 rounded-md p-2 hover:opacity-100 h-auto w-auto ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
