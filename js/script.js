$(function(){ // Same as document.addEventListener("DOMContentLoaded"..)

//same as document.queruSelector("#navbarToggle").addEventListener("blue")
$("#navbarToggle").blur(function(event){
   var screenwidth = window.innerWidth;
   if(screenwidth < 768){
   	$("#collapsable-nav").collapse('hide');
   }
});

});
