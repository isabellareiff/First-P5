//Building functions in P5.js

function setup (){
    createCanvas(800,40)
    createCanvas(800, 600);
    background(100);
}

var pos = 0;
var speed = 2;

function draw (){
    clear();
    background(100);
    // drawing
    fill("black");
    rect(pos, 105, 150, 57, 25) ;
    fill("#0EEAF8");
    rect(pos + 70, 125, 45, 22, 30) ;
    fill("#0EEAF8") ;
    ellipse(pos, 170, 70, 70) ;
    fill("#0EEAF8") ;
    ellipse(pos + 150, 170, 70, 70) ;
    fill("black") ;
    ellipse(pos, 170, 50, 50) ;
    fill("black") ;
    ellipse(pos + 150, 170, 50, 50) ;
    pos+=speed;
    if (pos == 800){
       speed*=-1 ;
    }
    if (pos == 0){
       speed*=-1 ;
    }
    
    textSize(40)
    
    text("Position: " + pos, 30, 35);
    text("Speed: " + speed, 30, 80);
    
}