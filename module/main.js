"use strict";
import {onload} from "./score.js";
import {playername} from "./player.js";


onload();
document.getElementById('name').onblur= playername;
document.getElementById('memory-game').style.visibility = "hidden";
