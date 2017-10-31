var $portfolioBtn = $(".portfolio__btn"),
    $portfolioList = $(".portfolio__list"),
    $portfolioItem = $(".portfolio__item:nth-of-type(n+5)"),
    $portfolioItemVisible = $(".portfolio__item:first-child");
    $animatedHeight = $portfolioItemVisible.height() + 'px';
$portfolioBtn.on('click', function() {
    $portfolioItem.each(function() {
     var $this = $(this);
     $thisHeight = $this.height();

     $this.animate({height: "toggle"}, 500);

    //  if ($this.css('height') == 0) {
    //         $this.animate({"height": "284px"}, 3000);
    //     }
    //     else {
    //         $this.animate({"height": 0}, 3000);
    //     }
    });
});
