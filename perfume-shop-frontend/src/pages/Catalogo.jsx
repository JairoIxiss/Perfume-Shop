import { useState, useEffect } from 'react';
import { perfumeService } from '../services/perfumeService';
import PerfumeCard from '../components/PerfumeCard';
import NavbarSearch from '../components/NavbarSearch';
import Footer from '../components/Footer';

const Catalog = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [perfumesFiltrados, setPerfumesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroGenero, setFiltroGenero] = useState('TODOS');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPerfumes();
  }, []);

  useEffect(() => {
    filtrarPerfumes();
  }, [searchTerm, perfumes]);

  const loadPerfumes = async () => {
    try {
      setLoading(true);
      const data = await perfumeService.getAll();
      setPerfumes(data);
      setPerfumesFiltrados(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los perfumes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterGenero = async (genero) => {
    setFiltroGenero(genero);
    try {
      setLoading(true);
      if (genero === 'TODOS') {
        const data = await perfumeService.getAll();
        setPerfumes(data);
      } else {
        const data = await perfumeService.getByGenero(genero);
        setPerfumes(data);
      }
    } catch (err) {
      setError('Error al filtrar perfumes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filtrarPerfumes = () => {
    if (!searchTerm) {
      setPerfumesFiltrados(perfumes);
      return;
    }

    const filtered = perfumes.filter((perfume) =>
      perfume.nombrePerfume.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPerfumesFiltrados(filtered);
  };

  if (loading) {
    return (
      <>
        <NavbarSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg md:text-xl">Cargando perfumes...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavbarSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg md:text-xl text-red-600 px-4 text-center">{error}</div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen w-full bg-blue-100 flex flex-col">
      <NavbarSearch searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <div className="flex-1">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 mt-6 md:mt-8 px-4 text-yellow-900">
        Catálogo de Perfumes
      </h1>

      {/* Filtros */}
      <div className="flex justify-center flex-wrap gap-2 md:space-x-4 mb-6 md:mb-8 px-4">
        <button
          onClick={() => handleFilterGenero('TODOS')}
          className={`px-4 md:px-6 py-2 rounded text-sm md:text-base transition-colors ${
            filtroGenero === 'TODOS'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white hover:bg-gray-500'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => handleFilterGenero('MASCULINO')}
          className={`px-4 md:px-6 py-2 rounded text-sm md:text-base transition-colors ${
            filtroGenero === 'MASCULINO'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white hover:bg-gray-500'
          }`}
        >
          Hombre
        </button>
        <button
          onClick={() => handleFilterGenero('FEMENINO')}
          className={`px-4 md:px-6 py-2 rounded text-sm md:text-base transition-colors ${
            filtroGenero === 'FEMENINO'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white hover:bg-gray-500'
          }`}
        >
          Mujer
        </button>
        <button
          onClick={() => handleFilterGenero('UNISEX')}
          className={`px-4 md:px-6 py-2 rounded text-sm md:text-base transition-colors ${
            filtroGenero === 'UNISEX'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white hover:bg-gray-500'
          }`}
        >
          Unisex
        </button>
      </div>

      {perfumes.length === 0 ? (
        <div className="text-center text-gray-600 text-lg md:text-xl py-10">
          No hay perfumes disponibles
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 px-4 md:px-10 pb-10">
          {perfumesFiltrados.map((perfume) => (
            <PerfumeCard key={perfume.idPerfume} perfume={perfume} />
          ))}
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;