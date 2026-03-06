import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
<Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center">
                ¡Bienvenido a Perfume Shop!
              </h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
