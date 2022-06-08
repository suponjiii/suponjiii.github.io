<template>
  <section id="contacts" class="section scroll">
    <h2 class="title">How to contact me</h2>
    <div class="icons">
      <a href="https://www.youtube.com/user/suponjiii">
        <i class="fab fa-youtube"></i>
      </a>
      <p style="display: inline">user/suponjiii</p>
      <br />
      <a href="https://twitter.com/SUPONJI123">
        <i class="fab fa-twitter"></i>
      </a>
      <p style="display: inline">@SUPONJI123</p>
      <br />
      <a href="mailto:suponjiii@gmail.com">
        <i class="fas fa-envelope-open"></i>
      </a>
      <p style="display: inline">suponjiii@gmail.com</p>
      <br />
      <i class="fab fa-discord"></i>
      <p style="display: inline">
        Please ask me about this through above means!
      </p>
    </div>
    <p>
      I would certainly prefer over Twitter or E-Mail.
      <br />
      <strong
        >Please do not request commissions via Youtube as I don't seem to get
        notifications for messages!</strong
      >
    </p>
  </section>
</template>

<script>
export default {}
</script>

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
