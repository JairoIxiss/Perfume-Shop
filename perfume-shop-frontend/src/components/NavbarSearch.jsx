import { Link } from 'react-router-dom';
import { useState } from 'react';
import { authService } from '../services/authService';
import { IconSearch, IconMenu2, IconX } from "@tabler/icons-react";

const NavbarSearch = ({ searchTerm, onSearchChange }) => {
    const isAuthenticated = authService.isAuthenticated();
    const isAdmin = authService.isAdmin();
    const currentUser = authService.getCurrentUser();

    const handleLogout = () => {
        authService.logout();
        window.location.href = '/';
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-amber-300/25 rounded-2xl border-b border-white/20 shadow-xl">

            {/* CONTENIDO */}
            <div className="flex justify-between items-center h-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* LOGO */}
                <Link to="/" className="font-pacifico text-xl md:text-2xl lg:text-3xl text-yellow-900 hover:text-yellow-700 transition-colors duration-300">
                    Perfume Shop
                </Link>

                {/* BUSCADOR DESKTOP */}
                <div className="flex items-center w-full max-w-md mx-4 md:mx-6 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-white/70 hover:shadow-xl">
                    <IconSearch className="w-5 h-5 text-yellow-900/60 mr-2 flex-shrink-0" />
                    <input 
                        type="text" 
                        placeholder="Buscar perfume..." 
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)} 
                        className="bg-transparent outline-none w-full text-yellow-900 placeholder-yellow-900/50"
                    />
                </div>

                {/* BOTÓN MOBILE */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-yellow-900 text-2xl hover:text-yellow-700 transition-colors duration-300 p-3" 
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <IconX size={24} />
                    ) : (
                        <IconMenu2 size={24} />
                    )}
                </button>

                {/* MENÚ DESKTOP */}
                <div className="hidden md:flex items-center space-x-7 lg:space-x-10">

                    {isAdmin && (
                        <Link to="/admin" className="text-yellow-900 hover:text-yellow-700 transition-colors duration-300">
                            Panel Admin
                        </Link>
                    )}

                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-sm truncate max-w-[120px] text-yellow-900">
                                👤 {currentUser.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm"
                            >
                                Salir
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="bg-amber-100/50 px-4 py-2 rounded-2xl hover:bg-amber-200/50 text-yellow-900 hover:text-yellow-700 transition-colors duration-300">
                                Login
                            </Link>
                            <Link to="/register" className="bg-amber-100/50 px-4 py-2 rounded-2xl hover:bg-amber-200/50 text-yellow-900 hover:text-yellow-700 transition-colors duration-300">
                                Registro
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* MENÚ MOBILE */}
            {menuOpen && (
                <>
                    {/* Tarjeta flotante */}
                    <div className="md:hidden absolute right-4 top-20 z-50 backdrop-blur-md bg-amber-100 rounded-3xl shadow-2xl border border-white/30 p-2 min-w-[200px] animate-slide-down">
                        <div className="flex flex-col py-2">
                            
                            {/* BUSCADOR MOBILE */}
                            {isAdmin && (
                                <Link 
                                    to="/admin"
                                    className="text-yellow-900 hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-2xl border-b border-yellow-900"
                                    onClick={handleLinkClick}
                                >
                                    Panel Admin
                                </Link>
                            )}

                            {isAuthenticated ? (
                                <>
                                    <div className="px-4 py-2 text-sm text-yellow-800/70 border-t border-amber-200/50 mt-1">
                                        👤 {currentUser.email}
                                    </div>
                                    <button 
                                        onClick={() => {
                                            handleLogout();
                                            handleLinkClick();
                                        }}
                                        className="mx-4 my-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-2xl transition-colors duration-200 text-sm font-medium"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </>
                            ) : (
                                <div className="border-t border-amber-200/50 mt-1 pt-1">
                                    <Link 
                                        to="/login"
                                        className="text-yellow-900 hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-b-none block border-b border-yellow-900"
                                        onClick={handleLinkClick}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register"
                                        className="text-yellow-900 hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-2xl block"
                                        onClick={handleLinkClick}
                                    >
                                        Registro
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default NavbarSearch;