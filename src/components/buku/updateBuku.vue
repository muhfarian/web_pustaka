<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
  <div class="modal-body">
    <h4 class="mb-5">
      Update Kategori
    </h4>
    <input
        class="form-control"
        type="text"
        v-model="updatekodebuku"
        placeholder="Kode Buku"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatejudul"
        placeholder="Judul"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatepengarang"
        placeholder="Pengarang"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatepenerbit"
        placeholder="Penerbit"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatetahun"
        placeholder="Tahun"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updateharga"
        placeholder="Harga"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatekategorikode"
        placeholder="Kode Kategori"
        aria-label="default input example" /><br />
    <button
        type="button"
        class="btn btn-primary"
        v-on:click="updateBuku()">
      Update Buku
    </button>
    <router-link to="/allBuku" class="btn btn-secondary ms-2"
    >Back
    </router-link>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

const updateBuku = 'http://web-library.000webhostapp.com/update_buku.php';
const selBykode = 'http://web-library.000webhostapp.com/selectbykode_buku.php';

export default {
  data() {
    return {
      selectbuku: ref([]),
      updatekodebuku: '',
      updatejudul: '',
      updatepengarang:'',
      updatepenerbit:'',
      updatetahun:'',
      updateharga:'',
      updatekategorikode:''
    };
  },
  mounted() {
    this.getBuku();
  },
  methods: {
    getBuku() {
      axios
          .get(selBykode + '?kode_buku=' + this.$route.params.kode_buku)
          .then((resp) => {
            console.log(resp);
            this.selectbuku = resp.data;
            this.updatekodebuku = this.selectbuku.kode_buku;
            this.updatejudul = this.selectbuku.judul;
            this.updatepengarang = this.selectbuku.pengarang;
            this.updatepenerbit = this.selectbuku.penerbit;
            this.updatetahun = this.selectbuku.tahun;
            this.updateharga = this.selectbuku.harga;
            this.updatekategorikode = this.selectbuku.kategori_kode;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    updateBuku() {
      let formData = new FormData();

      formData.append('kode_buku', this.$route.params.kode_buku);
      formData.append('judul', this.updatejudul);
      formData.append('pengarang', this.updatepengarang);
      formData.append('penerbit', this.updatepenerbit);
      formData.append('tahun', this.updatetahun);
      formData.append('harga', this.updateharga);
      formData.append('kategori_kode', this.updatekategorikode);

      axios
          .post(updateBuku, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getBuku();
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
}
</script>



<style scoped>

</style>