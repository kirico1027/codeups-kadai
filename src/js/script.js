
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

});