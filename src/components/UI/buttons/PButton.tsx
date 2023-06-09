import { ReactNode } from "react";

export default function PButton({ children }: { children: ReactNode }) {
  return <button className="bg-gray-200 py-2 px-4 rounded text-lg w-40 hover:drop-shadow-lg">{children}</button>;
}
