import clsx from "clsx";
import React from "react";

function Button({
  id,
  label,
  labelClassName = "",
  type = "button",
  className = "",
  containerClassName = "",
  theme = "primary",
  size = "s",
  disabled = false,
  onClick = () => {},
  width = 80,
  children,
}) {
  return (
    <div style={{ width }} className={`${containerClassName}`}>
      <button
        className={clsx(`w-full rounded ${className}`, {
          "leading-[26px]": size === "xs",
          "h-[26px]": size === "xs",
          "leading-[36px]": size === "s",
          "h-[36px]": size === "s",
          "leading-[40px]": size === "m",
          "h-[40px]": size === "m",
          "leading-[60px]": size === "l",
          "h-[60px]": size === "l",
          "bg-[#1E86E5] hover:bg-[#166DBE] text-white": theme === "primary",
          "hover:bg-[#e60000] hover:text-white": theme === "danger",
          "border border-solid border-[#e60000]": theme === "danger",
          "bg-[#29b6f6] hover:bg-[#81d4fa]": theme === "tertiary",
          "bg-white text-[#1E86E5] hover:bg-[#1E86E5]": theme === "secondary",
          "border border-solid border-[#1E86E5] hover:text-white":
            theme === "normal",
          "!bg-[#1E86E5] text-white": disabled,
        })}
        id={id}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        <span className={`${labelClassName}`}>{label}</span>
        {children}
      </button>
    </div>
  );
}

export default Button;
