import { ButtonProps } from "@/types/ButtonProps";

export default function PButton({ children, type = "button", className = "" }: ButtonProps) {
  return (
    <button className={`bg-gray-200 py-2 px-4 rounded text-lg w-40 hover:drop-shadow-lg ${className}`} type={type}>
      {children}
    </button>
  );
}
