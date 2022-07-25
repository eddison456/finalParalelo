import React, { createContext, useState } from "react";

const juegoContext = createContext([]);

export const JuegoProvider = ({ children }) => {
  // variables globales del contexto docentes
  // ----------------------------------------

  const [deck_id, set_deck_id] = useState("");
  const [jugadores, set_jugadores] = useState([]);
  const [cartas, set_cartas] = useState([]);
  const [cartas_opcionadas, set_cartas_opcionadas] = useState([]);

  // enviamos los valores a lo que este envolviendo el contexto
  // para usarlo en cada uno
  // ----------------------------------------------------------
  return (
    <juegoContext.Provider
      value={{
        deck_id,
        set_deck_id,
        jugadores,
        set_jugadores,
        cartas,
        set_cartas,
        cartas_opcionadas,
        set_cartas_opcionadas,
      }}
    >
      {children}
    </juegoContext.Provider>
  );
};

export default juegoContext;
