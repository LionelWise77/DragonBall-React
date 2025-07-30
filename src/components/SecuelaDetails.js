// filepath: src/components/SecuelaDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import "../styles/SecuelaDetails.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

export default function SecuelaDetail() {
  const { id } = useParams();
  const [secuela, setSecuela] = useState(null);
  const [verMiniHistoria, setVerMiniHistoria] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);

  useEffect(() => {
    axios
      .get(`/secuelas/${id}/`)
      .then((response) => setSecuela(response.data))
      .catch((error) => console.error("Error al cargar la secuela:", error));
    AOS.init({ duration: 1000 });
  }, [id]);

  if (!secuela) return <p>Cargando secuela...</p>;

  const titulo = secuela[`titulo_${lang}`] || secuela.titulo;
  const contenido = secuela[`contenido_${lang}`] || secuela.contenido;
  const miniHistoria =
    secuela[`mini_historia_${lang}`] || secuela.mini_historia;

  const auraSound = new Audio("/sounds/");

  const handleSlideChange = () => {
    auraSound.volume = 0.4;
    auraSound.currentTime = 10;
    auraSound.play().catch((err) => {
      // a veces los navegadores bloquean autoplay, por eso usamos catch
      console.log("Sonido bloqueado hasta interacción del usuario");
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
    beforeChange: () => handleSlideChange(),
  };

  return (
    <div className="secuela-detail-container">
      <h2 className="secuela-title">{titulo}</h2>

      <img className="imagen-banner" src={secuela.imagen_fondo} alt={titulo} />

      <p className="secuela-contenido">{contenido}</p>

      <img
        className="imagen-personaje"
        src={secuela.imagen_personaje}
        alt={`${titulo} personaje`}
      />

      <button
        className="mini-historia-btn"
        onClick={() => setVerMiniHistoria(!verMiniHistoria)}
      >
        {verMiniHistoria ? "Ocultar mini historia" : "Ver mini historia"}
      </button>

      {verMiniHistoria && (
        <div className="mini-historia-box">
          <h3>{t("miniStory")}</h3>
          <p>{miniHistoria}</p>
        </div>
      )}
      {secuela.galeria && secuela.galeria.length > 0 && (
        <div className="galeria-manga">
          <h3>{t("gallery")}</h3>
          <Slider {...settings}>
            {secuela.galeria.map((img) => (
              <div key={img.id} className="viñeta aura" data-aos="zoom-in">
                <img src={img.imagen} alt={img.descripcion} />
                <p className="descripcion-img">{img.descripcion}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
