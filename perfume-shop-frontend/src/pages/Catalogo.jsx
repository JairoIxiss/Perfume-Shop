import { useState, useEffect } from 'react';
import { perfumeService } from '../services/perfumeService';
import PerfumeCard from '../components/PerfumeCard';

const Catalog = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroGenero, setFiltroGenero] = useState('TODOS');

  // Cargar perfumes cuando se monta el componente
  useEffect(() => {
    loadPerfumes();
  }, []);

  const loadPerfumes = async () => {
    try {
      setLoading(true);
      const data = await perfumeService.getAll();
      setPerfumes(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los perfumes. Asegúrate que el backend esté corriendo.');
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Cargando perfumes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Catálogo de Perfumes
      </h1>

      {/* Filtros */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => handleFilterGenero('TODOS')}
          className={`px-6 py-2 rounded ${
            filtroGenero === 'TODOS'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => handleFilterGenero('MASCULINO')}
          className={`px-6 py-2 rounded ${
            filtroGenero === 'MASCULINO'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Hombre
        </button>
        <button
          onClick={() => handleFilterGenero('FEMENINO')}
          className={`px-6 py-2 rounded ${
            filtroGenero === 'FEMENINO'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Mujer
        </button>
        <button
          onClick={() => handleFilterGenero('UNISEX')}
          className={`px-6 py-2 rounded ${
            filtroGenero === 'UNISEX'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Unisex
        </button>
      </div>

      {/* Grid de perfumes */}
      {perfumes.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          No hay perfumes disponibles
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.idPerfume} perfume={perfume} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;