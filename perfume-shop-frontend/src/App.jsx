import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';
import Register from './pages/Registro';
import Colors from './components/Colors';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import TopSellers from './components/TopSellers';
import Lanzamientos from './components/Lanzamientos';
import Beneficios from './components/Beneficios';
import Footer from './components/Footer';
import Suscripcion from './components/suscripcion';
import './index.css'

function App() {
  return (
    <Router>
      <div className="relative  min-h-screen">
        <div className="absolute inset-0 -z-30 bg-white"></div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Colors />
                <Navbar />
                <Carousel />
                <TopSellers/>
                <Lanzamientos />
                <Suscripcion />
                <Beneficios />
                <Footer/>
              </>
            }
            />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
