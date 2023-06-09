"use client";
import MainLogo from "../../static/img/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import PButton from "../UI/buttons/PButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopBar() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.headerContainer + " flex justify-between px-8 py-6 w-full"}>
      <div className={"flex justify-between w-1/5"}>
        <div className="my-auto text-xl">
          <Link href="/">Home</Link>
        </div>
        <div className="my-auto text-xl">
          <Link href="/sobre">Sobre</Link>
        </div>
        <div className="my-auto text-xl">
          <Link href="/preview">Preview</Link>
        </div>
      </div>
      <Image src={MainLogo} alt="Main Logo" onClick={handleClick} />
      <div className={styles.contactInfo + " flex my-auto w-1/5 justify-end"}>
        <a href="#contactForm">
          <PButton>Contato</PButton>
        </a>
      </div>
    </div>
  );
}
