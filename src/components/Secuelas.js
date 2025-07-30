// src/components/Secuelas.js
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import "../styles/Secuelas.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Home from "../pages/Home";

const API_URL_SECUELAS = "/secuelas/";

export default function Secuelas() {
  const [secuelas, setSecuelas] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];

  useEffect(() => {
    axios
      .get(API_URL_SECUELAS)
      .then((response) => setSecuelas(response.data))
      .catch((error) => console.error(error));
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="sequel-section">
      <h2 className="section-title">{t("sequels")}</h2>
      <div className="sequel-list">
        {secuelas.map((secuela, index) => {
          const titulo = secuela[`titulo_${lang}`] || secuela.titulo;
          const contenido = secuela[`contenido_${lang}`] || secuela.contenido;
          return (
            <div
              key={secuela.id}
              className="secuela-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={secuela.imagen_fondo}
                alt={titulo}
                className="secuela-image"
              />
              <div className="secuela-info">
                <h3>{titulo}</h3>
                <p>{contenido.slice(0, 120)}...</p>
                <Link to={`/secuelas/${secuela.id}`}>
                  <button className="ver-mas-btn">{t("seeMore")}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
