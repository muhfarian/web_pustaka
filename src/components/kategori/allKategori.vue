<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
    <table>
    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 200px"><strong>Kode Kategori</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Kategori</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data in allKategori" >
      <td class="border" style="text-align: center">{{ data.kode_kategori }}</td>
      <td class="border" style="text-align: center">{{ data.kategori }}</td>
      <td class="ps-3">
        <router-link
            :to="{ name: 'updateKategori', params: { kode_kategori: data.kode_kategori } }"
            class="btn btn-warning me-2"
        >Update</router-link>
      </td>
      <td>
        <button
            type="button"
            class="btn btn-danger"
            v-on:click="delKategori(data.kode_kategori)">
          Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table></div>

    <div class="d-flex flex-column align-items-center justify-content-center" style="margin-top: 100px">
    <h5 class="mb-3">Tambahkan Kategori </h5>
    <input
        style="width: 300px"
        class="form-control mb-3 text-uppercase"
        type="text"
        v-model="insertkode_kategori"
        placeholder="Kode Kategori"
        aria-label="default input example" /><br />
    <input
        style="width: 300px"
        class="form-control"
        type="text"
        v-model="insertkategori"
        placeholder="Kategori"
        aria-label="default input example" /><br />
      <div class="d-flex flex-row mt-3">
        <button type="button" class="btn btn-primary" v-on:click="postKategori()">Tambah Kategori </button>
        <button class="btn btn-secondary ms-2" @click="refreshpage">Refresh</button>
      </div>

    </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'https://web-library.000webhostapp.com/selectall_kategori.php';
const insertKategori = 'https://web-library.000webhostapp.com/insert_kategori.php';
const delKategori = 'https://web-library.000webhostapp.com/delete_kategori.php';

export default {
  data() {
    return {
      allKategori: ref([]),
      insertkode_kategori: '',
      insertkategori: '',
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readData() {
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.allKategori = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    postKategori() {
      let formData = new FormData();

      formData.append('kode_kategori', this.insertkode_kategori);
      formData.append('kategori', this.insertkategori);

      axios
          .post(insertKategori, formData, {
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
    delKategori(kode_kategori) {
      if (confirm('Apakah anda ingin mendelete data ?')) {
        axios
            .get(delKategori + '?kode_kategori=' + kode_kategori)
            .then((resp) => {
              console.log(resp);
              this.readData();
            })
            .catch((err) => {
              console.log(err);
            });
      }
    },
  },
};
</script>


<style scoped>

</style>