export function SetUpClock(handHourEl, handMinEl, handSecEl, digitalClock) {
  
  const setDate = () =>{
    const now = new Date()
    
    const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
    const currentSeconds = (( seconds / 60 ) * 360) +90
    handSecEl.style.transform = `rotate(${currentSeconds}deg)`

    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    const currentMinutes = (( minutes / 60 ) * 360) +90
    handMinEl.style.transform = `rotate(${currentMinutes}deg)`

    const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
    const currentHours = (( hours / 12 ) * 360) +90
    handHourEl.style.transform = `rotate(${currentHours}deg)`


    digitalClock.innerHTML= `${hours} : ${minutes} : ${seconds}`

    if( seconds === 59 || seconds === 0){
      handHourEl.style.transition = 'none'
      handMinEl.style.transition = 'none'
      handSecEl.style.transition = 'none'
    }
  }

  setInterval(setDate, 1000);
}
