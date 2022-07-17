import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiNetflix } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const handleMobileMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "f00946" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <SiNetflix />
              Netflix
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/tv" className="nav-links">
                Tv
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/series" className="nav-links">
                Series
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/peliculas" className="nav-links">
                Peliculas
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/infantil" className="nav-links">
                Infantil
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/signup" onClick={handleMobileMenu}>
                <Button buttonStyle="btn--outline">Sign up</Button>
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
