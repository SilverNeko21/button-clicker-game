
var p ;
var score = 0;

document.getElementById("button").addEventListener("click", increments);


function increments(){
    score = score + 1;
    document.getElementById("Number").innerHTML = score;
    console.log(score);
}
 