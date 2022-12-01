jQuery(document).ready(function($) {
    $("textarea").each(function () { // textarea auto-resize
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
      }).on("input", function () {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });

    $('.collapse').on('shown.bs.collapse', function(e) {
      var $card = $(this).closest('.accordion-item');
      var $open = $($(this).data('parent')).find('.collapse.show');
      
      var additionalOffset = 0;
      if($card.prevAll().filter($open.closest('.accordion-item')).length !== 0)
      {
            additionalOffset =  $open.height();
      }
      console.log('wait');
      $('html,body').animate({
        scrollTop: $card.offset().top - additionalOffset - 15
      }, 150);
    });
});