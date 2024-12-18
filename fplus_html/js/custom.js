// Hamburger menu toggle
jQuery('.hamburger').click(function(){
  jQuery('.sp-menu').toggleClass('active');
  jQuery('.hamburger').toggleClass('open');
});

jQuery('.header__nav__item').click(function(){
  jQuery('.sp-menu').removeClass('active');
  jQuery('.hamburger').removeClass('open');
});

jQuery('.header__contact').click(function(){
  jQuery('.sp-menu').removeClass('active');
  jQuery('.hamburger').removeClass('open');
});

// fadein animation
jQuery(window).on('scroll', function() {
    jQuery('.fade-in').each(function() {
      var pos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var wHeight = jQuery(window).height();
      
      if (scroll > pos - wHeight + (wHeight / 80)) {
        jQuery(this).addClass('inview');
      }
    });
});

// loading
const loading = document.querySelector(".loading");
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loading.classList.add("loaded");
    }, 3000);
});

// low power mode movie
$(function () {
  const videos = $('video.bg__animation[data-target]');

  videos.each(function () {
    const $video = $(this);
    const videoElement = $video[0];
    videoElement
      .play()
      .then(() => {
        // 動画再生成功時
        $video.show();
        $video.siblings('.bg__img').hide();
      })
      .catch(() => {
        // 動画再生失敗時（省電力モードまたは他の理由）
        $video.hide();
        $video.siblings('.bg__img').show();
      });
  });
});
