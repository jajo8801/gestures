
// Keep track of xy coords for mouse up and mouse down
var downX = 0;
var downY = 0;

var upX = 0;
var upY = 0;

// Truth values for mouse movement 
var xDir = 0;
var yDir = 0;


$( "#gestureArea" ).mousedown(function(event) {
  console.log( "Mouse down!" );
  $("#gestureResult").text("Mouse Down!");

  // Need to get the XY values!
  downX = event.pageX;
  downY = event.pageY;
});


$( "#gestureArea" ).mouseup(function(event) {
  console.log( "Mouse up!" );
  $("#gestureResult").text("Mouse Up!");

  //Get XY values
  upX = event.pageX;
  upY = event.pageY;

  // Process left/right swipe
  if(upX < downX){ xDir = 0; }
  else if(upX > downX) {xDir = 1; }
  else if(upX == downX) {xDir = -1;}

  // Process up/down swipe
  if(upY < downY){ yDir = 0; }
  else if(upY > downY) { yDir = 1; }
  else if(upY == downY) {yDir = -1;}

  // Check if mouse actually moved
  if (xDir == -1 && yDir == -1) {
    $("#gestureResult").text("No swipes (mouse up)");
  }else{
    if(xDir == -1) {$("#gestureResult").text("No left/right swipe (mouse up)");}
    if(yDir == -1) {$("#gestureResult").text("No up/down swipe (mouse up)");}

    swipe(xDir, yDir);
  }
});


// Process the swipes from above functions
function swipe(xDirection, yDirection){
  // 0 = left
  // 1 = right
  if(xDirection == 1){
    console.log( "Swiped right!" );
    $("#gestureResult").text("Right Swipe");
  }else if (xDirection == 0){
    console.log( "Swiped left!" );
    $("#gestureResult").text("Left Swipe");
  }


  // 0 = up
  // 1 = down
  if(yDirection == 1){
    console.log( "Swiped down!" );
    console.log($("#gestureResult").text);
    document.getElementById('gestureResult').innerHTML += " and swiped down!";
  }else if (yDirection == 0){
    console.log( "Swiped up!" );
    document.getElementById('gestureResult').innerHTML += " and swiped up!";
  }

}
