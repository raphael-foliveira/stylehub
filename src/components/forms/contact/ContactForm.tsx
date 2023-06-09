"use client";
import { FormEvent } from "react";
import styles from "./ContactForm.module.css";
import PButton from "@/components/UI/buttons/PButton";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.contactFormContainer + " flex px-20 py-12"} id="contactForm">
      <div className={styles.textContainer + " w-1/2 text-center my-auto"}>
        <h2>Entre em contato</h2>
        <p>Mande uma mensagem para saber mais sobre nosso produto</p>
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 flex flex-wrap ">
        <label htmlFor="name" className="w-1/2 px-2">
          <p>Nome</p>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-200 focus:ring-2 focus:border-transparent rounded-lg px-3 py-2 w-full"
          />
        </label>
        <label htmlFor="email" className="w-1/2 px-2">
          <p>E-Mail</p>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-200 focus:ring-2 focus:border-transparent rounded-lg px-3 py-2 w-full"
          />
        </label>
        <label htmlFor="message" className="w-full px-2 mt-4">
          <p>Mensagem</p>
          <textarea
            id="message"
            name="message"
            className="bg-gray-200 focus:ring-2 focus:border-transparent rounded-lg px-3 py-2 w-full mt-2"
            rows={6}
          />
        </label>
        <div className="w-full flex justify-end pr-2 mt-4">
          <PButton>Enviar</PButton>
        </div>
      </form>
    </div>
  );
}
