<template>
  <body class="body">
  <div class="container d-flex flex-row align-items-lg-center" style="margin-top: 10%">
      <router-link to="/allKategori" class="btn btn-success col"><h2>KATEGORI</h2></router-link>
      <router-link to="/allBuku" class="btn btn-success ms-2 col"><h2>BUKU</h2></router-link>
      <router-link to="/allAnggota" class="btn btn-success ms-2 col" ><h2>ANGGOTA</h2></router-link>
      <router-link to="allPeminjaman" class="btn btn-success ms-2 col"><h2>PEMINJAMAN</h2></router-link>
  </div>

  </body>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
</style>