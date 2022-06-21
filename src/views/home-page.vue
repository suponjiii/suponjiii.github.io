<template>
  <section id="home" class="section">
    <h1 id="title" class="title">
      <span class="text-wrapper">
        <span class="letters">{{ titleLetters }}</span>
        <span class="line" />
      </span>
    </h1>

    <p class="subtitle">
      Bad at mixing and have no friends to bother about it?
      <br />
      Still want to make your cover as good as possible mixing-wise? <br />
    </p>
    <p>
      Well, no matter how you’ve found your way here…
      <br />
      I do mixing commissions! Please check out the pricing page for
      <i>a rough idea</i> of the price - I am always open to negotiate!
    </p>
  </section>
</template>

<script setup>
import anime from "animejs/lib/anime.es.js";
import { onMounted, ref } from "vue";

const titleLetters = ref("suponjiii Mixing");
onMounted(() => {
  const textWrapper = document.querySelector("#title .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline({ loop: false })
    .add({
      targets: "#title .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
    })
    .add({
      targets: "#title .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: function (el, i) {
        return 150 + 25 * i;
      },
    });
});
</script>

<style>
#title {
  font-size: 55px !important;
  font-weight: 200;
  margin-bottom: 50px;
}
#title .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

#title .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.212);
  transform-origin: 100% 100%;
  bottom: 0;
}

#title .letter {
  display: inline-block;
  line-height: 1em;
}
.subtitle {
  font-size: 25px;
}
</style>
