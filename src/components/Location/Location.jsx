import "./Location.style.css";

const Location = () => {
  return (
    <section className="mapa">
      <h3 className="titulo-principal">Nosso estabelecimento</h3>
      <p>Nosso estabelecimento está localizado no coração da cidade.</p>

      <div className="conteudo-mapa">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr"
          width="100%"
          height="315"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
