$( document ).ready(function() {
    console.log( "ready!" );
    $("#about").hide();

    $("#about-button").click(function(){
      $("#home").hide();
      $("#about").show();
    });

    $("#home-button").click(function(){
      $("#about").hide();
      $("#home").show();
    });

});

