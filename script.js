let button = document.querySelectorAll('.share__button')
let about = document.querySelector('.article__about')
let shareBox = document.querySelector('.share__box')

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', share)
}

function share(){
    if (window.innerWidth <= 768) {
        about.style.display = 'none'
        shareBox.style.display = 'flex'
    } else if (shareBox.style.display = 'none'){
        shareBox.style.display = 'flex'
    }
}

