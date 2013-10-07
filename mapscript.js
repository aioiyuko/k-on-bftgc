/**
 Scripting for various maps
 */


var mapscript = new Object();

mapscript.bone_piles = new Array();
mapscript.bone_piles = [
  {map_id:8, x:4, y:7, status:"bone1"},
  {map_id:8, x:4, y:2, status:"bone2"},
  {map_id:8, x:13, y:7, status:"bone3"},
  {map_id:8, x:11, y:5, status:"bone4"},
  {map_id:9, x:5, y:5, status:"bone5"},
  {map_id:9, x:8, y:2, status:"bone6"},
  {map_id:10, x:2, y:4, status:"bone7"},
  {map_id:10, x:4, y:2, status:"bone8"}
];

mapscript.locked_doors = new Array();
mapscript.locked_doors = [
  {map_id:8, x:4, y:12, status:"door1"},
  {map_id:10, x:11, y:3, status:"door2"},
  {map_id:10, x:13, y:3, status:"door3"}
];


function mapscript_exec(map_id) {

  var result = false;
  switch (map_id) {

    case 0: // Club room
      result = mapscript_haybale(1,3);
      return result;

    case 1: // Hall
      return false;

    case 2: // Club room closet
	return mapscript_chest(1,1,"heal", "Songbook: Heal", 1);

    case 3: // Meditation Point
      return mapscript_chest(2,1,"heal", "Songbook: Heal", 1);

    case 4: // Rehearsal room closet
      return mapscript_chest(1,4,"stick", "Drum Sticks", 1);

    case 5: // Creepy classroom
	return mapscript_chest(1,1,"hp1", "Magic Tea (HP Up)", 1);

    case 6: // settled hall
	return false;
    case 7: // safe hallway
	return mapscript_chest(12,1,"g1", "Yen", 40);
    case 8: //dangerous hallway
	return false;
  
    case 9: // Haunted classroom
	result =  mapscript_chest(1,1,"mp1", "Magic Cake (MP Up)", 1);
        return result || mapscript_chest(7,1,"fire", "Songbook: Fire", 1);
    case 10: // Broom closet
	return mapscript_chest(4,1, "g2", "Yen", 25);

     case 11: //abandoned classroom
        return mapscript_chest(1,8,"atk1", "Magic Cookie (Atk Up)", 1);

     case 12: //Gym Maze
        result = mapscript_chest(3,9,"ice", "Songbook: Ice", 1);
        result = result || mapscript_chest(2,1,"def1", "Magic Bread (Def Up)", 1);
        result = result || mapscript_chest(9,1,"light", "Songbook: Light", 1);
	return result;
     case 13: //School Yard
	return mapscript_chest(7,7,"g3", "Yen", 80);
     case 14: //Forbidden Forest
        return mapscript_enemy(3,7, ENEMY_JUN, "jun");
  }
  return false;
}

// general script types
function mapscript_message(x, y, status, message) {
  if (avatar.x == x && avatar.y == y) {

    // if the player has already read this message, skip it
    if (avatar.campaign.indexOf(status) > -1) {
      return false;
    }

    explore.message = message;
    avatar.campaign.push(status);
    return true;

  }
  return false;
}


function mapscript_haybale(x, y) {

  // don't rest if just starting the game
  if (!avatar.moved) return false;

  if (avatar.x == x && avatar.y == y) { 
    explore.message = "You rest for a while.";
    avatar_sleep();
	sounds_play(SFX_COIN);
    return true;
  }
  return false;
}

function mapscript_chest(x, y, status, item_type, item_count) {

  // if the player has already opened this chest, hide the chest
  if (avatar.campaign.indexOf(status) > -1) {

    // interior chest
    if (mazemap_get_tile(x,y) == 12) {
      mazemap_set_tile(x, y, 1);
    }
    // exterior chest
    else if (mazemap_get_tile(x,y) == 13) {
      mazemap_set_tile(x, y, 10);
    }

  }

  // if this is a new chest, open it and grant the reward.
  else {
    if (avatar.x == x && avatar.y == y) { 
      
      var gotten = mapscript_grant_item(item_type, item_count);
      if(gotten){avatar.campaign.push(status);}
      return true;
    }
  }

  return false;
}

/**
 Found items have permanent unique effects, handle those here
 */
function mapscript_grant_item(item, item_count) {
  var gotten = true;
  sounds_play(SFX_COIN);



  if (item == "Yen") {
    avatar.gold += item_count;
  }
  else if (item == "Drum Sticks") {
    // only keep the stick if it's better than what you already have
    if (avatar.weapon == 0) avatar.weapon = 1;
  }
  else if (item == "Songbook: Heal") {
    if (avatar.spellbook == 0) avatar.spellbook = 1;
  }
  else if (item == "Songbook: Fire") {
    if (avatar.spellbook == 1) avatar.spellbook = 2;
    else gotten = false;
  }
  else if (item == "Songbook: Ice") {
    if (avatar.spellbook == 2) avatar.spellbook = 3;
    else gotten = false;
  }
  else if (item == "Songbook: Light") {
    if (avatar.spellbook == 3) avatar.spellbook = 4;
    else gotten = false;
  }
  else if (item == "Magic Tea (HP Up)") {
    avatar.hp += 5;
    avatar.max_hp += 5;
  }
  else if (item == "Magic Cake (MP Up)") {
    avatar.mp += 4;
    avatar.max_mp += 4;
  }
  else if (item == "Magic Cookie (Atk Up)") {
    avatar.bonus_atk += 1;
  }
  else if (item == "Magic Bread (Def Up)") {
    avatar.bonus_def += 1;
  }

  if(gotten){
	  if (item_count == 1) {
	    explore.message = "Found " + item + "!";
	  }
	  else if (item_count > 1) {
	    explore.message = "Found " + item_count + " " + item;
	  }
  }else{
	explore.message = "It's too advanced!"
  	explore.message2 = "Found a Songbook!";
  }
  
  return gotten;
}

function mapscript_bone_pile_save(x, y) {

  // the player has just burned bones, lookup and save the status
  for (var i=0; i < mapscript.bone_piles.length; i++) {
    if (mazemap.current_id == mapscript.bone_piles[i].map_id &&
        x == mapscript.bone_piles[i].x &&
        y == mapscript.bone_piles[i].y) {

      avatar.campaign.push(mapscript.bone_piles[i].status);
    }
  }
}

function mapscript_bone_pile_load(map_id) {

  // check all bones previously burned
  for (var i=0; i < mapscript.bone_piles.length; i++) {
    if (mapscript.bone_piles[i].map_id == map_id) {
    
      if (avatar.campaign.indexOf(mapscript.bone_piles[i].status) > -1) {
        mazemap_set_tile(mapscript.bone_piles[i].x, mapscript.bone_piles[i].y, 5);
      }
    }
  }
}

function mapscript_locked_door_save(x, y) {

  // the player has just unlocked a door, lookup and save the status
  for (var i=0; i < mapscript.locked_doors.length; i++) {
    if (mazemap.current_id == mapscript.locked_doors[i].map_id &&
        x == mapscript.locked_doors[i].x &&
        y == mapscript.locked_doors[i].y) {

      avatar.campaign.push(mapscript.locked_doors[i].status);
    }
  }
}

function mapscript_locked_door_load(map_id) {

  // check all doors previously unlocked
  for (var i=0; i < mapscript.locked_doors.length; i++) {
    if (mapscript.locked_doors[i].map_id == map_id) {
    
      if (avatar.campaign.indexOf(mapscript.locked_doors[i].status) > -1) {
        mazemap_set_tile(mapscript.locked_doors[i].x, mapscript.locked_doors[i].y, 3);
      }
    }
  }
}

// a specific enemy is on this tile
function mapscript_enemy(x, y, enemy_id, status) {

  // don't spawn the enemy if just loading
  if (!init_complete) return false;
  
  // if heroine is at the enemy location
  if (avatar.x == x && avatar.y == y) { 

    // if heroine has not already defeated this enemy
    if (status != "") {
      if (avatar.campaign.indexOf(status) > -1) {
        return false;
      }
    }
    
    // prepare combat mode
    explore.encounter_chance = 0.0;
    gamestate = STATE_COMBAT;
    action.select_pos = BUTTON_POS_ATTACK;
    combat.timer = COMBAT_INTRO_DELAY;
    combat.phase = COMBAT_PHASE_INTRO;
    combat_set_enemy(enemy_id);
    combat.victory_status = status;

    return true;
  }
  return false;
}

