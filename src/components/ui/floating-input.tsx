"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const isFloating = focused || hasValue;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn(
            "flex h-auto w-full rounded-md border-2 border-white/30 bg-black/70 px-4 pt-6 pb-2 text-lg text-white transition-all duration-200 outline-none",
            
            className
          )}
          {...props}
        />
        <label
          className={cn(
            "absolute left-4 text-white/70 pointer-events-none transition-all duration-200",
            isFloating
              ? "top-1 text-xs"
              : "top-1/2 -translate-y-1/2 text-lg"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export { FloatingInput };
