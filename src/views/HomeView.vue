<template>
    <SearchBar @searchMovie="searchMovie"/>
    <ShowMovies />
    <Pagination @pageChanged="handlePageChanged" />
</template>

<script setup>
    import SearchBar from '../components/SearchBar.vue'
    import ShowMovies from '../components/ShowMovies.vue'
    import Pagination from '../components/Pagination.vue'
    import { useMovies } from '../store/movies';

    const storeMovies = useMovies()

    const handlePageChanged = async (page) =>{
        const moviesStore = useMovies()

        moviesStore.currentPage = page

        if (moviesStore.search) {
            await moviesStore.fetchMovieByQuery(moviesStore.search);
        } else {
            await moviesStore.fetchAllMovies();
        }
    }

    const searchMovie = (query) =>{
        if(!storeMovies.search){
            storeMovies.currentPage = 1
            storeMovies.fetchMovieByQuery(query)
            return
        }
        storeMovies.currentPage = 1
        storeMovies.totalItems = 10000
        storeMovies.fetchAllMovies()
    }
</script>