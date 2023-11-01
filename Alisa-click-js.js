document.getElementById("target").style.display = 
document.getElementById("start").addEventListener("click", start);

function start(){
        var e = document.getElementById("target");
        if(e.style.display == 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';
}
