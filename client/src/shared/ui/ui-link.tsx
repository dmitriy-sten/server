import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends LinkProps {
  className?: string;
}

export const UiLink: React.FC<Props> = ({
  className,

  ...props
}) => {
  return <Link className={clsx("p-1 text-teal-500 cursor-pointer", className)} {...props} />;
};
