function preload(){

}

function setup(){
    Canvas=createCanvas(500, 500);
    Canvas.position(100, 270);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(50, 450, 80);
    circle(450, 50, 80);
    circle(450, 450, 80);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(90, 40, 320, 20)
    rect(90, 440, 320, 20)
    rect(40, 90, 20, 320)
    rect(440, 90, 20, 320)
}

function take_snapshot(){
    save("image.png");
}
