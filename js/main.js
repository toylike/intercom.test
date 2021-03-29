$(function(){
    
    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250

    })

    $('.gallery_body').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 700

    })

    $('.g_popup').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        speed: 0
    })

})


function changeState(){
    let active_slider = document.querySelector('.slick-active').getAttribute('name');

    let subspecies_active = document.querySelector('.subspecies_active');

    if(subspecies_active.getAttribute('id') != active_slider){
        subspecies_active.classList.remove('subspecies_active')

        let id_subspecies = document.getElementById(`${active_slider}`).classList.add('subspecies_active')
    }
} 

$('.slider').on('beforeChange', function(event, slick, 
    currentSlide, nextSlide){
        setTimeout(() => {
            changeState()
        }, 0);
        
    });


let banner_content = document.querySelector('.banner_content');

banner_content.addEventListener('click', event => {

    let id_subspecies = event.target.closest('.banner_content-subspecies').getAttribute('id');

    if(!event.target.closest('.banner_content-subspecies').classList.contains('subspecies_active')){
        document.querySelector('.subspecies_active').classList.remove('subspecies_active')
        event.target.closest('.banner_content-subspecies').classList.add('subspecies_active')

        $('.slider').slick('slickGoTo', event.target.closest('.banner_content-subspecies').getAttribute('name'));

    }
  
  });

  window.onscroll = () => {
      const nav = document.querySelector('.nav');
      const distanceY = window.scrollY;

      if(distanceY > 200){
        nav.classList.add('nav_scroll')
      }else{
        nav.classList.remove('nav_scroll')
      }
  }

  const gallery_body = document.querySelector('.gallery_body');

  gallery_body.addEventListener('click', event => {
    event.preventDefault();

    if(event.target.closest('.gallery_card-popup--link')){

        document.querySelector('.g_wrapp_popup').classList.remove('g_popup-hidden')
        $('.g_popup').slick('slickGoTo', event.target.closest('.gallery_card-popup--link').getAttribute('name'));
        console.log(event.target.closest('.gallery_card-popup--link').getAttribute('name'))
    }
  
  });

  let closed_butt = document.querySelector('.closed_popup');

    closed_butt.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.g_wrapp_popup').classList.add('g_popup-hidden')
    })

  
  