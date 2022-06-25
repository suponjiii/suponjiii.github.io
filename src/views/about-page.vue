<template>
  <section id="about" class="section scroll">
    <div class="introduction">
      <h2 class="title">
        About me
      </h2>
      <p>Name: suponjiii/Stef</p>
      <a
        href="https://www.youtube.com/playlist?list=PLmD11wCifDMxrEJhrJinlzYnhplLDT6Sf"
        >Mixes Playlist</a
      >
    </div>

    <div id="examples">
      <h3 class="subtitle">
        Solos
      </h3>
      <div class="columns is-multiline">
        <template v-for="solo in mixingExamples.solos" :key="solo.title">
          <MixingExampleItem :mixing-example="solo" />
        </template>
      </div>

      <h3 class="subtitle">Duets</h3>
      <div class="columns is-multiline">
        <template v-for="duet in mixingExamples.duets" :key="duet.title">
          <MixingExampleItem :mixing-example="duet" />
        </template>
      </div>

      <h3 class="subtitle">Trios/Quartets</h3>
      <div class="columns is-multiline">
        <template v-for="trio in mixingExamples.trios" :key="trio.title">
          <MixingExampleItem :mixing-example="trio" />
        </template>
      </div>

      <h3 class="subtitle">Choruses</h3>
      <div class="columns is-multiline">
        <template v-for="chorus in mixingExamples.choruses" :key="chorus.title">
          <MixingExampleItem :mixing-example="chorus" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MixingExampleItem from '../components/mixing-example-item.vue'
import * as mixingExamplesJson from '../assets/mixing-examples.json'

const mixingExamples = ref(mixingExamplesJson)
</script>
