import axios from "axios";
import jwt_decode from "jwt-decode";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("jwtToken");
    if(token) {
        const decoded = jwt_decode(token);
        config.url = config.url.replace('_USER_ID_', decoded.id);
        config.headers.Authorization = token;
    }
    return config;
});

export const createMovieOrSeries = (payload) => api.post("/user/_USER_ID_/movie", payload);
export const updateMovieOrSeries = (id, payload) => api.put(`/user/_USER_ID_/movie/${id}`, payload);
export const deleteMovieOrSeries = (id) => api.delete(`/user/_USER_ID_/movie/${id}`);
export const getMovieOrSeriesById = (id) => api.get(`/user/_USER_ID_/movie/${id}`);
export const getAllMovies = () => api.get("/user/_USER_ID_/movies/");
export const getAllSeries = () => api.get("/user/_USER_ID_/series/");

export const register = (payload) => api.post("/register", payload);
export const signIn = (payload) => api.post("/signin", payload);

export const getImdbTitles = (payload) => api.post("/imdb/titles", payload);
export const getImdbTitleDetails = (id) => api.get(`/imdb/title/${id}`);

export const getFilmwebRating = (payload) => api.post("/filmweb/title", payload);

const apis = {
    createMovieOrSeries,
    updateMovieOrSeries,
    deleteMovieOrSeries,
    getMovieOrSeriesById,
    getAllMovies,
    getAllSeries,
    register,
    signIn,
    getImdbTitles,
    getImdbTitleDetails,
    getFilmwebRating,
};

export default apis;
