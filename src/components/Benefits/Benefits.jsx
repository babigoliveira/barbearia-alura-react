import "./Benefits.style.css";
import beneficios from "./beneficios.jpg";

const Benefits = () => {
  return (
    <section className="beneficios">
      <h3 className="titulo-principal">Benefícios</h3>

      <div className="conteudo-beneficios">
        <ul className="lista-beneficios">
          <li className="itens">Atendimento aos clientes</li>
          <li className="itens">Espaço diferenciado</li>
          <li className="itens">Localização</li>
          <li className="itens">Profissionais qualificados</li>
          <li className="itens">Pontualidade</li>
          <li className="itens">Limpeza</li>
        </ul>
        <img
          src={beneficios}
          className="imagem-beneficios"
          alt="benefícios da barbearia"
        />
      </div>

      <div className="video">
        <iframe
          title="benefícios da barbearia"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/wcVVXUV0YUY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Benefits;
