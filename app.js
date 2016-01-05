$( document ).ready(function() {
    console.log( "ready!" );
    $("#about").hide();
    $("#projects").hide();
    $("#apps").hide();

    $("#home-button").click(function(){
      $("#home").show();
      $("#about").hide();
      $("#projects").hide();
      $("#apps").hide();
    });

    $(".about-button").click(function(){
      $("#about").show();
      $("#home").hide();
      $("#projects").hide();
      $("#apps").hide();
    });

    $("#apps-button").click(function(){
      $("#apps").show();
      $("#home").hide();
      $("#about").hide();
      $("#projects").hide();
    });

    $("#projects-button").click(function(){
      $("#projects").show();
      $("#home").hide();
      $("#about").hide();
      $("#apps").hide();
    });

    $("#kinvolvedbutton").click(function(){
        $("#kinvolvedModal").modal();
    });

    $("#tcbutton").click(function(){
        $("#tcModal").modal();
    });

    $("#mitbutton").click(function(){
        $("#mitModal").modal();
    });

    $("#bubutton").click(function(){
        $("#buModal").modal();
    });

    $("#mapbutton").click(function(){
        $("#mapModal").modal();
    });

    $("#pebutton").click(function(){
        $("#peModal").modal();
    });

    $("#akbutton").click(function(){
        $("#akModal").modal();
    });

    $("#lphibutton").click(function(){
        $("#lphiModal").modal();
    });

    $("#laglissebutton").click(function(){
        $("#laglisseModal").modal();
    });

    $(function() {
    // OPACITY OF BUTTON SET TO 0%
    $(".roll").css("opacity","0");

    // ON MOUSE OVER
    $(".roll").hover(function () {

    // SET OPACITY TO 70%
    $(this).stop().animate({
      opacity: .7
    }, "slow");
  },

    // ON MOUSE OUT
    function () {

    // SET OPACITY BACK TO 50%
    $(this).stop().animate({
      opacity: 0
    }, "slow");
  });
  });
});

