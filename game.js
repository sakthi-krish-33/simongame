
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started= false;
var level=0;



$(document).keypress(function(){
    if(!started)
        {
    $("#level-title").text("Level "+level);
    nextSequence();
    started= true;
    }
    
});

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

   });
   function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
         
        console.log("success");
        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function(){
                nextSequence()},100);
            
        }
    }
    else {
        console.log("wrong");
        var audio2=new Audio("sounds/"+"wrong.mp3");
        audio2.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")},200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
        
    }




}
  


function nextSequence(){
    userClickedPattern=[];
    level=level+1;
    
    $("#level-title").text("Level " + level);


var randomNumber=Math.random();
var randomNumber1=Math.floor(randomNumber*4);
//console.log(randomNumber1);
var randomChosenColor=buttonColors[randomNumber1];
//console.log(randomChosenColor);
gamePattern.push(randomChosenColor);

$("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);



}


function playSound(name){
    
       var audio1=new Audio("sounds/"+ name +".mp3");
       audio1.play();
}
function animatePress(currentColor){
    
        $("#"+currentColor).addClass("pressed");
    
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");},100);
    }
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
    

}

   

