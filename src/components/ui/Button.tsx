"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-[#0f2438] text-white hover:bg-[#1b3a56] shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-[#0f2438]",
    secondary: "bg-[#b48a3c] text-white hover:bg-[#a0772e] shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-[#b48a3c]",
    outline: "border border-[#d0d3d8] bg-white text-[#0f2438] hover:bg-[#f4f3ed] hover:border-[#0f2438] hover:-translate-y-0.5 focus:ring-[#0f2438]",
    ghost: "text-[#0f2438] hover:bg-black/5 focus:ring-[#0f2438]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
