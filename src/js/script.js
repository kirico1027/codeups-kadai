
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger").on("click", function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
          openDrawer();
        } else {
          closeDrawer();
        }
      });

      // backgroundまたはページ内リンクをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
      });

      // resizeイベント
      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeDrawer();
        }
      });
    });

    function openDrawer() {
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
    }
  });

  // mv-swiper
  jQuery(function ($) {
    const mv_swiper = new Swiper(".js-mv-swiper", {
      loop: true,
      speed: 2000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  });

  // campaign-swiper
  jQuery(function ($) {
    // リサイズ処理（PC時のみ矢印表示）
    const campaign_slideLength = document.querySelectorAll(
      ".js-campaign-swiper .swiper-slide"
    ).length;
    $(window).resize(function () {
      campaign_arrow();
    });
    campaign_arrow();
    function campaign_arrow() {
      if (window.matchMedia("(max-width: 767px)").matches || campaign_slideLength <= 3) {
        $(".js-campaign-arrow").hide();
      } else {
        $(".js-campaign-arrow").show();
      }
    }

    var service_swiper = new Swiper(".js-campaign-swiper", {
      loop: true,
      speed: 1000,
      slidesPerView: 1.28,
      spaceBetween: 24,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.88,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });


});
