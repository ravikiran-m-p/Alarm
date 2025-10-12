let clock = document.getElementById("clock")
let alarm_time = document.getElementById("alarm_time")
let audio_file = document.getElementById("audio_file")
let alarm_list = document.getElementById("alarm_list")
let alarms = []

function show_time() {
  let now = new Date()
  let time_str = now.toLocaleTimeString('en-US', { hour12: true })
  clock.textContent = time_str
  alarms.forEach(a => {
    if (!a.done && time_str === a.time) {
      let s = new Audio(a.sound)
      s.play()
      alert("⏰ Alarm for " + a.time + " is ringing!")
      a.done = true
    }
  })
}

