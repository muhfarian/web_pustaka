<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
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
      <tr v-for="data in alldikembalikan" >
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

const selectbyStatus = 'https://web-library.000webhostapp.com/selectbystatus_peminjaman.php';

export default {
  data() {
    return {
      alldikembalikan: ref([]),
    };
  },
  mounted() {
    this.getDikembalikan();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    getDikembalikan() {
      const url = selectbyStatus + '?status_peminjaman=' + this.$route.params.status_peminjaman;
      axios
          .get(url)
          .then((resp) => {
            console.log(resp);
            this.alldikembalikan = resp.data;
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