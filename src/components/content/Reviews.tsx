import styles from "./content.module.css";

export default function Reviews() {
  return (
    <div className={`${styles.reviewsContainer} py-16 px-2 lg:px-20 flex`}>
      <div className="lg:w-3/5 p-2 lg:px-12 lg:text-3xl font-medium">
        <h3 className="pb-4">
          O StyleHub é uma ferramenta incrível que transforma a forma como barbeiros, salões de beleza e clientes interagem. Com recursos
          inovadores de divulgação e agendamento integrado, ele simplifica e melhora a experiência de todos os envolvidos. É uma solução
          indispensável para quem busca praticidade, qualidade e conexões mais eficientes no mundo da beleza.
        </h3>
        <p>- Alice, Salvador</p>
      </div>
    </div>
  );
}
