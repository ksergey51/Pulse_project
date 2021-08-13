const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    navPosition: 'bottom',
    controls: false,
    responsive: {
        320: {
          edgePadding: 20,
          gutter: 20,
          nav: true,
        },
        1101: {
            nav: false,
        }
    },
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
}); 
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}); 


$(document).ready(function() {
  
    $('.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(evt) {
                evt.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
                $('.catalog-item__information').eq(i).toggleClass('catalog-item__information_active');
            })
        });
    
    };

    toggleSlide('.catalog-item__more');
    toggleSlide('.catalog-item__back');
    $('[data-modal=consultation]').on('click', function() {
        $('.bg-faid, #consultation').fadeIn('slow');
    });

    $('[data-modal=thanks]').on('click', function() {
        $('#consultation, #order').fadeOut('slow');
        $('#thanks').fadeIn('slow');
    });

    $('.modal-item__close').on('click', function() {
        $('.bg-faid,#order, #thanks, #consultation').fadeOut('slow');
    });

    $('.button_small').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal-item__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.bg-faid, #order').fadeIn('slow');
        })
    })
  });

  