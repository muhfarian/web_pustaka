<template>
  <body class="body">
  <div class="container">
    <div class="child row">
      <router-link to="/allKategori" class="btn btn-success col"><h2>KATEGORI</h2></router-link>
      <router-link to="/allBuku" class="btn btn-success ms-2 col"><h2>BUKU</h2></router-link>
    </div>
    <div class="child col">
      <router-link to="/allAnggota" class="btn btn-success ms-2 col" ><h2>ANGGOTA</h2></router-link>
      <router-link to="allPeminjaman" class="btn btn-success ms-2 col"><h2>PEMINJAMAN</h2></router-link>
    </div>
  </div>

  </body>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.container{
  margin: 25px;
  width: 1050px;
}
.child{
  width: 500px;
  height: 50px;
  /* Center horizontally*/
  margin: 0 auto;
}
</style>