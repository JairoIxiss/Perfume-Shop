import { Link } from 'react-router-dom';

const PerfumeCard = ({ perfume }) => {
    return (
        <div className="bg-slate-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            
            <div className="p-3 h-40 md:h-56 lg:h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                    src={`/perfumes/${perfume.idPerfume}.png`}
                    alt={perfume.nombrePerfume}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="p-3 md:p-4 flex flex-col flex-1">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 md:mb-2 h-10 md:h-14 overflow-hidden">
                    {perfume.nombrePerfume}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">
                    {perfume.marca?.nombreMarca || 'Marca'}
                </p>

                <div className="flex items-center justify-between mb-2 md:mb-3">
                    <span className="text-xs md:text-sm text-gray-500">{perfume.genero}</span>
                    <span className="text-xs md:text-sm text-gray-500">{perfume.volumen}</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                        ${perfume.precio}
                    </span>
                    <Link
                        to={`/perfume/${perfume.idPerfume}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm transition-colors"
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