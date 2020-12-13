// Variables
//Hamburger and menu hamburger required to hamburger animation
document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const menuHamburger = document.querySelector('.menuHamburger');
    const orderInfo = document.querySelector('.orderInfo');
    const orderInfoBtn = document.querySelector('div.orderInfo button.order');
    const menuOrderButton = document.querySelector('div.mobile li.order');
    const btnSend = document.querySelector('button.send');
    const nameAndSurname = document.querySelector('input.nameAndSurname');
    const textarea = document.querySelector('textarea');
    const after = document.querySelectorAll('.rating label');
    const textRat = document.querySelector('.textRat');

    const order = document.querySelectorAll('.order').forEach(item => {
        item.addEventListener('click', function () {
            orderInfo.classList.add('active');
        })
    })

    menuOrderButton.addEventListener('click', function () {
        menuHamburger.classList.toggle('menuHamburger--active');
        hamburger.classList.toggle('hamburger--active');
    })

    btnSend.addEventListener('click', function () {
        orderInfo.classList.remove('active');
        nameAndSurname.value = '';
        textarea.value = '';
        after.forEach(after => {
            after.style.opacity = '0';
        })
        textRat.style.opacity = '1';

    })
    orderInfoBtn.addEventListener('click', function () {
        orderInfo.classList.remove('active');

    })



    //Function for ejecting menu hamburger and hamburger animation
    hamburger.addEventListener('click', function () {
        (this).classList.toggle('hamburger--active');
        menuHamburger.classList.toggle('menuHamburger--active');
    })

    //Function for changing and animation background

    $(document).on('scroll', function () {
        const windowHeight = $(window).height();
        const windowWidth = $(window).width();
        const scrollValue = $(this).scrollTop();

        const $one = $('.one');
        const $two = $('.two');

        const articlesFromTop = $one.offset().top;
        const articlesHeight = $one.outerHeight();

        if (windowWidth > 1024) {
            if (scrollValue > articlesFromTop + articlesHeight - windowHeight) {
                $one.addClass('active');
                $two.addClass('active');

            }
        }
    })


})

