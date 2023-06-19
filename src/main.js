import './assets/main.css'
import { createWebHistory, createRouter} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import InsertKategori from "@/components/kategori/InsertKategori.vue";
import allKategori from "@/components/kategori/allKategori.vue";
import deleteKategori from "@/components/kategori/deleteKategori.vue";
import updateKategori from "@/components/kategori/updateKategori.vue";


const routes = [
    {
        path: "/insertKategori",
        name: "insertkategori",
        component: InsertKategori
    },
    {
        path: "/allKategori",
        name: "allKategori",
        component: allKategori
    },
    {
        path: "/delKategori",
        name: "delKategori",
        component: deleteKategori
    },
    {
        path: "/updateKategori/:kode_kategori",
        name: "updateKategori",
        component: updateKategori
    }
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;



createApp(App).use(router).mount('#app')