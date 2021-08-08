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
        1100: {
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