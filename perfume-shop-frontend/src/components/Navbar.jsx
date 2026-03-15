import { Link } from 'react-router-dom';
import { authService } from '../services/authService';
import { IconSearch } from "@tabler/icons-react";

const Navbar = () => {
    const isAuthenticated = authService.isAuthenticated();
    const isAdmin = authService.isAdmin();
    const currentUser = authService.getCurrentUser();

    const handleLogout = () => {
        authService.logout();
        window.location.href = '/';
    };

    return (
        <nav className="contenedor mx-50 relative z-10 backdrop-blur-md bg-amber-300/25 border-b border-white/20 rounded-3xl shadow-xl">
            <div className="contenedor-objetos mx-auto px-4  border-red-500">
                <div className="flex justify-between items-center h-16  border-blue-500">
                    <Link to="/" className="font-pacifico text-2xl text-yellow-900 hover:text-gray-300">
                        Perfume Shop
                    </Link>
                    <div className="flex items-center w-full max-w-md bg-white/50 backdrop-blur-md border border-white/30 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-2xl p-2 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-[1.02]">
                        <IconSearch className="w-5 h-5 text-gray-600 mr-2" />
                        <input type="text" placeholder="Buscar perfume..." className="bg-transparent outline-none w-full " />
                    </div>
                    <div className="flex items-center space-x-6  border-green-500">
                        <Link to="/" className=" text-yellow-900 hover:text-gray-300 transition">
                            Catálogo
                        </Link>
                        {isAdmin && (
                            <Link to="/admin" className="hover:text-gray-300 transition">
                                Panel Admin
                            </Link>
                        )}
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-300">
                                    👤 {currentUser.email}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition "
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        ) : (
                            <div className="space-x-2">
                                <Link
                                    to="/login"
                                    className="text-yellow-900 hover:bg-blue-700 px-4 py-2 rounded transition"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-yellow-900 hover:bg-green-700 px-4 py-2 rounded transition"
                                >
                                    Registro
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;