<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="columns">
      <div id="main">
        <Transition>
          <router-view></router-view>
        </Transition>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Abel', sans-serif;
  overflow: hidden;
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
