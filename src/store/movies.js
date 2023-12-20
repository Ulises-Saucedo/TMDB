import { defineStore } from "pinia"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const useMovies = defineStore('movies', {
    state: () =>{
        return {
            movies: [],
            movie: [],
            currentPage: 1,
            totalItems: 10000,
            search: ''
        }
    },
    actions: {
        async fetchAllMovies(){
            try{
                const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${this.currentPage}`)
                const json = await response.json()
                this.movies = json.results
            }catch(e){
                console.warn(e)
            }
        },
        async fetchMovieByQuery(query){
            try{
                const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${this.currentPage}`)
                const json = await response.json()
                this.search = query
                this.movies = json.results
                this.totalItems = json.total_results
            }catch(e){
                console.warn(e)
            }
        },
        async fetchMovieById(id){
            try{
                const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
                const json = await response.json()
                this.movie = json
            }catch(e){
                console.warn(e)
            }
        }
    }
})