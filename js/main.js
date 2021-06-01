const { STROKE } = require("./p5");

function setup()
{
  createCanvas(innerWidth, innerHeight, WEBGL);
  angleMode(DEGREES);
}
function getRandomRange(min, max)
{
    return Math.random() * (max - min) + min;
}
function draw()
{
    var rotationX = 45;
    var rotationY = 45;
    background(0);
    rotateX(rotationX);
    rotateY(rotationY);

    noFill();
    stroke(255);

    for(var i=0; i<35; i++)
    {
        var r = map(sin(frameCount), getRandomRange(1, 255), getRandomRange(1, 255), getRandomRange(1, 255), getRandomRange(1, 255));
        var g = map(i, 0, 20, 0, 255);
        var b = map(cos(frameCount), getRandomRange(1, 255), getRandomRange(1, 255), getRandomRange(1, 255), getRandomRange(1, 255));
        stroke(r,g,b);
        rotate(frameCount / getRandomRange(40, 80));
        beginShape();
        for(var j=0; j<360; j+=40)
        {
            var rad = i * 8;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = sin(frameCount + i * 10) * 20;

            vertex(x, y, z);
        }
        endShape(CLOSE);
        rotateX(rotationX++);
        rotateY(rotationY++);
    }
}
