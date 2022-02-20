import "./ProductCard.style.css";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const ProductCard = ({ title, image, description, price, alt }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p className="produto-descricao">{description}</p>
      <p className="produto-preco">{formatCurrency(price)}</p>
    </>
  );
};

export default ProductCard;
