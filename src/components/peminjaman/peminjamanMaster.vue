<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
  <div class="modal-body ms-5">
    <h4 style="margin-bottom: 50px">Tambahkan Data Peminjaman Master </h4>
    <input
        class="form-control"
        type="text"
        v-model="insertnomoranggota"
        placeholder="Nomor Anggota"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertstatuspeminjaman"
        placeholder="Status Peminjaman (DIPINJAM/DIKEMBALIKAN)"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="date"
        v-model="inserttanggal"
        placeholder="Tanggal Peminjaman"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="date"
        v-model="insertdurasi"
        placeholder="Durasi Keterlambatan"
        aria-label="default input example" /><br />
    <button type="button" class="btn btn-primary" v-on:click="insertPeminjaman()">Tambahkan </button>
    <router-link to="/allPeminjaman" class="btn btn-secondary ms-3">Kembali</router-link>
  </div>
  </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const insertPeminajaman = 'http://web-library.000webhostapp.com/insert_peminjaman.php';
export default {
  data(){
    return{
      insertnomoranggota:'',
      insertstatuspeminjaman:'',
      inserttanggal:'',
      insertdurasi:''
    };
  },
  methods: {
    insertPeminjaman(){
      let formData = new FormData();

      formData.append('nomor_anggota', this.insertnomoranggota);
      formData.append('status_peminjaman', this.insertstatuspeminjaman);
      formData.append('tanggal_pengembalian', this.inserttanggal);
      formData.append('durasi_keterlambatan', this.insertdurasi);

      axios
          .post(insertPeminajaman, formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertnomoranggota = '';
            this.insertstatuspeminjaman = '';
            this.inserttanggal = '';
            this.insertdurasi = '';
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