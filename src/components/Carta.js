import "./Button.css";

const Carta = ({ image_url, value, suit, code, jugador }) => {
  return <div id={jugador + "_" + code}>
    {value + " " + code}
  </div>;
};

export default Button;
