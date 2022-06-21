<template>
  <div>
    <section id="pricing" class="section scroll">
      <h2 class="title">Pricing</h2>
      <h3 class="subtitle" style="margin-top: 5px">
        These prices are for mains + 1 harmony track! For additional tracks, I
        will charge {{ calculateMixing.additionalLinesFactor }}€ each.
      </h3>
      <table class="table is-fullwidth is-hoverable is-striped">
        <thead>
          <tr>
            <th>Mix</th>
            <th>Tuning</th>
            <th>Timing</th>
            <th>Mix only</th>
            <th>Complete mix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Solo</th>
            <th>{{ calculateMixing.solo.tuningBase }}€</th>
            <th>{{ calculateMixing.solo.timingBase }}€</th>
            <th>{{ calculateMixing.solo.mixingBase }}€</th>
            <th>{{ soloMixingPrice }}€</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Duets</th>
            <th>{{ calculateMixing.duet.tuningBase }}€</th>
            <th>{{ calculateMixing.duet.timingBase }}€</th>
            <th>{{ calculateMixing.duet.mixingBase }}€</th>
            <th>{{ duetMixingPrice }}€</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Trios</th>
            <th>{{ calculateMixing.trio.tuningBase }}€</th>
            <th>{{ calculateMixing.trio.timingBase }}€</th>
            <th>{{ calculateMixing.trio.mixingBase }}€</th>
            <th>{{ trioMixingPrice }}€</th>
          </tr>
        </tbody>
      </table>
      <div>
        <p>
          With bigger choruses, we will have to settle on the price since it's
          heavily dependant on the factors below! I will finish a solo within a
          week, duets or trios within 2 weeks and choruses within 4 weeks! It
          can vary depending on how varios factors are (tuned, timed, hard song
          etc.)
        </p>
      </div>

      <div class="factors">
        <h3 class="subtitle">Additional factors:</h3>
        <ul>
          <li>
            Additional Tracks ({{ calculateMixing.additionalLinesFactor }}€
            each)
          </li>
          <li>Length of the song</li>
          <li>Difficulty</li>
          <li>Additional effects</li>
          <li>Deadline</li>
        </ul>
      </div>
    </section>
    <PriceCalculator />
  </div>
</template>

<script setup>
import * as calculateMixing from "../assets/calculate-mixing";
import PriceCalculator from "../components/price-calculator.vue";

const soloMixingPrice = calculateMixing.calculate(
  calculateMixing.solo.tuningBase,
  calculateMixing.solo.timingBase,
  calculateMixing.solo.mixingBase,
  0,
  1,
  calculateMixing.solo.discount
);

const duetMixingPrice = calculateMixing.calculate(
  calculateMixing.duet.tuningBase,
  calculateMixing.duet.timingBase,
  calculateMixing.duet.mixingBase,
  0,
  1,
  calculateMixing.duet.discount
);

const trioMixingPrice = calculateMixing.calculate(
  calculateMixing.trio.tuningBase,
  calculateMixing.trio.timingBase,
  calculateMixing.trio.mixingBase,
  0,
  1,
  calculateMixing.trio.discount
);
</script>

<style>
.factors {
  text-align: center;
  margin-top: 60px;
}
</style>
