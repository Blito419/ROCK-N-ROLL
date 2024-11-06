

// MARQUEE


const indicator = document.getElementById("indicator")
const banner = document.getElementById("banner")
function start() {
  indicator.classList.add("flicker")
  setTimeout(() => {
    indicator.classList.remove("flicker")
    banner.classList.add("max")
    banner.classList.add("flickerbg")
  }, 2000)
}
start()




// TARJETAS

