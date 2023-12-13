<template>
    <div class="container w-100 d-flex justify-content-center my-4">
        <input type="text outline-none" v-model="name">
        <button @click="searchMovie">Buscar pelicula</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    
    const emits = defineEmits(['searchMovie'])
    const name = ref('')

    const searchMovie = () =>{
        emits('searchMovie', name.value)
    }
</script>