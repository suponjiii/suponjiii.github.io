/* eslint-disable */
export const genres = {
  acoustic: 1,
  pop: 1.05,
  rock: 1.1,
  electro: 1.2,
  other: 1
}

export const solo = {
  tuningBase: 19,
  timingBase: 18,
  mixingBase: 30,
  discount: 0.9
}

export const duet = {
  tuningBase: 23,
  timingBase: 24,
  mixingBase: 35,
  discount: 0.85
}

export const trio = {
  tuningBase: 32,
  timingBase: 34,
  mixingBase: 40,
  discount: 0.8
}

export const additionalLinesFactor = 2

export function getChorusConstants(amountOfChorusLines) {
  const chorusConstants = {
    tuningBase: 1.5 * (trio.tuningBase + (amountOfChorusLines - 3)),
    timingBase: 1.5 * (trio.timingBase + (amountOfChorusLines - 3)),
    mixingBase: 1.5 * (trio.mixingBase + (amountOfChorusLines - 3)),
    discount: 0.7
  }
  return chorusConstants
}

export function calculate(
  tuning,
  timing,
  mixing,
  amountOfAdditionalLines,
  genreDiscount,
  discount
) {
  return Math.round(
    (tuning +
      timing +
      mixing +
      amountOfAdditionalLines * additionalLinesFactor) *
      genreDiscount *
      discount
  )
}
