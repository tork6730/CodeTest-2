$(document).ready(function() {
    
    // Bold the first word in each string

    $("#bold p").each(function() {
        var me = $(this);
        me.html(me.text().replace(/(^\w+)/, "<strong>$1</strong>"));
    });

// display message after a one click event

    $("#single").one("click", function() {
        $("<p>This will be displayed only once. </p>").appendTo('#answer');
    });

    // display message after a double click event

    $("#double").dblclick(function() {
        $("<p>This is a double-click event. </p>").appendTo('#answerTwo');
    });

       // change color when button is clicked
    
    $("div").on("click", "button", function(event) {
        $(event.delegateTarget).css("background-color", "pink");
    });


});
