<template>
  <div class="modal-body">
    <h2 style="margin-bottom: 50px">Update Kategori </h2>
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
    <router-link to="/allKategori" class="btn btn-secondary me-5"
    >Back
    </router-link>
  </div>

</template>

<script>
import axios from "axios";
import {ref} from "vue";

const updateKategori = 'http://localhost/data_buku/update_kategori.php';

export default {
  data() {
    return {
      kategori: ref([]),
      updateKategori: '',
      updateKodekategori: '',
    };
  },
  mounted() {
    this.readData();
    this.getKategori();
  },
  methods: {
    updtKategori() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();

      formData.append('kode_kategori', this.$route.params.kode_kategori);
      formData.append('kategori', this.updateKategori);


      axios
          .post(urlUpdate, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getDonatur();
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