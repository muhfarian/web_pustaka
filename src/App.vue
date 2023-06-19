<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">Web Pustaka</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="dropdown collapse navbar-collapse" id="navbarNavAltMarkup">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Kategori
        </button>
        <ul class="dropdown-menu">
          <router-link to="/allKategori" class="nav-link ms-2 me-5">Semua Kategori</router-link>
          <router-link to="/insertKategori" class="nav-link ms-2 me-5">Tambahkan Kategori</router-link>
          <router-link to="/updateKategori" class="nav-link ms-2 me-5">Update Kategori</router-link>
          <router-link to="/delKategori" class="nav-link ms-2 me-5">Hapus Kategori</router-link>

        </ul>
      </div>
    </div>
  </nav>
  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
