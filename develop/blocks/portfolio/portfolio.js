$portfolioBtn = $(".portfolio__btn");
$portfolioList = $(".portfolio__list");

$portfolioBtn.on('click', function() {
    $portfolioList.toggleClass('all');
});
