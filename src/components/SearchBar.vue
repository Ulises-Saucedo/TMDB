<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">TMDB</a>
        </div>
        <div class="d-flex mx-2" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="name">
            <button class="btn btn-success" type="submit" @click="searchMovie">Search</button>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    
    const emits = defineEmits(['searchMovie'])
    const name = ref('')

    const searchMovie = () =>{
        emits('searchMovie', name.value)
    }
</script>