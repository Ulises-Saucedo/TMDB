<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col mb-4" v-for="movie in storeMovies.movies" :key="movie.id">
                <router-link :to="{name: 'movie', params: {id: movie.id}}">
                    <div class="card mx-auto">
                        <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img card-img-top img-fluid" alt="Poster">
                        <img v-else src="https://static.displate.com/230x320/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif" class="card-img">
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
    }
    .card-img{
        width: 100%;
        aspect-ratio: 2/3;
    }
    a{
        text-decoration: none;
    }
</style>