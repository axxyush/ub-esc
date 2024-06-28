import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vocallens from "./components/Vocallens";
import RFBio from "./components/RFBio";
import BCIVocal from "./components/BCIVocal";
import NoteMD from "./components/NoteMD";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vocallens" element={<Vocallens />} />
            <Route path="/rfbio" element={<RFBio />} />
            <Route path="/bcivocal" element={<BCIVocal />} />
            <Route path="/notemd" element={<NoteMD />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
