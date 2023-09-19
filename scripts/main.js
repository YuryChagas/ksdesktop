const nav = document.querySelector('header')

function activeScrool (){
  nav.classList.toggle('ativo', scrollY > 0)
}

window.addEventListener('scroll', activeScrool)