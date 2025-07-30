import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import "../styles/Historia.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const API_URL_HISTORIA = "/historias/";

export default function Historia() {
  const [historia, setHistoria] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios
      .get(`${API_URL_HISTORIA}2/`)
      .then((response) => {
        console.log(response.data);
        setHistoria(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!historia) return <p>{t("loading")}</p>;

  const lang = i18n.language;
  const titulo = historia[`titulo_${lang}`] || historia.titulo;
  const contenido = historia[`contenido_${lang}`] || historia.contenido;

  return (
    <div className="historia-container">
      <div className="historia-content">
        <h1>{titulo}</h1>
        <p>{contenido.slice(0, 300)}...</p>
        <Link to="/historia">
          <button className="ver-mas-btn">{t("seeMore")}</button>
        </Link>
      </div>
    </div>
  );
}
