<template>
  <Navbar />
  <div class="container">
    <div id="main">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from './views/nav-bar.vue'
import Footer from './views/page-footer.vue'
</script>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Abel', sans-serif;
  overflow: hidden;
  font-family: 'Abel', sans-serif;
  overflow: hidden;
}
#main {
  min-height: 80vh;
}
p {
  font-size: 20px;
}

li {
  font-size: 20px;
}
section {
  padding-top: 250px !important;
}
@media (max-width: 480px) {
  iframe {
    width: 100%;
    height: auto;
  }
  #title {
    font-size: 50px !important;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
