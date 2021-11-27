import {cards} from "./flipCart.js";
export function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 24);
      card.style.order = randomPos;
    });
  };