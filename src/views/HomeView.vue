<template>
    <div class="container d-flex justify-content-between pt-4 pb-5">
        <input type="text" v-model="searchText" class="col-10">
        <button @click="fetchMovie(searchText)" class="col-2 mx-2">Buscar</button>
    </div>
    <div class="container grid">
        <div class="row">
            <router-link class="col-md-2" v-for="mov in movies" :key="mov.id" :to="{name: 'movie', params: {id: mov.id}}">
                <div class="card mb-4 box-shadow">
                    <img :src="getImg(mov.poster_path)" :alt="mov.title" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">{{ mov.title }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <div class="container p-3">
        <div class="row d-flex justify-content-between">
            <div class="col">
                <button @click="Movies.resetPage()">Página 1</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button @click="Movies.previousPage()" :disabled="Movies.page.value === 1">{{ Movies.page.value++ }}</button>
                <button @click="Movies.nextPage()" :disabled="Movies.page.value >= Movies.totalPages.value" class="mx-2">{{ Movies.page.value-- }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import MovieAPI from '../services/movieAPI.js'

    const Movies = new MovieAPI()
    const movies = Movies.getMovies()
    let searchText = ref("")

    onMounted(async () =>{
        await Movies.fetchAllMovies()
    })

    const fetchMovie = async (query) =>{
        if(searchText != ''){
            Movies.page.value = 1
        }
        if(searchText == ''){
            await Movies.fetchAllMovies()
        }
        Movies.query.value = query
        await Movies.fetchMovieByQuery(query)
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
    button{
        border-radius: 5px;
        border: none;
        background: rgb(94, 233, 94);
    }
    input{
        border: 1px solid #1c1c1c;
        border-radius: 5px;
        padding: 5px;
        outline: none;
    }
    [disabled]{
        background: rgb(230, 230, 230);
    }
</style>