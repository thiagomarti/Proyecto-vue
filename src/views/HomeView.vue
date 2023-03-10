<template>
  <MiCaratula></MiCaratula>
  <MiCards></MiCards>
  <MiEquipo></MiEquipo>
  <div class="bodygaleria">
    <p class="heading">NUESTROS TRABAJOS</p>
    <div class="gallery-image">
    <MiGaleria :image="`assets/img/girl.png`"></MiGaleria>
    <MiGaleria :image="`assets/img/girl.png`"></MiGaleria>
  </div>
</div>
</template>

<script>
import MiEquipo from "@/components/Equipo.vue"
import MiGaleria from "@/components/Galeria.vue"
import MiCaratula from "@/components/Caratula.vue"
import MiCards from "@/components/Cards.vue"

export default {
  name: 'HomeView',
  components: {
    MiCaratula,
    MiCards,
    MiEquipo,
    MiGaleria,
  }
}
</script>



