$(document).ready(function(){
  $('.summary-btn').on("click", function(e){
    e.preventDefault();
    console.log("Summary Clicked");
    $(".sections > div").hide();
    $(".summary").toggle();
  });

  $('.experience-btn').on("click", function(e){
    e.preventDefault();
    console.log("Experience Clicked");
    $(".sections > div").hide();
    $(".experience").toggle();
  });

  $('.education-btn').on("click", function(e){
    e.preventDefault();
    console.log("Education Clicked");
    $(".sections > div").hide();
    $(".education").toggle();
  });

  $('.employment-btn').on("click", function(e){
    e.preventDefault();
    console.log("Employment Clicked");
    $(".sections > div").hide();
    $(".employment").toggle();
  });

  $('.skills-btn').on("click", function(e){
    e.preventDefault();
    console.log("Skills Clicked");
    $(".sections > div").hide();
    $(".skills").toggle();
  });

$('.projects-btn').on("click", function(e){
    e.preventDefault();
    console.log("Projects Clicked");
    $(".sections > div").hide();
    $(".projects").toggle();
  });
})