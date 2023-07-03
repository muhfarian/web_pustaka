<script>
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">WEB PUSTAKA</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/allKategori" class="btn">Kategori</router-link>
          <router-link to="/allBuku" class="btn">Buku</router-link>
          <router-link to="/allAnggota" class="btn">Anggota</router-link>
          <router-link to="/allPeminjaman" class="btn">Peminjaman</router-link>
        </div>
      </div>
    </div>
  </nav>

  <div><RouterView/></div>
</template>

<style scoped>

</style>
