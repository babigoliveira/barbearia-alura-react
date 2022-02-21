import "./Products.style.css";
import ProductCard from "../ProductCard/ProductCard";

import barba from "../../assets/barba.jpg";
import cabelo from "../../assets/cabelo.jpg";
import cabeloEBarba from "../../assets/cabelo+barba.jpg";

const products = [
  {
    title: "Cabelo",
    image: cabelo,
    alt: "",
    description: "Na tesoura ou máquina, como o cliente preferir",
    value: 25,
  },
  {
    title: "Barba",
    image: barba,
    alt: "",
    description: "Corte e desenho profissional de barba",
    value: 18,
  },
  {
    title: "Cabelo + Barba",
    image: cabeloEBarba,
    alt: "",
    description: "Pacote completo de cabelo e barba",
    value: 35,
  },
];

const Products = () => {
  return (
    <ul className="produtos">
      {products.map(({ title, image, alt, description, value }) => (
        <li key={title}>
          <ProductCard {...{ title, image, alt, description, value }} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
