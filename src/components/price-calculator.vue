<template>
  <section
    id="price-calculator"
    class="section-price-calc section scroll"
  >
    <label class="price-calc-label">
      <h2
        class="title"
        style="margin-bottom: 15px"
      >Price Calculation</h2>
    </label>
    <p>
      Use this to calculate a rough estimation of what it <i>might</i> cost.
      <br>
      Example: A chorus with 5 mains, 5 harms and 2 Adlibs would have 5 in
      "Amount of Chorus Lines" and 6 in "Amount of Additional Lines."
    </p>

    <br>
    <div class="columns">
      <div class="column is-half is-left">
        <label class="label">Type of Mix</label>

        <div class="select is-fullwidth">
          <select id="typeOfMix">
            <option value="TuningOnly">
              Tuning only
            </option>
            <option value="TimingOnly">
              Timing only
            </option>
            <option value="MixingOnly">
              Mixing only
            </option>
            <option value="CompleteMix">
              Complete Mix
            </option>
          </select>
        </div>
      </div>

      <div class="column is-half is-left">
        <label class="label">Gerne</label>

        <div class="select is-fullwidth">
          <select id="genre">
            <option value="Acoustic">
              Acoustic
            </option>
            <option value="Electro">
              Electro
            </option>
            <option value="Pop">
              Pop
            </option>
            <option value="Rock">
              Rock
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>
      </div>
    </div>

    <br>
    <div class="columns">
      <div class="column is-half is-right">
        <label class="label">Amount of Lines</label>

        <div class="select is-fullwidth">
          <select id="amountOfLines">
            <option value="Solo">
              Solo
            </option>
            <option value="Duet">
              Duet
            </option>
            <option value="Trio">
              Trio
            </option>
            <option value="Chorus">
              Chorus
            </option>
          </select>
        </div>
      </div>

      <div class="column is-half is-left">
        <label class="label">Amount of Additional Lines</label>

        <div class="control is-fullwidth">
          <input
            id="amountOfAdditionalLines"
            class="input is-medium"
            type="text"
            placeholder="Text input"
          >
        </div>
        <p
          id="additionalError"
          style="visibility: hidden; height: 0; font-size: 16px; color: red"
        >
          Please enter a number or leave it empty.
        </p>
      </div>
    </div>

    <br>
    <div class="columns">
      <div class="column is-half is-left">
        <label class="label">Amount of Chorus Lines</label>

        <div class="control is-fullwidth">
          <input
            id="amountOfChorusLines"
            class="input is-medium"
            type="text"
            placeholder="Amount of Chorus Lines"
            disabled
          >
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
            class="input is-medium is-focused is-loading"
            type="text"
            placeholder="Total Price"
            readonly
          >
        </div>
      </div>
    </div>

    <br>
    <div
      class="columns"
      style="position: relative; bottom: 25px"
    >
      <div class="column is-one-quarter">
        <div class="button is-paddingless">
          <a
            id="calculation-button"
            class="button is-dark"
          >Calculate</a>
        </div>
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
        <br>Especially with chorus projects, it's always hard to calculate
        with a formula so please do talk to me about the price.
      </div>
    </article>
  </section>
</template>

<script setup></script>

<style>
.section-price-calc {
  position: centered;
  margin-top: 60px;
  font-size: 20px;
}
</style>
