<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
      <div class="modal-body col-5">
        <h4 style="margin-bottom: 50px">Tambahkan Data Peminjaman Master </h4>
        <input
            class="form-control"
            type="text"
            v-model="insertidmaster"
            placeholder="ID Peminjaman Master"
            aria-label="default input example" /><br />
        <input
            class="form-control text-uppercase"
            type="text"
            v-model="insertkodebuku"
            placeholder="Kode Buku"
            aria-label="default input example" /><br />
        <button type="button" class="btn btn-primary" v-on:click="insertPeminjamandetail()">Tambahkan </button>
        <div class="d-flex flex-row mt-5">
          <router-link to="/allPeminjamandetail" class="btn btn-outline-primary me-3">Data Peminjaman Detail</router-link>
          <router-link to="/allPeminjaman" class="btn btn-secondary ms-3 ">Kembali</router-link>
        </div>
      </div>
  </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const insertPeminajamandetail = 'http://web-library.000webhostapp.com/insert_peminjamandetail.php';
export default {
  data(){
    return{
      insertidmaster:'',
      insertkodebuku:''
    };
  },
  methods: {
    insertPeminjamandetail(){
      let formData = new FormData();

      formData.append('id_peminjaman_master', this.insertidmaster);
      formData.append('kode_buku', this.insertkodebuku);

      axios
          .post(insertPeminajamandetail, formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertkodebuku = '';
            this.insertstatuspeminjaman = '';
          })
          .catch((err) => {
            console.log((err));
          });
    },
  },

};
</script>

<style scoped>

</style>