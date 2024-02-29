import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loader from "./Components/Loader/Loader";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Themes from "./Components/Themes/Themes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    // Simulating loading state
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Nav />
          <Themes />
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      )}
    </>
  );
};

export default App;
