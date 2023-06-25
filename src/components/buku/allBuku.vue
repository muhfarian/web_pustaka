<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'http://localhost/data_buku/selectall_buku.php';
const insertBuku = 'http://localhost/data_buku/insert_buku.php';
const delBuku = 'http://localhost/data_buku/delete_buku.php';
export default {
  data(){
    return{
      allBuku: ref([]),
      insertkode_buku:'',
      insertjudul_buku:'',
      insertpengarang:'',
      insertpenerbit:'',
      inserttahun:'',
      insertharga:'',
      insertkategori_kode:'',
    };
  },
  mounted() {
    this.readBuku();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readBuku(){
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.allBuku = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    postBuku() {
      let formData = new FormData();

      formData.append('kode_buku', this.insertkode_buku);
      formData.append('judul', this.insertjudul_buku);
      formData.append('pengarang', this.insertpengarang);
      formData.append('penerbit', this.insertpenerbit);
      formData.append('tahun', this.inserttahun);
      formData.append('harga', this.insertharga);
      formData.append('kategori_kode', this.insertkategori_kode);

      axios
          .post(insertBuku, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertkode_buku='';
            this.insertjudul_buku='';
            this.insertpengarang='';
            this.insertpenerbit='';
            this.inserttahun='';
            this.insertharga='';
            this.insertkategori_kode='';
          })
          .catch((err) => {
            console.log(err);
          });
    },
    deleteBuku(kode_buku) {
      if (confirm('Apakah anda ingin mendelete data ?')) {
        axios
            .get(delBuku + '?kode_buku=' + kode_buku)
            .then((resp) => {
              console.log(resp);
              this.readBuku();
            })
            .catch((err) => {
              console.log(err);
            });
      }
    },
  },
}
</script>

<template>
  <div style="width: 1000px;"><table>
    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 150px"><strong>Kode Buku</strong></td>
      <td class="border" style="text-align: center;width: 1000px"><strong>Judul</strong></td>
      <td class="border" style="text-align: center;width: 200px"><strong>Pengarang</strong></td>
      <td class="border" style="text-align: center;width: 150px"><strong>Penerbit</strong></td>
      <td class="border" style="text-align: center;width: 100px"><strong>Tahun</strong></td>
      <td class="border" style="text-align: center;width: 500px"><strong>Harga</strong></td>
      <td class="border" style="text-align: center;width: 150px"><strong>Kode Kategori</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data in allBuku" >
      <td class="border" style="text-align: center">{{ data.kode_buku }}</td>
      <td class="border" style="text-align: center">{{ data.judul }}</td>
      <td class="border" style="text-align: center">{{ data.pengarang }}</td>
      <td class="border" style="text-align: center">{{ data.penerbit }}</td>
      <td class="border" style="text-align: center">{{ data.tahun }}</td>
      <td class="border" style="text-align: center">Rp {{ data.harga }}</td>
      <td class="border" style="text-align: center">{{ data.kategori_kode }}</td>
      <td class="ps-3">
        <router-link
            :to="{ name: 'updateBuku', params: { kode_buku: data.kode_buku } }"
            class="btn btn-warning me-2"
        >Update</router-link>
      </td>
      <td>
        <button
            type="button"
            class="btn btn-danger"
            v-on:click="deleteBuku(data.kode_buku)">
          Delete
        </button>
      </td>

    </tr>
    </tbody>
  </table></div>

  <div class="modal-body ms-5" style="width: 300px">
    <h4 style="margin-bottom: 50px">Tambahkan Buku </h4>
    <input
        class="form-control"
        type="text"
        v-model="insertkode_buku"
        placeholder="Kode Buku"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertjudul_buku"
        placeholder="Judul"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertpengarang"
        placeholder="Pengarang"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertpenerbit"
        placeholder="Penerbit"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="inserttahun"
        placeholder="Tahun"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertharga"
        placeholder="Harga"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertkategori_kode"
        placeholder="Kode Kategori"
        aria-label="default input example" /><br />
    <button type="button" class="btn btn-primary" v-on:click="postBuku()">Tambah Buku </button>
    <button class="btn btn-secondary ms-2" @click="refreshpage">Refresh</button>
  </div>

</template>


<style scoped>

</style>