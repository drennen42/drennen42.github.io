$(document).ready(function(){
  $('.summary-btn').on("click", function(e){
    e.preventDefault();
    $(".summary").toggle();
    $(".sections > div:not(.summary)").hide();
    // $(".summary").toggle();
  });

  $('.experience-btn').on("click", function(e){
    e.preventDefault();
    $(".experience").toggle();
    $(".sections > div:not(.experience)").hide();
  });

  $('.education-btn').on("click", function(e){
    e.preventDefault();
    $(".education").toggle();
    $(".sections > div:not(.education)").hide();
  });

  $('.employment-btn').on("click", function(e){
    e.preventDefault();
    $(".employment").toggle();
    $(".sections > div:not(.employment)").hide();
  });

  $('.skills-btn').on("click", function(e){
    e.preventDefault();
    $(".skills").toggle();
    $(".sections > div:not(.skills)").hide();
  });

$('.projects-btn').on("click", function(e){
    e.preventDefault();
    $(".projects").toggle();
    $(".sections > div:not(.projects)").hide();
  });
})