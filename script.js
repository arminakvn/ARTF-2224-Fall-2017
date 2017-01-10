 $( window ).load(function() {
     $(".page").hide(); 
     $("#syllabus-pg").show();
   });


$(document).ready(function(){
    $(".nbtn").on('click', function(){
      $(".nbtn").removeClass("active")
})});


$(document).ready(function(){
	$("#schedule-btn").on('click', function(){
    	$(".page").hide(); 
    	$("#schedule-pg").show();
})});


$(document).ready(function(){
	$("#syllabus-btn").on('click', function(){
    	$(".page").hide(); 
    	$("#syllabus-pg").show();
})});

$(document).ready(function(){
	$("#assignments-btn").on('click', function(){
    	$(".page").hide(); 
    	$("#assignments-pg").show();
})});