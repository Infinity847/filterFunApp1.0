var noseX; var noseY;
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function save_img() {
  
}

function draw() {

} 
function preload() {
  
}
function gotPoses() {
  console.log('Pose net is starting');
  if (results.length > 0) {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
function modelLoaded() {
  console.log('Pose net is working');
}
