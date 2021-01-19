const toggleBtn = document.querySelector('.toggleBtn')
const menu = document.querySelector('.nav_menu')
const link = document.querySelector('.nav_link')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    link.classList.toggle('active')
})