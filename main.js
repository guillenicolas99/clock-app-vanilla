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

    <div class='digital-clock'>
    </div>
  </main>
`

const handHourEl = document.querySelector('.hand-hour')
const handMinEl = document.querySelector('.hand-minute')
const handSecEl = document.querySelector('.hand-second')

const digitalClock = document.querySelector('.digital-clock')


SetUpClock(handHourEl, handMinEl, handSecEl, digitalClock)