import { useContext, useEffect, useState } from "react";
import juegoContext from "../context/juegoContext";
import ModalGanar from "../components/ModalGanar";
import Jugador from "../components/Jugador";
import get from "../rest/get";
import React from "react";

import "../styles/infantil.css";

const Infantil = () => {
  const {
    deck_id,
    jugadores,
    cartas,
    set_cartas,
    cartas_opcionadas,
    set_cartas_opcionadas,
  } = useContext(juegoContext);

  const [ganador, set_ganador] = useState("");

  useEffect(() => {
    if (jugadores.length <= 0) {
      window.location.href = "/";
    }

    let aux = async () => {
      // Primera peticion para taer las dos primeras cartas con el id de la partida
      const { data } = await get({
        url: `http://deckofcardsapi.com/api/deck/${deck_id}/draw/`,
        data_pos: { count: jugadores.length },
      });

      // guardamos las cartas en un arreglo donde la pos 0 sn las cartas del jugador 1, y asi sucesivamente
      if (data != null) {
        if (cartas.length <= 0) {
          const cartas_aux = [[],[]];
          const cartas_opcionadas_aux = [];

          const primero = getRandomInt(2); // primero al que se le va a dar la carta

          cartas_aux[0].push(data.cards[primero]);
          cartas_aux[1].push(data.cards[Math.abs(primero - 1)]);

          for (let i = 0; i < data.cards.length; i++) {

            const carta_atras = { ...data.cards[i] };
            carta_atras.image =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Reverso_baraja_espa%C3%B1ola_rojo.svg/1200px-Reverso_baraja_espa%C3%B1ola_rojo.svg.png";

            cartas_opcionadas_aux.push([carta_atras, carta_atras]);
          }

          set_cartas_opcionadas(cartas_opcionadas_aux);
          set_cartas(cartas_aux);
        }
      }
      console.log(cartas);
    };

    if (deck_id !== "" && deck_id !== undefined && deck_id !== null) {
      aux();
    }
  }, [deck_id, cartas]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Funcion para cuando de play
  const on_play = (e) => {
    let aux = async () => {
      // Peticion para pedir cartas
      const { data } = await get({
        url: `http://deckofcardsapi.com/api/deck/${deck_id}/draw/`,
        data_pos: { count: jugadores.length },
      });

      // guardamos las cartas en un arreglo donde la pos 0 sn las cartas del jugador 1, y asi sucesivamente
      if (data != null) {
        const cartas_aux = [...cartas];

        const primero = getRandomInt(2); // primero al que se le va a dar la carta

        cartas_aux[0].push(data.cards[primero]);
        cartas_aux[1].push(data.cards[Math.abs(primero - 1)]);

        // Logica para decir si es ganador
        const ganadores = [];
        for (let i = 0; i < cartas_aux.length; i++) {
          const res = validar_ganador(i, cartas_aux[i]);
          if (res != null) {
            ganadores.push(res);
          }
        }

        // Validar si hay uno o dos ganadores
        if (ganadores.length === 2) {
          if (
            ganadores[0].pinta1 + ganadores[0].pinta2 >
            ganadores[1].pinta1 + ganadores[1].pinta2
          ) {
            set_ganador(jugadores[ganadores[0].jugador]);

            const aux = [...cartas_opcionadas];
            aux[ganadores[0].jugador] = ganadores[ganadores[0].jugador].carta;
            set_cartas_opcionadas(aux);

            document.getElementById("ganador_btn").click();
            document.getElementById("btn_play").disabled = true
          } else if (
            ganadores[0].pinta1 + ganadores[0].pinta2 <
            ganadores[1].pinta1 + ganadores[1].pinta2
          ) {
            set_ganador(jugadores[ganadores[1].jugador]);

            const aux = [...cartas_opcionadas];
            aux[ganadores[1].jugador] = ganadores[ganadores[1].jugador].carta;
            set_cartas_opcionadas(aux);

            document.getElementById("ganador_btn").click();
            document.getElementById("btn_play").disabled = true
          } else {
            alert("Empate");
          }
        }

        // Si solo hay un ganador
        if (ganadores.length == 1) {
          set_ganador(jugadores[ganadores[0].jugador]);

          const aux = [...cartas_opcionadas];
          aux[ganadores[0].jugador] = ganadores[0].carta;
          set_cartas_opcionadas(aux);

          document.getElementById("ganador_btn").click();
          document.getElementById("btn_play").disabled = true
        }

        set_cartas(cartas_aux);
      } else {
        alert("Error");
      }
    };

    aux();
  };

  const validar_ganador = (jugador = 0, cartass = []) => {
    let ganadores = null;
    const pintas = { HEARTS: 4, SPADES: 3, DIAMONDS: 2, CLUBS: 1 };

    for (let i = 0; i < cartass.length; i++) {
      for (let j = 0; j < cartass.length; j++) {
        if (cartass[i].value === cartass[j].value && i !== j) {
          ganadores = {
            jugador: jugador,
            carta: [cartass[i], cartass[j]],
            pinta1: pintas[cartass[i].suit],
            pinta2: pintas[cartass[j].suit],
          };
          break;
        }
      }
    }

    return ganadores;
  };

  return (
    <>
      <button id="btn_play" type="button" className="btn btn-success boton_play" onClick={on_play}>
        PLAY
      </button>
      <div id="cartas_opcionadas" className="row">
        {cartas_opcionadas.map((e, i) => {
          return (
            <div className="col-6">
              <h3 className="col-12">JUGADOR: {jugadores[i]}</h3>
              <div key={i} className="row">
                <img
                  src={e[0].image}
                  width="200px"
                  alt=""
                  className="col-4"
                ></img>
                <img
                  src={e[1].image}
                  width="200px"
                  alt=""
                  className="col-4"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
      <div id="cartas_obtenidas" className="row">
        {cartas.map((e, i) => {
          return (
            <div key={i} className="col cartas_actual_jugador">
              <Jugador cartas={e} nombre={jugadores[i]} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        id="ganador_btn"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <ModalGanar jugador={ganador} />
    </>
  );
};

export default Infantil;
