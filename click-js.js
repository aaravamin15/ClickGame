
document.getElementById("start").addEventListener("click", start);
document.getElementById("startAgain").addEventListener("click", start);
document.getElementById("target").addEventListener("click", DotClicked);
let dotsclicked = 0;

//timer function:
function timerSteps() {
   const e = document.getElementById("timer");
   const e2 = e.innerHTML.split(" seconds remaining");
   const e3 = e2[0].split("timer: ");
   
   var x = parseInt(e3[1]) - 1;

   e.innerHTML = 'timer: ' + x + ' seconds remaining';
}
 
//start function (starts when start button is clicked)
function start(){

   document.getElementById("timer").innerHTML = "timer: 30 seconds remaining";
   var gamestarted = true;
   var e = document.getElementById("target");
         //set a timer variable & interval
         var intervalt = setInterval(timerSteps, 1000);
         setTimeout(() => clearInterval(intervalt), 30 * 1000);

         play(); 
         var interval = setInterval(play, 1500);
         setTimeout(() => stop(interval), 30000); 
}

// generates random function 
const getRandom = (min, max)  => Math.floor(Math.random()*(max-min+1)+min);

//func that generates position of target and calls the grow and shrink functions
function play(){
   var e = document.getElementById("target");
   e.style.display = 'none';
   e.style.height = '25px';
   e.style.width = '25px';
   var dotsclicked = 0;
   var y = getRandom(10, 90);
   var x = getRandom(10, 90);

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

//func to make target grow
function grow(){
   var e = document.getElementById("target");
   var height = e.style.height.substring(0,e.style.height.length-2);
   height = parseInt(height);
   height += 5;
   e.style.height = height + 'px'; 

   var width = e.style.width.substring(0,e.style.width.length-2);
   width = parseInt(width);
   width += 5;
   e.style.width = width + 'px'; 
}

//shrinks the target
function shrink(){
   var e = document.getElementById("target");
   var height = e.style.height.substring(0,e.style.height.length-2);
   height = parseInt(height);
   height -= 5;
   e.style.height = height + 'px'; 

   var width = e.style.width.substring(0,e.style.width.length-2);
   width = parseInt(width);
   width -= 5;
   e.style.width = width + 'px'; 
}

// function that ads to a counter everytime the dot is clicked
function DotClicked(){
   document.getElementById("target").style.display = "none";
   dotsclicked++;
}

// end screen-called when timer runs out 
function stop (interval){
   clearInterval(interval);
   document.getElementById("target").style.display = "none";
   document.getElementById("startAgain").style.display = "block";

   var accuracy = dotsclicked/20; 
   var percentage = accuracy * 100 + '%';

   document.getElementById('player-accuracy').innerHTML =  percentage;
   document.getElementById('targets-hit').textContent =  dotsclicked + "/20";
}

