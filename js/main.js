const burgerMenu = document.querySelector('#burger-menu')
const burgerButton = document.querySelector('#burger-button')

if (burgerMenu && burgerButton) {
    burgerButton.addEventListener('click', ()=>{
        burgerButton.classList.toggle('active')

        if (burgerButton.classList.contains('active')) {
            burgerMenu.classList.add('active')
        } else {
            burgerMenu.classList.remove('active')            
        }
    })
}