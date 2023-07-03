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
        <tr v-for="data in allpeminjaman" >
          <td class="border" style="text-align: center">{{ data.id_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.tanggal_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.nomor_anggota }}</td>
          <td class="border text-uppercase" style="text-align: center">{{ data.status_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.tanggal_pengembalian }}</td>
          <td class="border" style="text-align: center">{{ data.durasi_keterlambatan }}</td>
         </tr>
      </tbody>
    </table>

    <div class="d-flex flex-row align-items-start" style="margin-top: 100px">

      <div class="me-5">
        <h5 class="mb-3">
          Tampilkan Menurut Status
        </h5>
        <div  class="d-flex flex-column" >
          <router-link
              :to="{ name: 'readStatus', params: { status_peminjaman: 'DIKEMBALIKAN' } }"
              class="btn btn-outline-primary me-2 mb-3"
          >
            Dikembalikan
          </router-link>

          <router-link
              :to="{ name: 'readStatus', params: { status_peminjaman: 'DIPINJAM' } }"
              class="btn btn-outline-primary me-2 mb-3"
          >
            Dipinjam
          </router-link>

          <router-link to="/selbyIDPeminjaman" class="btn btn-outline-secondary me-2">Cari berdasarkan ID</router-link>

        </div>
      </div>

      <div>
        <h5 class="mb-3">Menu Peminjaman</h5>
        <div class="d-flex flex-column">
          <router-link to="/peminjamanMaster" class="btn btn-primary me-2 mb-3">Peminjaman Master</router-link>
          <router-link to="/peminjamanDetail" class="btn btn-primary me-2 mb-3">Peminjaman Detail</router-link>
        </div>
      </div>


    </div>

  </div>



</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allData = 'https://web-library.000webhostapp.com/selectall_peminjaman.php';

export default {
  data() {
    return {
      allpeminjaman: ref([]),
    };
  },
  mounted() {
    this.readPeminjaman();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readPeminjaman() {
      axios
          .get(allData)
          .then((resp) => {
            console.log(resp);
            this.allpeminjaman = resp.data;
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