import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Business from "./pages/Business";
import Politics from "./pages/Politics";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./css/App.css";
import "./css/MediaQuery.css";


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/posts/:linkText" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
