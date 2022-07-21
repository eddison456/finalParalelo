import React from "react";

import { infantil, peliculas, series, tv } from "../data/Data";
import { useEffect, useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";


const Home = () => {


    

  const [nombre, setNombre] = useState({usuario_1:"",usuario_2:""});
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  



const handlerChanga = (e) => {
  
  console.log(e)
  setNombre({usuario_1: e.target.value,usuario_2: e.target.value})
    
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
   <head>    
    <title>Login Form</title>    
    <link rel="stylesheet" type="text/css" href="../styles/login.css" />     
</head>    
<body>    
    <h2>registro de usuarios</h2>
    <div class="login">    
    <form id="login" >    
        <label><b>jugador 1   
        </b>    
        </label>    
        <input type="text" name="jugador_1" id="jugador_1" placeholder="jugador 1"  onChange={handlerChanga}/>    
         
        <label><b>jugador 2    
        </b>    
        </label>    
        <input type="text" name="jugador_2" id="jugador_2" placeholder="jugador 2" onChange={handlerChanga}/>    
  
              <li type="button" name="log" id="log" value="Log In Here" onClick={handleMobileMenu}>
              <Link to="/infantil" className="nav-links">
                Infantil
              </Link>
            </li>     
          

    </form>     
</div>    
</body>
</>
   
  );
};

export default Home;
