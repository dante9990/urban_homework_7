const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
const closeMenu = document.querySelector('.close')


burger.addEventListener('click', ()=>{
    burgerMenu.classList.add('active')
})

closeMenu.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active')
})