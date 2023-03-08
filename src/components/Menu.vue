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
        <li><a class="active" href="#">Inicio</a></li>
        <li><a href="#">Nuestros trabajos</a></li>
        <li><a href="#">Sercios</a></li>
        <li><a href="../public/hola.html">Contacto</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'MiMenu',
}
</script>
