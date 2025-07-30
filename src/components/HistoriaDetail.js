// src/components/HistoriaDetail.js
import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import "../styles/HistoriaDetail.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function HistoriaDetail() {
  const [historia, setHistoria] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("/historias/2/")
      .then((response) => setHistoria(response.data))
      .catch((error) => console.error(error));
    AOS.init({ duration: 800 });
  }, []);

  if (!historia) return <p className="loading-text">{t("loading")}</p>;

  return (
    <div className="historia-detail-container">
      <div className="historia-overlay">
        <h1 className="historia-title" data-aos="fade-up">
          {historia.titulo}
        </h1>
        <p className="historia-content" data-aos="fade-up">
          {historia.contenido}
        </p>

        <h2 className="homenaje-subtitle" data-aos="fade-up">
          {t("toriyamaTribute", "✨ Homenaje a Akira Toriyama ✨")}
        </h2>
        <div className="historia-gallery">
          {["toriyama1.jpg", "toriyama2.jpg", "toriyama3.jpg"].map(
            (img, idx) => (
              <div key={idx} className="viñeta" data-aos="zoom-in">
                <img
                  src={require(`../assets/historia-gallery/${img}`)}
                  alt={`Toriyama ${idx + 1}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
