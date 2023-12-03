<template>
    <SearchBar @search="onSearch"></SearchBar>
    <div class="container grid">
        <div class="row">
            <router-link class="col-md-2" v-for="movie in movies" :key="movie.id" :to="{name: 'movie', params: {id: movie.id}}">
                <div class="card mb-4 box-shadow">
                    <img :src="getImg(movie.poster_path)" :alt="movie.title" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">{{ movie.title }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <ControlPage @next="Movies.nextPage()" @previous="Movies.previousPage()" @reset="Movies.resetPage()"></ControlPage>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import SearchBar from '../components/SearchBar.vue'
    import ControlPage from '../components/ControlPage.vue';
    import MovieService from '../services/moviesService.js'
    import { usePagesStore, pinia } from "../store/pages.js"

    const storePages = usePagesStore(pinia)
    const Movies = new MovieService()
    const movies = Movies.getMovies()

    onMounted(async () =>{
        await Movies.fetchAllMovies()
    })

    const onSearch = async (query) => {
        if(query != ''){
            storePages.page = 1
        }
        if(query == ''){
            await Movies.fetchAllMovies()
        }
        Movies.query.value = query
        await Movies.fetchMovieByQuery(query);
    }

    const getImg = (poster_path) =>{
        return `https://image.tmdb.org/t/p/w500/${poster_path}`
    }
</script>

<style scoped>
    .card-title{
        font-size: 15px;
    }
    .card{
        min-height: 400px;
    }
    a{
        text-decoration: none;
    }
</style>