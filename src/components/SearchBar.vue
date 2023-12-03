<template>
    <div class="container d-flex justify-content-between pt-4 pb-5">
        <input type="text" v-model="searchText" class="col-10">
        <button @click="fetchMovie" class="col-2 mx-2">Buscar</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['search'])

    let searchText = ref('')

    const fetchMovie = () =>{
        emit('search', searchText.value)
    }
</script>

<style scoped>
    input{
        border: 1px solid #1c1c1c;
        border-radius: 5px;
        padding: 5px;
        outline: none;
    }
</style>