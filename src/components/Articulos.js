import "../styles/Articulos.css";
import gokuImage from "../assets/goku-evolution2.jpg";
import freezerImage from "../assets/freezer.jpg";
import dbSuperImage from "../assets/db-super.jpg";
import granolaImage from "../assets/granola.jpg";

const articulos = [
  {
    id: 1,
    titulo: "La evolución de Goku: De niño travieso a leyenda universal",
    resumen:
      "Un repaso por cada etapa del protagonista que marcó generaciones.",
    imagen: gokuImage,
    link: "https://erikstore.com/blog/transformaciones-son-goku-dragon-ball/",
  },
  {
    id: 2,
    titulo: "¿Sabías que Freezer está inspirado en empresarios japoneses?",
    resumen:
      "Akira Toriyama se inspiró en ciertos tipos de negocios para crear a uno de los villanos más temidos.",
    imagen: freezerImage,
    link: "https://www.3djuegos.com/manga-anime/noticias/gran-villano-dragon-ball-z-freezer/",
  },
  {
    id: 3,
    titulo: "El regreso de Dragon Ball Super: ¿Qué esperar del arco de Moro?",
    contenido:
      "Tras una larga espera, Dragon Ball Super regresa con uno de los arcos más oscuros e intensos hasta ahora: el arco de Moro. Este hechicero devorador de planetas no solo representa una amenaza física, sino espiritual y mágica. La saga promete peleas épicas y revelaciones importantes para el universo Dragon Ball.",
    imagen: dbSuperImage,
    link: "https://radardeldragon.com/dragon-ball-super-manga-43-espanol/",
  },
  {
    id: 4,
    titulo: "Granola: el superviviente que desafió a los dioses",
    contenido:
      "Granola es el último sobreviviente de la raza Cereal, destruida por los Saiyajin bajo el mando de Freezer. Consumido por la venganza, utiliza las esferas del dragón de su planeta para convertirse en el ser más poderoso del universo. Su historia es una mezcla de tragedia, orgullo y redención, enfrentando a Goku y Vegeta con nuevas preguntas sobre el verdadero poder.",
    imagen: granolaImage, // Puedes subir la imagen o usar una URL propia
    link: "https://radardeldragon.com/dragon-ball-super-manga-68-espanol/#google_vignette",
  },
];

export default function Articulos() {
  return (
    <section className="articulos-container">
      <h2>Artículos y Curiosidades</h2>
      <div className="articulos-grid">
        {articulos.map((art) => (
          <a key={art.id} href={art.link} className="articulo-card">
            <img src={art.imagen} alt={art.titulo} />
            <div className="articulo-info">
              <h3>{art.titulo}</h3>
              <p>{art.resumen}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
