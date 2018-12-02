
const theHourHand = document.querySelector('.the-hour-hand')
const theMinuteHand = document.querySelector('.the-minute-hand')
const theSecondHand = document.querySelector('.the-second-hand')

const handMovement = () => {
  const date = new Date()
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  theHourHand.style.transform = `rotate(${hours * 30}deg) translateX(-50%)`
  theMinuteHand.style.transform = `rotate(${minutes * 6}deg) translateX(-50%)`
  theSecondHand.style.transform = `rotate(${seconds * 6}deg) translateX(-50%)`
}

setInterval(() => {
  handMovement()
}, 1000)