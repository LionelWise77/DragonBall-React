import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import "../styles/Personajes.css";
import PersonajeCard from "./PersonajeCard"; // 👈 importamos el nuevo componente

const API_URL_PERSONAJES = "/personajes/";

export default function Personajes({ limit }) {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL_PERSONAJES)
      .then((response) => setPersonajes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const personajesMostrados = limit ? personajes.slice(0, limit) : personajes;

  return (
    <section className="personajes-container">
      <h2>Personajes</h2>
      <div className="personajes-grid">
        {personajesMostrados.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </section>
  );
}
