const API_DB = "https://api.themoviedb.org/3",
    API_DB_MOVIE = `${API_DB}/movie`,
    API_KEY = "0edebfba89e9884bf322b86515be4721",
    API_DB_MOVIE_POPULARES = `${API_DB_MOVIE}/popular?api_key=${API_KEY}&language=es-AR&page=1`,
    API_IMG = "https://image.tmdb.org/t/p/original";

export {
    API_DB, 
    API_DB_MOVIE, 
    API_KEY,
    API_IMG,
    API_DB_MOVIE_POPULARES
};