
const clockBody = document.querySelector('.clock-wrap .body')
const theHourHand = document.querySelector('.the-hour-hand')
const theMinuteHand = document.querySelector('.the-minute-hand')
const theSecondHand = document.querySelector('.the-second-hand')
const centeringHands = 'translateX(-50%)'

const handMovement = () => {
  const date = new Date()
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const rotationValue = {
    hours: hours * 30 + minutes * .5 + seconds * 1 / 120,
    minutes: minutes * 6 + seconds * .1,
    seconds: seconds * 6
  }
  theHourHand.style.transform = `rotate(${rotationValue.hours}deg) ${centeringHands}`
  theMinuteHand.style.transform = `rotate(${rotationValue.minutes}deg) ${centeringHands}`
  theSecondHand.style.transform = `rotate(${rotationValue.seconds}deg) ${centeringHands}`
}

handMovement()
clockBody.style.opacity = 1

setInterval(() => {
  handMovement()
}, 1000)