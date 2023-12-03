<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-between">
            <div class="col">
                <button @click="resetPage">1</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button @click="previousPage" :disabled="storePages.page === 1">
                    <span v-if="storePages.page === 1"> 1 </span>
                    <span v-else>{{ storePages.page - 1 }}</span>
                </button>
                <button @click="nextPage" :disabled="storePages.page >= storePages.total_pages" class="mx-2">{{ storePages.page + 1 }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { usePagesStore, pinia } from "../store/pages.js"

    const storePages = usePagesStore(pinia)
    const emits = defineEmits(['next', 'previous', 'reset'])

    const resetPage = () =>{
        emits('reset')
    }

    const nextPage = () =>{
        emits('next')
    }

    const previousPage = () =>{
        emits('previous')
    }
</script>

<style scoped>
    button{
        border-radius: 5px;
        border: none;
        background: rgb(94, 233, 94);
    }
    [disabled]{
        background: rgb(230, 230, 230);
    }
</style>