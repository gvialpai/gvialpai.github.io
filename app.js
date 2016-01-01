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

    $("#mitbutton").click(function(){
        $("#mitModal").modal();
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

