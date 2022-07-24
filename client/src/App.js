import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import "./MediaQuery.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
