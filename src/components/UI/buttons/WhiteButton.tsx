import { ReactNode } from "react";

interface WhiteButtonProps {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export default function WhiteButton({ children, className = "", type = "button" }: WhiteButtonProps) {
  return (
    <button className={"bg-white py-2 px-4 rounded text-black text-lg w-40 " + className} type={type}>
      {children}
    </button>
  );
}
