<template>
  <div class="bodygaleria">
    <p class="heading">NUESTROS TRABAJOS</p>
    <div class="gallery-image">
    <MiGaleria :image="`assets/img/girl.png`"></MiGaleria>
    <MiGaleria :image="`assets/img/girl.png`"></MiGaleria>
  </div>
</div>
</template>

<script>
import MiGaleria from "@/components/Galeria.vue"

export default {
  name: 'OurWorkView',
  components: {
    MiGaleria
  }
}
</script>

