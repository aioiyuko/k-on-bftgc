/**
TileSet class.
  
2013 Clint Bellanger
*/

var TILE_COUNT = 17;
var BACKGROUND_COUNT = 9;

var tileset = new Object();
tileset.tile_img = new Array();
tileset.background_img = new Array();

tileset.walkable = new Array();
tileset.background = new Image();
tileset.render_offset = {x:0, y:0};

// notice we skip 0 which means "no tile"
for (i=1; i<=TILE_COUNT; i++) {
  tileset.tile_img[i] = new Image();
}

for (i=0; i<BACKGROUND_COUNT; i++) {
  tileset.background_img[i] = new Image();
}

// image loader progress
tileset.load_counter = 0;

//---- Properties ---------------------------------------------------

//---- Tiles --------------------------------------------------------

// Each tile has the same layout on the sprite sheet
// tiles 0-12 also represent position 0-12
tileset.draw_area = [
  {"width": 80,  "height": 120, "src_x": 0,   "src_y": 0, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 80,  "src_y": 0, "dest_x": 80, "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 160, "src_y": 0, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 240, "src_y": 0, "dest_x": 80, "dest_y": 0},  
  {"width": 160, "height": 120, "src_x": 320, "src_y": 0, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 480, "src_y": 0, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 560, "src_y": 0, "dest_x": 80, "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 0,   "src_y": 120, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 80,  "src_y": 120, "dest_x": 80, "dest_y": 0},
  {"width": 160, "height": 120, "src_x": 160, "src_y": 120, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 320, "src_y": 120, "dest_x": 0,  "dest_y": 0},
  {"width": 80,  "height": 120, "src_x": 400, "src_y": 120, "dest_x": 80, "dest_y": 0},
  {"width": 160, "height": 120, "src_x": 480, "src_y": 120, "dest_x": 0,  "dest_y": 0}
];

//---- Public Functions ---------------------------------------------

function tileset_init() {

  // load background images
  tileset.background_img[0].src = "images/backgrounds/black.png";
  tileset.background_img[0].onload = function() {tileset_onload();};
  
  tileset.background_img[1].src = "images/backgrounds/empty.png";
  tileset.background_img[1].onload = function() {tileset_onload();};

  tileset.background_img[2].src = "images/backgrounds/white.png";
  tileset.background_img[2].onload = function() {tileset_onload();};

  tileset.background_img[3].src = "images/backgrounds/shadow.png";
  tileset.background_img[3].onload = function() {tileset_onload();};

  tileset.background_img[4].src = "images/backgrounds/character.png";
  tileset.background_img[4].onload = function() {tileset_onload();};

  tileset.background_img[5].src = "images/backgrounds/sumire.png";
  tileset.background_img[5].onload = function() {tileset_onload();};

  tileset.background_img[6].src = "images/backgrounds/ui.png";
  tileset.background_img[6].onload = function() {tileset_onload();};

  tileset.background_img[7].src = "images/backgrounds/sawako.png";
  tileset.background_img[7].onload = function() {tileset_onload();};

  tileset.background_img[8].src = "images/backgrounds/nightsky.png";
  tileset.background_img[8].onload = function() {tileset_onload();};
  

  tileset.walkable[0] = false;
  
  // load tile images
  tileset.tile_img[1].src = "images/tiles/floor.png";
  tileset.tile_img[1].onload = function() {tileset_onload();};
  tileset.walkable[1] = true;
  
  tileset.tile_img[2].src = "images/tiles/wall.png";
  tileset.tile_img[2].onload = function() {tileset_onload();};
  tileset.walkable[2] = false;

  tileset.tile_img[3].src = "images/tiles/door.png";
  tileset.tile_img[3].onload = function() {tileset_onload();};
  tileset.walkable[3] = true;

  tileset.tile_img[4].src = "images/tiles/window.png";
  tileset.tile_img[4].onload = function() {tileset_onload();};
  tileset.walkable[4] = false;
  
  tileset.tile_img[5].src = "images/tiles/chalkboardL.png";
  tileset.tile_img[5].onload = function() {tileset_onload();};
  tileset.walkable[5] = false;

  tileset.tile_img[6].src = "images/tiles/chalkboardR.png";
  tileset.tile_img[6].onload = function() {tileset_onload();};
  tileset.walkable[6] = false;

  tileset.tile_img[7].src = "images/tiles/hall-wall.png";
  tileset.tile_img[7].onload = function() {tileset_onload();};
  tileset.walkable[7] = false;

  tileset.tile_img[8].src = "images/tiles/hall-window.png";
  tileset.tile_img[8].onload = function() {tileset_onload();};
  tileset.walkable[8] = false;

  tileset.tile_img[9].src = "images/tiles/hall-door.png";
  tileset.tile_img[9].onload = function() {tileset_onload();};
  tileset.walkable[9] = true;

  tileset.tile_img[10].src = "images/tiles/grass.png";
  tileset.tile_img[10].onload = function() {tileset_onload();};
  tileset.walkable[10] = true;
  
  tileset.tile_img[11].src = "images/tiles/table.png";
  tileset.tile_img[11].onload = function() {tileset_onload();};
  tileset.walkable[11] = false;  

  tileset.tile_img[12].src = "images/tiles/chest.png";
  tileset.tile_img[12].onload = function() {tileset_onload();};
  tileset.walkable[12] = true;

  tileset.tile_img[13].src = "images/tiles/chest-outside.png";
  tileset.tile_img[13].onload = function() {tileset_onload();};
  tileset.walkable[13] = true;

  tileset.tile_img[14].src = "images/tiles/drums.png";
  tileset.tile_img[14].onload = function() {tileset_onload();};
  tileset.walkable[14] = false;
  
  tileset.tile_img[15].src = "images/tiles/tree.png";
  tileset.tile_img[15].onload = function() {tileset_onload();};
  tileset.walkable[15] = false;

  tileset.tile_img[16].src = "images/tiles/jun.png";
  tileset.tile_img[16].onload = function() {tileset_onload();};
  tileset.walkable[16] = true;

  tileset.tile_img[17].src = "images/tiles/invisible-wall.png";
  tileset.tile_img[17].onload = function() {tileset_onload();};
  tileset.walkable[17] = true;
}

function tileset_onload() {
  tileset.load_counter++;
  if (tileset.load_counter == (TILE_COUNT + BACKGROUND_COUNT)) redraw = true;
}

/**
 * Draw the default background for this map
 */
function tileset_background() {
  tileset_background_render(atlas.maps[mazemap.current_id].background);
}

/**
 * Render a specific background
 */
function tileset_background_render(background_id) {
  ctx.drawImage(tileset.background_img[background_id],0,0, 160*SCALE, 120*SCALE);  
}

function tileset_render(tile_id, position) {
  
  // 0 reserved for completely empty
  if (tile_id == 0) return;
  
  ctx.drawImage(
    tileset.tile_img[tile_id],
    tileset.draw_area[position].src_x * PRESCALE,
    tileset.draw_area[position].src_y * PRESCALE,
    tileset.draw_area[position].width * PRESCALE,
    tileset.draw_area[position].height * PRESCALE,
    (tileset.draw_area[position].dest_x + tileset.render_offset.x) * SCALE,
    (tileset.draw_area[position].dest_y + tileset.render_offset.y) * SCALE,
    tileset.draw_area[position].width * SCALE,
    tileset.draw_area[position].height * SCALE
  );

}


