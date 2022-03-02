import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
