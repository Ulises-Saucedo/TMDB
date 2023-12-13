<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-between">
            <div class="col">
                <button @click="controlResetPage" class="btn btn-dark">1</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button @click="controlSubtractPage" :disabled="data.currentPage === 1" class="btn btn-dark">
                    <span v-if="data.currentPage === 1"> 1 </span>
                    <span v-else>{{ data.currentPage - 1 }}</span>
                </button>
                <button @click="controlAddPage" :disabled="data.currentPage >= data.totalPages" class="mx-2 btn btn-dark">{{ data.currentPage + 1 }}</button>
            </div>
        </div>
    </div>
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