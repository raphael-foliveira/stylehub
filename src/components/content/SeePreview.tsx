import WhiteButton from "../UI/buttons/WhiteButton";
import styles from "./content.module.css";

export default function SeePreview() {
  return (
    <div className={styles.seePreviewContainer + " w-100 text-center text-white flex flex-wrap justify-center"}>
      <div className={styles.textContainer + " my-auto"}>
        <h2>Venha ver nossa Pré-Visualização</h2>
        <p>Uma rápida demonstração do que somos capazes</p>
        <WhiteButton className="w-2/5">Pré-Visualização</WhiteButton>
      </div>
    </div>
  );
}
