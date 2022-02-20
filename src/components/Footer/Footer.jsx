import "./Footer.style.css";
import logoBranco from "./logo-branco.png";

const Footer = () => {
  return (
    <footer>
      <img src={logoBranco} alt="Logo da Barbearia da Alura" />
      <p className="copyrigth">&copy; Copyrigth Barbearia Alura - 2021</p>
    </footer>
  );
};

export default Footer;
