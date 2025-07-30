import "../styles/Gallery.css";

const images = [
  "/assets/GohanBeast.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
