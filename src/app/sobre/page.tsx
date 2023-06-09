import styles from "./page.module.css";

export default function Sobre() {
  return (
    <div className={styles.textContainer}>
      <h2>Sobre</h2>
      <h3>Missão da Empresa</h3>
      <p>
        Conectar os barbeiros/salões aos clientes, entregando amostras com filtros personalizados ligados à estética, valorizando os
        clientes e dando apoio ao crescimento dos parceiros. Além de oferecer recursos como um portfólio detalhado dos serviços oferecidos
        pelos salões de beleza e barbeiros, e a possibilidade de agendar serviços.
      </p>
      <h3>Visão</h3>
      <p>
        Ser líder no mercado de tecnologia relacionado a estética, sempre trazendo inovações e soluções alinhadas com a expectativa do
        mercado e dos usuários, salões de beleza e barbearias, impulsionando o sucesso dos nossos clientes.
      </p>
      <h3>Valores</h3>
      <p>
        Buscamos constantemente aprimorar e desenvolver soluções tecnológicas inovadoras que atendam às demandas em constante evolução da
        indústria de estética. Estamos comprometidos em explorar novas ideias e abordagens para fornecer as melhores soluções possíveis aos
        nossos clientes.
      </p>
    </div>
  );
}
