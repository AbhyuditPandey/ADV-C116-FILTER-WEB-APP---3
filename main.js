noseX = 0;
noseY = 0;
function preload()
{
 clownnose = loadImage("https://i.postimg.cc/nhXyBSCN/m.png");
}

function setup() 
{
 canvas = createCanvas(300,300) ;
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 posenet = ml5.poseNet(video,modelloded);
 posenet.on('pose' , gotposes);

}

function modelloded()
{
    console.log('posent is initialised');

}


function draw()
{
image(video, 0, 0,300, 300);
fill(255,0,0);
stroke(255,0,0);
image(clownnose,noseX - 10,noseY + 3,40,30);
}

function gotposes(results)
{
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x" + results[0].pose.nose.x );
    console.log("nose y" + results[0].pose.nose.y ); 
  }
}

function take_snapshot(){
    save('Abhyuditp.png');
}