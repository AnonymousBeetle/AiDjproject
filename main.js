Song1 = "";
Song2 = "";

leftwristX = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload()
{
    Song1 = loadSound("Song1.mp3")
    Song2 = loadSound("Song2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center()
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet is initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        ScoreRightWrist = results[0].pose.keypoints[10].score;
        ScoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("ScoreRightWrist = " + ScoreRightWrist + "ScoreLeftWrist = " + ScoreLeftWrist);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY ="+ rightWristY)
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}