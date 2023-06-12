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
    <div className={"flex flex-wrap justify-center lg:justify-between px-8 py-6 w-full"}>
      <div className={"flex flx-wrap w-full mb-4 justify-between lg:w-1/5"}>
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
      <div className="w-full lg:w-2/5 flex justify-center">
        <Image src={MainLogo} alt="Main Logo" onClick={handleClick} className="h-40 w-auto mb-4" />
      </div>
      <div className={styles.contactInfo + " flex my-auto lg:w-1/5 justify-end"}>
        <a href="/#contactForm">
          <PButton type="button">Contato</PButton>
        </a>
      </div>
    </div>
  );
}
