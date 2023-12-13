<template>
    <SearchBar @searchMovie="searchMovie"/>
    <ShowMovies />
    <Pagination @addPage="storeMovies.addPage()" @subtractPage="storeMovies.subtractPage()" @resetPage="storeMovies.resetPage()"/>
</template>

<script setup>
    import SearchBar from '../components/SearchBar.vue'
    import ShowMovies from '../components/ShowMovies.vue'
    import Pagination from '../components/Pagination.vue'
    import { useMovies } from '../store/movies';

    const storeMovies = useMovies()

    const searchMovie = (query) =>{
        storeMovies.resetPage()
        storeMovies.fetchMovieByQuery(query)
    }
</script>