noseX = 0;
nosey = 0;

difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet foi inicializado!');
}

function gotPoses(results)
{
    if(results.length  > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX = " + noseX + "noseY = " + noseY  );
       
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY  = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("rightWristX = " + rightWristX + "leftWristY = " + leftWristY + "difference = " + difference );

    }
}

function draw()
{
     background('cyan');
     document.getElementById("Mírian").innerHTML = "Largura e altura serão =  " +difference+ "px";
     fill ('green');
     stroke ('yellow');
     square(noseX, noseY, difference);
}
