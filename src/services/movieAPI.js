import { ref } from "vue"

const API_KEY = import.meta.env.VITE_API_KEY

export default class MovieAPI{
    constructor(){
        this.movies = ref([])
        this.movie = ref([])
        this.page = ref(1)
        this.totalPages = ref(0)
        this.query = ref("");
    }

    getMovies(){
        return this.movies
    }

    getMovie(){
        return this.movie
    }

    nextPage(){
        if(this.page.value < this.totalPages.value){
            this.page.value++
            if(this.query.value){
                this.fetchMovieByQuery(this.query.value);
            }else{
                this.fetchAllMovies();
            }
        }
    }

    previousPage() {
        if(this.page.value > 1){
            this.page.value--
            if(this.query.value){
                this.fetchMovieByQuery(this.query.value);
            }else{
                this.fetchAllMovies();
            }
        }
    }

    resetPage(){
        this.page.value = 1
        if(this.query.value){
            this.fetchMovieByQuery(this.query.value);
        }else{
            this.fetchAllMovies();
        }
    }

    async fetchAllMovies(){
        try{
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${this.page.value}`
            const response = await fetch(url)
            const json = await response.json()
            this.movies.value = json.results
            this.totalPages.value = json.total_pages
        }catch(e){
            console.log(e)
        }
    }

    async fetchMovieByQuery(query){
        try{
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${this.page.value}`
            const response = await fetch(url)
            const json = await response.json()
            this.movies.value = json.results
            this.totalPages.value = json.total_pages
        }catch(e){
            console.log(e)
        }
    }

    async fetchMovieById(id){
        try{
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            const response = await fetch(url)
            const json = await response.json()
            this.movie.value = json
        }catch(e){
            console.log(e)
        }
    }
}