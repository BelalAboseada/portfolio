import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loader from "./Components/Loader/Loader";
import Nav from "./Components/Nav/Nav";
import Themes from "./Components/Themes/Themes";
import AppRoutes from "./routes/routes";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating loading state
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Nav />
          <Themes />
          <AppRoutes />
        </Container>
      )}
    </>
  );
};

export default App;
