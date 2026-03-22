import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PropertyDetail from "./pages/PropertyDetail";
import AllProperties from "./pages/AllProperties";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/properties" element={<AllProperties />} />
      </Routes>
    </Router>
  );
}

export default App;