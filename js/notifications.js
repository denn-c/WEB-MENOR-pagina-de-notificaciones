let $notifications = document.querySelectorAll('.notifications')
let $mark_all = document.querySelector('.header__button')
let $amount = document.querySelector('.header__amount')

$mark_all.addEventListener('click', () =>{
    $notifications.forEach(element => {
        if(!element.classList.contains('read')){
            element.classList.add('read')
        }
    });
    $amount.textContent = '0'
})