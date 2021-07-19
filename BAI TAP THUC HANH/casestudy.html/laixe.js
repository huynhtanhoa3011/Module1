var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');

var xeimg = new Image ();
var hinhnen = new Image();
var chuongngaivattren = new Image();
var chuongngaivatduoi = new Image();

xeimg.src ="xedua.jpg";
hinhnen.src = "duong.jpg";
chuongngaivattren.src = "ngaivattren.jpg";
chuongngaivatduoi.src = "ngaivatduoi.jpg";

var score = 0;
var khoangcachngaivat = 140;
var khoangcachduoi;

var xe = {
    x : hinhnen.width/5,
    y : hinhnen.height/2
}

var ngaivat = [];
ngaivat[0] = {
    x : canvas.width,
    y : 0
}

function run() {
    context.drawImage(hinhnen,0,0);
    context.drawImage(xeimg,xe.x,xe.y);
    xe.y+=3;
    requestAnimationFrame(run);

}
run ();
