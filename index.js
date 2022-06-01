let button = document.getElementById('btn');
var r1 = Math.floor(Math.random()*6) + 1;
var r2 = Math.floor(Math.random()*6) + 1;
button.addEventListener('click', () => {
    document.querySelector(".d1 img").setAttribute("src","dice"+r1+".png");
    document.querySelector(".d2 img").setAttribute("src","dice"+r2+".png");
    if(r1 > r2){
        document.querySelector(".output").innerHTML = "Player 1 Win";
    }else if(r1 < r2){
        document.querySelector(".output").innerHTML = "Player 2 Win";
    }else{
        document.querySelector(".output").innerHTML = "This is Tye";
    }
});
