document.addEventListener('DOMContentLoaded', function () {

const swiper = new Swiper('.video-swiper', {
  centeredSlides: true,
  spaceBetween:20,
  speed: 600,
  loop: true,
  loopedSlides: 3,         

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
 breakpoints: {
   200: {
    slidesPerView:1.3,  
    spaceBetween: 10,
  },
  400: {
    slidesPerView:3,  
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 24,
  }
},
});

const swiper_video = document.querySelectorAll('.swiper-slide video');
const swiper_slide = document.querySelectorAll('.swiper-slide');
const play_btn = document.querySelectorAll('.play-btn');

  function stopVideos() {
    swiper_video.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    play_btn.forEach(btn => {
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    });
  }
  swiper_slide.forEach(slide => {

    const video = slide.querySelector('video');
    const playBtn = slide.querySelector('.play-btn');

    if (!video || !playBtn) return;

    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (video.paused) {
        stopVideos();
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      } else {
        video.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    });

  });

  swiper.on('slideChangeTransitionStart', stopVideos);

});
