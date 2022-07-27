import React, { useContext } from "react";
import juegoContext from "../context/juegoContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import get from "../rest/get";

import "../styles/login.css";

const Home = () => {
  const [jugadores_act, set_jugadores_act] = useState({});

  const {set_jugadores,set_deck_id,set_cartas} = useContext(juegoContext);

  const handleClick = (e) => {
    let aux = async () => {
      //peticion para iniciar partida
      const { data } = await get({url: "http://deckofcardsapi.com/api/deck/new/",data_pos:{}});
      set_deck_id(data.deck_id)
    };

    aux()

    const arr_jugadores = []
    console.log(arr_jugadores)

    for(const [key, value] of Object.entries(jugadores_act)){
      console.log(key)
      arr_jugadores.push(value)
    }
    set_cartas([])
    set_jugadores(arr_jugadores)
  };

  const handlerChanga = (e) => {
    //agrego los jugadores cada vez que se presiona una tecla
    set_jugadores_act({...jugadores_act,[e.target.name]: e.target.value});
  };

  return (
    <>
      <div>
        <title>Login Form</title>
        <link rel="stylesheet" type="text/css" href="../styles/login.css" />
      </div>
      <div>
        <h2>Registrar jugadores</h2>
        <div className="login">
          <form id="login">
            <label>
              <strong>Jugador 1</strong>
            </label>
            <input
              type="text"
              name="jugador_1"
              id="jugador_1"
              placeholder="jugador 1"
              onChange={handlerChanga}
            />

            <label>
              <strong>Jugador 2</strong>
            </label>
            <input
              type="text"
              name="jugador_2"
              id="jugador_2"
              placeholder="jugador 2"
              onChange={handlerChanga}
            />

            <Link to="/infantil" className="nav-links btn btn-success" onClick={handleClick}>
              JUGAR
            </Link>

          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
