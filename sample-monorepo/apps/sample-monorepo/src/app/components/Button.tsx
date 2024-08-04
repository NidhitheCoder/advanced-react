interface ButtonProps {
  label: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({
  label,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`opacity-80 rounded-md p-2 hover:opacity-100 h-auto w-auto ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
