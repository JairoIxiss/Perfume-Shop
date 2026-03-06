import { Link } from 'react-router-dom';
import { authService } from '../services/authService';

const Navbar = () => {
    const isAuthenticated = authService.isAuthenticated();
    const isAdmin = authService.isAdmin();
    const currentUser = authService.getCurrentUser();

    const handleLogout = () => {
        authService.logout();
        window.location.href = '/';
    };

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold hover:text-gray-300">
                        🛍️ Perfume Shop
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="hover:text-gray-300 transition">
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
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        ) : (
                            <div className="space-x-2">
                                <Link
                                    to="/login"
                                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition"
                                >
                                    Registro
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-red-600 text-4xl font-bold p-8">
          PRUEBA DE TAILWIND
        </div>
        </nav>
    )
};

export default Navbar;