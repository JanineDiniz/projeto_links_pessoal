function toggleMode() {
  const html = document.documentElement
  
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.svg")
    img.style.backgroundColor = 'rgb(255, 255, 255)';
  } else {
    img.setAttribute("src", "assets/avatar.svg")
    img.style.backgroundColor = 'rgb(255, 150, 170)';
  }
}

