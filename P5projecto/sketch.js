let w = 400;
let h = 600;

function setup (){
    //createCanvas(400,400);
    createCanvas(windowWidth, windowHeight);
    background('red');
}

function draw (){
    //noStroke();
    background(150);
    stroke('blue');
    strokeWeight(40);
    fill('yellow');
    //rect(0,0,100,100);
    //ellipse(100,100,100);
    //ellipse(300,100,100);
    ellipse(width/2,height/2,100);
    ellipse(mouseX,mouseY,100);
    fill(134,31,234);
    noFill();
    stroke(20,mouseX,mouseY);
    strokeWeight(1);
    triangle(mouseX, mouseY,300,300,100,300);
    rectMode(CENTER);
    fill('brown');
    rect(0,0,200,200);

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}