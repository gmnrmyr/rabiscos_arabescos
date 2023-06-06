let diamondImages = [];
let diamondDrawImages = [];
let coreTopDrawImages = [];
let coreBottomDrawImages = [];
let relicImages = [];
let ambientImages  = [];
let darkletterbgImages  = [];
let scribbleImages  = [];

let img;
let blacknwhite;

let randomDiamondImage;
let randomDiamondDrawImage;
let randomCoreTopDrawImage;
let randomCoreBottomDrawImage;
let randomRelicImage;
let randomAmbientImage;
let randomDarkletterbgImage;
let randomScribbleImage;

window.$fxhashFeatures = {
    "Core bottom draw variation": 4,
    "Core top draw variation": 5,
    "Diamond draw variation": 5,
    "Relic variation": 0,
    "Ambient variation": 6,
    "Dark letter bg variation": 1,
    "Scribble variation": 0,

    "Relic result": relicImages,
    "Wash": true,

}

function preload() {
  img = loadImage("dissolved_lettering.png");

  for (let i = 0; i <= 7; i++) {
    diamondDrawImages.push(loadImage(`diamond_draw_${i}.png`));
    coreTopDrawImages.push(loadImage(`core_top_draw_${i}.png`));
    coreBottomDrawImages.push(loadImage(`core_bottom_draw_${i}.png`));
    relicImages.push(loadImage(`relic_${i}.png`));
    ambientImages.push(loadImage(`ambient_${i}.png`));
    darkletterbgImages.push(loadImage(`darkletterbg_${i}.png`));
    scribbleImages.push(loadImage(`scribble_${i}.png`));
  }
}

let zoomFactor = 1.1;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  console.log(width);
  console.log(height);
  createCanvas(1639, 4000);
  p5grain.setup();

  let wash = window.$fxhashFeatures["Wash"];
  if (wash) {
    filter(GRAY);
    background(1);
    noStroke();
  }
  fill(100, 100, 1);

  let scribbleVariation = window.$fxhashFeatures["Scribble variation"]
  randomScribbleImage = scribbleImages[floor(random(scribbleVariation))];
  image(randomScribbleImage, 0, 0);

  let darkletterbgVariation = window.$fxhashFeatures["Dark letter bg variation"]
  randomDarkletterbgImage = darkletterbgImages[floor(random(darkletterbgVariation))];
  image(randomDarkletterbgImage, 0, 0);

  let ambientVariation = window.$fxhashFeatures["Ambient variation"]
  randomAmbientImage = ambientImages[floor(random(ambientVariation))];
  image(randomAmbientImage, 0, 0);

  let coreBottomDrawVariation = window.$fxhashFeatures["Core bottom draw variation"]
  randomCoreBottomDrawImage = coreBottomDrawImages[floor(random(coreBottomDrawVariation))];
  console.log("Core bottom draw: " + randomCoreBottomDrawImage);
  image(randomCoreBottomDrawImage, 0, 0, width, height);

  let coreTopDrawVariation = window.$fxhashFeatures["Core top draw variation"]
  randomCoreTopDrawImage = coreTopDrawImages[floor(random(coreTopDrawVariation))];
  image(randomCoreTopDrawImage, 0, 0, width, height);

  let diamondDrawVariation = window.$fxhashFeatures["Diamond draw variation"]
  randomDiamondDrawImage = diamondDrawImages[floor(random(diamondDrawVariation))];
  image(randomDiamondDrawImage, 0, 0, width, height);

  image(img, 0, 0);

  granulateSimple(fxrand() * 1);

  blacknwhite = random(1);
  if (blacknwhite < 0.2) {
    filter(GRAY);
  }


}

function keyPressed() {
  if (keyCode === 83) {
    saveCanvas('export.png');
  }
}

function report(val) {
  if (val !== undefined) {
    console.log(val);
  }
}

function draw() {
  var x1 = random(width);
  var y1 = random(height);

  var x2 = round(x1 + random(fxrand() * -50, fxrand() * 50));
  var y2 = round(y1 + random(fxrand() * -50, fxrand() * 50));

  var w = 150;
  var h = 150;

  set(x2, y2, get(x1, y1, w, h));

    // Add fxpreview here
    fxpreview();
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    loop();
  }
}
