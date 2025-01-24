let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // Calculate rotation angles for each hand
  let hRotation = 30 * hh + mm / 2; // 30 degrees per hour and 0.5 degrees per minute
  let mRotation = 6 * mm; // 6 degrees per minute
  let sRotation = 6 * ss; // 6 degrees per second
                   
  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
