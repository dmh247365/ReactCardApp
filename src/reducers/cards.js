// cards reducer we will use a single export default reducer
// at the bottom of the file as we will only return one thing
// don't forget we have case statements to sort through the
// actions and invoke the correct response

const cardsReducerDefaultState = [
  {
    ImageURL: "AH.svg",
    ShortCode: "AH",
    CardName: "Ace of Hearts",
    Person: "Adolf Hitler",
    Action: "Goose stepping",
    Object: "Black boots"
  },
  {
    ImageURL: "2H.svg",
    ShortCode: "2H",
    CardName: "Two of Hearts",
    Person: "Brian Hood",
    Action: "Flipping",
    Object: "McDonalds burger"
  },
  {
    ImageURL: "3H.svg",
    ShortCode: "3H",
    CardName: "Three of Hearts",
    Person: "Chris Horwell",
    Action: "Turning wrist",
    Object: "Black casio watch"
  },
  {
    ImageURL: "4H.svg",
    ShortCode: "4H",
    CardName: "Four of Hearts",
    Person: "David Hasselhoff",
    Action: "Wearing leather jacket",
    Object: "Kitt car"
  },
  {
    ImageURL: "5H.svg",
    ShortCode: "5H",
    CardName: "Five of Hearts",
    Person: "Engelbert Humperdinck",
    Action: "Singing",
    Object: "Microphone"
  },
  {
    ImageURL: "6H.svg",
    ShortCode: "6H",
    CardName: "Six of Hearts",
    Person: "Stu Hodges",
    Action: "Brush on movement",
    Object: "Plasters float"
  },
  {
    ImageURL: "7H.svg",
    ShortCode: "7H",
    CardName: "Seven of Hearts",
    Person: "Gerge H",
    Action: "Marching",
    Object: "Maroon Beret"
  },
  {
    ImageURL: "8H.svg",
    ShortCode: "8H",
    CardName: "Eight of Hearts",
    Person: "Harry Houdini",
    Action: "Arms wrapped around",
    Object: "White straight jacket"
  },
  {
    ImageURL: "9H.svg",
    ShortCode: "9H",
    CardName: "Nine of Hearts",
    Person: "Norman Harrison",
    Action: "Stepping up",
    Object: "Paint pot & overalls"
  },
  {
    ImageURL: "10H.svg",
    ShortCode: "10H",
    CardName: "Ten of Hearts",
    Person: "Oliver Hardy",
    Action: "twisting moustache",
    Object: "Plank of wood"
  },
  {
    ImageURL: "JH.svg",
    ShortCode: "JH",
    CardName: "Jack of Hearts",
    Person: "Jason Donovan",
    Action: "Rising up",
    Object: "Technocolour dreamcoat"
  },
  {
    ImageURL: "QH.svg",
    ShortCode: "QH",
    CardName: "Queen of Hearts",
    Person: "Cindy Crawford",
    Action: "Pouting",
    Object: "Red lipstick"
  },
  {
    ImageURL: "KH.svg",
    ShortCode: "KH",
    CardName: "King of Hearts",
    Person: "Paul Newman",
    Action: "Pool stance",
    Object: "tray of pool balls"
  }
];

// CARDS_REDUCER
const cardsReducer = (state = cardsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cardsReducer;
