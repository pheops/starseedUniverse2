
let sun;
let cam;

let sunTexture;
var textures = [];

var totalTextures = 805;
var angle = 0;
var loading = true;
var counter = 0;

// Because of the asynchronous nature of file loading in JavaScript, we
// have to load the images in p5.js' preload() instead of in setup().
// function preload() {


//  //sunTexture = loadImage(random(textures));//loadImage('data/starseed248.png');

//     for (let i = 0; i < 329; i++){
//     textures[i] = loadImage('data/starseed-' + i +'.png')

//   }

 
// }


function preload() {
  song = loadSound("logo/modular.mp3");
}


function Texture(filename) {
  loadImage(filename, texLoaded);
  //loadSound('logo/modular.mp3');
  function texLoaded(tex) {
    //console.log(filename);
    textures.push(tex);
    //textures[index] = sound;
    counter++;
    if (counter == totalTextures) {

      loading = false;
      sun = new Planet(40, 0, 0, random(textures));
      sun.spawnMoons(textures.length, 10);

    }
  }
}

function setup() {
  for (let i = 0; i < totalTextures; i++){
     Texture('data/starseed-' + i +'.png');
      }

  let canvas = createCanvas(600, 600, WEBGL);

  canvas.mousePressed(canvasPressed);
  // Disable the context menu on the canvas so the camera can use the right mouse button
  //canvas.elt.oncontextmenu = () => false;

  //cam = createEasyCam({ distance: 700 });

  
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  song.play();
}


function draw() {
 background(0);
 orbitControl();
 ///loading animation
    if (loading) {
    stroke(255);
    noFill();
     
    rect(0, 0, 200, 20);
   rectMode(CENTER);
     rect(0, 0, 590, 590);

    noStroke();
    fill(255);
    var w = (200 * counter) / totalTextures;
    rect(0, 0, w, 20);

    //translate(width / 2, height / 2);
    //rotate(angle);
    //strokeWeight(4);
    //stroke(255);
    //line(0, 0, 100, 0);
    angle += 0.1;
  } else {


  background(0);
  stroke(255);
    noFill();
 rectMode(CENTER);
     rect(0, 0, 590, 590);
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);
  sun.show();
  sun.orbit();

}
}