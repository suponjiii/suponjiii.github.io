<template>
  <div class="column is-half">
    <div class="card">
      <header class="card-header" @click="isActive = !isActive">
        <p class="card-header-title">
          {{ mixingExample.voiceType }}
        </p>
        <p class="card-header-title is-pulled-right">
          {{ mixingExample.title }}
        </p>

        <a class="card-header-icon" aria-label="more options" :class="{ activeToggle: isActive }">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <slide-up-down v-model="isActive" :duration="500">
        <div ref="articleBody" class="card-content">
          <div class="content">
            <div class="responsive-video">
              <iframe width="570" height="465" :src="mixingExample.url" />
            </div>
          </div>
        </div>
      </slide-up-down>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SlideUpDown from 'vue3-slide-up-down'

const isActive = ref(false)

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  mixingExample: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#about h3 {
  text-align: center;
}

.introduction {
  margin-bottom: 50px;
}

.content {
  text-align: center;
}

.card-header-icon {
  transition-duration: 0.8s;
}

.activeToggle {
  transform: rotate(180deg);
}
</style>
