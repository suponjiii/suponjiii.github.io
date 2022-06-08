<template>
  <section
    id="about"
    class="section scroll"
  >
    <div class="introduction">
      <h2 class="title">
        About me
      </h2>
      <p>Name: suponjiii/Stef</p>
      <a
        href="https://www.youtube.com/playlist?list=PLmD11wCifDMxrEJhrJinlzYnhplLDT6Sf"
      >Mixes Playlist</a>
    </div>

    <div id="examples">
      <h3 class="subtitle">
        Solos
      </h3>
      <div class="columns is-multiline">
        <template
          v-for="solo in mixingExamples.solos"
          :key="solo.title"
        >
          <MixingExampleItem :mixing-example="solo" />
        </template>
      </div>

      <!-- <h3 class="subtitle">Duets</h3>
      <div class="columns is-multiline"></div>

      <h3 class="subtitle">Trios/Quartets</h3>
      <div class="columns is-multiline"></div>

      <h3 class="subtitle">Choruses</h3>
      <div class="columns is-multiline"></div> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MixingExampleItem from '../components/mixing-example-item.vue'

const mixingExamples = ref({
  solos: [
    {
      voiceType: 'Male',
      title: 'suponjiii - Tabun',
      url: 'https://www.youtube.com/embed/g291aj8zZCo'
    },
    {
      voiceType: 'Male',
      title: 'suponjiii - Tabun',
      url: 'https://www.youtube.com/embed/g291aj8zZCo'
    }
  ]
})
</script>
