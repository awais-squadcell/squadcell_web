import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Links from "./components/Links";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("Light Mode");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Dark Mode" ? "Light Mode" : "Dark Mode"));
  };

  return (
    <Router>
      <div className={`w-full h-full ${theme === "Light Mode" ? "bg-zinc-900 text-zinc-200" : "bg-zinc-200 text-zinc-900"}`}>
        <Head theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Links />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
