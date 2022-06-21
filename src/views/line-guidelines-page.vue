<template>
  <section class="section">
    <h2 id="line-guidelines" class="title">Line Guidelines</h2>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <p class="title">No overlaps</p>
              <p>
                Please make sure to have no overlaps in your lines! Tuning and
                timing lines that are overlapping is nigh impossible.
              </p>
            </article>
            <article class="tile is-child box">
              <p class="title">No clipping</p>
              <p>
                Make sure that none of your lines are clipping! Clipped lines
                are unfixable and can only be mixed suboptimally.
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Provide any important file or info</p>
              <p>That includes:</p>
              <ul>
                <li>Every recorded line</li>
                <li>Pitch (if not original)</li>
                <li>Reference cover (if it exists)</li>
                <li>Original off vocal (if you can find it)</li>
              </ul>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Line naming</p>
            <p class="subtitle">Please seperate and name lines properly.</p>
            <p>
              I much prefer semantic naming over numbered naming because it's
              immediately understandable what they are. Generally you'd want to
              separate (and thus name) lines that belong together and should be
              mixed the same. Thinking this way will also help you finding out
              how you want lines to sound!
            </p>
            <p>
              Nonetheless numbers do have a use - It makes sense if there are
              multiple sets of the same kind.
            </p>
            <p>As a suggestion for a format:</p>
            <article class="message">
              <div class="message-body">
                [<i>Type_Number</i>]_<i>Username</i>_<i>Songname</i>
              </div>
            </article>
            <p>Example:</p>
            <div class="columns">
              <div class="column is-two-fifths">
                <article class="message is-primary">
                  <div class="message-body">
                    <ul>
                      <li>[Mains]_Unravel_suponjiii</li>
                      <li>[Mains_Overlaps]_Unravel_suponjiii</li>
                      <li>[Mains_Double]_Unravel_suponjiii</li>
                      <li>[Mains_Double_2]_Unravel_suponjiii</li>
                      <li>[Low Harms]_Unravel_suponjiii</li>
                      <li>[Low Harms Double]_Unravel_suponjiii</li>
                      <li>[High Harms 1]_Unravel_suponjiii</li>
                      <li>[High Harms Double]_Unravel_suponjiii</li>
                      <li>[Low Adlibs 1]_Unravel_suponjiii</li>
                      <li>[Low Adlibs Double]_Unravel_suponjiii</li>
                      <li>[Solo Adlib]_Unravel_suponjiii</li>
                    </ul>
                  </div>
                </article>
              </div>

              <div class="column is-one-fifth"><p>is preferable to</p></div>
              <div class="column is-two-fifths">
                <article class="message is-danger">
                  <div class="message-body">
                    <ul>
                      <li>Mains_Unravel_suponjiii</li>
                      <li>Mains_2_Unravel_suponjiii</li>
                      <li>Mains_3_Unravel_suponjiii</li>
                      <li>Mains_4_Unravel_suponjiii</li>
                      <li>Harms_Unravel_suponjiii</li>
                      <li>Harms2_Unravel_suponjiii</li>
                      <li>Harms3_Unravel_suponjiii</li>
                      <li>Harms4_Unravel_suponjiii</li>
                      <li>Adlibs1_Unravel_suponjiii</li>
                      <li>Adlibs2_Unravel_suponjiii</li>
                      <li>Adlibs3_Unravel_suponjiii</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">
            If possible, record the same kind of line in one sitting to ensure
            consistency.
          </p>
          <p>
            Generally lines will sound different between different sessions.
            <br />
            Even if the volume between sessions doesn't change (which it usually
            does since people record with a lower level than when they just use
            it to talk), things like how the voice sounds on that day, the mic's
            position etc. will affect the recording and will usually lead to
            lines sounding different.
          </p>
          <br />
          <p>
            That's not a problem if you record your harms on a different day
            than your mains but the difference is definitely more noticeable if
            you record the mains throughout multiple days.
          </p>
          <br />
          <p>
            Nonetheless, I know it's not always possible, so this is more a best
            practice than a strict rule.
          </p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Let me know if you want a specific sound!</p>
          <p>
            Generally, if you want a certain part to sound a certain way, please
            make sure to let me know! For example: You want the harms to be
            ambient, the low adlibs to be ambient as well but that one high
            adlib should be mixed similar to the main lines for it to stick out.
            Or maybe you want the lines to have autotune?
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Export as wav</p>
          <p>
            Always export as wav if possible! FLAC or other lossless formats
            work too but make sure it's not a "compressed" format!
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.column li {
  font-size: 14px;
}
</style>
