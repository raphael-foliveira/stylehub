"use client";
import MainLogo from "../../static/img/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import PButton from "../UI/buttons/PButton";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.headerContainer + " flex justify-between px-8 py-6 w-100"}>
      <div className="w-40"></div>
      <Image src={MainLogo} alt="Main Logo" onClick={handleClick} />
      <div className={styles.contactInfo + " flex my-auto"}>
        <a href="#contactForm">
          <PButton>Contato</PButton>
        </a>
      </div>
    </div>
  );
}
