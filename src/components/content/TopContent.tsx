import WhiteButton from "../UI/buttons/WhiteButton";
import styles from "./content.module.css";

export default function TopContent() {
  return (
    <div className={styles.topContent + " w-100 text-center text-white flex flex-wrap justify-center"}>
      <div className={styles.textContainer + " my-auto"}>
        <h2>O Lugar onde você acha seu estilo</h2>
        <p>
          A Stylehub é o e-commerce do Brasil, oferecendo cortes de cabelo, aparas e produtos de styling de alta qualidade. Com uma ampla
          seleção de estilos, do clássico ao moderno, é fácil encontrar o look perfeito para qualquer ocasião. Experimente a conveniência e
          a qualidade do Stylehub hoje!
        </p>
        <a href="#contactForm">
          <WhiteButton>Contato</WhiteButton>
        </a>
      </div>
    </div>
  );
}
