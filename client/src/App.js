import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import "./App.css";

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
    </>
  );
}

export default App;
