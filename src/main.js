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
import allPeminjaman from "@/components/peminjaman/allPeminjaman.vue";
import dikembalikan from "@/components/peminjaman/readbyStatus.vue";
import dipinjam from "@/components/peminjaman/readbyStatus.vue";
import readbyStatus from "@/components/peminjaman/readbyStatus.vue";
import selectbyID_peminjaman from "@/components/peminjaman/selectbyID_peminjaman.vue";
import peminjamanMaster from "@/components/peminjaman/peminjamanMaster.vue";
import peminjamanDetail from "@/components/peminjaman/peminjamanDetail.vue";
import allPeminjamandetail from "@/components/peminjaman/allPeminjamandetail.vue";


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
    {
        path: "/allPeminjaman",
        name: "allPeminjama",
        component: allPeminjaman
    },
    {
        path: "/readbyStatus/:status_peminjaman",
        name: "readStatus",
        component: readbyStatus
    },
    {
        path: "/selbyIDPeminjaman",
        name: "selbyIDPeminjaman",
        component: selectbyID_peminjaman
    },
    {
        path: "/peminjamanMaster",
        name: "peminjamanMaster",
        component: peminjamanMaster
    },
    {
        path: "/peminjamanDetail",
        name: "peminjamanDetail",
        component: peminjamanDetail
    },
    {
        path: "/allPeminjamandetail",
        name: "allPeminjamandetail",
        component: allPeminjamandetail
    }
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;



createApp(App).use(router).mount('#app')