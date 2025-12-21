import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Description from "./pages/Description.tsx";
import React from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname === "/") {
      navigate("/about");
    }
  });

  return (
    <NavigationBar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Projects />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </NavigationBar>
  );
}

export default App;
