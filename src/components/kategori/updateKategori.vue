<template>

  <div class="modal-body">
    <h4 class="mb-5">
      Update Kategori
    </h4>
    <input
        class="form-control"
        type="text"
        v-model="updateKodekategori"
        placeholder="Kode Kategori"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updateKategori"
        placeholder="Kategori"
        aria-label="default input example" /><br />
    <button
        type="button"
        class="btn btn-primary"
        v-on:click="updtKategori()">
      Update Kategori
    </button>
    <router-link to="/allKategori" class="btn btn-secondary ms-2"
    >Back
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

const updateKategori = 'http://localhost/data_buku/update_kategori.php';
const selBykode = 'http://localhost/data_buku/selectbykode_kategori.php';

export default {
  data() {
    return {
      selectkategori: ref([]),
      updateKategori: '',
      updateKodekategori: '',
    };
  },
  mounted() {
    this.getKategori();
  },
  methods: {
    getKategori() {
      axios
          .get(selBykode + '?kode_kategori=' + this.$route.params.kode_kategori)
          .then((resp) => {
            console.log(resp);
            this.selectKategori = resp.data;
            this.updateKodekategori = this.selectKategori.kode_kategori;
            this.updateKategori = this.selectKategori.kategori;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    updtKategori() {
      let formData = new FormData();

      formData.append('kode_kategori', this.$route.params.kode_kategori);
      formData.append('kategori', this.updateKategori);


      axios
          .post(updateKategori, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getKategori();
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