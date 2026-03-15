import { Link } from 'react-router-dom';

const PerfumeCard = ({ perfume }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">

            <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                    src={perfume.imagenUrl || 'null'}
                    alt={perfume.nombrePerfume}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {perfume.nombrePerfume}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                    {perfume.marca?.nombreMarca || 'Marca'}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{perfume.genero}</span>
                    <span className="text-sm text-gray-500">{perfume.volumen}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                        ${perfume.precio}
                    </span>
                    <Link
                        to={`/perfume/${perfume.idPerfume}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                    >
                        Ver Detalle
                    </Link>
                </div>

                {perfume.stock <= 5 && perfume.stock > 0 && (
                    <p className="text-orange-500 text-xs mt-2">
                        ¡Solo quedan {perfume.stock}!
                    </p>
                )}

                {perfume.stock === 0 && (
                    <p className="text-red-500 text-xs mt-2">Agotado</p>
                )}
            </div>
        </div>
    );
};

export default PerfumeCard;