import { ButtonProps } from "@/types/ButtonProps";

export default function WhiteButton({ children, className = "", type = "button" }: ButtonProps) {
  return (
    <button className={`bg-white py-2 px-4 rounded text-black text-lg w-40 ${className}`} type={type}>
      {children}
    </button>
  );
}
