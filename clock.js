export function SetUpClock(handHourEl, handMinEl, handSecEl, digitalHourEl, digitalMinEl, digitalSecEl) {
  
  const setDate = () =>{
    const now = new Date()
    
    const seconds = now.getSeconds()
    const currentSeconds = (( seconds / 60 ) * 360) +90
    handSecEl.style.transform = `rotate(${currentSeconds}deg)`

    const minutes = now.getMinutes()
    const currentMinutes = (( minutes / 60 ) * 360) +90
    handMinEl.style.transform = `rotate(${currentMinutes}deg)`

    const hours = now.getHours()
    const currentHours = (( hours / 12 ) * 360) +90
    handHourEl.style.transform = `rotate(${currentHours}deg)`

    digitalHourEl.innerHTML= `${hours}`
    digitalMinEl.innerHTML= `${minutes}`
    digitalSecEl.innerHTML= `${seconds}`

    if( seconds === 0){
      handHourEl.style.transition = 'none'
      handMinEl.style.transition = 'none'
      handSecEl.style.transition = 'none'
    }
  }

  setInterval(setDate, 1000);
}
