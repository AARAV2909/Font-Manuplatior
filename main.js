left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' ,gotposes);
}
function modelLoaded(){
    console.log("Posenet is operate and laden");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);
        
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw(){
    background('#5196e3');
    document.getElementById("font-size").innerHTML = "Font Size Of The Text Will Be"+difference+"px";
    fill('#FFE787');
    text('Aarav' ,50,400);
}
