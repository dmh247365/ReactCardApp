import { POINT_CONVERSION_UNCOMPRESSED } from "constants";

/*
Need to build the logic for the cards

CardInfo for each card will consist of:-
a - card image = url xxxxx
b - card short code = AS / BH etc
c - Person
d - Action
e - Object

1- cardInfo (52 cards) will be stored as objects in an array (cardArray)
1.a - the card array can be returned as default (ie in order)
1.b - the card array can be returned as randomised

2 - the cardInfo can be returned as 18 images
2.a - 17 images being of three cards side by side (51) and a single 18th image
2.b - for the three images card:-
2.b1 - card one = person
2.b2 - card two = action
2.b3 - card three = object
2.c - for the 18th card PAO will all relate to that card
3 - just as in 1.a & 1.b the cards can be in order or randomised
*/

let cards = [
  {
    shortCode: "AH",
    cardImage: "urlxxx",
    cardPerson: "Fred Bloggs",
    cardAction: "smoking",
    cardObject: "Cigar"
  },
  {
    shortCode: "BH",
    cardImage: "urlxxx",
    cardPerson: "Brian Hood",
    cardAction: "flipping",
    cardObject: "Burger"
  },
  {
    shortCode: "CH",
    cardImage: "urlxxx",
    cardPerson: "Chris Horwell",
    cardAction: "turn wrist",
    cardObject: "Casio watch"
  },
  {
    shortCode: "DH",
    cardImage: "urlxxx",
    cardPerson: "David Hasslehoff",
    cardAction: "running",
    cardObject: "water buoy"
  },
  {
    shortCode: "EH",
    cardImage: "urlxxx",
    cardPerson: "Englebert Humperdinck",
    cardAction: "singing",
    cardObject: "micophone"
  },
  {
    shortCode: "SH",
    cardImage: "urlxxx",
    cardPerson: "Stu Hodges",
    cardAction: "plastering",
    cardObject: "Trowel"
  },
  {
    shortCode: "GH",
    cardImage: "urlxxx",
    cardPerson: "George H",
    cardAction: "marching",
    cardObject: "beret"
  }
];

console.log(cards[0]);

/*
const randomCards = cards => {
  let randomCardsArray = [];
  while (cards.length !== 0) {
    let randomIndex = Math.floor(Math.random() * cards.length);
    randomCardsArray.push(cards[randomIndex]);
    cards.splice(randomIndex, 1);
  }

  return randomCardsArray;
};

console.log(randomCards(cards));
*/

const reducedCards = cards => {
  let person = 0;
  let action = 1;
  let object = 2;
  console.log(object);

  for (let i = 0; i < 2; i++) {
    console.log("person ", person);
    console.log(cards[person].cardPerson);
    console.log(cards[action].cardAction);
    console.log(cards[object].cardObject);
    person = person + 3;
    action = action + 3;
    object = object + 3;
  }
  console.log(cards[6].cardPerson);
  console.log(cards[6].cardAction);
  console.log(cards[6].cardObject);
};

reducedCards(cards);
