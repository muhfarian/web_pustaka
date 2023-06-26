import './assets/main.css'
import { createWebHistory, createRouter} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import allKategori from "@/components/kategori/allKategori.vue";
import updateKategori from "@/components/kategori/updateKategori.vue";
import allBuku from "@/components/buku/allBuku.vue";
import updateBuku from "@/components/buku/updateBuku.vue";
import allAnggota from "@/components/anggota/allAnggota.vue";
import updateAnggota from "@/components/anggota/updateAnggota.vue";
import HomeView from "@/view/HomeView.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView

    },
    {
        path: "/allKategori",
        name: "allKategori",
        component: allKategori
    },
    {
        path: "/updateKategori/:kode_kategori",
        name: "updateKategori",
        component: updateKategori
    },
    {
        path: "/allBuku",
        name: "allBuku",
        component: allBuku
    },
    {
        path: "/updateBuku/:kode_buku",
        name: "updateBuku",
        component: updateBuku
    },
    {
        path: "/allAnggota",
        name: "allAnggota",
        component: allAnggota
    },
    {
        path: "/updateAnggota/:nomor",
        name: "updateAnggota",
        component: updateAnggota
    },
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;



createApp(App).use(router).mount('#app')