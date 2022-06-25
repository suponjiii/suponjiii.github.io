<template>
  <section id="contacts" class="section scroll">
    <h2 class="title">How to contact me</h2>
    <div class="icons">
      <a href="https://twitter.com/SUPONJI123">
        <i class="fab fa-twitter" />
      </a>
      <p style="display: inline">@SUPONJI123</p>
      <br />
      <a href="mailto:suponjiii@gmail.com">
        <i class="fas fa-envelope-open" />
      </a>
      <p style="display: inline">suponjiii@gmail.com</p>
      <br />
    </div>
  </section>
</template>

<script setup></script>

<style>
#contacts svg {
  transform: scale(1.3);
  color: #3273dc;
  transition: all 0.2s;
  cursor: pointer;
}

#contacts svg:hover {
  transform: scale(1.8);
}

.fa-discord {
  color: #4a4a4a !important;
  cursor: default !important;
}

svg.fa-discord:hover {
  transform: scale(1.3) !important;
}
.icons svg {
  margin-right: 50px;
}
</style>
