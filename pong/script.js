//update loop
import Ball from "./ball.js"

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time){
  if(lastTime != null) { 
    const delta = time - lastTime;
    ball.update(delta)
    //update code

  }

    lastTime = time;
  window.requestAnimationFrame(update);
}
//function gets called when something changes on the screen
window.requestAnimationFrame(update);