<template>
    <div class="view_container">
        <div class="container p-3">
            <div class="row">
                <div class="col-12 col-md-4">
                    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="`${movie.poster_path}`">
                </div>
                <div class="col-12 col-md-8 d-flex flex-column justify-content-between">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <h1>{{ movie.title }}</h1>
                            </div>
                            <div class="row genres">
                                <p v-for="genre in movie.genres" class="col-2">{{ genre.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <p>{{ movie.release_date }}</p>
                            </div>
                            <div class="row">
                                <p>{{ movie.overview }}</p>
                            </div>
                            <div class="row">
                                <router-link to="/">Atrás</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import MovieService from '../services/moviesService.js';

    const ID = ref('')
    const Movie = new MovieService()
    const movie = Movie.getMovie()

    onMounted(async() =>{
        const route = useRoute()
        ID.value = route.params.id
        await Movie.fetchMovieById(ID.value)
    })
</script>

<style scoped>
    .view_container{
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    img{
        width: 100%;
        border-radius: 10px;
    }
    a{
        background: rgb(247, 90, 90);
        border-radius: 5px;
        padding: 5px;
        text-decoration: none;
        color: #fff;
        text-align: center;
    }
    .genres p{
        background: rgb(66, 148, 255);
        border-radius: 5px;
        text-align: center;
        padding: 3px;
        margin: 1px;
        color: #fff;
    }
</style>