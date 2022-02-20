import banner from "./banner.jpg";

const Banner = () => {
  return (
    <img
      className="banner"
      src={banner}
      alt="Banner"
      style={{
        width: "100%",
      }}
    />
  );
};

export default Banner;
