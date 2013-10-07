/**
 Character selection screen
 */


var CHARACTER_BUTTON_NONE = 0;

var CHARACTER_BUTTON_POS_OPT0 = {x:15, y:100, w:20, h:20};
var CHARACTER_BUTTON_POS_OPT1 = {x:55, y:100, w:20, h:20};
var CHARACTER_BUTTON_POS_OPT2 = {x:92, y:100, w:20, h:20};
var CHARACTER_BUTTON_POS_OPT3 = {x:128, y:100, w:20, h:20};

var character = new Object();

character.select_pos = CHARACTER_BUTTON_POS_OPT0;
character.button_img = new Image();
character.button_img_loaded = false;
character.option = new Array();
character.background = 4;


for (var i=0; i<4; i++) {
  character.option[i] = new Object();
}

/**** Initialize ***************/
function character_init() {
  character.button_img.src = "images/interface/action_buttons.png";
  character.button_img.onload = function() {character_button_onload();};
}

function character_button_onload() {character.button_img_loaded = true;}


/**** Logic Functions ****/


function character_logic() {
  // use arrows to move select cursor
  character_logic_moveselect();

  // check use options
  if (character.option[0].button != CHARACTER_BUTTON_NONE) {
    if (character_checkuse(CHARACTER_BUTTON_POS_OPT0)) {
      //Select character 0
	//IMAGE ALREADY LOADED
      //info.avatar_img.src = "images/interface/Yui.png";
      //info.avatar_img_loaded = false;
      //info.avatar_img.onload = function() {info_avatar_onload();};
      sounds_play(SFX_CLICK);
      game_start();
    }
  }
  
  if (character.option[1].button != CHARACTER_BUTTON_NONE) {
    if (character_checkuse(CHARACTER_BUTTON_POS_OPT1)) {
	  //Select character 1
      info.avatar_img.src = "images/interface/Ritsu.png";
      info.avatar_img_loaded = false;
      info.avatar_img.onload = function() {info_avatar_onload();};
      sounds_play(SFX_CLICK);
      game_start();
    }
  }

  if (character.option[2].button != CHARACTER_BUTTON_NONE) {
    if (character_checkuse(CHARACTER_BUTTON_POS_OPT2)) {
	  //Select character 2
      info.avatar_img.src = "images/interface/Mio.png";
      info.avatar_img_loaded = false;
      info.avatar_img.onload = function() {info_avatar_onload();};
      sounds_play(SFX_CLICK);
      game_start();
    }
  }

  if (character.option[3].button != CHARACTER_BUTTON_NONE) {
    if (character_checkuse(CHARACTER_BUTTON_POS_OPT3)) {
      //Select character 3
      info.avatar_img.src = "images/interface/Mugi.png";
      info.avatar_img_loaded = false;
      info.avatar_img.onload = function() {info_avatar_onload();};
      sounds_play(SFX_CLICK);
      game_start();
    }
  }

}

function game_start() {
  gamestate = STATE_DIALOG;
  shop_set(3);
  dialog.option[2].msg1 = "Begin the battle";
  redraw = true;
}

// check an action by the button location
function character_checkuse(check_pos) {

  // option 1: mouse click
  if (pressing.mouse && !input_lock.mouse && isWithin(mouse_pos, check_pos)) {
	input_lock.mouse = true;
    return true;
  }

  // option 2: action button
  if (pressing.action && !input_lock.action && character.select_pos == check_pos) {
    input_lock.action = true;
    return true;
  }

  return false;
}

function character_logic_moveselect() {
  //Leftmost position, can move right
  if (character.select_pos == CHARACTER_BUTTON_POS_OPT0) {
    if (pressing.right && !input_lock.right) {
      if (character.option[1].button != CHARACTER_BUTTON_NONE) {
        character.select_pos = CHARACTER_BUTTON_POS_OPT1;
        input_lock.right = true;
        redraw = true;
        return;
      }
    }
  }

  // position 1, can move left or right
  if (character.select_pos == CHARACTER_BUTTON_POS_OPT1) {
    if (pressing.left && !input_lock.left) {
      if (character.option[0].button != CHARACTER_BUTTON_NONE) {
        character.select_pos = CHARACTER_BUTTON_POS_OPT0;
        input_lock.left = true;
        redraw = true;
        return;
      }
    }
    if (pressing.right && !input_lock.right) {
      character.select_pos = CHARACTER_BUTTON_POS_OPT2;
      input_lock.right = true;
      redraw = true;
      return;     
    }
  }
  
    // position 2, can move left or right
  if (character.select_pos == CHARACTER_BUTTON_POS_OPT2) {
    if (pressing.left && !input_lock.left) {
      if (character.option[1].button != CHARACTER_BUTTON_NONE) {
        character.select_pos = CHARACTER_BUTTON_POS_OPT1;
        input_lock.left = true;
        redraw = true;
        return;
      }
    }
    if (pressing.right && !input_lock.right) {
      character.select_pos = CHARACTER_BUTTON_POS_OPT3;
      input_lock.right = true;
      redraw = true;
      return;     
    }
  }

  // rightmost position, can move left
  if (character.select_pos == CHARACTER_BUTTON_POS_OPT3) {
    if (pressing.left && !input_lock.left) {
      if (character.option[2].button != CHARACTER_BUTTON_NONE) {
        character.select_pos = CHARACTER_BUTTON_POS_OPT2;
        input_lock.left = true;
        redraw = true;
        return;
      }
    }
  }

}

/**** Render Functions ****/

function character_render() {

  tileset_background_render(character.background); //Poner el fondo

  bitfont_render("Select your character", 80, 2, JUSTIFY_CENTER);

  character_render_button(3, CHARACTER_BUTTON_POS_OPT0);
  character_render_button(3, CHARACTER_BUTTON_POS_OPT1);
  character_render_button(3, CHARACTER_BUTTON_POS_OPT2);
  character_render_button(3, CHARACTER_BUTTON_POS_OPT3);
  
  //bitfont_render("Yui", CHARACTER_BUTTON_POS_OPT0.x + 22, CHARACTER_BUTTON_POS_OPT0.y + 6, JUSTIFY_LEFT);
  //bitfont_render("Ritsu", CHARACTER_BUTTON_POS_OPT1.x + 22, CHARACTER_BUTTON_POS_OPT1.y + 6, JUSTIFY_LEFT);
  //bitfont_render("Mio", CHARACTER_BUTTON_POS_OPT2.x + 22, CHARACTER_BUTTON_POS_OPT2.y + 6, JUSTIFY_LEFT);
  //bitfont_render("Mugi", CHARACTER_BUTTON_POS_OPT3.x + 22, CHARACTER_BUTTON_POS_OPT3.y + 6, JUSTIFY_LEFT);

  action_render_select(character.select_pos);
}


function character_render_button(button_id, pos) {
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
