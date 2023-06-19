<template>
  <button
      type="button"
      class="btn btn-danger"
      v-on:click="deleteDonatur(data.id)">
    Delete
  </button>

</template>

<script>

import {ref} from "vue";

const delKategori = 'http://localhost/data_buku/delete_kategori.php';

export default {
  data() {
    return {
      kategori: ref([]),
      insertkode_kategori: '',
      insertkategori: '',
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    deleteDonatur(id) {
      if (confirm('Apakah anda ingin mendelete data ??')) {
        axios
            .get(delKategori + '?id=' + id)
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
}
</script>

<style scoped>

</style>