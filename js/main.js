var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper('.conainer-2', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

 $(document).ready(function() {
   $('.cart-up').click(function(evt){
     evt.preventDefault(); /// данная функция не позволяет браузеру перйти по ссылку окружающий обзац
     $('.cart-low').slideToggle(300);
     $(this).toggleClass('close')
   });
 });


 const menuToggle = document.querySelector('.menu-toggle');
   const nav = document.querySelector('nav');
   menuToggle.addEventListener('click', () => {
       if (nav.className != 'active') {nav.className = 'active';}
       else {nav.className = '';}
   });


$(document).ready(function() {
  $('.power').click(function() {
      $('.popup').slideToggle(300);
    $('.close-drop').click(function() {
      $('.close-drop').toggleClass('close')
    })
  });
});
