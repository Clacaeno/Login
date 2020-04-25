var score = 0;
var width = $("#game").width();
var height = $("#game").height();
var start = $("#target").position();

setInterval(function(){
  var newTop = (Math.random() * height) + start.top;
  var newLeft = (Math.random() * width) + start.left/2;

  $("#target").offset({top: newTop, left: newLeft});

}, 1000)

$("#target").click(function(){
  score += 1;
  $("#score").html("Score: " + score);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', "/score/" + score);
  xhr.send(score);

})