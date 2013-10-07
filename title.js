/**
 * Title screen
 */
 
var RESTART_BUTTON_POS = {x:128, y:100, w:20, h:20};

var title = new Object();

title.img = new Image();
title.img_loaded = false;
title.button_img = new Image();
title.button_loaded = false;

function title_init() {
  title.img.src = "images/backgrounds/title.png";
  title.img.onload = function() {title_onload();};
  title.button_img.src = "images/interface/action_buttons.png";
  title.button_img.onload = function() {title_button_onload();};

  redraw = true;
}

function title_onload() {
  title.img_loaded = true;
}

function title_button_onload() {
  title.button_loaded = true;
}

function title_checkuse(check_pos) {

  // option 1: mouse click
  if (pressing.mouse && !input_lock.mouse && isWithin(mouse_pos, check_pos)) {
	input_lock.mouse = true;
    return true;
  }

  return false;
}

function title_logic() {
  if(title_checkuse(RESTART_BUTTON_POS)){
     
     title_start();
avatar_reset()
  }else{
     // move past title screen by clicking or pressing the action button
     if (pressing.mouse && !input_lock.mouse) {  
       input_lock.mouse = true;
	
    	   if (avatar_continue) title_continue();
	   else title_start();
	
     }
     else if (pressing.action && !input_lock.action) {
       input_lock.action = true;

	if (avatar_continue) title_continue();
	else title_start();

     }
  }
}

function title_render() {

  if (!bitfont.loaded || !title.img_loaded || !title.button_loaded) {
    redraw = true;
	return;
  }

  ctx.drawImage(title.img, 0, 0, 160*SCALE, 120*SCALE);
  
  if (avatar_continue) {
    bitfont_render("[ Continue ]", 80, 80, JUSTIFY_CENTER);
  }
  else {
    bitfont_render("[ Start ]", 80, 80, JUSTIFY_CENTER);
  }
  
  title_render_button(8, RESTART_BUTTON_POS);

  bitfont_render("Battle for the", 80, 43, JUSTIFY_CENTER);
  bitfont_render("Golden Chocopan", 80, 53, JUSTIFY_CENTER);
  bitfont_render("by aioiyuko", 80, 100, JUSTIFY_CENTER);
  bitfont_render("2013  GPLv3", 80, 110, JUSTIFY_CENTER);
}

function title_start() {
  gamestate = STATE_CHARACTER;

  redraw = true;
}

function title_continue() {
  gamestate = STATE_EXPLORE;
  redraw = true;
}

function title_render_button(button_id, pos) {
  if (button_id == 0) return;

  ctx.drawImage(
    character.button_img,
    (button_id-1) * BUTTON_SIZE * PRESCALE,
    0,
    BUTTON_SIZE * PRESCALE,
    BUTTON_SIZE * PRESCALE,	
    (pos.x + BUTTON_OFFSET) * SCALE,
    (pos.y + BUTTON_OFFSET) * SCALE,
    BUTTON_SIZE * SCALE,
    BUTTON_SIZE * SCALE
  );
}
