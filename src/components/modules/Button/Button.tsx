import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "primaryOutline" | "redOutline";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "focus:outline-none focus:ring-4 rounded-lg text-center font-bold me-2 mb-2";
  const variants = {
    primary: "text-white border border-blue-700 bg-blue-600 hover:bg-blue-800 focus:ring-blue-300",
    primaryOutline: "text-blue-600 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300",
    redOutline: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300",
  };
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-6 py-3 text-[16px]",
    large: "px-7 py-3 text-xl",
  };

  const style = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    icon ? "flex justify-center items-center" : ""
  } ${className}`;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
