(function($){
  /* ---------набор функций--------------- */

  //автоувеличение ширины инпута
  function resizeInput() {
    var l =  $(this).val().length
    $(this).css('width', (l*16)+3);
  }
  //автоувеличение ширины инпута

  //получить ральный верхний левый угол обьекта в рекурсии
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return {
      top: top,
      left: left
    };
  }; 
  //получить ральный верхний левый угол обьекта в рекурсии

  /* биндим контекст */
  function bind(func, context) { // первое перменная - функция, второе контекст
    return function() { // возвращаем анаонимную функцию, при ее вызове выоветься func.apply с уже имеющимя контекстом из переменной context
      return func.apply(context, arguments); //arguments любое кол во аргументов. такой вызов свяжет функцию с ранее переданным аргументом
    };
  }

  /* ---------ннабор функций---------н */



  $(document).ready(function(){
    $("body").removeClass("pageload");

    //scroll-to  - прокрутчик
    $(".scroll-to").click(function() {
      var id = $(this).attr("rel");
      var to = $("#"+id).offset().top-10;
      $('html, body').animate({
        scrollTop: to
      }, 500);
    });

    //f-ajax   - отправка форм
    $('.f-ajax').on('submit', function(event){
      event.preventDefault();
      var $form = $(this);

      var data = $form.serialize();
      data['token'] = "tnbm567sgfg4556sdfDSg";

      $.ajax({
        url: $form.attr("action"),
        type: 'POST',
        data: '',
        success: function(result) {
          if(result == "OK"){
            alert("Заявка отправлена!");       
          }
          else
            alert("Произошла ошибка!");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert("Произошла ошибка!");
        }
      });
    });

    

    
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

    

    
    

    
    

    
    

    
    
  });

})(jQuery)