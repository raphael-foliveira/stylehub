import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
}
