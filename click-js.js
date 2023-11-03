document.getElementById("target").style.display = 'none';
document.getElementById("start").addEventListener("click", start);




//starts when start button is clicked
function start(){
        var e = document.getElementById("target");
        e.style.display = 'block';
         //set a timer variable 
         console.log(interval)
         var interval = setInterval(play, 1000);
         setTimeout(stop, 10 * 1000);
}

// function to make the dot appear/disapear every 5 secs
const getRandom = (min, max)  => Math.floor(Math.random()*(max-min+1)+min);


function play(){
   
   var e = document.getElementById("target");
   e.style.display = 'none';

   var y = getRandom(10, 90);
   var x = getRandom(10, 90);
   console.log(y);
   console.log(x);

   e.style.left= x + 'vh';
   e.style.top = y + 'vh';
   e.style.display = 'block';

   /*if(e.style.display == 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';*/

}
// set amount of time to grow larger when they appear & time to shrink until they disappear
// function that ads to a counter everytime the dot is clicked
// end screen- called whent eh timer runs out (printing counter, play again button, etc)

