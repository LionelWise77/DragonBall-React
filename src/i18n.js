// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones básicas (podés mover esto a archivos separados después)
const resources = {
  es: {
    translation: {
      home: "Inicio",
      sequels: "Secuelas",
      characters: "Personajes",
      motivation: "Motivación",
      loading: "Cargando...",
      seeMore: "Ver más",
      toriyamaTribute: "✨ Homenaje a Akira Toriyama ✨",

      seeMiniStory: "Ver mini historia",
      hideMiniStory: "Ocultar mini historia",
      miniStory: "Mini historia",
      gallery: "Galería",

      history: {
        title: "Historia",
        description: "Dragon Ball es una serie épica que marcó generaciones...",
      },
      articles: {
        title: "Artículos y Curiosidades",
      },
      charactersSection: {
        title: "Personajes",
      },
    },
  },
  en: {
    translation: {
      home: "Home",
      sequels: "Sequels",
      characters: "Characters",
      motivation: "Motivation",
      loading: "Loading...",
      seeMore: "See more",
      toriyamaTribute: "✨ Tribute to Akira Toriyama ✨",

      seeMiniStory: "See mini story",
      hideMiniStory: "Hide mini story",
      miniStory: "Mini story",
      gallery: "Gallery",

      history: {
        title: "History",
        description: "Dragon Ball is an epic series that marked generations...",
      },
      articles: {
        title: "Articles and Curiosities",
      },
      charactersSection: {
        title: "Characters",
      },
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      sequels: "Suites",
      characters: "Personnages",
      motivation: "Motivation",
      loading: "Chargement...",
      seeMore: "Voir plus",
      toriyamaTribute: "✨ Hommage à Akira Toriyama ✨",

      seeMiniStory: "Voir la mini-histoire",
      hideMiniStory: "Masquer la mini-histoire",
      miniStory: "Mini-histoire",
      gallery: "Galerie",

      history: {
        title: "Histoire",
        description:
          "Dragon Ball est une série épique qui a marqué des générations...",
      },
      articles: {
        title: "Articles et Curiosités",
      },
      charactersSection: {
        title: "Personnages",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
