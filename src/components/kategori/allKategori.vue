<template>
  <tbody>
  <tr v-for="data in kategori" >
    <td >{{ data.kode_kategori }}</td>
    <td>{{ data.kategori }}</td>
    <td>
      <router-link
          :to="{ name: 'updateKategori', params: { kode_kategori: data.kode_kategori } }"
          class="btn btn-warning me-3"
      >Update</router-link>
    </td>
  </tr>
  </tbody>

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
    <router-link to="/allKategori" class="btn btn-secondary me-5"
    >Back
    </router-link>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'http://localhost/data_buku/selectall_kategori.php';
const selByKode = 'http://localhost/data_buku/selectbykdoe_kategori.php';

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
    readData() {
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.kategori = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    getKategori() {
      axios
          .get(selByKode + '?kode_kategori=' + this.$route.params.kode_kategori)
          .then((resp) => {
            console.log(resp);
            this.kategori = resp.data;
            this.updateKategori = this.selectKategori.kategori;
          })
          .catch((err) => {
            console.log(err);
          });
    },
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
              this.getKategori();
            })
            .catch((err) => {
              console.log(err);
            });
      },
  }
};
</script>

<style scoped>

</style>