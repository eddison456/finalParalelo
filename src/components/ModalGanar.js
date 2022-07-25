import React from "react";

const ModalGanar = ({ jugador }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Tenemos un ganador
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h2>¡Jugador {jugador} ha ganado!</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/2242/2242681.png" alt="" width="100%"></img>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={()=>{
                window.location.href = "/"
            }} className="btn btn-primary">
              ¡Genial! De nuevo...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGanar;
