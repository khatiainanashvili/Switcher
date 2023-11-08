const btn = document.querySelector('.container')
const theme = document.getElementById('theme-toggler')
const clouds = document.querySelector(".clouds")
const backgroundClouds = document.querySelector(".background-clouds")
const stars = document.querySelector(".stars")

btn.addEventListener("click", () => {
  theme.classList.toggle("container-dark")
  switchTheme()
})


function switchTheme(){
  const rootEl = document.documentElement
  let dataTheme = rootEl.getAttribute('data-theme'),
  newTheme
 
  newTheme = (dataTheme === 'light') ? 'dark' : 'light'
  rootEl.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
   
  
}


for (let index = 0; index < 7; index++) {
    newDiv = document.createElement('span');
    newDiv.classList.add(`cloud${index}`)
    clouds.appendChild(newDiv)
}

for (let index = 0; index < 7; index++) {
    newDiv = document.createElement('span');
    newDiv.classList.add(`cloud${index}`)
    backgroundClouds.appendChild(newDiv)
}


