import { ref } from "vue"
import { usePagesStore, pinia } from "../store/pages.js";

const storePages = usePagesStore(pinia)
const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/'

export default class MovieService{
    constructor(){
        this.movies = ref([])
        this.movie = ref([])
        this.query = ref("")
    }

    getMovies(){
        return this.movies
    }

    getMovie(){
        return this.movie
    }

    nextPage(){
        if(storePages.page < storePages.total_pages){
            storePages.advancePage()
            if(this.query.value){
                this.fetchMovieByQuery(this.query.value);
            }else{
                this.fetchAllMovies();
            }
        }
    }

    previousPage() {
        if(storePages.page > 1){
            storePages.prevPage()
            if(this.query.value){
                this.fetchMovieByQuery(this.query.value);
            }else{
                this.fetchAllMovies();
            }
        }
    }

    resetPage(){
        storePages.setPage()
        if(this.query.value){
            this.fetchMovieByQuery(this.query.value);
        }else{
            this.fetchAllMovies();
        }
    }

    async fetchAllMovies(){
        try{
            const response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&page=${storePages.page}`)
            const json = await response.json()
            this.movies.value = json.results
            storePages.setTotalPages(json.total_pages)
        }catch(e){
            console.log(e)
        }
    }

    async fetchMovieByQuery(query){
        try{
            const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${storePages.page}`)
            const json = await response.json()
            this.movies.value = json.results
            storePages.setTotalPages(json.total_pages)
        }catch(e){
            console.log(e)
        }
    }

    async fetchMovieById(id){
        try{
            const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
            const json = await response.json()
            this.movie.value = json
        }catch(e){
            console.log(e)
        }
    }
}