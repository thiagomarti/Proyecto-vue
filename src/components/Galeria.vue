<template>

    <div class="img-box">
      <a href="http://127.0.0.1:5500/cards.html"></a>
      <img :src=image alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p class="opacity-low"></p>
        </div>
    </div>
</div>
    </template>
    
    <script>
    export default {
        name: 'MiGaleria',
        props: {
          image: String,
        }

    }
    </script>
    