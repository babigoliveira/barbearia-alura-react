import logo from "./logo.png";
import "./Header.style.css";

const Header = () => {
  return (
    <header>
      <div className="caixa">
        <h1>
          <img src={logo} alt="Logo da Barbearia da Alura" />
        </h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="produtos.html">Produtos</a>
            </li>
            <li>
              <a href="contato.html">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
