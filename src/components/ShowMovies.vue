<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col mb-4" v-for="movie in storeMovies.movies" :key="movie.id">
                <router-link :to="{name: 'movie', params: {id: movie.id}}">
                    <div class="card mx-auto">
                        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img card-img-top img-fluid" alt="Poster">
                        <div class="card-body">
                            <h5 class="card-title">{{ movie.title }}</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useMovies } from '../store/movies';

    const storeMovies = useMovies()

    onMounted(async() =>{
        try{
            await storeMovies.fetchAllMovies()
        }catch(e){
            console.warn(e)
        }
    })
</script>

<style scoped>
    .card{
        width: 200px;
        height: 400px;
    }
    .card-img{
        width: 100%;
        aspect-ratio: 2/3;
    }
    a{
        text-decoration: none;
    }
</style>