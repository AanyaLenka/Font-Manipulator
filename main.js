noseX=0;
noseY=0;
difference=0;
rightWristX=0;
rightWristY=0;

function setup()
{
video=createCapture(VIDEO);
video.size(500,400);

canvas=createCanvas(500,400);
canvas.position(800,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
background('#FFC0CB');
document.getElementById("square_side").innerHTML = "Width and Height of the Text will be = " + difference + "px";
text("AANYA",noseX,noseY);
textSize(difference);
fill("#FF00FF");
}

function modelLoaded()
{
console.log('PoseNet is Intialized');
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX =  " + noseX + "noseY= "+ noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}