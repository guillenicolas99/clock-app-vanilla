import './style.css'
import { SetUpClock } from './clock.js'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Clock App</h1>
    <div class='clock'>
      <div class='clock-face'>
        <div class='hand hand-hour'></div>
        <div class='hand hand-minute'></div>
        <div class='hand hand-second'></div>
      </div>
    </div>

    <h2>Digital Clock</h2>
    <div class='digital-clock'>
      <div class='hour'></div>
      <span>:</span>
      <div class='min'></div>
      <span>:</span>
      <div class='sec'></div>
    </div>
  </main>
`

const handHourEl = document.querySelector('.hand-hour')
const handMinEl = document.querySelector('.hand-minute')
const handSecEl = document.querySelector('.hand-second')

const digitalHourEl = document.querySelector('.hour')
const digitalMinEl = document.querySelector('.min')
const digitalSecEl = document.querySelector('.sec')


SetUpClock(handHourEl, handMinEl, handSecEl, digitalHourEl, digitalMinEl, digitalSecEl)