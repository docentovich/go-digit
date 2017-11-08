var $portfolioBtn = $(".portfolio__btn"),
    $portfolioList = $(".portfolio__list"),
    $portfolioItem = $(".portfolio__item"),
    $portfolioLink = $portfolioItem.find('a'),
    $portfolioItemVisible = $(".portfolio__item:first-child");

// $portfolioBtn.on('click', function() {
//     if ($portfolioList.hasClass('active')) {
//         $portfolioLink.animate({'padding-top': '0'}, 500);
//         $portfolioList.removeClass('active');
//         $( this ).html('Показать все проекты');
//     } else {
//         $portfolioLink.animate({'padding-top': '66%'}, 500);
//         $portfolioList.addClass('active');
//         $( this ).html('Показать меньше');
//     }
// });

var itemHeight;
var maxHeight;

function windowSize(){
    if ($(window).width() <= '479'){
        itemHeight = $portfolioItem.outerHeight(true);
        maxHeight = (itemHeight * 4) + 'px';
        $portfolioList.css("height", maxHeight);
        console.log(maxHeight);

    } else {
        itemHeight = $portfolioItem.outerHeight(true);
        maxHeight = (itemHeight * 2) + 'px';
        $portfolioList.css("height", maxHeight);
        console.log(maxHeight);
    }
}
$(window).on('load resize', windowSize);



$portfolioBtn.on('click', function() {

    if ( $portfolioList.hasClass("expanded") ) {

        $portfolioList.removeClass("expanded");

        $portfolioList.animate(
            {height: maxHeight}, 500
        );

        $( this ).html('Показать все проекты');

    } else {

        $portfolioList.addClass("expanded");

        $portfolioList.animate({
            height: $portfolioList.get(0).scrollHeight
        }, 500, function(){
        $(this).height('auto')});

        $( this ).html('Показать меньше');

    }
});
