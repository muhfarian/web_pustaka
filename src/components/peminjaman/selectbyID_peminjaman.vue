<template style="background: #282828">
  <div class="container align-items-center" style="height: 1080px;width: 1920px;margin-top: 150px">
    <div class="row container" style="margin-bottom: 50px; width: 400px">
      <input
          style=""
          class="form-control col"
          type="text"
          v-model="inputID"
          placeholder="Cari berdasarkan ID"
          aria-label="default input example" /><br/>
      <button type="button" class="btn btn-secondary col-2" v-on:click="byIDPeminjaman">Cari</button>
    </div>

  <table>
    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 150px"><strong>ID</strong></td>
      <td class="border" style="text-align: center;width: 200px"><strong>Tanggal Peminjaman</strong></td>
      <td class="border" style="text-align: center;width: 100px"><strong>Nomor Anggota</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Status</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Tanggal Pengembalian</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Durasi Keterlambatan</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data in selbyID" >
      <td class="border" style="text-align: center">{{ data.id_peminjaman }}</td>
      <td class="border" style="text-align: center">{{ data.tanggal_peminjaman }}</td>
      <td class="border" style="text-align: center">{{ data.nomor_anggota }}</td>
      <td class="border" style="text-align: center">{{ data.status_peminjaman }}</td>
      <td class="border" style="text-align: center">{{ data.tanggal_pengembalian }}</td>
      <td class="border" style="text-align: center">{{ data.durasi_keterlambatan }}</td>
    </tr>
    </tbody>
  </table>
    <router-link to="/allPeminjaman" class="btn btn-secondary mt-5">Kembali</router-link>
  </div>



</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const selbyID = 'https://web-library.000webhostapp.com/selectbyid_peminjaman.php';

export default {
  data() {
    return {
      selbyID: ref([]),
      inputID:'',
    };
  },
  mounted() {
    this.byIDPeminjaman();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    byIDPeminjaman() {
      axios
          .get(selbyID + '?id_peminjaman=' + this.inputID)
          .then((resp) => {
            console.log(resp);
            this.selbyID = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>


<style scoped>

</style>