// for(var i=0;i<document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="red";
//     });
// }

// Instead of writing all this code we can do the same task by using the jquery

// $("h1").css("color","red");

// console.log($("h1").text());

$("body").keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
});

