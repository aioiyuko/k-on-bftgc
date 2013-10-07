/**
 * Ending screen
 */
 
var ending = new Object();

ending.img = new Image();
ending.img_loaded = false;

function ending_init() {
  ending.img.src = "images/backgrounds/empty.png";
  ending.img.onload = function() {ending_onload();};
  redraw = true;
}

function ending_onload() {
  ending.img_loaded = true;
}

function ending_logic() {

}

function ending_render() {

  ctx.drawImage(ending.img, 0, 0, 160*SCALE, 120*SCALE);
  

  bitfont_render("You got the Golden Chocopan!", 80, 15, JUSTIFY_CENTER);
  bitfont_render("The girls enjoyed it", 80, 25, JUSTIFY_CENTER);
  bitfont_render("with tea.", 80, 35, JUSTIFY_CENTER);
  bitfont_render("Their story was told", 80, 55, JUSTIFY_CENTER);
  bitfont_render("for generations.", 80, 65, JUSTIFY_CENTER);
  bitfont_render("Thanks for playing!", 80, 100, JUSTIFY_CENTER);
  bitfont_render("THE END", 80, 110, JUSTIFY_CENTER);
}

