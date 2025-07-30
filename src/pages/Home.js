// filepath: /src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

import Historia from "../components/Historia";
import Secuelas from "../components/Secuelas";
import Personajes from "../components/Personajes";
import Articulos from "../components/Articulos"; // ✅ Asegúrate que el nombre coincida

import "../styles/Home.css";

export default function Home() {
  // Aquí puedes usar el contexto si lo necesitas

  return (
    <div className="home-container">
      <h1 className="titulo-home">Dragon Ball</h1>

      {/* 🔥 Historia principal */}
      <Historia />

      {/* 🎬 Secuelas */}
      <Secuelas />

      {/* 🐉 Personajes */}
      <Personajes limit={4} />
      <div className="ver-mas-container">
        <Link to="/personajes" className="ver-mas-btn">
          Ver más personajes
        </Link>
      </div>

      {/* 📰 Artículos */}
      <Articulos />
    </div>
  );
}
