function preload(){

}

function draw(){
    image(video, 0, 0, 400, 400);
}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function take_snapshot(){
    save("KUNAL RANA.png");
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X :" + results[0].pose.nose.x);
        console.log("Nose Y :" + results[0].pose.nose.y);
    }
}