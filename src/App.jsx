import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loader from "./Components/Loader/Loader";
import Nav from "./Components/Nav/Nav";
import Themes from "./Components/Themes/Themes";
import AppRoutes from "./routes/routes";
import InternetConnection from "./servies/internetConnection";
import InternetLoader from "./Components/Loader/LoaderNetwork";

const App = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating loading state
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <InternetConnection setIsOffline={setIsOffline} />

      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Nav />
          {!isOffline ? (
            <>
              <Themes />
              <AppRoutes />
            </>
          ) : (
            <InternetLoader />
          )}
        </Container>
      )}
    </>
  );
};

export default App;
