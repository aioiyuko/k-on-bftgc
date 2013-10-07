/**
 Data collection for Enemies
 Includes the base stats for enemies
 Includes the images for enemies
 */

var ENEMY_COUNT = 11;

var ENEMY_ICHIGO = 0;
var ENEMY_HIMEKO = 1;
var ENEMY_CHIKA = 2;
var ENEMY_CHIZURU = 3;
var ENEMY_ERI = 4;
var ENEMY_FUUKO = 5;
var ENEMY_TOSHIMI = 6;
var ENEMY_USHIO = 7;
var ENEMY_YOSHIMI = 8;
var ENEMY_YOUKO = 9;
var ENEMY_JUN = 10;

var ENEMY_CATEGORY_SHADOW = 0;
var ENEMY_CATEGORY_DEMON = 1;
var ENEMY_CATEGORY_UNDEAD = 2;
var ENEMY_CATEGORY_AUTOMATON = 3;

var enemy = new Object();

enemy.load_counter = 0;
enemy.img = new Array();
enemy.img_loaded = false;
enemy.stats = new Array();
enemy.render_offset = {x:0, y:0};

function enemy_init() {
  for (i=0; i<ENEMY_COUNT; i++) {
    enemy.img[i] = new Image();
  }

  // load enemy images
  enemy.img[ENEMY_ICHIGO].src = "images/enemies/ichigo.png";
  enemy.img[ENEMY_ICHIGO].onload = function() {enemy_onload();};

  enemy.img[ENEMY_HIMEKO].src = "images/enemies/himeko.png";
  enemy.img[ENEMY_HIMEKO].onload = function() {enemy_onload();};

  enemy.img[ENEMY_CHIKA].src = "images/enemies/chika.png";
  enemy.img[ENEMY_CHIKA].onload = function() {enemy_onload();};

  enemy.img[ENEMY_CHIZURU].src = "images/enemies/chizuru.png";
  enemy.img[ENEMY_CHIZURU].onload = function() {enemy_onload();};

  enemy.img[ENEMY_ERI].src = "images/enemies/eri.png";
  enemy.img[ENEMY_ERI].onload = function() {enemy_onload();};

  enemy.img[ENEMY_FUUKO].src = "images/enemies/fuuko.png";
  enemy.img[ENEMY_FUUKO].onload = function() {enemy_onload();}

  enemy.img[ENEMY_TOSHIMI].src = "images/enemies/toshimi.png";
  enemy.img[ENEMY_TOSHIMI].onload = function() {enemy_onload();}

  enemy.img[ENEMY_USHIO].src = "images/enemies/ushio.png";
  enemy.img[ENEMY_USHIO].onload = function() {enemy_onload();}

  enemy.img[ENEMY_YOSHIMI].src = "images/enemies/yoshimi.png";
  enemy.img[ENEMY_YOSHIMI].onload = function() {enemy_onload();}

  enemy.img[ENEMY_YOUKO].src = "images/enemies/youko.png";
  enemy.img[ENEMY_YOUKO].onload = function() {enemy_onload();}

  enemy.img[ENEMY_JUN].src = "images/enemies/jun.png";
  enemy.img[ENEMY_JUN].onload = function() {enemy_onload();}

  // set enemy stats

  enemy.stats[ENEMY_ICHIGO] = {name:"Ichigo", hp:6, atk_min:2, atk_max:5, gold_min:1, gold_max:2, category:ENEMY_CATEGORY_SHADOW};
  enemy.stats[ENEMY_ICHIGO].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_HIMEKO] = {name:"Himeko", hp:7, atk_min:2, atk_max:6, gold_min:1, gold_max:3, category:ENEMY_CATEGORY_DEMON};
  enemy.stats[ENEMY_HIMEKO].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH];

  enemy.stats[ENEMY_CHIKA] = {name:"Chika", hp:7, atk_min:2, atk_max:6, gold_min:1, gold_max:3, category:ENEMY_CATEGORY_DEMON};
  enemy.stats[ENEMY_CHIKA].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH];

  enemy.stats[ENEMY_CHIZURU] = {name:"CHIZURU", hp:8, atk_min:3, atk_max:8, gold_min:2, gold_max:5, category:ENEMY_CATEGORY_SHADOW};
  enemy.stats[ENEMY_CHIZURU].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_ATTACK, ENEMY_POWER_MPDRAIN];

  enemy.stats[ENEMY_ERI] = {name:"ERI", hp:8, atk_min:3, atk_max:8, gold_min:2, gold_max:5, category:ENEMY_CATEGORY_SHADOW};
  enemy.stats[ENEMY_ERI].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_ATTACK, ENEMY_POWER_MPDRAIN];

  enemy.stats[ENEMY_FUUKO] = {name:"FUUKO", hp:12, atk_min:4, atk_max:10, gold_min:3, gold_max:8, category:ENEMY_CATEGORY_UNDEAD};
  enemy.stats[ENEMY_FUUKO].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_ATTACK, ENEMY_POWER_HPDRAIN];

  enemy.stats[ENEMY_TOSHIMI] = {name:"TOSHIMI", hp:18, atk_min:6, atk_max:12, gold_min:4, gold_max:10, category:ENEMY_CATEGORY_UNDEAD};
  enemy.stats[ENEMY_TOSHIMI].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_USHIO] = {name:"USHIO", hp:16, atk_min:7, atk_max:14, gold_min:7, gold_max:12, category:ENEMY_CATEGORY_DEMON};
  enemy.stats[ENEMY_USHIO].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH, ENEMY_POWER_HPDRAIN, ENEMY_POWER_MPDRAIN];

  enemy.stats[ENEMY_YOSHIMI] = {name:"YOSHIMI", hp:16, atk_min:7, atk_max:14, gold_min:7, gold_max:12, category:ENEMY_CATEGORY_AUTOMATON};
  enemy.stats[ENEMY_YOSHIMI].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH, ENEMY_POWER_HPDRAIN, ENEMY_POWER_MPDRAIN];

  enemy.stats[ENEMY_YOUKO] = {name:"YOUKO", hp:30, atk_min:10, atk_max:16, gold_min:20, gold_max:30, category:ENEMY_CATEGORY_AUTOMATON};
  enemy.stats[ENEMY_YOUKO].powers = [ENEMY_POWER_ATTACK];

  enemy.stats[ENEMY_JUN] = {name:"Jun", hp:84, atk_min:8, atk_max:15, gold_min:225, gold_max:275, category:ENEMY_CATEGORY_DEMON};
  enemy.stats[ENEMY_JUN].powers = [ENEMY_POWER_ATTACK, ENEMY_POWER_SCORCH];
  
}

function enemy_onload() {
  enemy.load_counter++;
  if (enemy.load_counter == ENEMY_COUNT) enemy.img_loaded = true;
}

function enemy_render(enemy_id) {

  if (!enemy.img_loaded) return;

  ctx.drawImage(
    enemy.img[enemy_id],
    0,
    0,
    160 * PRESCALE,
    120 * PRESCALE,
    enemy.render_offset.x * SCALE,
    enemy.render_offset.y * SCALE,
    160 * SCALE,
    120 * SCALE
  );
  
  // optional enemy overlays
  boss_boneshield_render();
}

