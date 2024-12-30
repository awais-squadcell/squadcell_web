import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Footer from "./components/Footer";
import Head from "./components/Head";
import Links from "./components/Links";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('Dark Mode');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'Light Mode' ? 'Dark Mode' : 'Light Mode'));};

  return (
    <Router>
      <div className={`w-full h-full ${theme === 'Dark Mode' ? 'bg-zinc-200' : 'bg-zinc-900'
        } ${theme === 'Dark Mode' ? 'text-zinc-900' : 'text-zinc-200'}`}>
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

// Prop validation for App component
App.propTypes = {
  theme: PropTypes.oneOf(['Light Mode', 'Dark Mode']).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default App;
