import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Ab from "./Pages/Ab";
import Co from "./Pages/Co";
function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/ab" element={<Ab />} />
        <Route path="/co" element={<Co />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;