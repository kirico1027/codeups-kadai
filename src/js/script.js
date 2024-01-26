jQuery(function ($) {
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

      $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
      });

      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeDrawer();
        }
      });
    });

    function openDrawer() {
      $(".js-header").addClass("is-open");
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
      $("body").addClass("is-noscroll");
    }

    function closeDrawer() {
      $(".js-header").removeClass("is-open");
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
      $("body").removeClass("is-noscroll");
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
    var campaign_swiper = new Swiper(".js-campaign-swiper", {
      loop: true,
      speed: 1800,
      slidesPerView: "auto",
      spaceBetween: 24,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 39.7,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  // 画像のアニメーション
  var box = $(".js-colorbox"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // トップページへ
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".page-top").addClass("is-show");
    } else {
      $(".page-top").removeClass("is-show");
    }
  });

  // モーダル
  $(function ()
	{$(".page-about-gallery__image img").click(function() {
    $(".modal-image").html($(this).prop('outerHTML'));
    $(".modal-image").fadeIn(500);
    $("body").addClass("is-noscroll");
  });
  $(".modal-image, .modal-image img").click(function() {
    $(".modal-image").fadeOut(500);
    $("body").removeClass("is-noscroll");
  });
});




// アーカイブ
$(function () {
  $(".js-accordion__box .js-accordion__month").css(
    "display",
    "block"
  );
  $(".js-accordion__box .js-accordion__year").addClass("is-open");
  $(".js-accordion__year").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});

// faq
jQuery(function ($) {
  $('.js-faq-question').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-open');
  });
});

// バリデーション
$(document).ready(function () {
  $("#js-form").validate({
    rules: {
      name: {
        required: true,
      },
      mail: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
      },
      "course": {
        required: true,
      },
      message: {
        required: true,
      },
      "agree": {
        required: true,
      },
    },
    errorPlacement: function (error, element) {
      if (error.text() !== "") {
        if ($("#form__error").length == 0) {
          // エラーメッセージが存在しない場合、挿入
          $("<p id='form__error'></p>").html("※必須項目が入力されていません。入力してください。").insertBefore($(".form__list .form__item:first-child"));
        } else {
          // エラーメッセージが既に存在する場合、更新
          $("#form__error").html("※必須項目が入力されていません。入力してください.").show();
        }
      } else {
        // エラーメッセージが空の場合、非表示にする
        $("#form__error").empty().hide();
      }
    },
    submitHandler: function (form) {
      // フォームがバリデーションを通過した場合の処理を記述
      form.submit();
    },
  });
});


// タブメニューのクリック時の処理（jQuery）
$('.js-tab-menu').on('click', function () {
  const number = $(this).data('number');

  // タブメニューのクラスを切り替える
  $('.js-tab-menu').removeClass('is-active');
  $(this).addClass('is-active');

  // タブコンテンツのクラスを切り替える
  $('.js-tab-content').removeClass('is-active');
  $('#' + number).addClass('is-active');
});

// URLから 'tab' パラメータの値を取得
const url = new URL(window.location.href);
const tab = url.searchParams.get('tab');

// タブメニューとコンテンツのクラスを設定
const tabMenus = document.querySelectorAll('.js-tab-menu');
const tabContents = document.querySelectorAll('.js-tab-content');

// 'tab' パラメータが null または未定義の場合、デフォルトで最初のタブをアクティブにする
if (!tab) {
  const firstTabMenu = tabMenus[0];
  const firstTabContent = tabContents[0];

  firstTabMenu.classList.add('is-active');
  firstTabContent.classList.add('is-active');
} else {
  tabMenus.forEach(element => {
    const number = element.getAttribute('data-number');
    element.classList.toggle('is-active', number === tab);
  });

  tabContents.forEach(content => {
    content.classList.toggle('is-active', content.id === tab);
  });
}


});
