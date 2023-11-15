import { ref } from "vue"

export default class MovieAPI{
    constructor(){
        this.movies =  ref([])
    }

    getMovies(){
        return this.movies
    }

    async fetchAllMovies(){
        try{
            const API_KEY = import.meta.env.VITE_API_KEY
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
            const response = await fetch(url)
            const json = await response.json()
            this.movies.value = json.results
        }catch(e){
            console.log(e)
        }
    }

    async fetchMovieByQuery(query){
        try{
            const API_KEY = import.meta.env.VITE_API_KEY
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
            const response = await fetch(url)
            const json = await response.json()
            this.movies.value = json.results
        }catch(e){
            console.log(e)
        }
    }
}