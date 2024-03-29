jQuery(document).ready(function($) {
    $("textarea").each(function () { // textarea auto-resize
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
      }).on("input", function () {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });

    $('.collapse').on('shown.bs.collapse', function(e) { // position correction on open accordion item
      var $card = $(this).closest('.accordion-item');
      var $open = $($(this).data('parent')).find('.collapse.show');
      
      var additionalOffset = 0;
      if($card.prevAll().filter($open.closest('.accordion-item')).length !== 0)
      {
            additionalOffset =  $open.height();
      }
      $('html,body').animate({
        scrollTop: $card.offset().top - additionalOffset - 15
      }, 150);
    });

    var scrollTop = document.getElementById("scrollTop"); // scroll to top
    var instamobile = document.getElementById("instamobile"); // insta icon on mobile
    function scrollfunction() {
        if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollTop.style.display = "block";
            instamobile.style.display = "block";
        } else {
            scrollTop.style.display = "none";
            instamobile.style.display = "none";
        }
    }

    scrollTop.addEventListener("click", function(){
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    })

    window.onscroll = function(){
        scrollfunction()
        scrollinsta();
    };

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 190) {
            instamobile.classList.add('instaabsolute');
            instamobile.classList.remove('instafixed');
        } else {
            instamobile.classList.add('instafixed');
            instamobile.classList.remove('instaabsolute');
        }
     });

});