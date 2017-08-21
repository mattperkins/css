

// JQUERY

$(document).ready(function(){

  $('html').on('click', function(){
    $(this).find('body').append('<div class="box2">');
  });  

  $('.box').on('click', function(){
    $(this).toggleClass('is-paused');
  });

  $('.grey-cube').on('click', function(){
    $(this).toggleClass('clicked');
  });

  $('.dark-green-cube').on('click', function(){
    $(this).toggleClass('yel-cube');
  });

  $('.tom-cube').on('click', function(){
    $(this).toggleClass('cyan-cube');
  });

// ********************************************************
//  PAGE 2
// ********************************************************




});




