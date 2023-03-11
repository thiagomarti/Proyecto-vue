<template>
  <MiCaratula></MiCaratula>
  <MiCards></MiCards>
  <MiEquipo></MiEquipo>
  <div class="bodygaleria">
    <p class="heading">NUESTROS TRABAJOS</p>
    <div class="gallery-image">

      <MiGaleria  v-for="(item, x) in myWorks" :key="x" :image="`${item.image}`"></MiGaleria>
    </div>
  </div>
</template>

<script>
import MiEquipo from "@/components/Equipo.vue"
import MiGaleria from "@/components/Galeria.vue"
import MiCaratula from "@/components/Caratula.vue"
import MiCards from "@/components/Cards.vue"

import worksData from "@/assets/my_works.json";

export default {
  name: 'HomeView',
  components: {
    MiCaratula,
    MiCards,
    MiEquipo,
    MiGaleria,
  },
  data() {
    return {
      myWorks: worksData
  }
}
}

</script>



