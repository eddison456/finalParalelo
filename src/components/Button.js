import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "blue", "red", "green"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${checkStyle} ${checkSizes} ${checkColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
