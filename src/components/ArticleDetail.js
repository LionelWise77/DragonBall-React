// filepath: src/components/ArticleDetail.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosConfig";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`/articles/${id}/`)
      .then((response) => setArticle(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!article) return <p>Cargando artículo...</p>;

  return (
    <div className="article-detail">
      <h2>{article.titulo}</h2>
      <img src={article.imagen} alt={article.titulo} />
      <p>{article.contenido}</p>
    </div>
  );
}
