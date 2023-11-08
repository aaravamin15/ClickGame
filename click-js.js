
document.getElementById("start").addEventListener("click", start);

document.getElementById("target").addEventListener("click", DotClicked);
let dotsclicked = 0;
//starts when start button is clicked

function timerSteps() {
   const e = document.getElementById("timer");
   const e2 = e.innerHTML.split(" seconds remaining");
   console.log(e2);
   const e3 = e2[0].split("timer: ");
   console.log(e3);
   
   var x = parseInt(e3[1]) - 1;

   //console.log(x);
   e.innerHTML = 'timer: ' + x + ' seconds remaining';
}
 
  
function start(){
      var gamestarted = true;
      var e = document.getElementById("target");
         //set a timer variable & interval
         var intervalt = setInterval(timerSteps, 1000);
         setTimeout(() => clearInterval(intervalt), 30 * 1000);

         play(); 
         var interval = setInterval(play, 1500);
         setTimeout(() => stop(interval), 30000); 
}

// function to make the dot appear/disapear every 5 secs
const getRandom = (min, max)  => Math.floor(Math.random()*(max-min+1)+min);

function play(){
   var e = document.getElementById("target");
   e.style.display = 'none';
   e.style.height = '25px';
   e.style.width = '25px';
   var dotsclicked = 0;
   var y = getRandom(10, 90);
   var x = getRandom(10, 90);
   //console.log(y);
   //console.log(x);

   e.style.left= x + 'vh';
   e.style.top = y + 'vh';
   e.style.display = 'block';
   
   var intervalg = setInterval(grow, 50);
   setTimeout(()=> 
   { clearInterval(intervalg);
      var intervals = setInterval(shrink, 50);
      setTimeout(() => clearInterval(intervals), 750);
   }, 750);

}

function grow(){
   var e = document.getElementById("target");
   var height = e.style.height.substring(0,e.style.height.length-2);
   //console.log(height);
   height = parseInt(height);
   height += 5;
   e.style.height = height + 'px'; 
   console.log(height);

   var width = e.style.width.substring(0,e.style.width.length-2);
   //console.log(width);
   width = parseInt(width);
   width += 5;
   e.style.width = width + 'px'; 
   //console.log("growing");
}

function shrink(){
   var e = document.getElementById("target");
   var height = e.style.height.substring(0,e.style.height.length-2);
   //console.log(height);
   height = parseInt(height);
   height -= 5;
   e.style.height = height + 'px'; 
   //console.log(height);

   var width = e.style.width.substring(0,e.style.width.length-2);
   //console.log(width);
   width = parseInt(width);
   width -= 5;
   e.style.width = width + 'px'; 
   //console.log("shrinking");
}

// function that ads to a counter everytime the dot is clicked
function DotClicked(){
   document.getElementById("target").style.display = "none";
   dotsclicked++;
}
// end screen-called when timer runs out 
function stop (interval){
   clearInterval(interval);
   document.getElementById.style.display = "block";
   //console.log("stopped");
   var accuracy = dotsclicked/20; 
   var percentage = accuracy * 100 + '%';
   
  
      //print this out in a div that says how many targets were clicked & accuracy
   document.getElementById('player-accuracy').innerHTML =  percentage;
   document.getElementById('targets-hit').textContent =  dotsclicked + "/20";
   


}

