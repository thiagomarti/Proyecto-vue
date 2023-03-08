<template>

  <MiMenu></MiMenu>
  <MiBoton></MiBoton>
  <MiCaratula></MiCaratula>
  <MiCards></MiCards>
  <MiEquipo></MiEquipo>
  <div class="bodygaleria">
    <p class="heading">NUESTROS TRABAJOS</p>
    <div class="gallery-image">
    <MiGaleria :src="'../src/assets/img/girl.png'"></MiGaleria>
    <MiGaleria :src="'../src/assets/img/girl.png'"></MiGaleria>
  </div>
</div>
</template>

<script>
import MiEquipo from './components/Equipo.vue'
import MiBoton from './components/Botones.vue'
import MiGaleria from './components/Galeria.vue'
import MiMenu from './components/Menu.vue'
import MiCaratula from './components/Caratula.vue'
import MiCards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    MiBoton,
    MiMenu,
    MiCaratula,
    MiCards,
    MiEquipo,
    MiGaleria,
  }
}
</script>


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


