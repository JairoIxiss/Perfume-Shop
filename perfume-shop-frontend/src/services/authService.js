import api from './api';

export const authService = {
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);

        if(response.data.token){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('rol', response.data.rol);
        }

        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('rol');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    isAdmin: () => {
        return localStorage.getItem('rol') == 'ADMIN';
    },

    getCurrentUser: () => {
        return {
            email: localStorage.getItem('email'),
            rol: localStorage.getItem('rol'),
        };
    },
};