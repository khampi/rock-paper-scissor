var c=0;
document.getElementById("rock").onclick = function(){
    document.getElementById("rock-hand").style.display = "block";
    document.getElementById("paper-hand").style.display = "none";
    document.getElementById("scissor-hand").style.display = "none";
    c=0

}

document.getElementById("paper").onclick = function(){
    document.getElementById("paper-hand").style.display = "block";
    document.getElementById("rock-hand").style.display = "none";
    document.getElementById("scissor-hand").style.display = "none";
    c=1;
}

document.getElementById("scissor").onclick = function(){
    document.getElementById("scissor-hand").style.display = "block";
    document.getElementById("paper-hand").style.display = "none";
    document.getElementById("rock-hand").style.display = "none";
    c=2

}

const comp = ['assets/rock-hand.png','assets/paper-hand.png','assets/scissors-hand.png']
console.log(comp);
var youScore = 0;
var compScore = 0;
document.onclick = function(){
    var image = document.getElementById("comp-image");
    image.innerHTML = "";
    var index = Math.floor(Math.random() * comp.length);
    var img = document.createElement("img");
    img.src=comp[index];
    image.appendChild(img);
    if(c!=index){
    if(c==1 && index==0){
        youScore++;
        document.getElementById("you").innerHTML = youScore;
    }
    else if(c==2 && index==1){
        youScore++;
        document.getElementById("you").innerHTML = youScore;

    }
    else if(c==0 && index==2){
        youScore++;
        document.getElementById("you").innerHTML = youScore;

    }
    else{
        compScore++;
        document.getElementById("comp").innerHTML = compScore;

    }
    if(youScore == 5 || compScore == 5){
        document.getElementById("imgs").style.display="none";
        document.getElementById("playagain").style.display="block";

        if(youScore==5){
            document.getElementById("result").innerHTML = "You won the game"
        }
        else{
            document.getElementById("result").innerHTML = "You lost the game"

        }
    }

}
}

document.getElementById("playagain").onclick = function() {
    window.open("index.html","_self");
}