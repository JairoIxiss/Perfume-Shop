import api from './api';

export const perfumeService = {
    getAll: async () => {
        const response = await api.get('/perfume/traer');
        return response.data;
    },

    getById: async (id) => {
        const response = await api.get('/perfume/traer/${id}');
        return response.data;
    },

    getByGenero: async (genero) => {
        const response = await api.get(`/perfume/traer/por-genero`, {
            params: {genero}
        });
        return response.data;
    },

    create: async (perfume) => {
        const response = await api.post('/perfume/crear', perfume);
        return response.data;
    },

    update: async (id, perfume) => {
        const reponse = await api.put('/perfume/editar/${id}', perfume);
        return reponse.data;
    },

    delete: async (id) => {
        const response = await api.delete('/perfume/eliminar/${id}');
        return response.data;
    },
};