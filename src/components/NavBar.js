import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Dragon Ball Fan Page</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">{t("home")}</Link>
        <Link to="/secuelas">{t("sequels")}</Link>
        <Link to="/personajes">{t("characters")}</Link>
        <Link to="/motivacional">{t("motivation")}</Link>
        <div className="dragonball-pulse"></div>
      </div>
      <div className="language-switcher">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="es">🇪🇸 ES</option>
          <option value="en">🇺🇸 EN</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      </div>
    </nav>
  );
}
