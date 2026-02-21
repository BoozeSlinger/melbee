"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps: HTMLMotionProps<"button"> = {
  initial: { "--x": "100%", scale: 0.8 } as any,
  animate: { "--x": "-100%", scale: 1 } as any,
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...(animationProps as any)}
      {...props}
      className={cn(
        "relative rounded-none px-10 py-3 font-black text-[9px] uppercase tracking-[0.5em] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_20px_rgba(142,109,47,0.3)] bg-rich-black border border-gold",
        className
      )}
    >
      <span
        className="relative block size-full text-gold drop-shadow-sm transition-colors duration-500 group-hover:text-white"
        style={{
          maskImage:
            "linear-gradient(-75deg, var(--color-gold) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--color-gold) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(142,109,47,0.1)_calc(var(--x)+20%),rgba(142,109,47,0.5)_calc(var(--x)+25%),rgba(142,109,47,0.1)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
