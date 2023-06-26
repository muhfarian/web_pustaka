<template>
  <body class="body">
  <div class="container ms-5">
    <div class="child">
    <router-link to="/allKategori" class="btn btn-success"><h2>KATEGORI</h2></router-link>
    <router-link to="/allBuku" class="btn btn-success ms-2"><h2>BUKU</h2></router-link>
    <router-link to="/allAnggota" class="btn btn-success ms-2" ><h2>ANGGOTA</h2></router-link>
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