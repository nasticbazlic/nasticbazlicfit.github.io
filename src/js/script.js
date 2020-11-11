//the first way to create a slider

//$(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         slidesToShow: 1,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 dots: true,
//                 arrows: false                
//               }
//             }
//           ]    
//       });
//   });

//the second way to create a slider tiny-slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  speed: 1200,
  nav: false /* это точки */
 
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});