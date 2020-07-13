//Create variables here
var dog,happydog,database,foodS,foodstock;
var dogimg,happydogimg;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage("dog",dogimg);
  dog.addImage("happydog",happydogimg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeImage("happydog",happydogimg);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
