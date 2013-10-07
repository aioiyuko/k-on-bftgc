/**
 Atlas.js
 Collection of maps and transition data
 */

var MAP_COUNT = 15;

var atlas = new Object();
atlas.maps = new Array();

for (var i=0; i<MAP_COUNT; i++) {
  atlas.maps[i] = new Object();
  atlas.maps[i].exits = new Array();
  atlas.maps[i].enemies = new Array();
  atlas.maps[i].shops = new Array();
}

//Tiles
// 1 floor
// 2 wall
// 3 door
// 4 window
// 5 chalkboard left
// 6 chalkboard right
// 7 wall (hallway)
// 8 window (hallway)
// 9 door (hallway)
// 10 grass
// 11 table
// 12 chest
// 13 chest (on grass)
// 14 drums
// 15 tree
// 16 jun
// 17 invisible wall

atlas.maps[0].name = "light music club room";
atlas.maps[0].music = "musicclub";
atlas.maps[0].width = 6;
atlas.maps[0].height = 6;
atlas.maps[0].background = 3;
atlas.maps[0].tiles = [
  [2,3,2,0,0,0],
  [2,1,2,5,6,2],
  [2,1,1,1,1,3],
  [2,1,1,1,1,5],
  [4,11,1,1,14,6],
  [2,4,4,4,4,2]
];
atlas.maps[0].exits[0] = {exit_x:5, exit_y:2, dest_map:1, dest_x:1, dest_y:1};
atlas.maps[0].exits[1] = {exit_x:1, exit_y:0, dest_map:2, dest_x:1, dest_y:2};

atlas.maps[1].name = "Hallway";
atlas.maps[1].music = "rooms";
atlas.maps[1].width = 11;
atlas.maps[1].height = 3;
atlas.maps[1].background = 3;
atlas.maps[1].tiles = [
[7,7,7,9,7,7,7,7,9,7,1],
[9,1,1,1,1,1,1,1,1,1,1],
[7,7,8,7,8,7,8,7,8,7,1]
];
atlas.maps[1].exits[0] = {exit_x:0, exit_y:1, dest_map:0, dest_x:4, dest_y:2};
atlas.maps[1].exits[1] = {exit_x:3, exit_y:0, dest_map:3, dest_x:5, dest_y:4};
atlas.maps[1].exits[2] = {exit_x:8, exit_y:0, dest_map:5, dest_x:5, dest_y:5};
atlas.maps[1].exits[3] = {exit_x:10, exit_y:1, dest_map:6, dest_x:1, dest_y:5};
atlas.maps[1].enemies = [ENEMY_ICHIGO, ENEMY_HIMEKO];

atlas.maps[2].name = "Club room closet";
atlas.maps[2].music = "musicclub";
atlas.maps[2].width = 3;
atlas.maps[2].height = 4;
atlas.maps[2].background = 3;
atlas.maps[2].tiles = [
  [2,2,2],
  [2,12,2],
  [2,1,2],
  [2,3,2]
];
atlas.maps[2].exits[0] = {exit_x:1, exit_y:3, dest_map:0, dest_x:1, dest_y:1};

atlas.maps[3].name = "Rehearsal room";
atlas.maps[3].music = "rooms";
atlas.maps[3].width = 7;
atlas.maps[3].height = 6;
atlas.maps[3].background = 3;
atlas.maps[3].tiles = [
  [2,2,2,4,4,4,2],
  [2,3,2,1,1,1,2],
  [2,1,1,1,1,1,2],
  [2,1,1,1,1,1,2],
  [2,2,2,1,1,1,2],
  [2,2,2,2,2,3,2]
];
atlas.maps[3].exits[0] = {exit_x:5, exit_y:5, dest_map:1, dest_x:3, dest_y:1};
atlas.maps[3].exits[1] = {exit_x:1, exit_y:1, dest_map:4, dest_x:3, dest_y:1};
atlas.maps[3].enemies = [ENEMY_CHIKA, ENEMY_HIMEKO];

atlas.maps[4].name = "Rehearsal room closet";
atlas.maps[4].music = "rooms";
atlas.maps[4].width = 5;
atlas.maps[4].height = 6;
atlas.maps[4].background = 3;
atlas.maps[4].tiles = [
  [2,2,2,2,2],
  [2,1,1,1,2],
  [2,1,2,3,2],
  [2,1,2,2,2],
  [2,12,2,0,0],
  [2,2,2,0,0]
];
atlas.maps[4].exits[0] = {exit_x:3, exit_y:2, dest_map:3, dest_x:1, dest_y:2};

atlas.maps[5].name = "Creepy classroom";
atlas.maps[5].music = "rooms";
atlas.maps[5].width = 7;
atlas.maps[5].height = 7;
atlas.maps[5].background = 3;
atlas.maps[5].tiles = [
  [2,4,4,4,4,4,2],
  [2,12,1,1,1,1,2],
  [6,11,11,11,11,1,2],
  [5,1,1,1,1,1,5],
  [2,1,11,11,11,11,6],
  [2,1,1,1,1,1,2],
  [2,2,2,2,2,3,2]
];
atlas.maps[5].exits[0] = {exit_x:5, exit_y:6, dest_map:1, dest_x:8, dest_y:1};
atlas.maps[5].enemies = [ENEMY_ICHIGO, ENEMY_CHIKA];

atlas.maps[6].name = "Settled Hall";
atlas.maps[6].music = "rooms";
atlas.maps[6].width = 8;
atlas.maps[6].height = 7;
atlas.maps[6].background = 3;
atlas.maps[6].tiles = [
  [7,8,7,8,7,8,7,7],
  [7,1,1,1,1,1,1,1],
  [7,1,1,1,1,1,7,7],
  [7,1,1,1,1,1,7,7],
  [7,1,1,1,1,1,7,7],
  [1,1,1,1,1,1,1,1],
  [7,8,7,8,7,8,7,7]
];
atlas.maps[6].exits[0] = {exit_x:0, exit_y:5, dest_map:1, dest_x:9, dest_y:1};
atlas.maps[6].exits[1] = {exit_x:7, exit_y:1, dest_map:7, dest_x:2, dest_y:1};
atlas.maps[6].exits[2] = {exit_x:7, exit_y:5, dest_map:8, dest_x:2, dest_y:1};
atlas.maps[6].enemies = [ENEMY_CHIKA, ENEMY_CHIZURU, ENEMY_ERI];

atlas.maps[7].name = "Safe Hallway";
atlas.maps[7].music = "shop";
atlas.maps[7].width = 14;
atlas.maps[7].height = 3;
atlas.maps[7].background = 3;
atlas.maps[7].tiles = [
[8,7,7,8,7,8,7,8,7,8,7,7,7,7],
[1,1,1,1,1,1,1,1,1,1,1,17,12,7],
[1,7,7,9,7,7,9,7,7,9,7,7,7,7]
];
atlas.maps[7].exits[0] = {exit_x:1, exit_y:1, dest_map:6, dest_x:6, dest_y:1};
atlas.maps[7].shops[0] = {exit_x:3, exit_y:2, shop_id:2, dest_x:3, dest_y:1};
atlas.maps[7].shops[1] = {exit_x:6, exit_y:2, shop_id:1, dest_x:6, dest_y:1};
atlas.maps[7].shops[2] = {exit_x:9, exit_y:2, shop_id:0, dest_x:9, dest_y:1};

atlas.maps[8].name = "Dangerous Hallway";
atlas.maps[8].music = "halls";
atlas.maps[8].width = 12;
atlas.maps[8].height = 3;
atlas.maps[8].background = 3;
atlas.maps[8].tiles = [
[1,7,7,9,7,7,9,7,7,9,7,7],
[1,1,1,1,1,1,1,1,1,1,1,9],
[8,7,7,8,7,8,7,8,7,7,8,7]
];
atlas.maps[8].exits[0] = {exit_x:1, exit_y:1, dest_map:6, dest_x:6, dest_y:5};
atlas.maps[8].exits[1] = {exit_x:3, exit_y:0, dest_map:9, dest_x:7, dest_y:8};
atlas.maps[8].exits[2] = {exit_x:6, exit_y:0, dest_map:10, dest_x:1, dest_y:2};
atlas.maps[8].exits[3] = {exit_x:9, exit_y:0, dest_map:11, dest_x:7, dest_y:8};
atlas.maps[8].exits[4] = {exit_x:11, exit_y:1, dest_map:12, dest_x:1, dest_y:10};
atlas.maps[8].enemies = [ENEMY_FUUKO, ENEMY_TOSHIMI, ENEMY_USHIO];

atlas.maps[9].name = "Haunted classroom";
atlas.maps[9].music = "halls";
atlas.maps[9].width = 9;
atlas.maps[9].height = 10;
atlas.maps[9].background = 3;
atlas.maps[9].tiles = [
  [2, 4, 4, 4, 4, 4, 4, 4,2],
  [2,12, 1, 1,11, 1, 1,12,2],
  [2,11,11, 1, 1, 1,14, 1,2],
  [4, 1, 1, 1,11, 1, 1, 1,2],
  [6, 1, 1,11,15,11, 1, 1,5],
  [5, 1, 1, 1,11, 1, 1, 1,6],
  [4,11, 1, 1, 1, 1, 1, 1,2],
  [2, 1,14, 1, 1, 1,11, 1,2],
  [2, 1, 1, 1, 1, 1, 1, 1,2],
  [2, 2, 2, 2, 2, 2, 2, 3,2]
];
atlas.maps[9].exits[0] = {exit_x:7, exit_y:9, dest_map:8, dest_x:3, dest_y:1};
atlas.maps[9].enemies = [ENEMY_FUUKO, ENEMY_USHIO, ENEMY_YOSHIMI, ENEMY_YOUKO];

atlas.maps[10].name = "Broom closet";
atlas.maps[10].music = "halls";
atlas.maps[10].width = 6;
atlas.maps[10].height = 4;
atlas.maps[10].background = 3;
atlas.maps[10].tiles = [
  [2,2,2,2,2,2],
  [2,1,17,1,12,2],
  [2,1,2,2,2,2],
  [2,3,2,0,0,0]
];
atlas.maps[10].exits[0] = {exit_x:1, exit_y:3, dest_map:8, dest_x:6, dest_y:1};

atlas.maps[11].name = "Abandoned classroom";
atlas.maps[11].music = "halls";
atlas.maps[11].width = 9;
atlas.maps[11].height = 10;
atlas.maps[11].background = 3;
atlas.maps[11].tiles = [
  [2, 4, 4, 4, 4, 4, 4, 4,2],
  [2, 1, 1, 1,11, 1, 1, 1,2],
  [2, 1,11, 1,11, 1,11, 1,2],
  [2, 1,11, 1,11, 1,11, 1,2],
  [6, 1,11, 1,11, 1,11, 1,5],
  [5, 1,11, 1,11, 1,11, 1,6],
  [2, 1,11, 1,11, 1,11, 1,2],
  [2, 1,11, 1,11, 1,11, 1,2],
  [2,12,11, 1, 1, 1,11, 1,2],
  [2, 2, 2, 2, 2, 2, 2, 3,2]
];
atlas.maps[11].exits[0] = {exit_x:7, exit_y:9, dest_map:8, dest_x:9, dest_y:1};
atlas.maps[11].enemies = [ENEMY_CHIZURU, ENEMY_ERI, ENEMY_FUUKO, ENEMY_TOSHIMI];

atlas.maps[12].name = "Gym Maze";
atlas.maps[12].music = "gym";
atlas.maps[12].width = 16;
atlas.maps[12].height = 13;
atlas.maps[12].background = 3;
atlas.maps[12].tiles = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 1,12,11, 1, 1, 1, 1,11,12, 1, 1, 1,11, 1, 7],
  [7, 1,11, 1, 1, 1, 1, 1,11,11,11, 1, 1,11, 1, 9],
  [7, 1,11,11, 1,11, 1, 1, 1, 1, 1, 1, 1,11, 1, 8],
  [7, 1,11, 1, 1,11,11,11, 1,11, 1, 1, 1,11, 1, 7],
  [7, 1, 1, 1, 1, 1, 1,11, 1,11,11, 1,11,11, 1, 8],
  [7,11, 1,11,11,11, 1,11, 1, 1,11, 1,11, 1, 1, 7],
  [7, 1, 1,11, 1, 1, 1,11, 1, 1, 1, 1,11, 1, 1, 8],
  [7, 1,11,11, 1,11,11,11,11, 1, 1, 1, 1, 1, 1, 7],
  [7, 1,11,12, 1,11, 1, 1, 1, 1, 1, 1,11,11, 1, 8],
  [9, 1,11,11, 1,11, 1,11,11,11, 1, 1,11, 1, 1, 7],
  [7, 1, 1, 1, 1, 1, 1,11, 1, 1, 1, 1,11, 1, 1, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
];
atlas.maps[12].exits[0] = {exit_x:0, exit_y:10, dest_map:8, dest_x:10, dest_y:1};
atlas.maps[12].exits[1] = {exit_x:15, exit_y:2, dest_map:13, dest_x:1, dest_y:3};
atlas.maps[12].enemies = [ENEMY_ICHIGO, ENEMY_HIMEKO, ENEMY_CHIKA, ENEMY_CHIZURU, ENEMY_ERI, ENEMY_FUUKO, ENEMY_TOSHIMI, ENEMY_USHIO, ENEMY_YOSHIMI, ENEMY_YOUKO];

atlas.maps[13].name = "School Yard";
atlas.maps[13].music = "boss";
atlas.maps[13].width = 16;
atlas.maps[13].height = 14;
atlas.maps[13].background = 8;
atlas.maps[13].tiles = [
  [7, 7, 7, 7, 7,15,15,15,15,15,15,15,15,15,15,15],
  [7, 9, 7, 9, 7,15,15,10,10,10,15,15,15,15,15,15],
  [7,10,10,10,10,10,10,10,10,10,10,15,10,10,15,15],
  [9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,15],
  [8,10,10,10,15,10,10,15,10,10,10,10,10,10,15,15],
  [7,10,15,10,10,10,10,15,10,10,15,15,10,15,15,15],
  [8,10,10,10,10,10,15,15,15,10,15,15,10,10,15,15],
  [7,10,10,10,10,10,15,13,15,10,15,10,10,10,15,15],
  [8,10,10,15,10,10,10,10,15,10,15,10,10,15,15,15],
  [7,10,10,10,10,10,10,10,15,15,15,10,10,15,15,15],
  [8,15,10,10,10,10,15,10,10,10,10,10,10,10,10,10],
  [7,10,10,15,10,15,15,10,10,10,10,10,10,15,15,15],
  [7,15,15,15,15,15,15,10,10,10,10,10,15,15,15,15],
  [7,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
];
atlas.maps[13].exits[0] = {exit_x:14, exit_y:10, dest_map:14, dest_x:1, dest_y:2};
atlas.maps[13].exits[1] = {exit_x:0, exit_y:3, dest_map:12, dest_x:14, dest_y:2};
atlas.maps[13].shops[0] = {exit_x:1, exit_y:1, shop_id:5, dest_x:1, dest_y:2};
atlas.maps[13].shops[1] = {exit_x:3, exit_y:1, shop_id:4, dest_x:3, dest_y:2};
atlas.maps[13].enemies = [ENEMY_YOUKO, ENEMY_FUUKO, ENEMY_TOSHIMI, ENEMY_USHIO, ENEMY_YOSHIMI];

atlas.maps[14].name = "Forbidden Forest";
atlas.maps[14].music = "boss";
atlas.maps[14].width = 8;
atlas.maps[14].height = 12;
atlas.maps[14].background = 8;
atlas.maps[14].tiles = [
  [15,15,15,15,15,15,15,15],
  [15,15,15,15,15,15,15,15],
  [10,10,10,10,10,10,10,15],
  [15,15,15,15,15,15,10,15],
  [15,10,10,10,10,15,10,15],
  [15,10,15,15,10,15,10,15],
  [15,10,15,10,10,15,10,15],
  [15,10,15,16,10,15,10,15],
  [15,10,15,15,15,15,10,15],
  [15,10,10,10,10,10,10,15],
  [15,15,15,15,15,15,15,15],
  [15,15,15,15,15,15,15,15]
];
atlas.maps[14].exits[0] = {exit_x:0, exit_y:2, dest_map:13, dest_x:13, dest_y:10};
