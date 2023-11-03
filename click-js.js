document.getElementById("target").style.display = 'none';
document.getElementById("start").addEventListener("click", start);

//starts when start button is clicked
function start(){
      var gamestarted = true;
        var e = document.getElementById("target");
        //e.style.display = 'block';
         //set a timer variable 
         console.log(interval)
         var interval = setInterval(play, 1500);
         setTimeout(stop(interval), 10 * 1000);
}

// function to make the dot appear/disapear every 5 secs
const getRandom = (min, max)  => Math.floor(Math.random()*(max-min+1)+min);

function play(){
   
   var e = document.getElementById("target");
   e.style.height = '25px';
   e.style.width = '25px';
   e.style.display = 'none';
   var dotsclicked = 0;
   var y = getRandom(10, 90);
   var x = getRandom(10, 90);
   //console.log(y);
   //console.log(x);

   e.style.left= x + 'vh';
   e.style.top = y + 'vh';
   e.style.display = 'block';

   var interval = setInterval(changeSize, 700);
   //is this right?: 
   setTimeout(function stopChange(interval){
      clearInterval(interval);
   }, 1500);
   //  !! CALL THE CHANGE SIZE FUNCTION HERE !!
}
// set amount of time to grow larger when they appear & time to shrink until they disappear
function stopChange(interval){
   clearInterval(interval);
}

function changeSize(){
   var e = document.getElementById("target");
   //something isnt working here 
   var height = e.style.height.substring(0,e.style.height.length-2);
   console.log(height);
   parseInt(height) += 25
   e.style.height = parseInt(height) + 'px'; 
   console.log(height);

   var width = e.style.width.substring(0,e.style.width.length-2);
   console.log(width);
   parceInt(width) += 25;
   e.style.width = parseInt(width) + 'px'; 
   console.log(width);

   //e.style.height = '50px';
   //e.style.width += '25px'; 

   //e.style.height = 
}
// function that ads to a counter everytime the dot is clicked
function DotClicked(){
   dotsclicked++;
   document.getElementById("target").style.transform = "scale(0)";
}
// end screen- called when t h timer runs out (printing counter, play again button, etc)
function stop (){
   var accuracy = numClicks/numTargets; 
   var percentage = accuracy * 100 + '%';
   clearInterval(interval);
   document.getElementById("start").style.display = 'block';
   document.getElementById('player-accuracy').textContent = accuracy;
   //print this out in a div that says how many targets were clicked & the percentage

}

