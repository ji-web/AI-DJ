song="";
left_wristX=0;
left_wristY=0;
right_wristX=0;
right_wristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,600,500);

}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modalLoaded(){
    console.log("PoseNet is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wristX=results[0].pose.leftWrist.x;
        left_wristY=results[0].pose.leftWrist.y;
        console.log("left wrist X="+left_wristX+"left wrist Y="+left_wristY);
        right_wristX=results[0].pose.rightWrist.x;
        right_wristY=results[0].pose.rightWrist.y;
        console.log("right wrist X="+right_wristX+"right wrist Y="+right_wristY);
    }
}

