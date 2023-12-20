<template>
    <vue-awesome-paginate
        :total-items="data.totalItems"
        :items-per-page="20"
        :max-pages-shown="5"
        v-model="data.currentPage"
        :on-click="onClickHandler"
    />
</template>

<script setup>
    import { useMovies } from '../store/movies'

    const data = useMovies()
    const emits = defineEmits(['pageChanged'])

    const onClickHandler = (page) => {
        emits('pageChanged', page)
    }
</script>

<style>
    .pagination-container {
        display: flex;
        width: 100%;
        justify-content: center;
        column-gap: 10px;
    }
    .paginate-buttons {
        height: 45px;
        width: 45px;
        cursor: pointer;
        background-color: rgb(242, 242, 242);
        border-radius: 3px;
        border: none;
        color: black;
    }
    .paginate-buttons:hover {
        background-color: #d8d8d8;
    }
    .active-page {
        background-color: #2370AB;
        border: 1px solid #3498db;
        color: white;
    }
</style>