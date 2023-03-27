$(function() {

    let h1 = $('h1');
    h1.on({

        mouseenter: function() {

            $(this).css('color', 'blue');
        },
        mouseleave: function() {
            $(this).css('color', 'red')
        },
        click: function() {
            $(this).css('color', 'yellow')
        }
    })






    

})