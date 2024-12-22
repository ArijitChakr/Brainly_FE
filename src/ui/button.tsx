import { ReactElement } from "react";

interface buttontype {
  type: "primary" | "secondary";
  size?: "xs" | "sm" | "lg" | "md" | "full";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  reference?: string;
}
const buttonVarients = {
  primary: "bg-button-primary text-white",
  secondary: "bg-button-secondary text-button-text",
};
const varientSize = {
  xs: "text-sm my-2 px-2",
  sm: "px-2 py-2 text-md mx-2",
  md: "px-3 py-2 text-lg mx-2",
  lg: "px-5 py-2 text-xl mx-2",
  full: "w-full px-5 py-2 text-xl font-bold",
  default: "rounded-md flex items-center justify-center",
};

export function Button({
  type,
  size,
  onClick,
  reference,
  text,
  startIcon,
  endIcon,
}: buttontype) {
  return (
    <button
      onClick={onClick}
      ref={reference}
      className={`${buttonVarients[type]} ${size && varientSize[size]} ${
        varientSize.default
      }
      `}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {text}
      {endIcon && <div>{endIcon}</div>}
    </button>
  );
}
