<template>
  <section id="price-calculator" class="section-price-calc section scroll">
    <label class="price-calc-label">
      <h2 class="title" style="margin-bottom: 15px">Price Calculation</h2>
    </label>
    <p>
      Use this to calculate a rough estimation of what it <i>might</i> cost.
      <br />
      Example: A chorus with 5 mains, 5 harms and 2 Adlibs would have 5 in
      "Amount of Chorus Lines" and 6 in "Amount of Additional Lines."
    </p>

    <br />
    <div class="columns">
      <div class="column is-half is-left">
        <label class="label">Type of Mix</label>

        <div class="select is-fullwidth">
          <select id="typeOfMix" v-model="typeOfMix">
            <option disabled value="">Please select...</option>
            <option value="tuningOnly">Tuning only</option>
            <option value="timingOnly">Timing only</option>
            <option value="mixingOnly">Mixing only</option>
            <option value="completeMix">Complete Mix</option>
          </select>
          <p
            id="typeOfMixError"
            style="color: red; visibility: hidden; font-size: 16px"
          >
            Please select a type of mix.
          </p>
        </div>
      </div>

      <div class="column is-half is-left">
        <label class="label">Genre</label>

        <div class="select is-fullwidth">
          <select id="genre" v-model="genre">
            <option disabled value="">Please select...</option>
            <option value="acoustic">Acoustic</option>
            <option value="electro">Electro</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="other">Other</option>
          </select>
          <p
            id="genreError"
            style="color: red; visibility: hidden; font-size: 16px"
          >
            Please select a genre.
          </p>
        </div>
      </div>
    </div>

    <br />
    <div class="columns">
      <div class="column is-half is-right">
        <label class="label">Amount of Lines</label>

        <div class="select is-fullwidth">
          <select id="amountOfLines" v-model="amountOfLines">
            <option disabled value="">Please select...</option>
            <option value="solo">Solo</option>
            <option value="duet">Duet</option>
            <option value="trio">Trio</option>
            <option value="chorus">Chorus</option>
          </select>
          <p
            id="amountOfLinesError"
            style="color: red; visibility: hidden; font-size: 16px"
          >
            Please select an amount of lines.
          </p>
        </div>
      </div>

      <div class="column is-half is-left">
        <label class="label">Amount of Additional Lines</label>

        <div class="control is-fullwidth">
          <input
            id="amountOfAdditionalLines"
            v-model.number="amountOfAdditionalLines"
            class="input is-medium"
            type="text"
          />
        </div>
        <p
          id="additionalError"
          style="visibility: hidden; height: 0; font-size: 16px; color: red"
        >
          Please enter a number or leave it empty.
        </p>
      </div>
    </div>

    <br />
    <div class="columns">
      <div class="column is-half is-left">
        <label class="label">Amount of Chorus Lines</label>

        <div class="control is-fullwidth">
          <input
            id="amountOfChorusLines"
            v-model.number="amountOfChorusLines"
            class="input is-medium"
            type="text"
            placeholder="Amount of Chorus
          Lines"
            :disabled="!isChorus"
          />
          <p
            id="faultyChorusLines"
            style="color: red; visibility: hidden; font-size: 16px"
          >
            Please enter a number bigger than 3.
          </p>
        </div>
      </div>

      <div class="column is-half is-right">
        <label class="label">Result in €</label>

        <div class="control is-fullwidth">
          <input
            id="result-field"
            v-model.number="result"
            class="input is-medium is-focused is-loading"
            type="text"
            placeholder="Total Price"
            readonly
          />
        </div>
      </div>
    </div>

    <br />
    <div class="columns" style="position: relative; bottom: 25px">
      <div class="column is-one-quarter">
        <button
          id="calculation-button"
          class="button is-dark"
          @click="setPrice"
        >
          Calculate
        </button>
      </div>
    </div>
    <article>
      <div class="message-header">
        <p>Important!</p>
      </div>
      <div class="message-body">
        These prices are only an orientation for you so please take these values
        with a grain of salt! They might not represent the definitive value that
        I might charge you.
        <br />Especially with chorus projects, it's always hard to calculate
        with a formula so please do talk to me about the price.
      </div>
    </article>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import * as calculateMixing from "../assets/calculate-mixing";

const typeOfMix = ref("");
const genre = ref("");
const amountOfLines = ref("");
const amountOfAdditionalLines = ref(0);
const amountOfChorusLines = ref(0);
const isChorus = computed(() => {
  return amountOfLines.value === "chorus";
});

let result = ref("");

function setPrice() {
  if (validate()) {
    return;
  }
  let tuning, timing, mixing, discount;
  if (!isChorus.value) {
    tuning = calculateMixing[amountOfLines.value]?.tuningBase || 0;
    timing = calculateMixing[amountOfLines.value]?.timingBase || 0;
    mixing = calculateMixing[amountOfLines.value]?.mixingBase || 0;
    discount = calculateMixing[amountOfLines.value]?.discount || 0;
  } else {
    tuning =
      calculateMixing.getChorusConstants(amountOfChorusLines.value)
        .tuningBase || 0;
    timing =
      calculateMixing.getChorusConstants(amountOfChorusLines.value)
        .timingBase || 0;
    mixing =
      calculateMixing.getChorusConstants(amountOfChorusLines.value)
        .mixingBase || 0;
    discount =
      calculateMixing.getChorusConstants(amountOfChorusLines.value).discount ||
      0;
  }

  const genreDiscount = calculateMixing.genres[genre.value];

  result.value = calculateMixing.calculate(
    tuning,
    timing,
    mixing,
    amountOfAdditionalLines.value,
    genreDiscount,
    discount
  );
}

function validate() {
  let hasError = false;
  if (typeOfMix.value === "") {
    document.getElementById("typeOfMixError").style.visibility = "visible";
    hasError = true;
  } else {
    document.getElementById("typeOfMixError").style.visibility = "hidden";
  }
  if (genre.value === "") {
    document.getElementById("genreError").style.visibility = "visible";
    hasError = true;
  } else {
    document.getElementById("genreError").style.visibility = "hidden";
  }
  if (amountOfLines.value === "") {
    document.getElementById("amountOfLinesError").style.visibility = "visible";
    hasError = true;
  } else {
    document.getElementById("amountOfLinesError").style.visibility = "hidden";
  }
  if (amountOfAdditionalLines.value < 0) {
    document.getElementById("additionalError").style.visibility = "visible";
    hasError = true;
  } else {
    document.getElementById("additionalError").style.visibility = "hidden";
  }
  if (isChorus.value && amountOfChorusLines.value < 3) {
    document.getElementById("faultyChorusLines").style.visibility = "visible";
    hasError = true;
  } else {
    document.getElementById("faultyChorusLines").style.visibility = "hidden";
  }
  return hasError;
}
</script>

<style>
.section-price-calc {
  position: centered;
  margin-top: 60px;
  font-size: 20px;
}
</style>
