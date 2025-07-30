import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Secuelas from "./components/Secuelas";
import Gallery from "./components/Gallery";
import SecuelaDetails from "./components/SecuelaDetails";
import Footer from "./components/Footer";
import Personajes from "./components/Personajes";
import Motivacional from "./pages/Motivacional";
import HistoriaDetail from "./components/HistoriaDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secuelas" element={<Secuelas />} />
        <Route path="/secuelas/:id" element={<SecuelaDetails />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/motivacional" element={<Motivacional />} />
        <Route path="/historia" element={<HistoriaDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
