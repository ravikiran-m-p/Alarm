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

setInterval(show_time, 1000)

document.getElementById("set_alarm").addEventListener("click", function() {
  let t = alarm_time.value
  let f = audio_file.files[0]
  if (!t || !f) {
    alert("please pick a time and sound")
    return
  }
  let r = new FileReader()
  r.onload = function(e) {
    let a = {}
    a.time = to12(t)
    a.sound = e.target.result
    a.done = false
    alarms.push(a)
    show_alarms()
  }
  r.readAsDataURL(f)
})

function show_alarms() {
  alarm_list.innerHTML = ""
  alarms.forEach((a, i) => {
    let li = document.createElement("li")
    li.className = "list-group-item"
    li.innerHTML = `<span>${a.time}</span>
    <button class="btn btn-sm" onclick="del_alarm(${i})">X(cancel)</button>`
    alarm_list.appendChild(li)
  })
}




