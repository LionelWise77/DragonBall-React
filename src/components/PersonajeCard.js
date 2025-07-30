import React, { useState } from "react";
import "../styles/PersonajeCard.css";

export default function PersonajeCard({ personaje }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`personaje-card-flip ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* LADO FRONTAL */}
      <div className="card-front">
        <img src={personaje.imagen} alt={personaje.nombre} />
        <h3 className="nombre">{personaje.nombre}</h3>
        <p className="hint-text"> stats</p>
      </div>

      {/* LADO TRASERO */}
      <div className="card-back">
        <h4>Estadísticas</h4>
        <p>
          <strong>Stamina:</strong> {personaje.stamina}
        </p>
        <p>
          <strong>Velocidad:</strong> {personaje.velocidad}
        </p>
        <p>
          <strong>Carácter:</strong> {personaje.caracter}
        </p>
        <p>
          <strong>Curiosidad:</strong> {personaje.curiosidades}
        </p>
      </div>
    </div>
  );
}
