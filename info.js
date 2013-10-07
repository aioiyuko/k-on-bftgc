/**
 Info Game State
 Display information about the heroine
 */

// consts
var AVATAR_SPRITE_W = 80;
var AVATAR_SPRITE_H = 100;
var AVATAR_DRAW_X = 40;
var AVATAR_DRAW_Y = 20;
var TYPE_ARMOR = 0;
var TYPE_WEAPON = 1;


// class info
var info = new Object();

// image setup
info.avatar_img = new Image();
info.avatar_img2 = new Image();
info.avatar_img3 = new Image();
info.avatar_img4 = new Image();
info.avatar_img_loaded = false;
info.button_img = new Image();
info.button_img_loaded = false;

info.weapons = new Array();
info.armors = new Array();
info.spells = new Array();

info.power_action = "";
info.power_result = "";

/*** Initialize **********************/
function info_init() {

  info.avatar_img.src = "images/interface/Yui.png";
  info.avatar_img2.src = "images/interface/Ritsu.png";
  info.avatar_img3.src = "images/interface/Mio.png";
  info.avatar_img4.src = "images/interface/Mugi.png";
  info.avatar_img.onload = function() {info_avatar_onload();};
  info.button_img.src = "images/interface/info_button.png";
  info.button_img.onload = function() {info_button_onload();};
  
  info.weapons[0] = {name:"Bare Fists",   atk_min:1,  atk_max:4,  gold:0};
  info.weapons[1] = {name:"Drum Sticks",  atk_min:2,  atk_max:6,  gold:0};
  info.weapons[2] = {name:"Guitar",       atk_min:3,  atk_max:8,  gold:50};
  info.weapons[3] = {name:"Bass",         atk_min:4,  atk_max:10, gold:200};
  info.weapons[4] = {name:"Keytar",       atk_min:5,  atk_max:12, gold:500};

  
  info.armors[0] = {name:"No Armor",        def:0,  gold:0};
  info.armors[1] = {name:"Uniform",  def:2,  gold:0};
  info.armors[2] = {name:"Swimsuit",        def:4,  gold:50};
  info.armors[3] = {name:"Casual clothes",  def:6,  gold:200};

  
  info.spells[0] = {name:"No Song", gold:0};
  info.spells[1] = {name:"Heal", gold:0};
  info.spells[2] = {name:"Fire", gold:100};
  info.spells[3] = {name:"Ice", gold:500};
  info.spells[4] = {name:"Light", gold:2500};
  info.spells[5] = {name:"Freeze", gold:10000};
  info.spells[6] = {name:"Reflect", gold:50000};
  
} 

/*** Image loading Helpers **********************/
function info_avatar_onload() {info.avatar_img_loaded = true;}
function info_button_onload() {info.button_img_loaded = true;}


/*** Logic Functions **********************/
function info_logic() {

  // check key to info screen
  if (pressing.action && !input_lock.action && action.select_pos == BUTTON_POS_INFO) {
    gamestate = STATE_EXPLORE;
	input_lock.action = true;	
	redraw = true;
    sounds_play(SFX_CLICK);
  }

  // check click to close info screen
  if (pressing.mouse && !input_lock.mouse && isWithin(mouse_pos, BUTTON_POS_INFO)) {
    gamestate = STATE_EXPLORE;
	input_lock.mouse = true;
	redraw = true;  
	sounds_play(SFX_CLICK);
  }

  // check select movement for spell actions
  action_logic();
  
  // check power usage
  
  if (action_checkuse(BUTTON_POS_HEAL) && avatar.mp > 0 && avatar.spellbook >= 1) {
    power_heal();
	redraw = true;
  }

  if (action_checkuse(BUTTON_POS_BURN) && avatar.mp > 0 && avatar.spellbook >= 2) {
    power_map_burn();
    redraw = true;
  }
  
  if (action_checkuse(BUTTON_POS_UNLOCK) && avatar.mp > 0 && avatar.spellbook >= 3) {
    power_map_unlock();
    redraw = true;
  }

}

function info_clear_messages() {
  info.power_action = "";
  info.power_result = "";
}

/*** Render Functions **********************/
function info_render() {

  tileset_background();
  mazemap_render(avatar.x, avatar.y, avatar.facing);
 
  bitfont_render("INFO", 80, 2, JUSTIFY_CENTER);
  bitfont_render("Songs:", 158, 50, JUSTIFY_RIGHT);

  info_render_equipment();
  info_render_button();
  info_render_itemlist();
  info_render_hpmp();
  action_render();

  
  if (!info_render_messages()) {
  
    // only display the minimap if messages aren't showing
    minimap_render();
  }

}

function info_render_equipment() {
  if (!info.avatar_img_loaded) return;
  
  // always draw the base 
  info_render_equiplayer(0, TYPE_ARMOR);

  // render worn equipment  
  info_render_equiplayer(avatar.armor, TYPE_ARMOR);
  info_render_equiplayer(avatar.weapon, TYPE_WEAPON);
  
}

function info_render_equiplayer(itemtier, itemtype) {

  ctx.drawImage(
    info.avatar_img,
    itemtier * AVATAR_SPRITE_W * PRESCALE,
    itemtype * AVATAR_SPRITE_H * PRESCALE,
    AVATAR_SPRITE_W * PRESCALE,
    AVATAR_SPRITE_H * PRESCALE,	
    AVATAR_DRAW_X * SCALE,
    AVATAR_DRAW_Y * SCALE,
    AVATAR_SPRITE_W * SCALE,
    AVATAR_SPRITE_H * SCALE
  );
}

function info_render_itemlist() {
  var item_string;

  item_string = info.weapons[avatar.weapon].name;
  if (avatar.bonus_atk > 0) item_string += " +" + avatar.bonus_atk;
  bitfont_render(item_string, 2, 15, JUSTIFY_LEFT);

  item_string = info.armors[avatar.armor].name;
  if (avatar.bonus_def > 0) item_string += " +" + avatar.bonus_def;
  bitfont_render(item_string, 2, 25, JUSTIFY_LEFT);

  bitfont_render("Yen: " + avatar.gold, 2, 35, JUSTIFY_LEFT);
}

function info_render_hpmp() { 
  bitfont_render("HP: " + avatar.hp + "/" + avatar.max_hp, 2, 100, JUSTIFY_LEFT);
  bitfont_render("MP: " + avatar.mp + "/" + avatar.max_mp, 2, 110, JUSTIFY_LEFT); 
}

function info_render_button() {

  if (!info.button_img_loaded) return;
  
  var button_x;
  
  // show button up on explore, down on info, and hidden any other state
  if (gamestate == STATE_EXPLORE) button_x = 0;
  else if (gamestate == STATE_INFO) button_x = BUTTON_SIZE;
  else return;
  
  ctx.drawImage(
    info.button_img,
    button_x * PRESCALE,
    0,
    BUTTON_SIZE * PRESCALE,
    BUTTON_SIZE * PRESCALE,	
    (BUTTON_POS_INFO.x + BUTTON_OFFSET) * SCALE,
    (BUTTON_POS_INFO.y + BUTTON_OFFSET) * SCALE,
    BUTTON_SIZE * SCALE,
    BUTTON_SIZE * SCALE
  );
}

function info_render_messages() {
  var message_displayed = false;

  if (info.power_action != "") {
    bitfont_render(info.power_action, 2, 70, JUSTIFY_LEFT);
	message_displayed = true;
  }
  if (info.power_result != "") {
    bitfont_render(info.power_result, 2, 80, JUSTIFY_LEFT);
	message_displayed = true;
  }
  return message_displayed;
}
