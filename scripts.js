jQuery(document).ready(function($) {
    $("textarea").each(function () { // textarea auto-resize
        console.log('test');
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
      }).on("input", function () {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });
});