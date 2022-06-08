<template>
  <div class="column is-half">
    <div class="card">
      <header
        class="card-header"
        @click="isActive = !isActive"
      >
        <p class="card-header-title">
          {{ mixingExample.voiceType }}
        </p>
        <p class="card-header-title is-pulled-right">
          {{ mixingExample.title }}
        </p>

        <a
          class="card-header-icon"
          aria-label="more options"
          :class="{ activeToggle: isActive }"
          @click.prevent="toggleBody"
        >
          <span class="icon">
            <i
              class="fas fa-angle-down"
              aria-hidden="true"
            />
          </span>
        </a>
      </header>
      <div
        ref="articleBody"
        :style="{ height }"
        class="card-content"
      >
        <div class="content">
          <div class="responsive-video">
            <iframe
              width="570"
              height="465"
              :src="mixingExample.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const height = ref('')

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

.card-content {
  transition: height 250ms ease;
}
</style>
