var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1300,
        modifier: 1,
        slideShadows: false,
        // slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById('menubar');
sidenav.style.width = "0px"

menubar.onclick = function() {
    if (sidenav.style.width == "0px") {
        sidenav.style.width = "250px"
    } else {
        sidenav.style.width = '0px'
    }
}