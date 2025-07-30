import { useState } from "react";
import "../styles/Motivacional.css";

const frasesMotivacionales = [
  {
    personaje: "Goku",
    frase: "No me importa si pierdo, siempre me levanto más fuerte.",
    fondo: "/assets/motivacional/gokuFondo.webp",
    img: "/assets/motivacional/goku-face.png",
  },
  {
    personaje: "Vegeta",
    frase: "Un verdadero guerrero no se rinde jamás.",
    fondo: "/assets/motivacional/vegetaFondo.webp",
    img: "/assets/motivacional/vegeta-face.png",
  },
  {
    personaje: "Piccolo",
    frase: "La disciplina vence al talento si el talento no se disciplina.",
    fondo: "/assets/motivacional/piccolo-face.webp",
    img: "/assets/motivacional/piccolo-face.png",
  },
  {
    personaje: "Gohan",
    frase: "El verdadero poder nace de proteger a los que amas.",
    fondo: "/assets/motivacional/gohan-face.webp",
    img: "/assets/motivacional/gohan-face.png",
  },
];

export default function Motivacional() {
  const [frase, setFrase] = useState(getFraseAleatoria());

  function getFraseAleatoria() {
    return frasesMotivacionales[
      Math.floor(Math.random() * frasesMotivacionales.length)
    ];
  }

  const cambiarFrase = () => {
    let nueva;
    do {
      nueva = getFraseAleatoria();
    } while (nueva.personaje === frase.personaje);
    setFrase(nueva);
  };

  return (
    <div
      className="motivacional-container"
      style={{ backgroundImage: `url(${frase.fondo})` }}
    >
      <div className="motivacional-card">
        <h2>{frase.personaje}</h2>
        <p className="frase">“{frase.frase}”</p>
        <img
          src={frase.img}
          alt={frase.personaje}
          className="motivacional-img"
        />
        <button className="insecto-btn" onClick={cambiarFrase}>
          ¡Dame otra, insecto!
        </button>
      </div>
    </div>
  );
}
