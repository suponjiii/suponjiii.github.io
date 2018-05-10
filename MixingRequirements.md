# Mixing Prices
## Global Variables
- amountAdditionalLines = input (Default 0)
- amountOfChorusLines = input
- electro = 1.5
- rock = 1.2
- acoustic = 1
- pop = 1
- genre = { acoustic = 1; pop = 1.05; rock = 1.2; electro = 1.5 }

## Solo
- soloTuningBase = 7€
- soloTimingBase = 5€
- soloMixingBase = 10€
- soloTuning = ( soloTuningBase + amountAdditionalLines ) * genre
- soloTiming = ( soloTimingBase + amountAdditionalLines ) * genre
- soloMixing = ( soloMixingBase + amountAdditionalLines ) * genre
- soloDiscount = 0.9
- soloComplete = ( ( soloTuningBase + soloTimingBase + soloMixingBase + amountAdditionalLines ) * genre ) * soloDiscount   **ROUNDED**

## Duet
- duetTuningBase = 8€
- duetTimingBase = 9€
- duetMixingBase = 12€
- duetTuning = ( duetTuningBase + amountAdditionalLines ) * genre
- duetTiming = ( duetTimingBase + amountAdditionalLines ) * genre
- duetMixing = ( duetMixingBase + amountAdditionalLines ) * genre
- duetDiscount = 0.85
- duetComplete = ( ( duetTuningBase + soloTimingBase + trioMixingBase + amountAdditionalLines ) * genre ) * duetDiscount   **ROUNDED**

## Trio
- trioTuningBase = 9€
- trioTimingBase = 11€
- trioMixingBase = 17€
- trioTuning = ( trioTuningBase + amountAdditionalLines ) * genre
- trioTiming = ( trioTimingBase + amountAdditionalLines ) * genre
- trioMixing = ( trioMixingBase + amountAdditionalLines ) * genre
- trioDiscount = 0.8
- trioComplete = ( ( trioTuningBase + trioTimingBase + trioMixingBase + amountAdditionalLines ) * genre ) * trioDiscount   **ROUNDED**

## Chorus
- chorusTuningBase = trioTuningBase + (amountOfChorusLines - 3)
- chorusTimingBase = trioTimingBase + (amountOfChorusLines - 3)
- chorusMixingBase = trioMixingBase + (amountOfChorusLines - 3)
- chorusTuning = ( chorusTuningBase + amountAdditionalLines ) * genre
- chorusTiming = ( chorusTimingBase + amountAdditionalLines ) * genre
- chorusMixing = ( chorusMixingBase + amountAdditionalLines ) * genre
- chorusComplete = ( chorusTuningBase + chorusTimingBase + chorusMixingBase + amountAdditionalLines ) * genre   **ROUNDED**