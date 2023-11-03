document.getElementById("target").style.display = 'none';
document.getElementById("start").addEventListener("click", start);

//starts when start button is clicked
function start(){
        var e = document.getElementById("target");
        //e.style.display = 'block';
         //set a timer variable 
         console.log(interval)
         var interval = setInterval(play, 1500);
         setTimeout(stop, 10 * 1000);
}

// function to make the dot appear/disapear every 5 secs
const getRandom = (min, max)  => Math.floor(Math.random()*(max-min+1)+min);

function play(){
   
   var e = document.getElementById("target");
   e.style.display = 'none';

   var y = getRandom(10, 90);
   var x = getRandom(10, 90);
   //console.log(y);
   //console.log(x);

   e.style.left= x + 'vh';
   e.style.top = y + 'vh';
   e.style.display = 'block';

   var interval = setInterval(changeSize, 300);
   //is this right?: 
   setTimeout(stop, 1500);
   //  !! CALL THE CHANGE SIZE FUNCTION HERE !!
}
// set amount of time to grow larger when they appear & time to shrink until they disappear

function changeSize(){
   var e = document.getElementById("target");
   //something isnt working here 
   //e.style.height += '25px'; 
   //e.style.height = '50px';
   //e.style.width += '25px'; 

   //e.style.height = 
}
// function that ads to a counter everytime the dot is clicked

// end screen- called when t h timer runs out (printing counter, play again button, etc)
function stop (){
   var accuracy = numClicks/numTargets; 
   var percentage = accuracy * 100 + '%';
   //print this out in a div that says how many targets were clicked & the percentage

}

