<template>
  <div><table>
    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 150px"><strong>Kode Kategori</strong></td>
      <td class="border" style="text-align: center;width: 200px"><strong>Kategori</strong></td>
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


  <div class="modal-body ms-5">
    <h4 style="margin-bottom: 50px">Tambahkan Kategori </h4>
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
    <button class="btn btn-secondary ms-2" @click="refreshpage">Refresh</button>
  </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'http://localhost/data_buku/selectall_kategori.php';
const insertKategori = 'http://localhost/data_buku/insert_kategori.php';
const delKategori = 'http://localhost/data_buku/delete_kategori.php';

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