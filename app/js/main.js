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

    
        $(document).ready(function() {
    
      var nextScreen = function() {
        var questions = $('.questions');
        var start = $('.start');
        var trigger = start.find('a');
    
        trigger.on('click', function(e) {
          e.preventDefault();
          questions.css('transform', 'translateX(-100%)');
        });
    
      }();
    
      var data_array = [
        ["Сколько сантиметров в метре?","10","1024","100","1000",3],
        ["Перевод слова: Hello","Как дела?","Привет","Ты","Дом",2],
        ["Перевод слова: Dog","Собака","Кошка","Дерево","Сосиска",1],
        ["Сколько месяцев в году?","10","11","12","13",3],
        ["Перевод слова: Tree","Три","Собака","Дерево","Дом",3],
        ["Перевод слова: Wall","Стена","Дом","Башня","Война",1],
      ];
    
      var images_array = [
        "images/q1.jpg", "images/q2.jpg", "images/q3.jpg", "images/q4.jpg", "images/q5.jpg", "images/q6.jpg"
      ]
    
      var currentQuestion = 0;
      var questionsNumber = 1;
      var totalQiestions = data_array.length;
      var result = 0;
    
      var $startBtn =$(".start__btn");
      var $question = $(".questions__title");
      var $image = $(".questions__image img")
      var $number = $(".questions__number");
      var $answer = $(".questions__answer"),
          $answer1 = $("#answer1"),
          $answer2 = $("#answer2"),
          $answer3 = $("#answer3"),
          $answer4 = $("#answer4");
      var final = $('.final');
    
    
    
      $startBtn.on('click', function() {
    
        newQuestion()
    
      });
    
      function newQuestion() {
        $question.html(data_array[currentQuestion][0]);
        $answer1.html(data_array[currentQuestion][1]);
        $answer2.html(data_array[currentQuestion][2]);
        $answer3.html(data_array[currentQuestion][3]);
        $answer4.html(data_array[currentQuestion][4]);
        $number.html(questionsNumber + "/" + totalQiestions);
        $image.attr("src", images_array[currentQuestion]);
      }
    
      $answer.on('click', function(e){
        var $this = $( e.target );
        if (questionsNumber < (totalQiestions) ) {
          console.log(questionsNumber);
          console.log(data_array[currentQuestion][5]);
          questionsNumber++;
          if ($this.attr("rel") == data_array[currentQuestion][5] ) {
    
            console.log("correct")
            result++;
            currentQuestion++;
    
            newQuestion();
    
          } else {
    
            console.log("wrong")
            currentQuestion++;
            newQuestion();
    
          }
    
        } else {
    
          final.css('transform', 'translateX(-100%)');
          console.log(questionsNumber);
          console.log(result);
        }
    
      });
    
    
    
    });
    
        
  });

})(jQuery)