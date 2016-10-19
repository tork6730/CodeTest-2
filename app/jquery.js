$(document).ready(function() {

    $("#bold p").each(function() {
        var me = $(this);
        me.html(me.text().replace(/(^\w+)/, "<strong>$1</strong>"));
    });



    $("#single").one("click", function() {
        $("<p>This will be displayed only once. </p>").appendTo('#answer');
    });


    $("#double").dblclick(function() {
        $("<p>This is a double-click event. </p>").appendTo('#answerTwo');
    });

    $("div").on("click", "button", function(event) {
        $(event.delegateTarget).css("background-color", "pink");
    });


});
