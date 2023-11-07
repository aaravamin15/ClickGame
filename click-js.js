
document.getElementById("start").addEventListener("click", start);

document.getElementById("target").addEventListener("click", DotClicked);
let dotsclicked = 0;
//starts when start button is clicked

function timerSteps() {
	// code 
   const e = document.getElementById("timer");
   const e2 = e.innerHTML.split(" seconds remaining");
   console.log(e2);
   const e3 = e2[0].split("timer: ");
   console.log(e3);
   
   var x = parseInt(e3[1]) - 1;

   console.log(x);
   e.innerHTML = 'timer: ' + x + ' seconds remaining';
}
 
  
function start(){
      var gamestarted = true;
      var e = document.getElementById("target");
         //set a timer variable & interval
         
         var intervalt = setInterval(timerSteps, 1000);
         setTimeout(() => clearInterval(intervalt), 30 * 1000);

         play(); 
         var interval = setInterval(play, 3000);
         setTimeout(() => stop(interval), 30000); // whats the difference between 10* 1000 and this 
         
         //testing the interval and timeout:
        /*var intervalId = setInterval(function(){ 
            console.log("Hello every 5 seconds!"); 
        }, 5000);
        //stop the interval after 10 seconds
       setTimeout(function(){
            clearInterval(intervalId); 
        }, 10000)*/
        //this worked
        /* var intervalId2 = setInterval(function(){
         console.log("log2");
        }, 3000);
        setTimeout(function(){
         clearInterval(intervalId2);
        }, 10000); */
        //observation: they both ran at the same time and stopped with the timeout func
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
   
   var intervalg = setInterval(grow, 300);
   setTimeout(()=> 
   { clearInterval(intervalg);
      var intervals = setInterval(shrink, 300);
      setTimeout(() => clearInterval(intervals), 1500);
   }, 1500);
   // setTimeout(()=> setInterval(() => shrink(intervalg), 300), 1500);
   /*setTimeout(function stopGrow(){
      clearInterval(intervalg);
   }, 1000);*/
   //this just made it flicker between expanding and shrinking:
   
   /*setTimeout(function stopGrow(intervalg){
      clearInterval(intervalg);
   }, 1000);

   //var intervalg = setInterval(grow, 100);
   var intervals = setInterval(shrink, 100);
   setTimeout(function stopShrink(intervals){
      clearInterval(intervals)
   }, 1000);*/

   
   /*setTimeout(function stop(interval){
      clearInterval(interval)
   }, 1500);*/
   //is this right?: 
   //setTimeout(changeSizeSmaller(interval), 1500);
   
   //var interval2 = setInterval(changeSizeSmaller, 100);
}
// set amount of time to grow larger when they appear & time to shrink until they disappear
/*function stopChange(interval){
   clearInterval(interval);
}*/

function grow(){
   var e = document.getElementById("target");
   //something isnt working here 
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
   console.log("growing");
}

function shrink(){
   var e = document.getElementById("target");
   //something isnt working here 
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
   console.log("shrinking");
}

// function that ads to a counter everytime the dot is clicked
function DotClicked(){
   document.getElementById("target").style.display = "none";
   console.log("invisible");
   dotsclicked++;
   
}
// end screen- called when t h timer runs out (printing counter, play again button, etc)
function stop (interval){
   //when i added this it stopped showing up (there is something wrong with the timeout functions)
   clearInterval(interval);
   console.log("stopped");
   //var accuracy = numClicks/numTargets; 
   //var percentage = accuracy * 100 + '%';
   //clearInterval(interval);
   var accuracy = numClicks/numTargets; 
   var percentage = accuracy * 100 + '%';
   document.getElementById("start").style.display = 'block';
   document.getElementById('player-accuracy').textContent = accuracy;
   document.getElementById('targets-hit').textContent = dotsclicked;
   //print this out in a div that says how many targets were clicked & the percentage

}

