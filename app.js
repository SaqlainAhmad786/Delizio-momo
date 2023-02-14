const navul=document.querySelector('nav ul')

const hamburger=document.querySelector('.hamburger')
hamburger.addEventListener('click',()=>{
    navul.classList.toggle('active')
})