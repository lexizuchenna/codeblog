import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Business from "./pages/Business";
import Politics from "./pages/Politics";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/posts/democracy's-chief-executive" element={<Posts />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
