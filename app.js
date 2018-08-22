var p = ["<audio autoplay> <source src='Audio/Sun and Moon Rival Gladion Remix.mp3' type='audio/mpeg'> </audio>", "<audio autoplay> <source src='Audio/Blend W (320  kbps) (ytformp3.com).mp3' type='audio/mpeg'> </audio>", "<audio autoplay> <source src='Audio/オーバーロードIII OP  Overlord Season 3 Opening Full『MYTH  ROID - VORACITY』(ENG SUB).mp3'> </audio>", "<audio autoplay> <source src='Audio/How Not to Summon a Demon Lord - Ending (HD).mp3' type='audio/mpeg'> </audio>"];
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
        document.getElementById("pop2").innerHTML = "<img class='sagiri2' src='http://iskin.tooliphone.net/themes/16097/10686/preview-256.png'>";
    }

    if(score == 130) {
        document.getElementById("pop3").innerHTML = "<img class='sagiri2' src='https://t00.deviantart.net/lhDcBcQsMgxSnhCEsCpEBD1XoEY=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3400/th/pre/f/2017/120/d/6/wip_2_by_fhilippe124-db7q4hs.png'>";
    }

    if(score == 200) {
        document.getElementById("pop5").innerHTML = "<img class='sagiri2' src='https://pbs.twimg.com/media/C-yHgIkXgAE9MQb.jpg'>";
    }
   
    if(score == 50) {
        i = Math.floor((Math.random() * p.length));
        document.getElementById("musicArea").innerHTML = p[i];
    }
}


//document.getElementById("shop").addEventListener("click", openShop);

//function openShop{

//}