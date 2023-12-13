<template>
    <button @click="controlAddPage">{{ data.currentPage + 1 }}</button>
    <button @click="controlSubtractPage"> {{ data.currentPage - 1 }}</button>
    <button @click="controlResetPage">Reset</button>
</template>

<script setup>
    import { useMovies } from '../store/movies'

    const data = useMovies()
    const emits = defineEmits(['addPage', 'subtractPage', 'resetPage'])
    
    const controlAddPage = () =>{
        emits('addPage')
    }
    const controlSubtractPage = () =>{
        emits('subtractPage')
    }
    const controlResetPage = () =>{
        emits('resetPage')
    }
</script>