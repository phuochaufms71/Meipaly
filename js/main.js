$(function() {
    $('.carousel__slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplaySpeed: 2000,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplaySpeed: 2000,
                }
            }, {
                breakpoint: 522,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplaySpeed: 2000,
                }
            }, 
        ]
      });
});

//Statistial
var project = document.querySelector('.project .statistial__view');
var active = document.querySelector('.active .statistial__view');
var cup = document.querySelector('.cup .statistial__view');
var client = document.querySelector('.client .statistial__view');

function countNumber(element, end) {
    var times = 700;           //Số lần chạy
    var step = end / times;    //Bước nhảy số
    var count = 0;            //Giá trị khởi tạo của view
    let time = setInterval(function() {   //hàm chạy view
        count += step;                    //Tăng giá trị sau 1 bước step
        if (count > end) {                
            clearInterval(time);         //Gỡ hàm setInteral
            element.innerText = end;     //thay đổi text
        } else {
            element.innerText = Math.round(count);
        }
    }, 2)
}

countNumber(project, 8705)    //gọi hàm và truyền đối số
countNumber(active, 480)
countNumber(cup, 625)
countNumber(client, 9774)


// Open navigation on mobile, tablet
var menu = document.querySelector('.header__menu');
var overlay__nav = document.querySelector('.overlay-nav');
var nav = document.querySelector('.header__list');

menu.onclick = function() {
    overlay__nav.classList.toggle('open');
    nav.classList.toggle('click');
}

overlay__nav.onclick = function() {
    overlay__nav.classList.toggle('open');
    nav.classList.toggle('click');
}

