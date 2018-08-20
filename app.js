var p;
var score = 0;

document.getElementById("button").addEventListener("click", increments);


function increments(){
    score = score + 1;
    document.getElementById("Number").innerHTML = score;
    console.log(score);
    //if(score >= 10) {
        //document.getElementById("pop1").innerHTML = "<img id='sagiri2' src='https://data.whicdn.com/images/287156172/large.jpg'>";
    //}
}
