<template>
  <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 10%">
    <table>
      <thead>
      <tr>
        <td class="border" style="text-align: center;width: 150px"><strong>ID</strong></td>
        <td class="border" style="text-align: center;width: 200px"><strong>ID Peminjaman Master</strong></td>
        <td class="border" style="text-align: center;width: 100px"><strong>Kode Buku</strong></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in allpeminjamandetail" >
        <td class="border" style="text-align: center">{{ data.id }}</td>
        <td class="border" style="text-align: center">{{ data.id_peminjaman_master }}</td>
        <td class="border" style="text-align: center">{{ data.kode_buku }}</td>


      </tr>
      </tbody>
    </table>
    <router-link to="/peminjamanDetail" class="btn btn-secondary mt-3">Kembali</router-link>
  </div>



</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'http://web-library.000webhostapp.com/selectall_peminjamandetail.php';

export default {
  data() {
    return {
      allpeminjamandetail: ref([]),
    };
  },
  mounted() {
    this.readPeminjamandetail();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readPeminjamandetail() {
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.allpeminjamandetail = resp.data;
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