<template>

  <div class="modal-body">
    <h4 class="mb-5">
      Update Anggota
    </h4>
    <input
        class="form-control"
        type="text"
        v-model="updatenomor"
        placeholder="Nomor"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatenama"
        placeholder="Nama"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatejeniskelamin"
        placeholder="Jenis Kelamin (L/P)"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatealamat"
        placeholder="Alamat"
        aria-label="default input example" /><br />
    <input
        class="form-control"
        type="text"
        v-model="updatenohp"
        placeholder="Nomor HP"
        aria-label="default input example" /><br />
    <button
        type="button"
        class="btn btn-primary"
        v-on:click="updateAnggota()">
      Update Anggota
    </button>
    <router-link to="/allAnggota" class="btn btn-secondary ms-2"
    >Back
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

const updateAnggota = 'http://localhost/data_buku/update_anggota.php';
const selBynomor = 'http://localhost/data_buku/selectbynomor_anggota.php';

export default {
  computed: {
    updateKategori() {
      return updateKategori
    }
  },
  data() {
    return {
      selectanggota: ref([]),
      updatenomor: '',
      updatenama: '',
      updatejeniskelamin: '',
      updatealamat: '',
      updatenohp: '',
    };
  },
  mounted() {
    this.getAnggota();
  },
  methods: {
    getAnggota() {
      axios
          .get(selBynomor + '?nomor=' + this.$route.params.nomor)
          .then((resp) => {
            console.log(resp);
            this.selectanggota = resp.data;
            this.updatenomor = this.selectanggota.nomor;
            this.updatenama = this.selectanggota.nama;
            this.updatejeniskelamin = this.selectanggota.jenis_kelamin;
            this.updatealamat = this.selectanggota.alamat;
            this.updatenohp = this.selectanggota.no_hp;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    updateAnggota() {
      let formData = new FormData();

      formData.append('nomor', this.$route.params.nomor);
      formData.append('nama', this.updatenama);
      formData.append('jenis_kelamin', this.updatejeniskelamin);
      formData.append('alamat', this.updatealamat);
      formData.append('no_hp', this.updatenohp);


      axios
          .post(updateAnggota, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getAnggota();
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
}
</script>



<style scoped>

</style>