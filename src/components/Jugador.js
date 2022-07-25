import React from "react";

const Jugador = ({ cartas=[], nombre }) => {
  return <div id={nombre} className="row">
    {cartas.map((e,i)=>{
        return (<div className="col-4" key={e.code+i}>
            <img src={e.image} alt="" width="80%"></img>
        </div>)
    })}
  </div>;
};

export default Jugador;
