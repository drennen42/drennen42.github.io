$(document).ready(function(){

  $(".resume").click(function(){
    $.ajax({url: "Resume", type: "GET", success: function(response) {
      $(".yield").html(response);
      }});
  });
});