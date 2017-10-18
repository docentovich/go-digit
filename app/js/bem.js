(function($){

  /* БЭМ процедурный стиль */
  var block = '';
  function _b(name){
    if(name != undefined)
      block = name;
    return block;
  }
  function _e(name){
    return block + "__" + name;
  }
  function _m(el, name){
    return block + "__" + el + "_" + name;
  }

  function _bm( name){
    return block + "_" + name;
  }

  function b(name){
    return "." + _b(name);
  }
  function e(name){
    return "." + _e(name);
  }
  function m(el, name){
    return "." + _m(el, name);
  }

  function bm(name){
    return "." + _bm(name);
  }
  /* БЭМ процедурный стиль */


  /* БЭМ обьектный стиль  */
  function bem(block, obj){

    

    this.b = function(name){
      return "." + this._b(name);
    }

    this.e = function(name){
      return "." + this._e(name);
    } 

    this.m  = function(name, el){
      return "." + this._m(name, el);
    }

    this.bm = function( name ){
      return "." + this._bm(name);
    }


    this._b = function(name){
      if(name != undefined)
        this.block = name;
      return this.block;
    }

    this._e = function(name){

      if(name == undefined)
        name = this.element;

      this.element = name;
      return this.block + "__" + name;
    }

    this._m = function(name, el){
      if(el == undefined || el == "" || el == null) el =  this.element;
      return this.block + "__" + el + "_" + name;
    }

    this._bm = function( name){
      return this.block + "_" + name;
    }

    /* переключение модификатора юлока*/
    this.toggleBm = function(name){
      this.$block.toggleClass(this._bm(name));
      return this;
    }

    /* переключение модификатора юлока*/
    this.addBm = function(name){
      this.$block.addClass(this._bm(name));
      return this;
    }

    /* переключение модификатора юлока*/
    this.removeBm = function(name){
      this.$block.removeClass(this._bm(name));
      return this;
    }

    /* переключение модификатора элемента*/
    this.toggleM = function(element, name){
      this.$block.find(this.e(element)).toggleClass(this._m(name));
      return this;
    }

    /* получаем новй экземпляр бэм с одним родителем */
    this.single = function(obj){

      var $obj;

      if($(obj).is(this.b())){
        $obj = $(obj);//если получили блок то его использем 
      }else{
        $obj = $(obj).parents(this.b()); //если получили элмент то находим блок
      }
      return new bem(this.block, $obj); 
    }

    /* возвращем текующую коллекю локов */
    this.JQb = function(){
      return this.$block;
    }

    /* получаем элемент*/
    this.JQe = function(name){
      var sel = this.b() + "__" + name;
      return this.$block.find(sel); 
    }

    /* бэм микс */
    this.mix = function(element, block){
      if(block == undefined || block == null) block = element;
      var sel = this.b() + "__" + element;
      var $element = this.$block.find(sel); 
      var $obj = $element.find("."+block);
      return new bem(block, $obj);
    }

    /* биндим класс на дом боьекты 
    bindBem(){
      var self = this;
      this.$block.each(function(){
        this['bem'] = self.single(this);
      });
    }
    */

    //construct
    this.block = block;
    if(obj == null || obj == undefined){
      this.$block = $(this.b()); //все блоки
    }
    else 
      this.$block = obj; //единственный обьект в клооекции
    //-construct

  };
  /* БЭМ обьектный стиль */

})(jQuery)
