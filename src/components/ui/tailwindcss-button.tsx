"use client";
import React, { ButtonHTMLAttributes, CSSProperties } from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export const LitUpBtn = ({text,handleClick,className,icon,position}: {
  text: string,
  position?: 'left' | 'right',
  handleClick?: () => void,
  className?: string,
  icon?: React.ReactNode
}
) => {
    return (
      <button className="relative inline-flex h-fit overflow-hidden rounded-[10px] p-[1px] focus:outline-none" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_47deg_at_50%_50%,#AA26E6FF_10%,#2B4D97FF_68%)]" />
        <span className={cn('py-3 inline-flex gap-x-5 h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl',className)}>
          {position === 'left' && icon}
          {text}
          {position === 'right' && icon}
        </span>
      </button>
    )    
}
