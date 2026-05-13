"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-premium focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-lg hover:shadow-brand-blue/30",
    secondary: "bg-brand-gold text-white hover:bg-brand-gold-soft shadow-lg hover:shadow-brand-gold/30",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white shadow-sm hover:shadow-md",
    ghost: "text-brand-blue hover:bg-brand-blue/5",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
