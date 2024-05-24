const TEMPLATE = {
  key: "WURM2",
  data: {
    width: 1500,
    height: 2100,
    marginX: 0,
    marginY: 0,
    frames: [
      {
        name: "Artifact Frame",
        src: "/img/frames/token/old/a.png",
        masks: [],
      },
    ],
    artSource: "http://localhost:8080/local_art/wurm2.png",
    artX: 0.11533333333333333,
    artY: 0.11047619047619048,
    artZoom: 1.065,
    artRotate: "0",
    setSymbolSource: "http://localhost:8080/img/blank.png",
    setSymbolX: 0.7973333333333333,
    setSymbolY: 0.6595238095238095,
    setSymbolZoom: 78,
    watermarkSource: "http://localhost:8080/img/blank.png",
    watermarkX: 0.012,
    watermarkY: 0.52,
    watermarkZoom: 504,
    watermarkLeft: "#b79d58",
    watermarkRight: "none",
    watermarkOpacity: 0.4,
    version: "tokenOld",
    manaSymbols: [],
    infoYear: "",
    margins: false,
    bottomInfo: {
      top: {
        //text: "",
        text: "{fontcolor#eeeeee}Illus: {elemidinfo-artist}",
        x: 0.1,
        //y: 0.8928,
        y: 0.8728,
        width: 0.8,
        height: 0.0267,
        oneLine: true,
        size: 0.0267,
        align: "center",
        shadowX: 0.0021,
        shadowY: 0.0015,
        color: "#eeeeee",
      },
      wizards: {
        name: "{fontcolor#eeeeee}wizards",
        text: "{elemidinfo-number}",
        x: 0.1,
        y: 0.9009,
        width: 0.8,
        height: 0.0172,
        oneLine: true,
        size: 0.0172,
        align: "center",
        shadowX: 0.0014,
        shadowY: 0.001,
        color: "#eeeeee",
      },
      bottom: {
        text: "NOT FOR SALE   CardConjurer.com",
        x: 0.1,
        y: 0.912,
        width: 0.8,
        height: 0.012380952380952381,
        oneLine: true,
        size: 0.012380952380952381,
        align: "center",
        shadowX: 0.0014,
        shadowY: 0.001,
        color: "white",
      },
    },
    //infoNumber: "",
    infoNumber: "© 2023 CMTL Proxies • Not for Sale",
    infoRarity: "",
    infoSet: "",
    infoLanguage: "",
    infoArtist: "Raymond Swanland",
    onload: null,
    artBounds: {
      x: 0.1154,
      y: 0.1105,
      width: 0.7694,
      //height: 0.73,
      height: 0.51,
    },
    setSymbolBounds: {
      x: 0.8494,
      y: 0.6781,
      width: 0.12,
      height: 0.0372,
      vertical: "center",
      horizontal: "right",
    },
    watermarkBounds: {
      x: 0.18,
      y: 0.64,
      width: 0.64,
      height: 0.24,
    },
    text: {
      title: {
        name: "Title",
        text: "WURM",
        x: 0.1134,
        y: 0.0505,
        width: 0.7734,
        height: 0.0477,
        oneLine: true,
        font: "mplantin",
        size: 0.0477,
        color: "white",
        shadowX: 0.002,
        shadowY: 0.0015,
        kerning: 0.0134,
        align: "center",
      },
      type: {
        name: "Type",
        text: "{fontcolor#eeeeee}{fontsize-8}Artifact Creature {-} Wurm",
        //x: 0.126,
        x: 0.156,
        //y: 0.8753,
        y: 0.6539,
        width: 0.688,
        height: 0.0543,
        oneLine: true,
        size: 0.032,
        color: "white",
        shadowX: 0.002,
        shadowY: 0.0015,
      },
      rules: {
        name: "Rules Text",
        text: "{fontcolor#222222}{fontsize-8}{center} Deathtouch",
        x: 0.18,
        y: 0.7124,
        width: 0.64,
        height: 0.14,
        size: 0.0358,
      },
      pt: {
        name: "Power/Toughness",
        text: "3/3",
        x: 0.75,
        y: 0.8753,
        width: 0.1367,
        //height: 0.0543,
        height: 0.0429,
        //size: 0.042,
        size: 0.0429,
        oneLine: true,
        align: "center",
        color: "white",
        shadowX: 0.002,
        shadowY: 0.0015,
      },
    },
  },
};
const TITLE_FONT = "{fontcolor#eeeeee}{fontsize-4}";
const TYPE_FONT = "{fontcolor#eeeeee}{fontsize-4}";
const RULES_FONT = "{fontcolor#222222}{fontsize-10}";
const PT_FONT = "{fontcolor#eeeeee}{fontsize-4}";

function colorToFrame(c) {
  switch (c) {
    case "a":
      return "Artifact Frame";
    case "w":
      return "White Frame";
    case "u":
      return "Blue Frame";
    case "b":
      return "Black Frame";
    case "r":
      return "Red Frame";
    case "g":
      return "Green Frame";
    default:
      return "Coloreless Frame";
  }
}

const CREATURES = [
  {
    key: "ANGEL",
    color: "w",
    title: "ANGEL",
    type: "Creature {-} Angel",
    rules: "{center}Flying",
    pt: "4/4",
    artist: "James Child",
  },
  {
    key: "ANGEL2",
    color: "w",
    title: "ANGEL",
    type: "Creature {-} Angel",
    rules: "{center}Flying, vigilance",
    pt: "4/4",
    artist: "Marta Nael",
  },
  {
    key: "BIRD-W",
    color: "w",
    title: "BIRD",
    type: "Creature {-} Bird",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Heather Hudson",
  },
  {
    key: "CAT",
    color: "w",
    title: "CAT",
    type: "Creature {-} Cat",
    rules: "{i}The lion’s only loyalty is to its hunger.",
    pt: "2/2",
    artist: "Lucie Bilodeau",
  },
  {
    key: "GOAT",
    color: "w",
    title: "GOAT",
    type: "Creature {-} Goat",
    rules: "{i}Their skeletons can be found all over Skirk Ridge, tangled in each other’s horns.",
    pt: "0/1",
    artist: "Alexis Susani",
  },
  {
    key: "KNIGHT",
    color: "w",
    title: "KNIGHT",
    type: "Creature {-} Knight",
    rules: "{center}Vigilance",
    pt: "2/2",
    artist: "Adrian Smith",
  },
  {
    key: "SOLDIER",
    color: "w",
    title: "SOLDIER",
    type: "Creature {-} Soldier",
    rules: "{i}Duty brings them together. Loyalty keeps them together.",
    pt: "1/1",
    artist: "David A. Cherry",
  },
  {
    key: "SPIRIT",
    color: "w",
    title: "SPIRIT",
    type: "Creature {-} Spirit",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Jason A. Engle",
  },
  {
    key: "VAMPIRE",
    color: "w",
    title: "VAMPIRE",
    type: "Creature {-} Vampire",
    rules: "{center}Lifelink",
    pt: "1/1",
    artist: "Tommy Arnold",
  },
  {
    key: "DRAKE",
    color: "u",
    title: "DRAKE",
    type: "Creature {-} Drake",
    rules: "{center}Flying",
    pt: "2/2",
    artist: "Bayard Wu",
  },
  {
    key: "FAERIE",
    color: "u",
    title: "FAERIE",
    type: "Creature {-} Faerie",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Irina Nordsol",
  },
  {
    key: "ILLUSION",
    color: "u",
    title: "ILLUSION",
    type: "Creature {-} Illusion",
    rules: "{i}It may wear your face, but its mind is its own.",
    pt: "*/*",
    artist: "Khang Le",
  },
  {
    key: "GERM",
    color: "b",
    title: "GERM",
    type: "Creature {-} Germ",
    rules: "{i}A single germ can kill more soldiers than ten thousand blades.",
    pt: "0/0",
    artist: "Rogier van de Beek",
  },
  {
    key: "MARIT-LAGE",
    color: "b",
    title: "MARIT LAGE",
    type: "Legendary Creature {-} Avatar",
    rules: "{center}Flying, indestructible",
    pt: "20/20",
    artist: "Rogier van de Beek",
  },
  {
    key: "ZOMBIE",
    color: "b",
    title: "ZOMBIE",
    type: "Creature {-} Zombie",
    rules: "{i}The most battle-worn zombies are equal parts stich and stench.",
    pt: "2/2",
    artist: "Will Pheonix",
  },
  {
    key: "DRAGON",
    color: "r",
    title: "DRAGON",
    type: "Creature {-} Dragon",
    rules: "{center}Flying",
    pt: "5/5",
    artist: "Midjourney",
  },
  {
    key: "GOBLIN",
    color: "r",
    title: "GOBLIN",
    type: "Creature {-} Goblin",
    rules:
      "{i}Never underestimate the power of overwhelming stupidity in overwhelming numbers.",
    pt: "1/1",
    artist: "Thomas M. Baxa",
  },
  {
    key: "BEAST",
    color: "g",
    title: "BEAST",
    type: "Creature {-} Beast",
    rules: "{i}Every man has a wild beast within.",
    pt: "3/3",
    artist: "Omar Rayyan",
  },
  {
    key: "ELEPHANT",
    color: "g",
    title: "ELEPHANT",
    type: "Creature {-} Elephant",
    rules: "{i}Four gray trees and a long coiling snake. What am I?",
    pt: "3/3",
    artist: "Lucie Bilodeau",
  },
  {
    key: "PLANT",
    color: "g",
    title: "PLANT",
    type: "Creature {-} Plant",
    rules: "{i}Nature twists knots stronger than any rope.",
    pt: "0/1",
    artist: "Daren Bader",
  },
  {
    key: "PLANT2",
    color: "g",
    title: "PLANT",
    type: "Creature {-} Plant",
    rules: "{center}Defender",
    pt: "0/2",
    artist: "Jakub Kasper",
  },
  {
    key: "SAPROLING",
    color: "g",
    title: "SAPROLING",
    type: "Creature {-} Saproling",
    rules:
      "{i}The timeless, tireless jaws of nature shall one day devour us all.",
    pt: "1/1",
    artist: "Brad Rigney",
  },
  {
    key: "SQUIRREL",
    color: "g",
    title: "SQUIRREL",
    type: "Creature {-} Squirrel",
    rules: "{i}It’s surprising how well cute and vicious go together.",
    pt: "1/1",
    artist: "Ron Spencer",
  },
  {
    key: "INSECT",
    color: "g",
    title: "INSECT",
    type: "Creature {-} Insect",
    rules: "{i}If insects could talk, the world would be deafened.",
    pt: "1/1",
    artist: "Anthony S. Waters",
  },
  {
    key: "BEAR",
    color: "g",
    title: "BEAR",
    type: "Creature {-} Bear",
    rules: "{i}The magic of the forest leaves its mark on the animals who live there. The animals of the forest leave their mark on all who trespass.",
    pt: "2/2",
    artist: "Heather Hudson",
  },
  {
    key: "WOLF",
    color: "g",
    title: "WOLF",
    type: "Creature {-} Wolf",
    rules:
      "{i}Don't be afraid when you hear the wolves howl. Be afraid when you don't hear them at all.",
    pt: "2/2",
    artist: "Lucie Bilodeau",
  },
  {
    key: "CONSTRUCT",
    color: "a",
    title: "CONSTRUCT",
    type: "Artifact Creature {-} Construct",
    rules: "This creature gets +1/+1 for each artifact you control.",
    pt: "0/0",
    artist: "Matt Dixon",
  },
  {
    key: "GOLEM",
    color: "a",
    title: "GOLEM",
    type: "Artifact Creature {-} Golem",
    rules:
      "{i}Though it moves like a living thing, anyone can tell it lacks a soul, not to mention mercy.",
    pt: "3/3",
    artist: "Adam Rex",
  },
  {
    key: "SERVO",
    color: "a",
    title: "SERVO",
    type: "Artifact Creature {-} Servo",
    rules:
      "{i}Servos are often seen perched on the shoulders of their inventors, acting as a fashion statement as well as a useful extra hand.",
    pt: "1/1",
    artist: "Igor Kieryluk",
  },
  {
    key: "THOPTER",
    color: "a",
    title: "THOPTER",
    type: "Artifact Creature {-} Thopter",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Johan Grenier",
  },
  {
    key: "WURM-DT",
    color: "a",
    title: "WURM",
    type: "Artifact Creature {-} Wurm",
    rules: "{center}Deathtouch",
    pt: "3/3",
    artist: "Raymond Swanland",
  },
  {
    key: "WURM-LL",
    color: "a",
    title: "WURM",
    type: "Artifact Creature {-} Wurm",
    rules: "{center}Lifelink",
    pt: "3/3",
    artist: "Raymond Swanland",
  },
  {
    key: "INKLING",
    color: "w",
    color2: "b",
    title: "INKLING",
    type: "Creature {-} Inkling",
    rules: "{center}Flying",
    pt: "2/1",
    artist: "Unknown Artist",
  },
  {
    key: "SPIRIT-WB",
    color: "w",
    color2: "b",
    title: "SPIRIT",
    type: "Creature {-} Spirit",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Josh Hass",
  },
  {
    key: "PEST",
    color: "b",
    color2: "g",
    title: "PEST",
    type: "Creature {-} Pest",
    rules: "When this creature dies, you gain 1 life.",
    pt: "1/1",
    artist: "Ilse Gort",
  },
  {
    key: "SPIRIT-C",
    color: "c",
    title: "SPIRIT-C",
    type: "Creature {-} Spirit",
    rules: "{center}Flying",
    pt: "1/1",
    artist: "Hugh Jamieson",
  },
];

const OTHERS = [
  {
    key: "CLUE",
    color: "a",
    title: "CLUE",
    type: "Artifact {-} Clue",
    rules: "{2}, Sacrifice this artifact: Draw a card.",
    pt: "",
    artist: "John Avon",
  },
  {
    key: "FOOD",
    color: "a",
    title: "FOOD",
    type: "Artifact {-} Food",
    rules: "{2}, {oldtap}, Sacrifice this artifact: You gain 3 life.",
    pt: "",
    artist: "Steave Prescott",
  },
  {
    key: "POWERSTONE",
    color: "a",
    title: "POWERSTONE",
    type: "Artifact {-} Powerstone",
    rules:
      "{oldtap}: Add {c}. This mana can't be spent to cast nonartifact spells.",
    pt: "",
    artist: "David Auden Nash",
  },
  {
    key: "TREASURE",
    color: "a",
    title: "TREASURE",
    type: "Artifact {-} Treasure",
    rules: "{oldtap}, Sacrifice this artifact: Add one mana of any color.",
    pt: "",
    artist: "Dan Scott",
  },
];

const SPECIAL = [
  {
    key: "COPY",
    color: "c",
    title: "COPY",
    type: "Token",
    rules:
      "{i}This token can be used to represent a token that’s a copy of a permanent.",
    pt: "",
    artist: "Peter Mohrbacher",
  },
];

const cardsFinal = CREATURES.concat(OTHERS)
  .concat(SPECIAL)
  .map((card) => {
    let template = JSON.parse(JSON.stringify(TEMPLATE));
    template.key = card.key;
    template.data.frames = [
      {
        name: colorToFrame(card.color),
        src: `/img/frames/token/old/${card.color}.png`,
        masks: [],
      },
    ];
    if (card.color2) {
      template.data.frames.unshift({
        name: colorToFrame(card.color2),
        src: `/img/frames/token/old/${card.color2}.png`,
        masks: [
          {
            src: "/img/frames/maskRightHalf.png",
            name: "Right Half",
          },
        ],
      });
      template.data.frames.unshift({
        name: "Multicolored Frame",
        src: "/img/frames/token/old/m.png",
        masks: [{ src: "/img/frames/token/old/text.svg", name: "Rules" }],
      });
    }
    template.data.frames.unshift({
      name: "Black Extension",
      src: "/img/frames/margins/blackBorderExtension.png",
      bounds: {
        x: -0.044,
        y: -0.02857142857142857,
        width: 1.088,
        height: 1.0571428571428572,
      },
      masks: [],
    });

    template.data.text.title.text = `${TITLE_FONT}${card.title}`;
    template.data.text.type.text = `${TYPE_FONT}${card.type}`;
    template.data.text.rules.text = `${RULES_FONT}${card.rules}`;
    template.data.text.pt.text = `${PT_FONT}${card.pt}`;
    template.data.infoArtist = `${card.artist}`;
    template.data.artSource = `http://localhost:8080/local_art/${card.key}.png`;

    return template;
  });

let fs = require("fs");
fs.writeFile("cards.cardconjurer", JSON.stringify(cardsFinal), "utf8", () =>
  console.log("done " + cardsFinal.length)
);
