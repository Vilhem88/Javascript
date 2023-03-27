$(function () {
  let square = $("#square");

  square.on({
    mouseover: function () {
        console.log(square.css('margin-left'))
      $(this).css("margin-left") == "0px"
        ? $(this).animate({ "margin-left": $(document).width() - $(this).width() }, 4000)
        : $(this).animate({ "margin-left": "0px" }, 1000);
    },
  });
});
