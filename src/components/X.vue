<template>
    <input type="text" v-model="searchText">
    <button @click="fetchMovie(searchText)">Buscar</button>
    <div class="container grid">
        <div class="row">
            <div class="col-md-2" v-for="(mov, i) in movies" :key="mov.id">
                <div class="card mb-4 box-shadow">
                    <img :src="getImg(mov.poster_path)" :alt="mov.title" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">{{ mov.title }}</h2>
                    </div>
                </div>
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
        await Movies.fetchMovieByQuery(query)
        console.log(movies.value)
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
</style>