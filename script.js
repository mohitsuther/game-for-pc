let score = 0;
let count = true;
let w1 = document.querySelector(".w1");
let hero = document.querySelector(".hero");
let wilurn = document.querySelector(".wilurn");
wilurn.classList.add("w1");
let gameplayaudio = new Audio("play.mp3");
let gameoveraudio = new Audio("end.mp3");
gameplayaudio.play();

document.onkeydown = function (e) {
if (e.keyCode == "38") {
    hero.classList.add("mover");
    setTimeout(() => {
        hero.classList.remove("mover");
        
    }, 1400)
}
else if (e.keyCode == "37") {
    let hero = document.querySelector(".hero");
    
    let leftL = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hero.style.left = (leftL - 80) + "px";
}
else if (e.keyCode == "39") {
    let hero = document.querySelector(".hero");
    
    let leftL = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hero.style.left = (leftL + 80) + "px";
}
}

setInterval(() => {
    
gameover = document.querySelector(".gameover");


hero = document.querySelector(".hero");
wilurn = document.querySelector(".wilurn");

hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

wx = parseInt(window.getComputedStyle(wilurn, null).getPropertyValue("left"));
wy = parseInt(window.getComputedStyle(wilurn, null).getPropertyValue("top"));

herogap = Math.abs(hx - wx);
wilurngap = Math.abs(hy - wy);


if (herogap < 140 && wilurngap < 210) {
    wilurn.classList.remove("w1");
    gameover.style.visibility = "visible";
    gameplayaudio.pause();
    for(i=0;i<1;i++){

        gameoveraudio.play();
    }
    

    

    document.addEventListener('click',()=>{
        location.reload();
    })
    
}

else if (herogap < 140 && count) {
    
    score++;
    count = false;
    setTimeout(() => {
        count = true;
    }, 1000);
    
    
    speed = parseFloat(window.getComputedStyle(w1, null).getPropertyValue("animation-duration"));
    
    setTimeout(() => {
        if (speed >= 2.6) {
            newspeed = speed - 0.1;
            w1.style.animationDuration = newspeed + "s";
        }
        console.log(newspeed)
    }, 1000)
    
    
    main();
}
}, 100);
function main() {
let scores = document.getElementById("score");
scores.innerHTML = "score is:" + score;

}