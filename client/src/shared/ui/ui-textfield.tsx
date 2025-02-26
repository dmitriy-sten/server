import clsx from "clsx";
import React, { InputHTMLAttributes, PropsWithoutRef, useId } from "react";

interface Props {
  className?: string;
  error?: string;
  label?: string;
  inputProps?: PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>;
}

export const UiTextField: React.FC<Props> = ({
  className,
  label,
  error,
  inputProps,
}) => {
  const id = useId();

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label className="block " htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type="text"
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-0"
        )}
      />
      {error && <div className="text-red-400 text-sm">{error}</div>}
    </div>
  );
};
