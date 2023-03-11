<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

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
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/nuestros_trabajos">Nuestros trabajos</router-link></li>
          <li><router-link to="/servicios">Servicios</router-link></li>
          <li><router-link to="/contactos">Contacto</router-link></li>
      </ul>
    </nav>
    <router-view/>
    <a href="https://wa.me/541134104508?text=¡Hola!%20Me%20gustaria%20pedir%20un%20presupuesto%20para%20la%20creacion%20de%20mi%20página" target="_blank"><i id="whatsapp" class='bx bxl-whatsapp bx-md bx-border-circle ' style='color:#1ec154'  ></i></a>
    <a href="https://www.facebook.com/profile.php?id=100090303499575" target="_blank"><i id="facebook" class='bx bxl-facebook bx-md bx-border-circle ' style='color:#1e26c1'  ></i></a>      
    <a href="https://www.instagram.com/myb_webcoders/" target="_blank"><i id="instagram" class='bx bxl-instagram bx-md bx-border-circle ' style='color:#c11e5f'  ></i></a>

  </template>

<style>

#whatsapp { z-index: 99; position: fixed; right: 2%; bottom: 10%; background-color: #f8f8f8; }            
#facebook { z-index: 99; position: fixed; right: 2%; bottom: 20%; background-color: #f8f8f8; }             
#instagram { z-index: 99; position: fixed; right: 2%; bottom: 30%; background-color: #f8f8f8; }      
.a { background-color: grey; width: 100%; height: 100vh;}

@import url(./assets/css/caratula.css);
@import url(./assets/css/card.css);
@import url(./assets/css/cards.css);
@import url(./assets/css/fondo.css);
@import url(./assets/css/galeria.css);
@import url(./assets/css/menu.css);
</style>


