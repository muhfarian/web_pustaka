<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%"><table>
    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 150px"><strong>Nomor</strong></td>
      <td class="border" style="text-align: center;width: 200px"><strong>Nama</strong></td>
      <td class="border" style="text-align: center;width: 100px"><strong>Jenis Kelamin</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Alamat</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Nomor HP</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data in allanggota" >
      <td class="border" style="text-align: center">{{ data.nomor }}</td>
      <td class="border" style="text-align: center">{{ data.nama }}</td>
      <td class="border" style="text-align: center">{{ data.jenis_kelamin }}</td>
      <td class="border" style="text-align: center">{{ data.alamat }}</td>
      <td class="border" style="text-align: center">{{ data.no_hp }}</td>
      <td class="ps-3">
        <router-link
            :to="{ name: 'updateAnggota', params: { nomor: data.nomor } }"
            class="btn btn-warning me-2"
        >Update</router-link>
      </td>
      <td>
        <button
            type="button"
            class="btn btn-danger"
            v-on:click="delAnggota(data.nomor)">
          Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table></div>

  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 100px">
  <div class="modal-body ms-5">
    <h4 class="mb-3">Tambahkan Anggota </h4>
    <input
        class="form-control"
        type="text"
        v-model="insertnomor"
        placeholder="Nomor"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertnama"
        placeholder="Nama"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertjeniskelamin"
        placeholder="Jenis Kelamin (L/P)"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertalamat"
        placeholder="Alamat"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="insertnohp"
        placeholder="Nomor HP"
        aria-label="default input example" /><br />
    <button type="button" class="btn btn-primary" v-on:click="postAnggota()">Tambah Anggota </button>
    <button class="btn btn-secondary ms-2" @click="refreshpage">Refresh</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'http://web-library.000webhostapp.com/selectall_anggota.php';
const insertAnggota = 'http://web-library.000webhostapp.com/insert_anggota.php';
const delAnggota = 'http://web-library.000webhostapp.com/delete_anggota.php';

export default {
  data() {
    return {
      allanggota: ref([]),
      insertnomor: '',
      insertnama: '',
      insertjeniskelamin:'',
      insertalamat:'',
      insertnohp:''
    };
  },
  mounted() {
    this.readAnggota();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readAnggota() {
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.allanggota = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    postAnggota() {
      let formData = new FormData();

      formData.append('nomor', this.insertnomor);
      formData.append('nama', this.insertnama);
      formData.append('jenis_kelamin', this.insertjeniskelamin);
      formData.append('alamat', this.insertalamat);
      formData.append('no_hp', this.insertnohp);

      axios
          .post(insertAnggota, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertnomor = '';
            this.insertnama = '';
            this.insertjeniskelamin = '';
            this.insertalamat = '';
            this.insertnohp = '';
          })
          .catch((err) => {
            console.log(err);
          });
    },
    delAnggota(nomor) {
      if (confirm('Apakah anda ingin mendelete data ?')) {
        axios
            .get(delAnggota + '?nomor=' + nomor)
            .then((resp) => {
              console.log(resp);
              this.readAnggota();
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