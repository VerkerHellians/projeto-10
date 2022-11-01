var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var samState="inplace";
  boundary1 = createSprite(190,45,420,153);
  boundary2 = createSprite(190,335,420,153);
  var obstaculos = createGroup();
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.velocityY=10;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.velocityY=10;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.velocityY=-10;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.velocityY=-10;
  
 
//adicione velocidade para fazer o carro se mover.

createEdgeSprites();
function draw() {
   background("black");
  
  strokeWeight(0);
  fill("white");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,62,140);
 
 //grupo-----------------------
  obstaculos.add(car1);
  obstaculos.add(car2);
  obstaculos.add(car3);
  obstaculos.add(car4);
 //----------------------------
 
 if (samState==="movingright") {
   sam.velocityX=5;
 }
 if (samState==="inplace") {
   sam.velocityX=0;
 }
  
  if (keyDown("d"))
{
  samState="movingright";
}
else { 
  samState="inplace";
}
 obstaculos.bounceOff(boundary1);
 obstaculos.bounceOff(boundary2);
  
if (sam.isTouching(obstaculos)){
  sam.x=20;
  sam.y=190;
  life=life+1;
}
  
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
 drawSprites();
 fill("white");
  textSize(24);
  textFont("Arial Black");
  text("Mortes: " + life,140,80);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
