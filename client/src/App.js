import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
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
          <Route path="/posts/democracy's-chief-executive" element={<Posts />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
