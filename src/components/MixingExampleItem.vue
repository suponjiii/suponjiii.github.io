<template>
  <div class="column is-half">
    <div class="card">
      <header class="card-header" @click="isActive = !isActive">
        <p class="card-header-title">{{ mixingExample.voiceType }}</p>
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
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div ref="articleBody" :style="{ height }" class="card-content">
        <div class="content">
          <div class="responsive-video">
            <iframe width="570" height="465" v-bind:src="mixingExample.url">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mixingExample'],
  data () {
    return {
      isActive: false,
      height: '',
      show: true,
      timeout: null
    }
  },
  methods: {}
}
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
