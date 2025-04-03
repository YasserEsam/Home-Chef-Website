import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer  items-center justify-center gap-6 bg-black text-white px-8 py-3 rounded-3xl font-semibold transition-all hover:bg-gray-800 active:scale-95 ${className}`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
