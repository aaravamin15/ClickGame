document.getElementById("target").style.display = 'none';
document.getElementById("start").addEventListener("click", start);

document.getElementById("target").addEventListener("click", DotClicked);
let dotsclicked = 0;
//starts when start button is clicked
function start(){
      var gamestarted = true;
        var e = document.getElementById("target");
        //e.style.display = 'block';
         //set a timer variable 
         console.log(interval)
         var interval = setInterval(play, 3000);
         setTimeout(stop(interval), 10000); // whats the difference between 10* 1000 and this 
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
   
   var intervalg = setInterval(grow, 100);
   setTimeout(stopGrow(intervalg), 1000);

   //var intervalg = setInterval(grow, 100);
   var intervals = setInterval(shrink, 100);
   setTimeout(stopShrink(intervals), 100);

   
   /*setTimeout(function stop(interval){
      clearInterval(interval)
   }, 1500);*/
   //is this right?: 
   //setTimeout(changeSizeSmaller(interval), 1500);
   
   //var interval2 = setInterval(changeSizeSmaller, 100);
   //  !! CALL THE CHANGE SIZE FUNCTION HERE !!
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
   console.log(width);
}

function shrink(interval){
   clearInterval(interval);
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
   //console.log(width);
}
// function that ads to a counter everytime the dot is clicked
function DotClicked(){
   document.getElementById("target").style.display = "none";
   console.log("invisible");
   dotsclicked++;
   
}
// end screen- called when t h timer runs out (printing counter, play again button, etc)
function stop (){
   //var accuracy = numClicks/numTargets; 
   //var percentage = accuracy * 100 + '%';
   //clearInterval(interval);
   document.getElementById("start").style.display = 'block';
   //print this out in a div that says how many targets were clicked & the percentage

}

