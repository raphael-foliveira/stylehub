import { ReactNode } from "react";

export default function WhiteButton({ children, className }: { children: ReactNode; className?: string }) {
  return <button className={"bg-white py-2 px-4 rounded text-black text-lg w-40 " + className}>{children}</button>;
}
