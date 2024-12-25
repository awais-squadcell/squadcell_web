import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Head from "./components/Head"
import Links from "./components/Links"
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
    <div className="w-full h-screen bg-zinc-900 text-zinc-50">
      <Head/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
      <Links/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
