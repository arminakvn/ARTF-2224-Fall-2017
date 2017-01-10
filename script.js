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

$(document).ready(function(){
    $("#resources-btn").on('click', function(){
        $(".page").hide(); 
        $("#resources-pg").show();
})});



// var taskInput = document.getElementById('newEntry');
// var addTaskButton = document.getElementById('addEntryButton');
// var incompleteTasks = document.getElementById('listEntry');


// var addTask = function () {
//     var text = taskInput.value;
//     var li = document.createElement('li');
//     li.innerHTML = text + " " + "<button class='delete'>X</button>";
//     incompleteTasks.appendChild(li);
//     taskInput.value = "";

// }


    



// addTaskButton.onclick = addTask;