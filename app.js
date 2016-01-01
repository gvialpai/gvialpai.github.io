$( document ).ready(function() {
    console.log( "ready!" );
    $("#about").hide();
    $("#projects").hide();

    $("#home-button").click(function(){
      $("#home").show();
      $("#about").hide();
      $("#projects").hide();
    });

    $("#about-button").click(function(){
      $("#about").show();
      $("#home").hide();
      $("#projects").hide();

    });

    $("#projects-button").click(function(){
      $("#projects").show();
      $("#home").hide();
      $("#about").hide();

    });

    $("#kinvolvedbutton").click(function(){
        $("#kinvolvedModal").modal();
    });

    $("#tcbutton").click(function(){
        $("#tcModal").modal();
    });

});

