import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Dragon Ball Fanpage. Todos los
        derechos reservados.
      </p>
      <p>Creado por Sebbe Pe ✨</p>
    </footer>
  );
}
