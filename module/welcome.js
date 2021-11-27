import {countdown} from "./coutdown.js";
import {flipCard,cards} from "./flipCart.js";
import {shuffle} from "./shuffle.js";
export function start(){
    countdown();
    document.getElementById('memory-game').style.visibility = "visible";
    document.getElementById('intro').hidden="true";
    shuffle();
    cards.forEach(card => card.addEventListener('click',flipCard));
}