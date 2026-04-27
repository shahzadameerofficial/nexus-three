"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

type MotionElement = keyof JSX.IntrinsicElements;

type MotionProps = {
  as?: MotionElement;
  children?: ReactNode;
  className?: string;

  initial?: any;
  animate?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
} & Record<string, any>;

export default function Motion({
  as = "div",
  children,
  className,
  ...props
}: MotionProps) {
  const Component = (motion as any)[as];

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}