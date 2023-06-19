<template>
  <div class="modal-body">
    <h2 style="margin-bottom: 50px">Tambahkan Kategori </h2>
    <input
        class="form-control"
        type="text"
        v-model="insertkode_kategori"
        placeholder="Kode Kategori"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertkategori"
        placeholder="Kategori"
        aria-label="default input example" /><br />
    <button type="button" class="btn btn-primary" v-on:click="postKategori()">Tambah Kategori </button>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const postApi = 'http://localhost/data_buku/insert_kategori.php';

export default {
  data() {
    return {
      kategori: ref([]),
      insertkode_kategori: '',
      insertkategori: '',
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    postKategori() {
      let formData = new FormData();

      formData.append('kode_kategori', this.insertkode_kategori);
      formData.append('kategori', this.insertkategori);

      axios
          .post(postApi, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertkode_kategori = '';
            this.insertkategori = '';
          })
          .catch((err) => {
            console.log(err);
          });
      },
  },
}

</script>



