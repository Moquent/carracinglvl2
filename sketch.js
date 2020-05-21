var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();

    var ref = database.ref("ball/position");
    ref.on("value", readpos);
}

function draw(){
    background("white");

    if(position != undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-4,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(4,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-4);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+4);
        }
        drawSprites();
    }
    
}

function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;

    database.ref("ball/position").set({
        'x': position.x + x,
        'y': position.y + y
    })
}

function readpos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}