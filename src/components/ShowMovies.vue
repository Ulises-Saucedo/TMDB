<template>
    <li v-for="movie in storeMovies.movies" :key="movie.id">{{ movie.title }}</li>
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