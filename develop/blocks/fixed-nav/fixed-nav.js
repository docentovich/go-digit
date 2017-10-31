jQuery(document).ready(function($) {
  $verticalLink = $(".fixed-nav__link");
  $contentSections = $("section");
  $navigationItems = $(".fixed-nav__item");
  updateNavigation();

  $(window).on("scroll", function() {
    updateNavigation();
  });

  $verticalLink.on("click", function(event) {
    updateNavigation();
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        500
      );
    }
  });

  function updateNavigation() {
    $contentSections.each(function() {
      $this = $(this);
      var activeSection =
          $('.fixed-nav__link[href="#' + $this.attr("id") + '"]').data(
            "number"
          ) - 1;

      if (
        $this.offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $this.offset().top + $this.height() - $(window).height() / 2 >
        $(window).scrollTop()
      ) {
        $navigationItems.eq(activeSection).addClass("is-selected");
      } else {
        $navigationItems.eq(activeSection).removeClass("is-selected");
      }
    });
  }
  updateNavigation();
});
