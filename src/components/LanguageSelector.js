import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function LanguageSelector() {
  const { setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
