var CANVAS_WIDTH = 1700;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 300;
var EDGEBOARD_Y = 0;

var FPS = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "comfortaa";

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_CHOOSE_MODE = 2;
var STATE_HELP    = 3;
var STATE_GAME    = 4;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;
var ON_RELEASE_YES = 6;
var ON_RELEASE_NO  = 7;

var MODE_CPU = 0;
var MODE_HUMAN = 1;

var BOARD_ROWS = 6;
var BOARD_COLS = 7;

var DISC_YELLOW =0;
var DISC_RED = 1;
var DISC_EMPTY = 2;
var DISC_GENERIC = 3;

var DISC_RADIUS = 39;
var DISC_DIAMETER = DISC_RADIUS*2;
var DISC_FOR_COMBOS = 4;
var TIME_FOR_DROP_PER_CELL = 200;
var POINTS_FOR_WIN;
var TIME_FOR_BONUS_SCORE;
var TIME_WIN_DISC = 1000;
        
var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;