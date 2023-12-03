import { defineStore, createPinia } from 'pinia'

const pinia = createPinia();

export const usePagesStore = defineStore('pages', {
    state: () =>{
        return {
            page: 1,
            total_pages: 0
        }
    },
    actions: {
        setTotalPages(val){
            this.total_pages = val
        },
        setPage(){
            this.page = 1
        },
        advancePage(){
            this.page++
        },
        prevPage(){
            this.page--
        }
    }
})

export { pinia }