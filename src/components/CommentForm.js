import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/articles";

export default function CommentForm({ articleId }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/${articleId}/comments`, {
        content: comment,
      });
      console.log("Comment submitted:", response.data);
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
      />
      <button type="submit">Submit</button>
      {error && <p>Error submitting comment: {error.message}</p>}
    </form>
  );
}
