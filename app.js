var p;
var score = 0;

document.getElementById("button").addEventListener("click", increments);


function increments(){
    score = score + 1;
    document.getElementById("Number").innerHTML = score;
    console.log(score);
    if(score == 10) {
        document.getElementById("pop1").innerHTML = "<img class='sagiri2' src='https://data.whicdn.com/images/287156172/large.jpg'>";
    }

    if(score == 70) {
        document.getElementById("pop2").innerHTML = "<img class='sagiri2' src='https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1'>";
    }
   
    if(score == 50) {
        document.getElementById("musicArea").innerHTML = " <audio autoplay> <source src='Audio/Sun and Moon Rival Gladion Remix.mp3' type='audio/mpeg'> </audio>";
    }
}
