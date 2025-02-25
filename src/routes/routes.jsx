import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import Page404 from "../Pages/404/404Page";
import ProjectDetails from "../Pages/Portfolio/ProjectDatails/ProjectDetails";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ProjectDetails/:title" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
