import { ReactNode } from "react";

interface PButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
}

export default function PButton({ children, type = "button" }: PButtonProps) {
  return (
    <button className="bg-gray-200 py-2 px-4 rounded text-lg w-40 hover:drop-shadow-lg" type={type}>
      {children}
    </button>
  );
}
