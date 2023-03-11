<template>
    <nav id="navbar">
    <div class="menux">
     <div class="laptop"> <i class='bx bx-laptop bx-lg' style='color:#099904'  ></i> </div>
      <h1 class="logo"> M&B Webcoders </h1>
    </div>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
          <router-link to="/">Home</router-link> |
          <router-link to="/our_work">Nuestros trabajos</router-link> |          
          <router-link to="/services">Servicios</router-link> |
          <router-link to="/contact">Contacto</router-link>
      </ul>
    </nav>
    <router-view/>
  </template>

<script>
export default {
    name: 'MiMenu',
}
</script>
