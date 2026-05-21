const STORAGE_KEY = "picture-aac-talker-v2";
const PROFILE_STORE_KEY = "picture-aac-talker-profiles-v1";
const MAX_LOCAL_STORAGE_WARNING_BYTES = 4 * 1024 * 1024;

const iconMap = {
  i: "&#128578;",
  you: "&#128073;",
  want: "&#129330;",
  go: "&#10145;",
  more: "&#10133;",
  done: "&#9989;",
  help: "&#127384;",
  stop: "&#9995;",
  yes: "&#128077;",
  no: "&#128078;",
  please: "&#128591;",
  thanks: "&#128155;",
  mom: "&#128105;",
  dad: "&#128104;",
  friend: "&#128101;",
  teacher: "&#129489;&#8205;&#127979;",
  doctor: "&#129658;",
  family: "&#128106;",
  eat: "&#127869;",
  drink: "&#129380;",
  play: "&#129513;",
  read: "&#128214;",
  look: "&#128064;",
  listen: "&#128066;",
  open: "&#128194;",
  close: "&#128213;",
  make: "&#128736;",
  like: "&#10084;",
  food: "&#127822;",
  water: "&#128167;",
  toy: "&#129528;",
  book: "&#128218;",
  music: "&#127925;",
  phone: "&#128241;",
  bathroom: "&#128699;",
  home: "&#127968;",
  school: "&#127979;",
  outside: "&#127795;",
  medicine: "&#128138;",
  bed: "&#128719;",
  happy: "&#128522;",
  sad: "&#9785;",
  mad: "&#128544;",
  scared: "&#128543;",
  tired: "&#128564;",
  sick: "&#129298;",
  hot: "&#128293;",
  cold: "&#10052;",
  good: "&#11088;",
  bad: "&#9888;",
  where: "&#10067;",
  when: "&#128338;",
  break: "&#9208;",
  pain: "&#129657;",
  quiet: "&#129323;",
  toilet: "&#128701;",
  car: "&#128663;",
  bus: "&#128652;",
  ride: "&#128690;",
  fast: "&#9889;",
  slow: "&#128012;",
  computer: "&#128187;",
  ipad: "&#128241;",
  iphone: "&#128242;",
  cup: "&#9749;",
  heart: "&#10084;",
  talk: "&#128172;",
  text: "&#128172;",
  safe: "&#9989;",
  shop: "&#128722;",
  color: "&#127912;",
  wash: "&#128703;",
  put: "&#128230;",
  turn: "&#8635;",
  work: "&#128188;",
  think: "&#129300;",
  back: "&#11013;",
  all: "&#128230;",
  some: "&#10133;",
  not: "&#128683;",
  question: "&#10067;",
  time: "&#128338;",
  end: "&#9989;",
  right: "&#128073;",
  wrong: "&#10060;",
  live: "&#127968;",
  say: "&#128172;",
  spell: "&#128292;",
  default: "&#9635;",
};

const starterPages = [
  page("core", "Core", [
    tile("I", "I", "i", "pronoun"),
    tile("you", "you", "you", "pronoun"),
    tile("my", "my", "i", "pronoun"),
    tile("it", "it", "default", "pronoun"),
    tile("we", "we", "friend", "pronoun"),
    tile("they", "they", "friend", "pronoun"),
    tile("want", "want", "want", "verb"),
    tile("need", "need", "help", "verb"),
    tile("like", "like", "like", "verb"),
    tile("feel", "feel", "talk", "verb"),
    tile("go", "go", "go", "verb"),
    tile("come", "come", "go", "verb"),
    tile("more", "more", "more", "core"),
    tile("all done", "all done", "done", "core"),
    tile("help", "help", "help", "core"),
    tile("stop", "stop", "stop", "core"),
    tile("yes", "yes", "yes", "social"),
    tile("no", "no", "no", "social"),
    tile("not", "not", "not", "core"),
    tile("please", "please", "please", "social"),
    tile("thank you", "thank you", "thanks", "social"),
    tile("what", "what", "question", "core"),
    tile("where", "where", "where", "core"),
    tile("who", "who", "question", "core"),
    tile("when", "when", "when", "core"),
    tile("look", "look", "look", "verb"),
    tile("listen", "listen", "listen", "verb"),
    tile("make", "make", "make", "verb"),
    tile("put", "put", "put", "verb"),
    tile("turn", "turn", "turn", "verb"),
    tile("open", "open", "open", "verb"),
    tile("in", "in", "open", "core"),
    tile("out", "out", "go", "core"),
    tile("on", "on", "default", "core"),
    tile("off", "off", "stop", "core"),
    tile("up", "up", "go", "core"),
  ]),
  page("people", "People", [
    tile("mom", "mom", "mom", "noun"),
    tile("dad", "dad", "dad", "noun"),
    tile("caregiver", "caregiver", "family", "noun"),
    tile("grandma", "grandma", "family", "noun"),
    tile("grandpa", "grandpa", "family", "noun"),
    tile("sibling", "sibling", "friend", "noun"),
    tile("friend", "friend", "friend", "noun"),
    tile("teacher", "teacher", "teacher", "noun"),
    tile("therapist", "therapist", "talk", "noun"),
    tile("doctor", "doctor", "doctor", "noun"),
    tile("nurse", "nurse", "doctor", "noun"),
    tile("family", "family", "family", "noun"),
    tile("class", "class", "school", "noun"),
    tile("group", "group", "friend", "noun"),
    tile("helper", "helper", "help", "noun"),
    tile("neighbor", "neighbor", "home", "noun"),
    tile("person", "person", "friend", "noun"),
    tile("text mom", "text mom", "text", "social"),
    tile("call dad", "call dad", "phone", "social"),
    tile("send message", "send message", "text", "social"),
    tile("I am safe", "I am safe", "safe", "social"),
    tile("me", "me", "i", "pronoun"),
    tile("my", "my", "i", "pronoun"),
    tile("your", "your", "you", "pronoun"),
    tile("we", "we", "friend", "pronoun"),
    tile("they", "they", "friend", "pronoun"),
    tile("name", "name", "default", "noun"),
    tile("boy", "boy", "friend", "noun"),
    tile("girl", "girl", "friend", "noun"),
    tile("adult", "adult", "family", "noun"),
    tile("child", "child", "friend", "noun"),
    tile("student", "student", "school", "noun"),
    tile("SLP", "speech therapist", "talk", "noun"),
    tile("aide", "aide", "help", "noun"),
  ]),
  page("actions", "Actions", [
    tile("eat", "eat", "eat", "verb"),
    tile("drink", "drink", "drink", "verb"),
    tile("play", "play", "play", "verb"),
    tile("read", "read", "read", "verb"),
    tile("look", "look", "look", "verb"),
    tile("listen", "listen", "listen", "verb"),
    tile("open", "open", "open", "verb"),
    tile("close", "close", "close", "verb"),
    tile("make", "make", "make", "verb"),
    tile("have", "have", "want", "verb"),
    tile("like", "like", "like", "verb"),
    tile("feel", "feel", "talk", "verb"),
    tile("think", "think", "think", "verb"),
    tile("know", "know", "think", "verb"),
    tile("choose", "choose", "yes", "verb"),
    tile("try", "try", "go", "verb"),
    tile("wait", "wait", "time", "verb"),
    tile("turn", "turn", "turn", "verb"),
    tile("put", "put", "put", "verb"),
    tile("get", "get", "want", "verb"),
    tile("give", "give", "please", "verb"),
    tile("take", "take", "put", "verb"),
    tile("find", "find", "where", "verb"),
    tile("work", "work", "work", "verb"),
    tile("wash", "wash", "wash", "verb"),
    tile("rest", "rest", "bed", "verb"),
    tile("sleep", "sleep", "sleep", "verb"),
    tile("watch", "watch", "look", "verb"),
    tile("ride", "ride", "ride", "verb"),
    tile("write", "write", "make", "verb"),
    tile("draw", "draw", "color", "verb"),
    tile("color", "color", "color", "verb"),
    tile("clean", "clean", "wash", "verb"),
    tile("fix", "fix", "work", "verb"),
    tile("save", "save", "safe", "verb"),
    tile("send", "send", "text", "verb"),
  ]),
  page("things", "Things", [
    tile("food", "food", "food", "noun"),
    tile("water", "water", "water", "noun"),
    tile("toy", "toy", "toy", "noun"),
    tile("book", "book", "book", "noun"),
    tile("music", "music", "music", "noun"),
    tile("phone", "phone", "phone", "noun"),
    tile("bathroom", "bathroom", "bathroom", "noun"),
    tile("home", "home", "home", "noun"),
    tile("school", "school", "school", "noun"),
    tile("outside", "outside", "outside", "noun"),
    tile("medicine", "medicine", "medicine", "noun"),
    tile("bed", "bed", "bed", "noun"),
    tile("snack", "snack", "food", "noun"),
    tile("juice", "juice", "cup", "noun"),
    tile("cup", "cup", "cup", "noun"),
    tile("spoon", "spoon", "eat", "noun"),
    tile("plate", "plate", "food", "noun"),
    tile("chair", "chair", "default", "noun"),
    tile("table", "table", "food", "noun"),
    tile("door", "door", "open", "noun"),
    tile("window", "window", "look", "noun"),
    tile("light", "light", "look", "noun"),
    tile("blanket", "blanket", "bed", "noun"),
    tile("pillow", "pillow", "bed", "noun"),
    tile("backpack", "backpack", "school", "noun"),
    tile("paper", "paper", "book", "noun"),
    tile("pencil", "pencil", "make", "noun"),
    tile("crayon", "crayon", "color", "noun"),
    tile("ball", "ball", "play", "noun"),
    tile("game", "game", "play", "noun"),
    tile("car", "car", "car", "noun"),
    tile("bus", "bus", "bus", "noun"),
    tile("glasses", "glasses", "look", "noun"),
    tile("hearing aid", "hearing aid", "listen", "noun"),
    tile("wheelchair", "wheelchair", "ride", "noun"),
    tile("charger", "charger", "phone", "noun"),
  ]),
  page("feelings", "Feelings", [
    tile("happy", "happy", "happy", "adjective"),
    tile("sad", "sad", "sad", "adjective"),
    tile("mad", "mad", "mad", "adjective"),
    tile("scared", "scared", "scared", "adjective"),
    tile("tired", "tired", "tired", "adjective"),
    tile("sick", "sick", "sick", "adjective"),
    tile("hungry", "hungry", "eat", "adjective"),
    tile("thirsty", "thirsty", "drink", "adjective"),
    tile("hot", "hot", "hot", "adjective"),
    tile("cold", "cold", "cold", "adjective"),
    tile("good", "good", "good", "adjective"),
    tile("bad", "bad", "bad", "adjective"),
    tile("excited", "excited", "happy", "adjective"),
    tile("worried", "worried", "scared", "adjective"),
    tile("frustrated", "frustrated", "mad", "adjective"),
    tile("bored", "bored", "bad", "adjective"),
    tile("calm", "calm", "quiet", "adjective"),
    tile("proud", "proud", "good", "adjective"),
    tile("confused", "confused", "question", "adjective"),
    tile("overwhelmed", "overwhelmed", "break", "adjective"),
    tile("lonely", "lonely", "sad", "adjective"),
    tile("safe", "safe", "safe", "adjective"),
    tile("unsafe", "unsafe", "bad", "adjective"),
    tile("too loud", "too loud", "listen", "adjective"),
    tile("too bright", "too bright", "look", "adjective"),
    tile("pain", "pain", "pain", "noun"),
    tile("itchy", "itchy", "bad", "adjective"),
    tile("dizzy", "dizzy", "sick", "adjective"),
    tile("nervous", "nervous", "scared", "adjective"),
    tile("comfortable", "comfortable", "good", "adjective"),
    tile("uncomfortable", "uncomfortable", "bad", "adjective"),
    tile("I need quiet", "I need quiet", "quiet", "core"),
    tile("I need a break", "I need a break", "break", "core"),
    tile("my body hurts", "my body hurts", "pain", "core"),
    tile("I feel better", "I feel better", "good", "core"),
    tile("I feel worse", "I feel worse", "bad", "core"),
  ]),
  page("places", "Places", [
    tile("in", "in", "open", "core"),
    tile("out", "out", "go", "core"),
    tile("up", "up", "go", "core"),
    tile("down", "down", "go", "core"),
    tile("on", "on", "default", "core"),
    tile("off", "off", "stop", "core"),
    tile("here", "here", "default", "core"),
    tile("there", "there", "default", "core"),
    tile("inside", "inside", "home", "core"),
    tile("outside", "outside", "outside", "core"),
    tile("where", "where", "where", "core"),
    tile("when", "when", "when", "core"),
    tile("bathroom", "bathroom", "bathroom", "noun"),
    tile("bedroom", "bedroom", "bed", "noun"),
    tile("kitchen", "kitchen", "food", "noun"),
    tile("living room", "living room", "home", "noun"),
    tile("classroom", "classroom", "school", "noun"),
    tile("therapy", "therapy", "talk", "noun"),
    tile("playground", "playground", "play", "noun"),
    tile("park", "park", "outside", "noun"),
    tile("store", "store", "home", "noun"),
    tile("restaurant", "restaurant", "food", "noun"),
    tile("library", "library", "book", "noun"),
    tile("doctor office", "doctor office", "doctor", "noun"),
    tile("hospital", "hospital", "doctor", "noun"),
    tile("car", "car", "car", "noun"),
    tile("bus", "bus", "bus", "noun"),
    tile("pool", "pool", "water", "noun"),
    tile("gym", "gym", "play", "noun"),
    tile("office", "office", "work", "noun"),
    tile("hallway", "hallway", "go", "noun"),
    tile("parking lot", "parking lot", "car", "noun"),
    tile("near", "near", "here", "core"),
    tile("far", "far", "there", "core"),
    tile("first", "first", "yes", "core"),
    tile("next", "next", "go", "core"),
  ]),
];

const phraseDefaults = ["I want help", "I need a break", "I am all done", "Can you play with me"];
const situationWords = {
  meal: ["eat", "drink", "food", "water", "more", "all done", "hungry", "thirsty", "please", "thank you"],
  school: ["teacher", "school", "book", "read", "listen", "look", "help", "break", "yes", "no"],
  play: ["play", "toy", "music", "book", "go", "more", "stop", "like", "friend", "outside"],
  feelings: ["happy", "sad", "mad", "scared", "tired", "sick", "good", "bad", "help", "stop"],
  bathroom: ["bathroom", "toilet", "help", "go", "all done", "yes", "no", "please"],
  pain: ["sick", "pain", "doctor", "medicine", "help", "stop", "where", "bad"],
  home: ["home", "mom", "dad", "family", "bed", "phone", "computer", "ipad", "iphone"],
};

const expandedCoreNineByNineTiles = [
  tile("I", "I", "i", "pronoun"),
  tile("you", "you", "you", "pronoun"),
  tile("my", "my", "i", "pronoun"),
  tile("it", "it", "default", "pronoun"),
  tile("we", "we", "friend", "pronoun"),
  tile("they", "they", "friend", "pronoun"),
  tile("he", "he", "you", "pronoun"),
  tile("she", "she", "i", "pronoun"),
  tile("me", "me", "i", "pronoun"),
  tile("want", "want", "want", "verb"),
  tile("need", "need", "help", "verb"),
  tile("like", "like", "like", "verb"),
  tile("feel", "feel", "talk", "verb"),
  tile("think", "think", "think", "verb"),
  tile("know", "know", "think", "verb"),
  tile("have", "have", "want", "verb"),
  tile("get", "get", "want", "verb"),
  tile("make", "make", "make", "verb"),
  tile("go", "go", "go", "verb"),
  tile("come", "come", "go", "verb"),
  tile("look", "look", "look", "verb"),
  tile("listen", "listen", "listen", "verb"),
  tile("read", "read", "read", "verb"),
  tile("watch", "watch", "look", "verb"),
  tile("eat", "eat", "eat", "verb"),
  tile("drink", "drink", "drink", "verb"),
  tile("play", "play", "play", "verb"),
  tile("more", "more", "more", "core"),
  tile("all done", "all done", "done", "core"),
  tile("help", "help", "help", "core"),
  tile("stop", "stop", "stop", "core"),
  tile("yes", "yes", "yes", "social"),
  tile("no", "no", "no", "social"),
  tile("not", "not", "not", "core"),
  tile("please", "please", "please", "social"),
  tile("thank you", "thank you", "thanks", "social"),
  tile("what", "what", "question", "core"),
  tile("where", "where", "where", "core"),
  tile("who", "who", "question", "core"),
  tile("when", "when", "when", "core"),
  tile("why", "why", "question", "core"),
  tile("how", "how", "question", "core"),
  tile("which", "which", "question", "core"),
  tile("question", "question", "question", "core"),
  tile("answer", "answer", "yes", "core"),
  tile("in", "in", "open", "core"),
  tile("out", "out", "go", "core"),
  tile("on", "on", "default", "core"),
  tile("off", "off", "stop", "core"),
  tile("up", "up", "go", "core"),
  tile("down", "down", "go", "core"),
  tile("here", "here", "default", "core"),
  tile("there", "there", "default", "core"),
  tile("away", "away", "go", "core"),
  tile("open", "open", "open", "verb"),
  tile("close", "close", "close", "verb"),
  tile("put", "put", "put", "verb"),
  tile("turn", "turn", "turn", "verb"),
  tile("give", "give", "please", "verb"),
  tile("take", "take", "put", "verb"),
  tile("find", "find", "where", "verb"),
  tile("work", "work", "work", "verb"),
  tile("wait", "wait", "time", "verb"),
  tile("good", "good", "good", "adjective"),
  tile("bad", "bad", "bad", "adjective"),
  tile("big", "big", "big", "adjective"),
  tile("little", "little", "default", "adjective"),
  tile("fast", "fast", "fast", "adjective"),
  tile("slow", "slow", "slow", "adjective"),
  tile("hot", "hot", "hot", "adjective"),
  tile("cold", "cold", "cold", "adjective"),
  tile("fun", "fun", "happy", "adjective"),
  tile("mom", "mom", "mom", "noun"),
  tile("dad", "dad", "dad", "noun"),
  tile("friend", "friend", "friend", "noun"),
  tile("teacher", "teacher", "teacher", "noun"),
  tile("home", "home", "home", "noun"),
  tile("school", "school", "school", "noun"),
  tile("bathroom", "bathroom", "bathroom", "noun"),
  tile("food", "food", "food", "noun"),
  tile("water", "water", "water", "noun"),
];

const starterBoards = [
  {
    id: "full-core",
    name: "6 x 6 Starter Core",
    description: "A broad everyday starter with a full 36-tile core page plus people, actions, things, feelings, and places.",
    targets: [],
    extraPages: [],
  },
  {
    id: "expanded-core-9x9",
    name: "9 x 9 Expanded Core",
    description: "A denser 81-tile primary core page for users who can scan more vocabulary at once.",
    columns: 9,
    tileSize: "dense",
    pages: [page("core", "Core", expandedCoreNineByNineTiles), ...starterPages.slice(1)],
    targets: [],
    extraPages: [],
  },
  {
    id: "first-words",
    name: "First Words",
    description: "A small beginning set for requesting, refusing, stopping, and getting help.",
    targets: ["I", "you", "want", "more", "go", "stop", "help", "yes", "no", "please", "all done", "play", "eat", "drink"],
    extraPages: [],
  },
  {
    id: "lamp-style-practice",
    name: "Vocabulary Builder Practice",
    description: "A LAMP-inspired target list similar to public examples, keeping positions stable while reducing distraction.",
    targets: ["my", "up", "down", "off", "on", "play", "more", "go", "eat", "drink", "turn"],
    extraPages: [page("practice", "Practice", [tile("turn", "turn", "go", "verb")])],
  },
  {
    id: "mealtime",
    name: "Mealtime",
    description: "Food, drinks, asking for more, refusing, and finishing.",
    targets: ["I", "want", "eat", "drink", "food", "water", "more", "all done", "hungry", "thirsty", "yes", "no", "please", "thank you", "help"],
    extraPages: [
      page("mealtime", "Mealtime", [
        tile("snack", "snack", "food", "noun"),
        tile("juice", "juice", "cup", "noun"),
        tile("milk", "milk", "cup", "noun"),
        tile("spoon", "spoon", "eat", "noun"),
        tile("finished", "finished", "done", "core"),
        tile("yuck", "yuck", "bad", "social"),
      ]),
    ],
  },
  {
    id: "play",
    name: "Play",
    description: "Play requests, social play, turn-taking, and preferred activities.",
    targets: ["I", "you", "want", "play", "toy", "music", "book", "go", "more", "stop", "like", "friend", "outside", "yes", "no", "help"],
    extraPages: [
      page("play-choices", "Play Choices", [
        tile("my turn", "my turn", "i", "core"),
        tile("your turn", "your turn", "you", "core"),
        tile("again", "again", "more", "core"),
        tile("different", "different", "where", "core"),
        tile("game", "game", "play", "noun"),
        tile("song", "song", "music", "noun"),
      ]),
    ],
  },
  {
    id: "school",
    name: "School",
    description: "Classroom participation, asking for help, breaks, and learning routines.",
    targets: ["I", "teacher", "school", "book", "read", "listen", "look", "help", "break", "yes", "no", "please", "where", "when", "good", "bad"],
    extraPages: [
      page("school-tools", "School Tools", [
        tile("paper", "paper", "book", "noun"),
        tile("pencil", "pencil", "make", "noun"),
        tile("computer", "computer", "computer", "noun"),
        tile("tablet", "tablet", "ipad", "noun"),
        tile("quiet", "quiet", "quiet", "adjective"),
        tile("finished", "finished", "done", "core"),
      ]),
    ],
  },
  {
    id: "feelings-needs",
    name: "Feelings & Needs",
    description: "Emotions, body needs, sensory needs, and repair phrases.",
    targets: ["I", "feel", "happy", "sad", "mad", "scared", "tired", "sick", "hot", "cold", "good", "bad", "help", "stop", "break", "quiet"],
    extraPages: [
      page("needs", "Needs", [
        tile("I need quiet", "I need quiet", "quiet", "core"),
        tile("I need a break", "I need a break", "break", "core"),
        tile("too loud", "too loud", "listen", "adjective"),
        tile("too bright", "too bright", "look", "adjective"),
        tile("hug", "hug", "heart", "noun"),
        tile("space", "space", "stop", "noun"),
      ]),
    ],
  },
  {
    id: "bathroom-care",
    name: "Bathroom & Care",
    description: "Bathroom, hygiene, help, and privacy needs.",
    targets: ["I", "go", "bathroom", "help", "yes", "no", "please", "all done", "stop", "more", "where", "home"],
    extraPages: [
      page("care", "Care", [
        tile("toilet", "toilet", "toilet", "noun"),
        tile("wash hands", "wash hands", "water", "verb"),
        tile("clean", "clean", "good", "adjective"),
        tile("privacy", "privacy", "stop", "noun"),
        tile("change", "change", "make", "verb"),
        tile("wait", "wait", "when", "verb"),
      ]),
    ],
  },
  {
    id: "sick-pain",
    name: "Sick or Pain",
    description: "Pain, illness, medicine, doctor, and locating what hurts.",
    targets: ["I", "feel", "sick", "bad", "help", "stop", "doctor", "medicine", "where", "yes", "no", "please", "home", "bed"],
    extraPages: [
      page("pain", "Pain", [
        tile("pain", "pain", "pain", "noun"),
        tile("my body hurts", "my body hurts", "pain", "core"),
        tile("head", "head", "i", "noun"),
        tile("belly", "belly", "food", "noun"),
        tile("throat", "throat", "talk", "noun"),
        tile("rest", "rest", "bed", "verb"),
      ]),
    ],
  },
  {
    id: "devices-media",
    name: "Devices & Media",
    description: "iPad, iPhone, computer, music, videos, and tech help.",
    targets: ["I", "want", "more", "stop", "open", "close", "music", "phone", "help", "yes", "no", "please", "like", "look", "listen"],
    extraPages: [
      page("devices", "Devices", [
        tile("iPad", "iPad", "ipad", "noun"),
        tile("iPhone", "iPhone", "iphone", "noun"),
        tile("computer", "computer", "computer", "noun"),
        tile("video", "video", "look", "noun"),
        tile("volume up", "volume up", "listen", "core"),
        tile("volume down", "volume down", "quiet", "core"),
      ]),
    ],
  },
];

const wordBankCategories = [
  {
    id: "core",
    name: "Core Words",
    words: [
      wordBankItem("I", "i", "pronoun"),
      wordBankItem("you", "you", "pronoun"),
      wordBankItem("me", "i", "pronoun"),
      wordBankItem("my", "i", "pronoun"),
      wordBankItem("want", "want", "verb"),
      wordBankItem("more", "more", "core"),
      wordBankItem("go", "go", "verb"),
      wordBankItem("stop", "stop", "core"),
      wordBankItem("help", "help", "core"),
      wordBankItem("all done", "done", "core"),
      wordBankItem("yes", "yes", "social"),
      wordBankItem("no", "no", "social"),
      wordBankItem("please", "please", "social"),
      wordBankItem("thank you", "thanks", "social"),
      wordBankItem("open", "open", "verb"),
      wordBankItem("close", "close", "verb"),
      wordBankItem("here", "default", "core"),
      wordBankItem("there", "default", "core"),
      wordBankItem("where", "where", "core"),
      wordBankItem("when", "when", "core"),
      wordBankItem("again", "more", "core"),
      wordBankItem("different", "where", "core"),
      wordBankItem("wait", "when", "verb"),
      wordBankItem("break", "break", "core"),
    ],
  },
  {
    id: "people",
    name: "People",
    words: [
      wordBankItem("mom", "mom", "noun"),
      wordBankItem("dad", "dad", "noun"),
      wordBankItem("family", "family", "noun"),
      wordBankItem("friend", "friend", "noun"),
      wordBankItem("teacher", "teacher", "noun"),
      wordBankItem("doctor", "doctor", "noun"),
      wordBankItem("therapist", "talk", "noun"),
      wordBankItem("nurse", "doctor", "noun"),
      wordBankItem("brother", "friend", "noun"),
      wordBankItem("sister", "friend", "noun"),
      wordBankItem("grandma", "family", "noun"),
      wordBankItem("grandpa", "family", "noun"),
      wordBankItem("class", "school", "noun"),
      wordBankItem("group", "friend", "noun"),
      wordBankItem("turn", "go", "core"),
      wordBankItem("my turn", "i", "core"),
      wordBankItem("your turn", "you", "core"),
      wordBankItem("listen to me", "talk", "social"),
    ],
  },
  {
    id: "actions",
    name: "Actions",
    words: [
      wordBankItem("eat", "eat", "verb"),
      wordBankItem("drink", "drink", "verb"),
      wordBankItem("play", "play", "verb"),
      wordBankItem("read", "read", "verb"),
      wordBankItem("look", "look", "verb"),
      wordBankItem("listen", "listen", "verb"),
      wordBankItem("make", "make", "verb"),
      wordBankItem("have", "want", "verb"),
      wordBankItem("like", "like", "verb"),
      wordBankItem("feel", "talk", "verb"),
      wordBankItem("sit", "default", "verb"),
      wordBankItem("stand", "go", "verb"),
      wordBankItem("walk", "go", "verb"),
      wordBankItem("run", "go", "verb"),
      wordBankItem("wash", "water", "verb"),
      wordBankItem("write", "make", "verb"),
      wordBankItem("draw", "make", "verb"),
      wordBankItem("choose", "yes", "verb"),
    ],
  },
  {
    id: "food",
    name: "Food and Drink",
    words: [
      wordBankItem("food", "food", "noun"),
      wordBankItem("water", "water", "noun"),
      wordBankItem("snack", "food", "noun"),
      wordBankItem("juice", "cup", "noun"),
      wordBankItem("milk", "cup", "noun"),
      wordBankItem("cup", "cup", "noun"),
      wordBankItem("spoon", "eat", "noun"),
      wordBankItem("breakfast", "food", "noun"),
      wordBankItem("lunch", "food", "noun"),
      wordBankItem("dinner", "food", "noun"),
      wordBankItem("hungry", "eat", "adjective"),
      wordBankItem("thirsty", "drink", "adjective"),
      wordBankItem("hot", "hot", "adjective"),
      wordBankItem("cold", "cold", "adjective"),
      wordBankItem("yuck", "bad", "social"),
      wordBankItem("good", "good", "adjective"),
    ],
  },
  {
    id: "feelings",
    name: "Feelings and Needs",
    words: [
      wordBankItem("happy", "happy", "adjective"),
      wordBankItem("sad", "sad", "adjective"),
      wordBankItem("mad", "mad", "adjective"),
      wordBankItem("scared", "scared", "adjective"),
      wordBankItem("tired", "tired", "adjective"),
      wordBankItem("sick", "sick", "adjective"),
      wordBankItem("good", "good", "adjective"),
      wordBankItem("bad", "bad", "adjective"),
      wordBankItem("quiet", "quiet", "adjective"),
      wordBankItem("safe", "safe", "adjective"),
      wordBankItem("pain", "pain", "noun"),
      wordBankItem("I need a break", "break", "core"),
      wordBankItem("too loud", "listen", "adjective"),
      wordBankItem("too bright", "look", "adjective"),
      wordBankItem("I need help", "help", "core"),
      wordBankItem("I am safe", "safe", "social"),
    ],
  },
  {
    id: "school",
    name: "School",
    words: [
      wordBankItem("school", "school", "noun"),
      wordBankItem("teacher", "teacher", "noun"),
      wordBankItem("book", "book", "noun"),
      wordBankItem("paper", "book", "noun"),
      wordBankItem("pencil", "make", "noun"),
      wordBankItem("computer", "computer", "noun"),
      wordBankItem("tablet", "ipad", "noun"),
      wordBankItem("read", "read", "verb"),
      wordBankItem("write", "make", "verb"),
      wordBankItem("listen", "listen", "verb"),
      wordBankItem("look", "look", "verb"),
      wordBankItem("finished", "done", "core"),
      wordBankItem("question", "where", "core"),
      wordBankItem("answer", "yes", "core"),
      wordBankItem("quiet", "quiet", "adjective"),
      wordBankItem("break", "break", "core"),
    ],
  },
  {
    id: "play",
    name: "Play and Leisure",
    words: [
      wordBankItem("play", "play", "verb"),
      wordBankItem("toy", "toy", "noun"),
      wordBankItem("game", "play", "noun"),
      wordBankItem("music", "music", "noun"),
      wordBankItem("song", "music", "noun"),
      wordBankItem("book", "book", "noun"),
      wordBankItem("outside", "outside", "noun"),
      wordBankItem("friend", "friend", "noun"),
      wordBankItem("again", "more", "core"),
      wordBankItem("my turn", "i", "core"),
      wordBankItem("your turn", "you", "core"),
      wordBankItem("different", "where", "core"),
      wordBankItem("fun", "happy", "adjective"),
      wordBankItem("stop", "stop", "core"),
      wordBankItem("more", "more", "core"),
      wordBankItem("all done", "done", "core"),
    ],
  },
  {
    id: "body-care",
    name: "Body and Care",
    words: [
      wordBankItem("bathroom", "bathroom", "noun"),
      wordBankItem("toilet", "toilet", "noun"),
      wordBankItem("wash hands", "water", "verb"),
      wordBankItem("medicine", "medicine", "noun"),
      wordBankItem("doctor", "doctor", "noun"),
      wordBankItem("bed", "bed", "noun"),
      wordBankItem("rest", "bed", "verb"),
      wordBankItem("pain", "pain", "noun"),
      wordBankItem("head", "i", "noun"),
      wordBankItem("belly", "food", "noun"),
      wordBankItem("throat", "talk", "noun"),
      wordBankItem("hot", "hot", "adjective"),
      wordBankItem("cold", "cold", "adjective"),
      wordBankItem("sick", "sick", "adjective"),
      wordBankItem("privacy", "stop", "noun"),
      wordBankItem("help", "help", "core"),
    ],
  },
  {
    id: "places-devices",
    name: "Places and Devices",
    words: [
      wordBankItem("home", "home", "noun"),
      wordBankItem("school", "school", "noun"),
      wordBankItem("outside", "outside", "noun"),
      wordBankItem("car", "car", "noun"),
      wordBankItem("inside", "home", "core"),
      wordBankItem("there", "default", "core"),
      wordBankItem("here", "default", "core"),
      wordBankItem("phone", "phone", "noun"),
      wordBankItem("iPad", "ipad", "noun"),
      wordBankItem("iPhone", "iphone", "noun"),
      wordBankItem("computer", "computer", "noun"),
      wordBankItem("video", "look", "noun"),
      wordBankItem("text mom", "text", "social"),
      wordBankItem("send message", "text", "social"),
      wordBankItem("volume up", "listen", "core"),
      wordBankItem("volume down", "quiet", "core"),
    ],
  },
];

const expandedWordBankCategories = [
  {
    id: "clothing",
    name: "Clothing",
    words: [
      wordBankItem("shirt", "default", "noun"),
      wordBankItem("pants", "default", "noun"),
      wordBankItem("shorts", "default", "noun"),
      wordBankItem("dress", "default", "noun"),
      wordBankItem("skirt", "default", "noun"),
      wordBankItem("socks", "default", "noun"),
      wordBankItem("shoes", "go", "noun"),
      wordBankItem("boots", "go", "noun"),
      wordBankItem("coat", "cold", "noun"),
      wordBankItem("jacket", "cold", "noun"),
      wordBankItem("hat", "default", "noun"),
      wordBankItem("gloves", "cold", "noun"),
      wordBankItem("pajamas", "bed", "noun"),
      wordBankItem("swimsuit", "water", "noun"),
      wordBankItem("backpack", "school", "noun"),
      wordBankItem("glasses", "look", "noun"),
      wordBankItem("put on", "put", "verb"),
      wordBankItem("take off", "off", "verb"),
      wordBankItem("too tight", "bad", "adjective"),
      wordBankItem("comfortable", "good", "adjective"),
    ],
  },
  {
    id: "toys-games",
    name: "Toys and Games",
    words: [
      wordBankItem("ball", "play", "noun"),
      wordBankItem("blocks", "make", "noun"),
      wordBankItem("doll", "toy", "noun"),
      wordBankItem("truck", "car", "noun"),
      wordBankItem("train", "car", "noun"),
      wordBankItem("puzzle", "where", "noun"),
      wordBankItem("bubbles", "water", "noun"),
      wordBankItem("cards", "play", "noun"),
      wordBankItem("board game", "play", "noun"),
      wordBankItem("video game", "computer", "noun"),
      wordBankItem("swing", "go", "noun"),
      wordBankItem("slide", "go", "noun"),
      wordBankItem("sandbox", "outside", "noun"),
      wordBankItem("jungle gym", "outside", "noun"),
      wordBankItem("seesaw", "play", "noun"),
      wordBankItem("monkey bars", "play", "noun"),
      wordBankItem("my turn", "i", "core"),
      wordBankItem("your turn", "you", "core"),
      wordBankItem("play again", "more", "core"),
      wordBankItem("I win", "happy", "social"),
    ],
  },
  {
    id: "food-expanded",
    name: "More Food",
    words: [
      wordBankItem("apple", "food", "noun"),
      wordBankItem("banana", "food", "noun"),
      wordBankItem("orange", "food", "noun"),
      wordBankItem("grapes", "food", "noun"),
      wordBankItem("strawberry", "food", "noun"),
      wordBankItem("carrot", "food", "noun"),
      wordBankItem("corn", "food", "noun"),
      wordBankItem("potato", "food", "noun"),
      wordBankItem("broccoli", "food", "noun"),
      wordBankItem("chicken", "food", "noun"),
      wordBankItem("fish", "food", "noun"),
      wordBankItem("rice", "food", "noun"),
      wordBankItem("noodles", "food", "noun"),
      wordBankItem("pizza", "food", "noun"),
      wordBankItem("taco", "food", "noun"),
      wordBankItem("sandwich", "food", "noun"),
      wordBankItem("soup", "food", "noun"),
      wordBankItem("crackers", "food", "noun"),
      wordBankItem("chips", "food", "noun"),
      wordBankItem("cookie", "food", "noun"),
      wordBankItem("ice cream", "cold", "noun"),
      wordBankItem("ketchup", "food", "noun"),
      wordBankItem("cheese", "food", "noun"),
      wordBankItem("yogurt", "cup", "noun"),
    ],
  },
  {
    id: "kitchen-dishes",
    name: "Kitchen and Dishes",
    words: [
      wordBankItem("plate", "food", "noun"),
      wordBankItem("bowl", "food", "noun"),
      wordBankItem("fork", "eat", "noun"),
      wordBankItem("spoon", "eat", "noun"),
      wordBankItem("knife", "eat", "noun"),
      wordBankItem("napkin", "default", "noun"),
      wordBankItem("straw", "drink", "noun"),
      wordBankItem("sink", "water", "noun"),
      wordBankItem("fridge", "cold", "noun"),
      wordBankItem("microwave", "hot", "noun"),
      wordBankItem("oven", "hot", "noun"),
      wordBankItem("toaster", "hot", "noun"),
      wordBankItem("blender", "make", "noun"),
      wordBankItem("dishwasher", "water", "noun"),
      wordBankItem("wash dishes", "wash", "verb"),
      wordBankItem("set table", "make", "verb"),
      wordBankItem("clean up", "good", "verb"),
      wordBankItem("spill", "bad", "noun"),
    ],
  },
  {
    id: "home-rooms",
    name: "Home and Rooms",
    words: [
      wordBankItem("house", "home", "noun"),
      wordBankItem("bedroom", "bed", "noun"),
      wordBankItem("bathroom", "bathroom", "noun"),
      wordBankItem("kitchen", "food", "noun"),
      wordBankItem("living room", "home", "noun"),
      wordBankItem("garage", "car", "noun"),
      wordBankItem("door", "open", "noun"),
      wordBankItem("window", "look", "noun"),
      wordBankItem("chair", "default", "noun"),
      wordBankItem("table", "food", "noun"),
      wordBankItem("couch", "home", "noun"),
      wordBankItem("bed", "bed", "noun"),
      wordBankItem("blanket", "bed", "noun"),
      wordBankItem("pillow", "bed", "noun"),
      wordBankItem("light", "look", "noun"),
      wordBankItem("fan", "cold", "noun"),
      wordBankItem("remote", "phone", "noun"),
      wordBankItem("trash", "bad", "noun"),
    ],
  },
  {
    id: "bathroom-toiletries",
    name: "Bathroom and Toiletries",
    words: [
      wordBankItem("soap", "wash", "noun"),
      wordBankItem("shampoo", "wash", "noun"),
      wordBankItem("toothbrush", "good", "noun"),
      wordBankItem("toothpaste", "good", "noun"),
      wordBankItem("towel", "water", "noun"),
      wordBankItem("washcloth", "wash", "noun"),
      wordBankItem("diaper", "default", "noun"),
      wordBankItem("wipes", "wash", "noun"),
      wordBankItem("brush hair", "make", "verb"),
      wordBankItem("comb", "make", "noun"),
      wordBankItem("lotion", "good", "noun"),
      wordBankItem("bandage", "pain", "noun"),
      wordBankItem("wash face", "wash", "verb"),
      wordBankItem("brush teeth", "good", "verb"),
      wordBankItem("take bath", "water", "verb"),
      wordBankItem("take shower", "water", "verb"),
      wordBankItem("I need privacy", "stop", "core"),
      wordBankItem("I need help", "help", "core"),
    ],
  },
  {
    id: "body-health",
    name: "Body and Health",
    words: [
      wordBankItem("head", "i", "noun"),
      wordBankItem("hair", "i", "noun"),
      wordBankItem("eyes", "look", "noun"),
      wordBankItem("ears", "listen", "noun"),
      wordBankItem("nose", "i", "noun"),
      wordBankItem("mouth", "talk", "noun"),
      wordBankItem("teeth", "good", "noun"),
      wordBankItem("hand", "help", "noun"),
      wordBankItem("arm", "help", "noun"),
      wordBankItem("leg", "go", "noun"),
      wordBankItem("foot", "go", "noun"),
      wordBankItem("back", "i", "noun"),
      wordBankItem("belly", "food", "noun"),
      wordBankItem("hurt", "pain", "verb"),
      wordBankItem("itch", "bad", "verb"),
      wordBankItem("cough", "sick", "noun"),
      wordBankItem("fever", "hot", "noun"),
      wordBankItem("medicine", "medicine", "noun"),
      wordBankItem("doctor", "doctor", "noun"),
      wordBankItem("hospital", "doctor", "noun"),
      wordBankItem("I feel sick", "sick", "core"),
      wordBankItem("I feel better", "good", "core"),
    ],
  },
  {
    id: "animals",
    name: "Animals",
    words: [
      wordBankItem("dog", "friend", "noun"),
      wordBankItem("cat", "friend", "noun"),
      wordBankItem("bird", "outside", "noun"),
      wordBankItem("fish", "water", "noun"),
      wordBankItem("horse", "ride", "noun"),
      wordBankItem("cow", "outside", "noun"),
      wordBankItem("pig", "outside", "noun"),
      wordBankItem("duck", "water", "noun"),
      wordBankItem("chicken", "outside", "noun"),
      wordBankItem("rabbit", "outside", "noun"),
      wordBankItem("frog", "water", "noun"),
      wordBankItem("bug", "outside", "noun"),
      wordBankItem("bee", "outside", "noun"),
      wordBankItem("butterfly", "outside", "noun"),
      wordBankItem("lion", "outside", "noun"),
      wordBankItem("tiger", "outside", "noun"),
      wordBankItem("bear", "outside", "noun"),
      wordBankItem("monkey", "play", "noun"),
      wordBankItem("elephant", "outside", "noun"),
      wordBankItem("dinosaur", "outside", "noun"),
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles",
    words: [
      wordBankItem("car", "car", "noun"),
      wordBankItem("bus", "car", "noun"),
      wordBankItem("truck", "car", "noun"),
      wordBankItem("van", "car", "noun"),
      wordBankItem("train", "car", "noun"),
      wordBankItem("airplane", "go", "noun"),
      wordBankItem("boat", "water", "noun"),
      wordBankItem("bike", "ride", "noun"),
      wordBankItem("scooter", "ride", "noun"),
      wordBankItem("wheelchair", "ride", "noun"),
      wordBankItem("stroller", "ride", "noun"),
      wordBankItem("ambulance", "doctor", "noun"),
      wordBankItem("fire truck", "hot", "noun"),
      wordBankItem("police car", "safe", "noun"),
      wordBankItem("drive", "car", "verb"),
      wordBankItem("ride", "ride", "verb"),
      wordBankItem("go fast", "fast", "core"),
      wordBankItem("slow down", "slow", "core"),
    ],
  },
  {
    id: "places-community",
    name: "Community Places",
    words: [
      wordBankItem("park", "outside", "noun"),
      wordBankItem("playground", "play", "noun"),
      wordBankItem("store", "home", "noun"),
      wordBankItem("restaurant", "food", "noun"),
      wordBankItem("library", "book", "noun"),
      wordBankItem("school", "school", "noun"),
      wordBankItem("therapy", "talk", "noun"),
      wordBankItem("doctor office", "doctor", "noun"),
      wordBankItem("hospital", "doctor", "noun"),
      wordBankItem("dentist", "good", "noun"),
      wordBankItem("pool", "water", "noun"),
      wordBankItem("zoo", "outside", "noun"),
      wordBankItem("museum", "look", "noun"),
      wordBankItem("church", "home", "noun"),
      wordBankItem("bathroom", "bathroom", "noun"),
      wordBankItem("parking lot", "car", "noun"),
      wordBankItem("inside", "home", "core"),
      wordBankItem("outside", "outside", "core"),
    ],
  },
  {
    id: "time-calendar",
    name: "Time and Calendar",
    words: [
      wordBankItem("now", "when", "core"),
      wordBankItem("later", "when", "core"),
      wordBankItem("today", "when", "noun"),
      wordBankItem("tomorrow", "when", "noun"),
      wordBankItem("yesterday", "when", "noun"),
      wordBankItem("morning", "when", "noun"),
      wordBankItem("afternoon", "when", "noun"),
      wordBankItem("night", "sleep", "noun"),
      wordBankItem("Monday", "when", "noun"),
      wordBankItem("Tuesday", "when", "noun"),
      wordBankItem("Wednesday", "when", "noun"),
      wordBankItem("Thursday", "when", "noun"),
      wordBankItem("Friday", "when", "noun"),
      wordBankItem("Saturday", "when", "noun"),
      wordBankItem("Sunday", "when", "noun"),
      wordBankItem("birthday", "happy", "noun"),
      wordBankItem("holiday", "happy", "noun"),
      wordBankItem("first", "yes", "core"),
      wordBankItem("next", "go", "core"),
      wordBankItem("last", "back", "core"),
    ],
  },
  {
    id: "colors-shapes-numbers",
    name: "Colors, Shapes, Numbers",
    words: [
      wordBankItem("red", "color", "adjective"),
      wordBankItem("blue", "color", "adjective"),
      wordBankItem("green", "color", "adjective"),
      wordBankItem("yellow", "color", "adjective"),
      wordBankItem("orange", "color", "adjective"),
      wordBankItem("purple", "color", "adjective"),
      wordBankItem("pink", "color", "adjective"),
      wordBankItem("black", "color", "adjective"),
      wordBankItem("white", "color", "adjective"),
      wordBankItem("brown", "color", "adjective"),
      wordBankItem("circle", "default", "noun"),
      wordBankItem("square", "default", "noun"),
      wordBankItem("triangle", "default", "noun"),
      wordBankItem("star", "good", "noun"),
      wordBankItem("heart", "heart", "noun"),
      wordBankItem("one", "default", "noun"),
      wordBankItem("two", "default", "noun"),
      wordBankItem("three", "default", "noun"),
      wordBankItem("many", "more", "adjective"),
      wordBankItem("none", "no", "adjective"),
    ],
  },
  {
    id: "describing",
    name: "Describing Words",
    words: [
      wordBankItem("big", "big", "adjective"),
      wordBankItem("little", "default", "adjective"),
      wordBankItem("fast", "fast", "adjective"),
      wordBankItem("slow", "slow", "adjective"),
      wordBankItem("hot", "hot", "adjective"),
      wordBankItem("cold", "cold", "adjective"),
      wordBankItem("new", "good", "adjective"),
      wordBankItem("old", "bad", "adjective"),
      wordBankItem("clean", "good", "adjective"),
      wordBankItem("dirty", "bad", "adjective"),
      wordBankItem("wet", "water", "adjective"),
      wordBankItem("dry", "good", "adjective"),
      wordBankItem("loud", "listen", "adjective"),
      wordBankItem("quiet", "quiet", "adjective"),
      wordBankItem("easy", "good", "adjective"),
      wordBankItem("hard", "bad", "adjective"),
      wordBankItem("same", "yes", "adjective"),
      wordBankItem("different", "where", "adjective"),
      wordBankItem("favorite", "heart", "adjective"),
      wordBankItem("finished", "done", "core"),
    ],
  },
  {
    id: "questions-social",
    name: "Questions and Social",
    words: [
      wordBankItem("who", "where", "core"),
      wordBankItem("what", "where", "core"),
      wordBankItem("where", "where", "core"),
      wordBankItem("when", "when", "core"),
      wordBankItem("why", "where", "core"),
      wordBankItem("how", "where", "core"),
      wordBankItem("hello", "talk", "social"),
      wordBankItem("goodbye", "stop", "social"),
      wordBankItem("excuse me", "please", "social"),
      wordBankItem("sorry", "heart", "social"),
      wordBankItem("that's funny", "happy", "social"),
      wordBankItem("I like it", "like", "social"),
      wordBankItem("I don't like it", "no", "social"),
      wordBankItem("tell me more", "more", "social"),
      wordBankItem("I have a question", "where", "social"),
      wordBankItem("Can I have a turn?", "turn", "social"),
      wordBankItem("Can you help me?", "help", "social"),
      wordBankItem("I need a minute", "break", "social"),
    ],
  },
  {
    id: "school-expanded",
    name: "More School",
    words: [
      wordBankItem("desk", "school", "noun"),
      wordBankItem("chair", "default", "noun"),
      wordBankItem("folder", "open", "noun"),
      wordBankItem("crayon", "color", "noun"),
      wordBankItem("marker", "color", "noun"),
      wordBankItem("scissors", "make", "noun"),
      wordBankItem("glue", "make", "noun"),
      wordBankItem("homework", "work", "noun"),
      wordBankItem("test", "think", "noun"),
      wordBankItem("circle time", "friend", "noun"),
      wordBankItem("recess", "play", "noun"),
      wordBankItem("lunch", "food", "noun"),
      wordBankItem("bus", "car", "noun"),
      wordBankItem("line up", "go", "verb"),
      wordBankItem("raise hand", "help", "verb"),
      wordBankItem("take break", "break", "verb"),
      wordBankItem("too hard", "bad", "adjective"),
      wordBankItem("I understand", "yes", "social"),
      wordBankItem("I don't understand", "no", "social"),
      wordBankItem("please repeat", "again", "social"),
    ],
  },
];

const aacilInspiredWordBankCategories = [
  {
    id: "aac-access",
    name: "AAC and Access",
    words: [
      wordBankItem("AAC", "talk", "noun"),
      wordBankItem("talker", "talk", "noun"),
      wordBankItem("communication device", "talk", "noun"),
      wordBankItem("low tech board", "book", "noun"),
      wordBankItem("model it", "talk", "verb"),
      wordBankItem("point", "help", "verb"),
      wordBankItem("scan", "look", "verb"),
      wordBankItem("select", "yes", "verb"),
      wordBankItem("switch", "turn", "noun"),
      wordBankItem("keyboard", "spell", "noun"),
      wordBankItem("spell", "spell", "verb"),
      wordBankItem("letters", "spell", "noun"),
      wordBankItem("numbers", "spell", "noun"),
      wordBankItem("clear", "stop", "verb"),
      wordBankItem("backspace", "back", "verb"),
      wordBankItem("speak", "talk", "verb"),
      wordBankItem("voice", "talk", "noun"),
      wordBankItem("volume", "listen", "noun"),
      wordBankItem("too fast", "fast", "adjective"),
      wordBankItem("too slow", "slow", "adjective"),
      wordBankItem("I need my talker", "talk", "core"),
      wordBankItem("please wait for me", "time", "social"),
      wordBankItem("I am still talking", "talk", "social"),
      wordBankItem("don't speak for me", "not", "social"),
    ],
  },
  {
    id: "self-advocacy",
    name: "Self-Advocacy",
    words: [
      wordBankItem("I need help", "help", "core"),
      wordBankItem("I need a break", "break", "core"),
      wordBankItem("I need quiet", "quiet", "core"),
      wordBankItem("I need space", "stop", "core"),
      wordBankItem("I need privacy", "stop", "core"),
      wordBankItem("I need more time", "time", "core"),
      wordBankItem("I don't understand", "no", "social"),
      wordBankItem("please repeat", "again", "social"),
      wordBankItem("please explain", "question", "social"),
      wordBankItem("I choose", "yes", "core"),
      wordBankItem("my body", "i", "noun"),
      wordBankItem("my choice", "yes", "noun"),
      wordBankItem("consent", "yes", "noun"),
      wordBankItem("no touch", "stop", "social"),
      wordBankItem("stop now", "stop", "social"),
      wordBankItem("I am uncomfortable", "bad", "core"),
      wordBankItem("I feel safe", "safe", "core"),
      wordBankItem("I feel unsafe", "bad", "core"),
      wordBankItem("respect me", "heart", "social"),
      wordBankItem("listen to me", "listen", "social"),
      wordBankItem("ask me first", "question", "social"),
      wordBankItem("I can do it", "good", "social"),
      wordBankItem("I need support", "help", "core"),
      wordBankItem("advocate", "talk", "noun"),
    ],
  },
  {
    id: "sensory",
    name: "Sensory",
    words: [
      wordBankItem("sensory", "look", "noun"),
      wordBankItem("loud", "listen", "adjective"),
      wordBankItem("quiet", "quiet", "adjective"),
      wordBankItem("bright", "look", "adjective"),
      wordBankItem("dark", "look", "adjective"),
      wordBankItem("soft", "heart", "adjective"),
      wordBankItem("scratchy", "bad", "adjective"),
      wordBankItem("smooth", "good", "adjective"),
      wordBankItem("sticky", "bad", "adjective"),
      wordBankItem("wet", "water", "adjective"),
      wordBankItem("dry", "good", "adjective"),
      wordBankItem("smell", "i", "verb"),
      wordBankItem("taste", "eat", "verb"),
      wordBankItem("touch", "help", "verb"),
      wordBankItem("pressure", "help", "noun"),
      wordBankItem("weighted blanket", "bed", "noun"),
      wordBankItem("headphones", "listen", "noun"),
      wordBankItem("sunglasses", "look", "noun"),
      wordBankItem("fidget", "play", "noun"),
      wordBankItem("chew", "eat", "verb"),
      wordBankItem("swing", "go", "verb"),
      wordBankItem("rock", "go", "verb"),
      wordBankItem("too much", "more", "adjective"),
      wordBankItem("not enough", "not", "adjective"),
    ],
  },
  {
    id: "medical-expanded",
    name: "Medical and Emergency",
    words: [
      wordBankItem("emergency", "safe", "noun"),
      wordBankItem("call 911", "phone", "social"),
      wordBankItem("allergy", "bad", "noun"),
      wordBankItem("allergic", "bad", "adjective"),
      wordBankItem("medicine", "medicine", "noun"),
      wordBankItem("pill", "medicine", "noun"),
      wordBankItem("inhaler", "medicine", "noun"),
      wordBankItem("EpiPen", "medicine", "noun"),
      wordBankItem("seizure", "sick", "noun"),
      wordBankItem("asthma", "sick", "noun"),
      wordBankItem("diabetes", "sick", "noun"),
      wordBankItem("blood sugar", "sick", "noun"),
      wordBankItem("nausea", "sick", "noun"),
      wordBankItem("throw up", "sick", "verb"),
      wordBankItem("dizzy", "sick", "adjective"),
      wordBankItem("headache", "pain", "noun"),
      wordBankItem("stomachache", "pain", "noun"),
      wordBankItem("sore throat", "pain", "noun"),
      wordBankItem("rash", "bad", "noun"),
      wordBankItem("swelling", "bad", "noun"),
      wordBankItem("bleeding", "bad", "noun"),
      wordBankItem("bandage", "pain", "noun"),
      wordBankItem("temperature", "hot", "noun"),
      wordBankItem("I need medicine", "medicine", "core"),
      wordBankItem("I need a doctor", "doctor", "core"),
      wordBankItem("my body hurts", "pain", "core"),
    ],
  },
  {
    id: "money-shopping",
    name: "Money and Shopping",
    words: [
      wordBankItem("money", "work", "noun"),
      wordBankItem("dollar", "work", "noun"),
      wordBankItem("coin", "work", "noun"),
      wordBankItem("card", "default", "noun"),
      wordBankItem("pay", "work", "verb"),
      wordBankItem("buy", "shop", "verb"),
      wordBankItem("sell", "work", "verb"),
      wordBankItem("cost", "question", "noun"),
      wordBankItem("cheap", "good", "adjective"),
      wordBankItem("expensive", "bad", "adjective"),
      wordBankItem("store", "home", "noun"),
      wordBankItem("cart", "car", "noun"),
      wordBankItem("checkout", "done", "noun"),
      wordBankItem("receipt", "book", "noun"),
      wordBankItem("coupon", "good", "noun"),
      wordBankItem("save money", "safe", "verb"),
      wordBankItem("I want to buy", "want", "core"),
      wordBankItem("how much?", "question", "core"),
    ],
  },
  {
    id: "technology-expanded",
    name: "Technology",
    words: [
      wordBankItem("tablet", "ipad", "noun"),
      wordBankItem("laptop", "computer", "noun"),
      wordBankItem("desktop", "computer", "noun"),
      wordBankItem("charger", "phone", "noun"),
      wordBankItem("battery", "phone", "noun"),
      wordBankItem("wifi", "computer", "noun"),
      wordBankItem("internet", "computer", "noun"),
      wordBankItem("password", "safe", "noun"),
      wordBankItem("app", "computer", "noun"),
      wordBankItem("browser", "computer", "noun"),
      wordBankItem("camera", "look", "noun"),
      wordBankItem("photo", "look", "noun"),
      wordBankItem("video call", "talk", "noun"),
      wordBankItem("text message", "text", "noun"),
      wordBankItem("email", "text", "noun"),
      wordBankItem("download", "open", "verb"),
      wordBankItem("upload", "go", "verb"),
      wordBankItem("save file", "safe", "verb"),
      wordBankItem("print", "book", "verb"),
      wordBankItem("screen", "look", "noun"),
      wordBankItem("mouse", "computer", "noun"),
      wordBankItem("touch screen", "ipad", "noun"),
      wordBankItem("broken", "bad", "adjective"),
      wordBankItem("needs charging", "phone", "core"),
    ],
  },
  {
    id: "weather-emergency",
    name: "Weather and Emergency",
    words: [
      wordBankItem("weather", "outside", "noun"),
      wordBankItem("sunny", "hot", "adjective"),
      wordBankItem("rain", "water", "noun"),
      wordBankItem("snow", "cold", "noun"),
      wordBankItem("wind", "outside", "noun"),
      wordBankItem("storm", "bad", "noun"),
      wordBankItem("thunder", "listen", "noun"),
      wordBankItem("lightning", "fast", "noun"),
      wordBankItem("tornado", "bad", "noun"),
      wordBankItem("flood", "water", "noun"),
      wordBankItem("fire", "hot", "noun"),
      wordBankItem("smoke", "bad", "noun"),
      wordBankItem("evacuate", "go", "verb"),
      wordBankItem("shelter", "home", "noun"),
      wordBankItem("safe place", "safe", "noun"),
      wordBankItem("danger", "bad", "noun"),
      wordBankItem("help me", "help", "core"),
      wordBankItem("I am lost", "where", "core"),
    ],
  },
  {
    id: "arts-crafts-media",
    name: "Arts, Crafts, and Media",
    words: [
      wordBankItem("art", "color", "noun"),
      wordBankItem("paint", "color", "verb"),
      wordBankItem("draw", "color", "verb"),
      wordBankItem("cut", "make", "verb"),
      wordBankItem("glue", "make", "verb"),
      wordBankItem("craft", "make", "noun"),
      wordBankItem("music", "music", "noun"),
      wordBankItem("song", "music", "noun"),
      wordBankItem("dance", "play", "verb"),
      wordBankItem("movie", "look", "noun"),
      wordBankItem("show", "look", "noun"),
      wordBankItem("book", "book", "noun"),
      wordBankItem("story", "book", "noun"),
      wordBankItem("character", "friend", "noun"),
      wordBankItem("favorite song", "music", "noun"),
      wordBankItem("turn it up", "listen", "core"),
      wordBankItem("turn it down", "quiet", "core"),
      wordBankItem("pause", "break", "verb"),
      wordBankItem("play video", "look", "verb"),
      wordBankItem("again", "more", "core"),
    ],
  },
  {
    id: "sports-games-expanded",
    name: "Sports and Games",
    words: [
      wordBankItem("sport", "play", "noun"),
      wordBankItem("team", "friend", "noun"),
      wordBankItem("score", "good", "noun"),
      wordBankItem("win", "happy", "verb"),
      wordBankItem("lose", "sad", "verb"),
      wordBankItem("ball", "play", "noun"),
      wordBankItem("soccer", "play", "noun"),
      wordBankItem("basketball", "play", "noun"),
      wordBankItem("baseball", "play", "noun"),
      wordBankItem("football", "play", "noun"),
      wordBankItem("swimming", "water", "noun"),
      wordBankItem("running", "go", "noun"),
      wordBankItem("skiing", "cold", "noun"),
      wordBankItem("exercise", "go", "verb"),
      wordBankItem("practice", "work", "verb"),
      wordBankItem("coach", "teacher", "noun"),
      wordBankItem("referee", "question", "noun"),
      wordBankItem("my turn", "i", "core"),
      wordBankItem("good game", "good", "social"),
      wordBankItem("take a break", "break", "core"),
    ],
  },
];

const contextHelpTopics = [
  ["[data-mode='talk']", "Communicate Tab", "Use this screen when the AAC user wants to build and speak a message.\n\nSteps:\n1. Choose a vocabulary page, such as Core, People, Actions, Things, or Feelings.\n2. Tap picture tiles in the order the message should be spoken.\n3. Check the message bar at the top.\n4. Tap Speak to read the whole message.\n\nTip: Use Find Word when you know the word but do not know which page it is on."],
  ["[data-mode='group']", "Group Chat Tab", "Use this screen during a group therapy activity when several people are taking turns sending messages.\n\nSteps:\n1. Enter a participant name.\n2. Enter a room code for the activity.\n3. Build a message on the Communicate tab.\n4. Return to Group Chat and choose Send AAC Message.\n5. Use Speak Last to read the newest room message aloud.\n\nNote: This prototype only syncs across tabs or windows on the same device."],
  ["[data-mode='builder']", "Builder Tab", "Use Builder when a caregiver, SLP, or teacher needs to prepare vocabulary before practice.\n\nSteps:\n1. Start with a starter board or generate a board from a situation description.\n2. Add any missing pages or custom tiles.\n3. Use Vocabulary Builder to focus on a small target list.\n4. Export a backup after the board works well.\n\nTip: Keep the board small at first, then add vocabulary as routines grow."],
  ["[data-mode='settings']", "Settings Tab", "Use Settings to make speech and access choices easier for the AAC user.\n\nSteps:\n1. Adjust speech rate and pitch.\n2. Decide whether each tile should speak immediately.\n3. Keep editing locked for daily communication.\n4. Turn on larger labels or high contrast if the board is hard to see.\n\nNote: Voice choices come from the browser and device."],
  ["[data-mode='help']", "Help Tab", "Use Help for practice instructions, animated click paths, larger screen captures, and the full help manual.\n\nSteps:\n1. Pick a guide card for the feature you want to learn.\n2. Open the preview in a large frame.\n3. Open the full help page for detailed steps and narration.\n4. Press F1 on any app control for command-specific help."],
  ["#speakBtn", "Speak", "Use Speak after the message bar contains the words the user wants to say.\n\nSteps:\n1. Tap one or more picture tiles.\n2. Check that the message bar says the intended message.\n3. Tap Speak.\n4. If the message is wrong, use Backspace or Clear and try again.\n\nNote: The selected voice, speech rate, and pitch are controlled in Settings."],
  ["#backspaceBtn", "Backspace", "Use Backspace when only the last word or phrase is wrong.\n\nSteps:\n1. Look at the message bar.\n2. Tap Backspace once to remove the last word.\n3. Tap the correct tile.\n4. Tap Speak when the message is ready.\n\nTip: Backspace is safer than Clear when most of the message is already correct."],
  ["#clearBtn", "Clear", "Use Clear when the AAC user is finished with the current message or wants to start over.\n\nSteps:\n1. Confirm the current message is no longer needed.\n2. Tap Clear.\n3. Build a new message from the picture tiles.\n\nNote: Clear only empties the message bar. It does not delete boards or tiles."],
  ["#wordSearch", "Find Word", "Use Find Word when a word is hard to locate on the board.\n\nSteps:\n1. Type part of the word, such as drink, help, or school.\n2. Review the matching picture tiles.\n3. Tap a matching tile to add it to the message.\n4. Clear the search field to return to the full page.\n\nTip: You can also type a whole phrase here and use Say Now."],
  ["#quickSpeakBtn", "Say Now", "Use Say Now for a quick spoken message that does not need a picture tile yet.\n\nSteps:\n1. Type a word or phrase in Find Word.\n2. Tap Say Now.\n3. Add the phrase as a custom tile later if it becomes useful often.\n\nExample: Type \"I need a minute\" and press Say Now."],
  ["#voiceSelect", "Voice", "Use Voice to choose the text-to-speech voice.\n\nSteps:\n1. Open the voice list.\n2. Choose a voice that is clear and comfortable.\n3. Tap Speak to test it with a real AAC message.\n4. Adjust rate and pitch in Settings if needed.\n\nNote: iPad, iPhone, Windows, and different browsers may offer different voices."],
  ["#smsNumber", "SMS Number", "Use SMS Number only when you want the device's Messages app to prepare a text message.\n\nSteps:\n1. Enter the caregiver or contact number.\n2. Build an AAC message.\n3. Tap Send SMS.\n4. Review the message in the device Messages app before sending.\n\nPrivacy: Do not use real phone numbers in public demos or screenshots."],
  ["#smsSendBtn", "Send SMS", "Use Send SMS to hand the current AAC message to the device's Messages app.\n\nSteps:\n1. Enter an SMS number.\n2. Build the AAC message.\n3. Tap Send SMS.\n4. Review and send from the Messages app.\n\nNote: Browsers cannot directly receive SMS replies without an outside phone service or bridge."],
  ["#copyMessageBtn", "Copy Message", "Use Copy Message when SMS links are blocked or when you want to paste the message somewhere else.\n\nSteps:\n1. Build the AAC message.\n2. Tap Copy Message.\n3. Paste it into email, chat, notes, or another app.\n\nTip: This is the best fallback on desktop computers."],
  ["#receivedMessage", "Received Message", "Use Received Message when someone replies outside the app and you want the reply spoken aloud.\n\nSteps:\n1. Copy the reply from the other app.\n2. Paste it into this box.\n3. Tap Speak Received.\n\nNote: The reply is not automatically imported from SMS."],
  ["#speakReceivedBtn", "Speak Received", "Use Speak Received to read a pasted reply aloud.\n\nSteps:\n1. Paste a reply into Received Message.\n2. Tap Speak Received.\n3. Adjust voice settings if the reply is too fast or too slow."],
  ["#chatName", "Participant Name", "Use Participant Name to label who sent a group message.\n\nSteps:\n1. Type a short role or first name.\n2. Avoid full names in public demos.\n3. Send a message to see the name in Room Messages."],
  ["#chatRoom", "Room Code", "Use Room Code to keep one activity's messages separate from another.\n\nSteps:\n1. Type a simple room name, such as therapy-room or monday-group.\n2. Use the same room code in another tab on this device.\n3. Send messages during the activity.\n\nNote: Separate devices need a realtime backend added later."],
  ["#sendChatBtn", "Send AAC Message", "Use Send AAC Message when the message bar has something the user wants to share with the group.\n\nSteps:\n1. Build a message on Communicate.\n2. Open Group Chat.\n3. Confirm participant name and room code.\n4. Tap Send AAC Message.\n5. Watch the message appear in Room Messages."],
  ["#sendTypedChatBtn", "Send Typed Reply", "Use Send Typed Reply when a helper needs to add a typed message to the room.\n\nSteps:\n1. Type the reply in Typed reply.\n2. Tap Send Typed Reply.\n3. Use Speak Last if the AAC user wants to hear it."],
  ["#speakChatBtn", "Speak Chat", "Reads the current room chat transcript aloud.\n\nSteps:\n1. Open the Group Chat room.\n2. Tap Speak Chat.\n3. The app reads the messages in order with participant names.\n\nTip: Use this after a group activity to review what everyone said."],
  ["#exportChatBtn", "Save Chat", "Downloads the current room chat as a text file.\n\nSteps:\n1. Open the Group Chat room.\n2. Tap Save Chat.\n3. Store the downloaded transcript privately.\n\nPrivacy: Chat transcripts may include names, needs, or therapy details."],
  ["#clearChatBtn", "Clear Local Chat", "Use Clear Local Chat at the end of an activity or before a new practice session.\n\nSteps:\n1. Make sure the current room messages are no longer needed.\n2. Tap Clear Local Chat.\n3. Confirm the prompt.\n\nNote: This clears the room only in this browser's local storage."],
  ["#speakLastChatBtn", "Speak Last", "Use Speak Last when a new room message should be read aloud.\n\nSteps:\n1. Wait for a message to appear in Room Messages.\n2. Tap Speak Last.\n3. The newest message is spoken using the current voice settings."],
  ["#pictureWordBuilder", "Picture Word Builder", "Use Picture Word Builder to build a board visually from a categorized vocabulary bank.\n\nSteps:\n1. Choose the page you want to build.\n2. Pick a vocabulary category or search for a word.\n3. Tap a word to add it, or drag it onto the board preview.\n4. Review the board preview and continue adding words.\n\nTip: This is the easiest builder for users who do better with pictures than forms."],
  ["#builderPageSelect", "Build Page", "Chooses the board page that receives words from the picture word bank.\n\nSteps:\n1. Pick a page such as Core, Mealtime, School, or Play.\n2. Tap or drag words from the bank.\n3. The words are added to this page."],
  ["#wordCategory", "Word Category", "Filters the picture word bank by category.\n\nSteps:\n1. Choose a category like Food, Feelings, School, or Play.\n2. Review the picture words.\n3. Tap or drag useful words onto the board preview."],
  ["#wordBankSearch", "Search Word Bank", "Searches the large picture word bank across categories.\n\nSteps:\n1. Type part of a word or phrase.\n2. Review the matching picture words.\n3. Tap or drag the word onto the selected page."],
  ["#builderBoardDrop", "Board Preview Drop Area", "Shows the selected page while building.\n\nSteps:\n1. Drag a word from the word bank onto this preview.\n2. Drop it to add the word to the selected page.\n3. Tap an existing preview tile to hear it."],
  ["#generatorForm", "Board Generator", "Use Board Generator to create a first draft from a situation description.\n\nSteps:\n1. Name the board.\n2. Describe the user, setting, routines, and needs.\n3. Choose columns and tile size.\n4. Tap Generate Board.\n5. Review the board and add missing words manually.\n\nNote: This uses local templates, not online AI."],
  ["#tileForm", "Add Picture Tile", "Use Add Picture Tile when an important word or phrase is missing.\n\nSteps:\n1. Enter the label in Word.\n2. Enter what should be spoken in Speak as.\n3. Choose a picture word or symbol.\n4. Choose the word type for color/category.\n5. Choose the page.\n6. Tap Add Tile.\n\nTip: Add phrases for frequent needs, such as \"I need a break.\""],
  ["#pageForm", "Add Page", "Use Add Page to organize custom vocabulary by routine or activity.\n\nSteps:\n1. Type the page name.\n2. Tap Add Page.\n3. Add tiles to the new page.\n\nExamples: Therapy, Favorites, Morning, Outside, Music."],
  ["#editModeBtn", "Edit Mode", "Use Edit Mode to revise existing tiles.\n\nSteps:\n1. Turn Edit Mode on.\n2. Tap the tile you want to change.\n3. Follow the prompts for label, spoken text, and picture.\n4. Turn Edit Mode off when finished.\n\nSafety: Keep editing locked during normal communication."],
  ["#printBtn", "Print Board", "Use Print Board to create a paper copy for modeling or backup communication.\n\nSteps:\n1. Open the page you want to print.\n2. Tap Print Board.\n3. Choose printer or Save as PDF.\n4. Keep paper copies where communication happens."],
  ["#exportBtn", "Export Backup", "Use Export Backup before major edits, before sharing with a team, or before moving to another device.\n\nSteps:\n1. Tap Export Backup.\n2. Save the JSON file somewhere private.\n3. Keep a dated copy after important board changes.\n\nPrivacy: Backup files may contain custom words, routines, and contact hints."],
  ["#importFile", "Import Backup", "Use Import Backup to restore a saved board file.\n\nSteps:\n1. Tap Import Backup.\n2. Select a JSON backup from this app.\n3. Confirm the board loads correctly.\n4. Test Speak and a few tiles.\n\nWarning: Import replaces the current local board."],
  ["#profileName", "Profile or Board Name", "Names the current customized board before saving it as a local profile.\n\nSteps:\n1. Type a clear name such as Home Board, School Board, or Therapy Practice.\n2. Tap Save Profile.\n3. Load it later from Saved Profiles.\n\nNote: Profiles are saved in this browser on this device."],
  ["#saveProfileBtn", "Save Profile", "Saves the current board, settings, phrases, SMS field, and group chat defaults as a named local profile.\n\nSteps:\n1. Enter a profile name.\n2. Tap Save Profile.\n3. Watch the storage meter for space use.\n\nTip: Export a backup too when you need a file you can move to another device."],
  ["#loadProfileBtn", "Load Profile", "Loads a saved local profile into the app.\n\nSteps:\n1. Choose a saved profile.\n2. Tap Load Profile.\n3. Review the board before using it.\n\nWarning: Loading replaces the current board in the app."],
  ["#deleteProfileBtn", "Delete Profile", "Deletes a saved local profile from this browser.\n\nSteps:\n1. Choose the saved profile.\n2. Tap Delete Profile.\n3. Confirm the deletion.\n\nTip: Delete older profiles if browser storage gets high."],
  ["#profileSelect", "Saved Profiles", "Lists board profiles saved in this browser.\n\nSteps:\n1. Choose a profile from the list.\n2. Load it, delete it, or save a new profile with a different name."],
  ["#resetBtn", "Restore Starter Board", "Use Restore Starter Board only when you want to remove local changes and return to the built-in board.\n\nSteps:\n1. Export a backup if you might need the current board.\n2. Tap Restore Starter Board.\n3. Confirm the reset.\n4. Reload or review the starter board.\n\nWarning: This removes custom local changes."],
  ["#starterBoard", "Starter Boards", "Use Starter Boards to begin from a prepared routine instead of building from scratch.\n\nSteps:\n1. Open Builder.\n2. Choose a starter, such as First Words, Mealtime, Play, School, or Feelings.\n3. Tap Load Starter.\n4. Review the board on Communicate.\n\nTip: Export a backup first if you have custom work to keep."],
  ["#loadStarterBtn", "Load Starter", "Use Load Starter after choosing a starter board.\n\nSteps:\n1. Select the starter board.\n2. Tap Load Starter.\n3. Practice a few sample messages.\n4. Add missing vocabulary as custom tiles."],
  ["#targetWords", "Target Words", "Use Target Words to choose the vocabulary to practice today.\n\nSteps:\n1. Enter a small list of words.\n2. Separate words with commas or new lines.\n3. Turn on Show only target words if you want reduced visual distraction.\n4. Tap Apply Targets.\n\nTip: Start with 5 to 10 words for focused practice."],
  ["#maskTargets", "Show Only Target Words", "Use Show Only Target Words for focused practice while preserving word positions.\n\nSteps:\n1. Enter target words.\n2. Check Show only target words.\n3. Tap Apply Targets.\n4. Practice using the visible target words.\n\nNote: Non-target words are dimmed rather than moved."],
  ["#applyTargetsBtn", "Apply Targets", "Use Apply Targets after entering the practice word list.\n\nSteps:\n1. Check the target word list.\n2. Decide whether Show only target words should be on.\n3. Tap Apply Targets.\n4. Return to Communicate and practice."],
  ["#speechRate", "Speech Rate", "Use Speech Rate to make the voice easier to understand.\n\nSteps:\n1. Move the slider left for slower speech or right for faster speech.\n2. Tap Speak with a sample message.\n3. Adjust until the voice sounds natural and clear."],
  ["#speechPitch", "Speech Pitch", "Use Speech Pitch to make the voice higher or lower.\n\nSteps:\n1. Move the slider.\n2. Tap Speak to test.\n3. Choose the setting that is easiest for the user and listeners to understand."],
  ["#speakEachWord", "Speak Each Tile", "Use Speak Each Tile to decide whether each tile speaks immediately.\n\nSteps:\n1. Turn it on for immediate auditory feedback.\n2. Turn it off if the user wants only the final sentence spoken.\n3. Test by tapping a few picture tiles."],
  ["#lockBoard", "Lock Editing", "Use Lock Editing to prevent accidental board changes.\n\nSteps:\n1. Keep it on during daily communication.\n2. Turn it off only when editing is needed.\n3. Turn it back on after changes are complete."],
  ["#largeText", "Larger Labels", "Use Larger Labels when tile words are hard to read.\n\nSteps:\n1. Turn on Larger Labels.\n2. Review several board pages.\n3. Leave it on if labels are easier to scan."],
  ["#highContrast", "High Contrast", "Use High Contrast when the regular colors are hard to see.\n\nSteps:\n1. Turn on High Contrast.\n2. Check tile labels, borders, and buttons.\n3. Use it if the board is easier to read."],
  [".guide-card", "Help Preview", "Use Help Preview for visual practice with a feature.\n\nSteps:\n1. Choose a guide card.\n2. Click the image or caption.\n3. Review the guide in the larger frame.\n4. Use Full screen when practicing with someone else."],
];

let state = loadState();
let activePage = state.pages[0]?.id || "core";
let message = [];
let voices = [];
let editMode = false;
let chatChannel = null;
let tooltipTimer = null;
let pendingTooltip = null;
const TOOLTIP_DELAY_MS = 2200;

const el = {
  sentence: document.querySelector("#sentence"),
  board: document.querySelector("#board"),
  tabs: document.querySelector("#tabs"),
  phraseBank: document.querySelector("#phraseBank"),
  speakBtn: document.querySelector("#speakBtn"),
  clearBtn: document.querySelector("#clearBtn"),
  backspaceBtn: document.querySelector("#backspaceBtn"),
  search: document.querySelector("#wordSearch"),
  quickSpeakBtn: document.querySelector("#quickSpeakBtn"),
  voiceSelect: document.querySelector("#voiceSelect"),
  smsNumber: document.querySelector("#smsNumber"),
  smsSendBtn: document.querySelector("#smsSendBtn"),
  copyMessageBtn: document.querySelector("#copyMessageBtn"),
  receivedMessage: document.querySelector("#receivedMessage"),
  speakReceivedBtn: document.querySelector("#speakReceivedBtn"),
  smsStatus: document.querySelector("#smsStatus"),
  chatName: document.querySelector("#chatName"),
  chatRoom: document.querySelector("#chatRoom"),
  chatTypedMessage: document.querySelector("#chatTypedMessage"),
  sendChatBtn: document.querySelector("#sendChatBtn"),
  sendTypedChatBtn: document.querySelector("#sendTypedChatBtn"),
  speakChatBtn: document.querySelector("#speakChatBtn"),
  exportChatBtn: document.querySelector("#exportChatBtn"),
  clearChatBtn: document.querySelector("#clearChatBtn"),
  speakLastChatBtn: document.querySelector("#speakLastChatBtn"),
  chatStatus: document.querySelector("#chatStatus"),
  chatLog: document.querySelector("#chatLog"),
  guideDialog: document.querySelector("#guideDialog"),
  guideDialogTitle: document.querySelector("#guideDialogTitle"),
  guideDialogImage: document.querySelector("#guideDialogImage"),
  guideCloseBtn: document.querySelector("#guideCloseBtn"),
  guideFullscreenBtn: document.querySelector("#guideFullscreenBtn"),
  guideCards: document.querySelectorAll(".guide-card"),
  contextHelpDialog: document.querySelector("#contextHelpDialog"),
  contextHelpTitle: document.querySelector("#contextHelpTitle"),
  contextHelpBody: document.querySelector("#contextHelpBody"),
  contextHelpCloseBtn: document.querySelector("#contextHelpCloseBtn"),
  helpTooltip: document.querySelector("#helpTooltip"),
  modeTabs: document.querySelectorAll(".mode-tab"),
  views: document.querySelectorAll(".view"),
  generatorForm: document.querySelector("#generatorForm"),
  boardName: document.querySelector("#boardName"),
  boardPrompt: document.querySelector("#boardPrompt"),
  boardColumns: document.querySelector("#boardColumns"),
  tileSize: document.querySelector("#tileSize"),
  builderPageSelect: document.querySelector("#builderPageSelect"),
  wordCategory: document.querySelector("#wordCategory"),
  wordBankSearch: document.querySelector("#wordBankSearch"),
  wordBankList: document.querySelector("#wordBankList"),
  builderBoardDrop: document.querySelector("#builderBoardDrop"),
  wordBuilderStatus: document.querySelector("#wordBuilderStatus"),
  tileForm: document.querySelector("#tileForm"),
  tileWord: document.querySelector("#tileWord"),
  tileSpeak: document.querySelector("#tileSpeak"),
  tileIcon: document.querySelector("#tileIcon"),
  tileKind: document.querySelector("#tileKind"),
  tilePage: document.querySelector("#tilePage"),
  pageForm: document.querySelector("#pageForm"),
  pageName: document.querySelector("#pageName"),
  editModeBtn: document.querySelector("#editModeBtn"),
  printBtn: document.querySelector("#printBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importFile: document.querySelector("#importFile"),
  resetBtn: document.querySelector("#resetBtn"),
  profileName: document.querySelector("#profileName"),
  saveProfileBtn: document.querySelector("#saveProfileBtn"),
  loadProfileBtn: document.querySelector("#loadProfileBtn"),
  deleteProfileBtn: document.querySelector("#deleteProfileBtn"),
  profileSelect: document.querySelector("#profileSelect"),
  storageMeterFill: document.querySelector("#storageMeterFill"),
  storageStatus: document.querySelector("#storageStatus"),
  profileStatus: document.querySelector("#profileStatus"),
  starterBoard: document.querySelector("#starterBoard"),
  loadStarterBtn: document.querySelector("#loadStarterBtn"),
  targetWords: document.querySelector("#targetWords"),
  maskTargets: document.querySelector("#maskTargets"),
  applyTargetsBtn: document.querySelector("#applyTargetsBtn"),
  speechRate: document.querySelector("#speechRate"),
  speechPitch: document.querySelector("#speechPitch"),
  speakEachWord: document.querySelector("#speakEachWord"),
  lockBoard: document.querySelector("#lockBoard"),
  largeText: document.querySelector("#largeText"),
  highContrast: document.querySelector("#highContrast"),
};

function page(id, label, tiles) {
  return { id, label, tiles };
}

function tile(label, spoken, icon, kind) {
  return {
    id: makeId(),
    label,
    spoken,
    icon: iconMap[icon] || icon,
    kind,
  };
}

function wordBankItem(label, icon, kind = "noun", spoken = label) {
  return { label, spoken, icon, kind };
}

function makeId() {
  if (globalThis.crypto && globalThis.crypto.randomUUID) return globalThis.crypto.randomUUID();
  return String(Date.now() + Math.random());
}

function cloneStarter() {
  return JSON.parse(JSON.stringify({
    name: "My AAC Board",
    columns: 6,
    tileSize: "comfortable",
    pages: starterPages,
    phrases: phraseDefaults,
    settings: {
      rate: 0.9,
      pitch: 1,
      speakEachWord: true,
      lockBoard: true,
      largeText: false,
      highContrast: false,
    },
    targetWords: [],
    maskTargets: false,
    smsNumber: "",
    chatName: "AAC User",
    chatRoom: "therapy-room",
  }));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return cloneStarter();
  try {
    return migrateState({ ...cloneStarter(), ...JSON.parse(saved) });
  } catch {
    return cloneStarter();
  }
}

function migrateState(nextState) {
  const corePage = nextState.pages?.find((pageItem) => pageItem.id === "core");
  const oldCoreLabels = ["I", "you", "want", "go", "more", "all done", "help", "stop", "yes", "no", "please", "thank you"];
  const currentLabels = new Set(corePage?.tiles?.map((item) => item.label) || []);
  const looksLikeOldStarterCore = corePage?.tiles?.length <= 16 && oldCoreLabels.every((label) => currentLabels.has(label));
  if (looksLikeOldStarterCore) {
    corePage.tiles = JSON.parse(JSON.stringify(starterPages[0].tiles));
    nextState.columns = Math.max(Number(nextState.columns) || 6, 6);
  }
  return nextState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateStorageStatus();
}

function safeParseJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function loadProfiles() {
  return safeParseJson(localStorage.getItem(PROFILE_STORE_KEY), []);
}

function saveProfiles(profiles) {
  localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(profiles));
  updateStorageStatus();
}

function profileIdFromName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `profile-${Date.now()}`;
}

function setProfileStatus(text) {
  if (el.profileStatus) el.profileStatus.textContent = text;
}

function allTiles() {
  return state.pages.flatMap((pageItem) =>
    pageItem.tiles.map((tileItem) => ({ ...tileItem, pageId: pageItem.id, pageLabel: pageItem.label })),
  );
}

function isTargetTile(item) {
  if (!state.maskTargets || !state.targetWords?.length) return true;
  const words = item.label.toLowerCase().split(/\s+/);
  const spoken = item.spoken.toLowerCase();
  return state.targetWords.some((target) => {
    const normalized = target.toLowerCase();
    return item.label.toLowerCase() === normalized || spoken === normalized || words.includes(normalized);
  });
}

function renderTabs() {
  el.tabs.innerHTML = "";
  state.pages.forEach((pageItem) => {
    const button = document.createElement("button");
    button.className = "tab";
    button.type = "button";
    button.textContent = pageItem.label;
    button.setAttribute("aria-selected", pageItem.id === activePage ? "true" : "false");
    button.addEventListener("click", () => {
      activePage = pageItem.id;
      el.search.value = "";
      render();
    });
    el.tabs.append(button);
  });
}

function renderBoard() {
  const query = el.search.value.trim().toLowerCase();
  const sourceTiles = query
    ? allTiles().filter((item) => item.label.toLowerCase().includes(query) || item.spoken.toLowerCase().includes(query))
    : state.pages.find((pageItem) => pageItem.id === activePage)?.tiles || [];

  el.board.style.setProperty("--columns", state.columns);
  el.board.style.setProperty("--tile-min", tileSizeToMin(state.tileSize));
  el.board.style.setProperty("--tile-icon-size", tileSizeToIcon(state.tileSize));
  el.board.style.setProperty("--tile-label-size", tileSizeToLabel(state.tileSize));
  el.board.innerHTML = "";
  sourceTiles.forEach((item) => {
    const visibleTarget = isTargetTile(item);
    if (query && !visibleTarget) return;
    const button = document.createElement("button");
    button.className = `tile ${item.kind}${visibleTarget ? "" : " masked"}`;
    button.type = "button";
    button.setAttribute("aria-label", `Add ${item.label}`);
    button.disabled = !visibleTarget;

    const icon = document.createElement("span");
    icon.className = "tile-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = item.icon || iconMap.default;

    const label = document.createElement("span");
    label.className = "tile-label";
    label.textContent = item.label;

    button.append(icon, label);
    if (visibleTarget) {
      button.addEventListener("click", () => {
        if (editMode && !state.settings.lockBoard) {
          editTile(item);
        } else {
          addWord(item.spoken);
        }
      });
    }

    if (editMode && !state.settings.lockBoard) {
      const edit = document.createElement("span");
      edit.className = "tile-edit";
      edit.textContent = "Edit";
      button.append(edit);
    }
    el.board.append(button);
  });
}

function renderSentence() {
  el.sentence.innerHTML = "";
  message.forEach((word) => {
    const chip = document.createElement("span");
    chip.className = "word-chip";
    chip.textContent = word;
    el.sentence.append(chip);
  });
}

function renderPhrases() {
  el.phraseBank.innerHTML = "";
  state.phrases.forEach((phraseText) => {
    const button = document.createElement("button");
    button.className = "phrase";
    button.type = "button";
    button.textContent = phraseText;
    button.addEventListener("click", () => {
      message = phraseText.split(" ");
      renderSentence();
      speak(phraseText);
    });
    el.phraseBank.append(button);
  });
}

function renderTilePageOptions() {
  el.tilePage.innerHTML = "";
  el.builderPageSelect.innerHTML = "";
  state.pages.forEach((pageItem) => {
    const option = document.createElement("option");
    option.value = pageItem.id;
    option.textContent = pageItem.label;
    el.tilePage.append(option);

    const builderOption = document.createElement("option");
    builderOption.value = pageItem.id;
    builderOption.textContent = pageItem.label;
    el.builderPageSelect.append(builderOption);
  });
  el.tilePage.value = activePage;
  el.builderPageSelect.value = activePage;
}

function renderStarterOptions() {
  el.starterBoard.innerHTML = "";
  starterBoards.forEach((starter) => {
    const option = document.createElement("option");
    option.value = starter.id;
    option.textContent = starter.name;
    el.starterBoard.append(option);
  });
}

function renderProfileOptions() {
  const profiles = loadProfiles();
  const current = el.profileSelect.value;
  el.profileSelect.innerHTML = "";
  if (!profiles.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No saved profiles yet";
    el.profileSelect.append(option);
    return;
  }
  profiles.forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    const savedDate = profile.savedAt ? new Date(profile.savedAt).toLocaleDateString() : "saved";
    option.textContent = `${profile.name} (${savedDate})`;
    el.profileSelect.append(option);
  });
  if (profiles.some((profile) => profile.id === current)) el.profileSelect.value = current;
}

function allWordBankCategories() {
  return [...wordBankCategories, ...expandedWordBankCategories, ...aacilInspiredWordBankCategories];
}

function renderWordCategoryOptions() {
  const current = el.wordCategory.value || "all";
  el.wordCategory.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All categories";
  el.wordCategory.append(allOption);
  allWordBankCategories().forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    el.wordCategory.append(option);
  });
  el.wordCategory.value = [...el.wordCategory.options].some((option) => option.value === current) ? current : "all";
}

function allWordBankItems() {
  return allWordBankCategories().flatMap((category) =>
    category.words.map((item) => ({ ...item, categoryId: category.id, categoryName: category.name })),
  );
}

function selectedBuilderPage() {
  return state.pages.find((pageItem) => pageItem.id === el.builderPageSelect.value) || state.pages[0];
}

function createTileFromWordBank(item) {
  return tile(item.label, item.spoken || item.label, iconMap[item.icon] ? item.icon : normalizeIcon(item.icon || item.label, item.label), item.kind || "noun");
}

function addWordBankItemToPage(item) {
  const pageItem = selectedBuilderPage();
  if (!pageItem) return;
  const exists = pageItem.tiles.some((tileItem) => tileItem.label.toLowerCase() === item.label.toLowerCase());
  if (exists) {
    el.wordBuilderStatus.textContent = `${item.label} is already on ${pageItem.label}.`;
    return;
  }
  pageItem.tiles.push(createTileFromWordBank(item));
  activePage = pageItem.id;
  saveState();
  render();
  el.wordBuilderStatus.textContent = `Added ${item.label} to ${pageItem.label}.`;
}

function wordBankItemByKey(key) {
  return allWordBankItems().find((item) => `${item.categoryId}:${item.label}` === key);
}

function renderWordBank() {
  const category = el.wordCategory.value || "all";
  const query = el.wordBankSearch.value.trim().toLowerCase();
  const items = allWordBankItems().filter((item) => {
    const categoryMatch = category === "all" || item.categoryId === category;
    const text = `${item.label} ${item.spoken} ${item.categoryName}`.toLowerCase();
    return categoryMatch && (!query || text.includes(query));
  });

  el.wordBankList.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    const itemKey = `${item.categoryId}:${item.label}`;
    button.className = `bank-word ${item.kind || "noun"}`;
    button.type = "button";
    button.draggable = true;
    button.dataset.wordKey = itemKey;
    button.setAttribute("aria-label", `Add ${item.label} to ${selectedBuilderPage()?.label || "board"}`);

    const icon = document.createElement("span");
    icon.className = "bank-word-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = iconMap[item.icon] || normalizeIcon(item.icon || item.label, item.label);

    const label = document.createElement("span");
    label.className = "bank-word-label";
    label.textContent = item.label;

    const meta = document.createElement("span");
    meta.className = "bank-word-meta";
    meta.textContent = item.categoryName;

    button.append(icon, label, meta);
    button.addEventListener("click", () => addWordBankItemToPage(item));
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", itemKey);
      event.dataTransfer.effectAllowed = "copy";
    });
    el.wordBankList.append(button);
  });
}

function renderBuilderPreview() {
  const pageItem = selectedBuilderPage();
  el.builderBoardDrop.innerHTML = "";
  el.builderBoardDrop.style.setProperty("--columns", state.columns);
  el.builderBoardDrop.style.setProperty("--preview-tile-width", state.columns >= 9 ? "92px" : "108px");
  if (!pageItem) return;
  pageItem.tiles.forEach((item) => {
    const previewTile = document.createElement("button");
    previewTile.className = `builder-preview-tile ${item.kind}`;
    previewTile.type = "button";
    previewTile.setAttribute("aria-label", `Preview ${item.label}`);

    const icon = document.createElement("span");
    icon.className = "tile-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = item.icon || iconMap.default;

    const label = document.createElement("span");
    label.className = "tile-label";
    label.textContent = item.label;

    previewTile.append(icon, label);
    previewTile.addEventListener("click", () => speak(item.spoken));
    el.builderBoardDrop.append(previewTile);
  });
}

function renderPictureWordBuilder() {
  renderWordCategoryOptions();
  renderWordBank();
  renderBuilderPreview();
}

function renderSettings() {
  el.boardName.value = state.name;
  el.boardColumns.value = state.columns;
  el.tileSize.value = state.tileSize;
  el.speechRate.value = state.settings.rate;
  el.speechPitch.value = state.settings.pitch;
  el.speakEachWord.checked = state.settings.speakEachWord;
  el.lockBoard.checked = state.settings.lockBoard;
  el.largeText.checked = state.settings.largeText;
  el.highContrast.checked = state.settings.highContrast;
  el.targetWords.value = state.targetWords?.join(", ") || "";
  el.maskTargets.checked = Boolean(state.maskTargets);
  el.smsNumber.value = state.smsNumber || "";
  el.chatName.value = state.chatName || "AAC User";
  el.chatRoom.value = state.chatRoom || "therapy-room";
  if (!el.profileName.value) el.profileName.value = state.name || "My AAC Board";
  el.editModeBtn.textContent = `Edit Mode: ${editMode ? "On" : "Off"}`;
  document.body.classList.toggle("large-text", state.settings.largeText);
  document.body.classList.toggle("high-contrast", state.settings.highContrast);
}

function render() {
  renderTabs();
  renderBoard();
  renderSentence();
  renderPhrases();
  renderTilePageOptions();
  renderStarterOptions();
  renderProfileOptions();
  renderPictureWordBuilder();
  renderSettings();
  renderChat();
}

function addWord(word) {
  message.push(word);
  renderSentence();
  if (state.settings.speakEachWord) speak(word);
}

function currentMessageText() {
  const builtMessage = message.join(" ").trim();
  return builtMessage || el.search.value.trim();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices.find((voice) => voice.name === el.voiceSelect.value);
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.rate = Number(state.settings.rate);
  utterance.pitch = Number(state.settings.pitch);
  window.speechSynthesis.speak(utterance);
}

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    el.voiceSelect.innerHTML = "<option>Speech unavailable</option>";
    el.voiceSelect.disabled = true;
    return;
  }

  voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const options = englishVoices.length ? englishVoices : voices;
  el.voiceSelect.innerHTML = "";
  options.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    el.voiceSelect.append(option);
  });
}

function tileSizeToMin(size) {
  if (size === "large") return "148px";
  if (size === "compact") return "92px";
  if (size === "dense") return "72px";
  return "118px";
}

function tileSizeToIcon(size) {
  if (size === "large") return "3.75rem";
  if (size === "compact") return "2.55rem";
  if (size === "dense") return "1.85rem";
  return "3.25rem";
}

function tileSizeToLabel(size) {
  if (size === "large") return "1.25rem";
  if (size === "compact") return "0.98rem";
  if (size === "dense") return "0.82rem";
  return "1.15rem";
}

function switchMode(mode) {
  el.modeTabs.forEach((tab) => tab.setAttribute("aria-selected", tab.dataset.mode === mode ? "true" : "false"));
  el.views.forEach((view) => view.classList.toggle("active", view.id === `${mode}View`));
}

function normalizeIcon(input, label) {
  const key = input.trim().toLowerCase() || label.trim().toLowerCase();
  return iconMap[key] || input.trim() || iconMap.default;
}

function addPage(label) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `page-${Date.now()}`;
  const uniqueId = state.pages.some((pageItem) => pageItem.id === id) ? `${id}-${Date.now()}` : id;
  state.pages.push(page(uniqueId, label, []));
  activePage = uniqueId;
  saveState();
  render();
}

function editTile(item) {
  const nextLabel = prompt("Tile word", item.label);
  if (!nextLabel) return;
  const nextSpeak = prompt("Speak as", item.spoken) || nextLabel;
  const nextIcon = prompt("Picture word or symbol", item.label) || item.icon;
  const pageItem = state.pages.find((candidate) => candidate.id === (item.pageId || activePage));
  const target = pageItem?.tiles.find((candidate) => candidate.id === item.id);
  if (!target) return;
  target.label = nextLabel;
  target.spoken = nextSpeak;
  target.icon = normalizeIcon(nextIcon, nextLabel);
  saveState();
  render();
}

function generateBoardFromPrompt() {
  const promptText = el.boardPrompt.value.toLowerCase();
  const selected = new Set(["core", "people", "actions", "things", "feelings", "places"]);
  Object.keys(situationWords).forEach((key) => {
    if (promptText.includes(key)) selected.add(key);
  });

  const generated = cloneStarter();
  generated.name = el.boardName.value.trim() || "Generated AAC Board";
  generated.columns = clamp(Number(el.boardColumns.value), 2, 9);
  generated.tileSize = el.tileSize.value;
  generated.targetWords = [];
  generated.maskTargets = false;

  const extraWords = Array.from(selected)
    .filter((key) => situationWords[key])
    .flatMap((key) => situationWords[key]);
  const existingLabels = new Set(generated.pages.flatMap((pageItem) => pageItem.tiles.map((item) => item.label)));
  const customPage = page("generated-needs", "Needs", []);
  extraWords.forEach((word) => {
    if (!existingLabels.has(word)) {
      customPage.tiles.push(tile(word, word, word, guessKind(word)));
      existingLabels.add(word);
    }
  });

  if (promptText.includes("non-verbal") || promptText.includes("nonverbal")) {
    customPage.tiles.push(tile("I need quiet", "I need quiet", "quiet", "core"));
    customPage.tiles.push(tile("my body hurts", "my body hurts", "pain", "core"));
  }

  if (customPage.tiles.length) generated.pages.push(customPage);
  state = generated;
  activePage = state.pages[0].id;
  saveState();
  render();
  switchMode("talk");
}

function buildStarterBoard(starter) {
  const next = cloneStarter();
  next.name = starter.name;
  if (starter.columns) next.columns = starter.columns;
  if (starter.tileSize) next.tileSize = starter.tileSize;
  if (starter.pages) next.pages = JSON.parse(JSON.stringify(starter.pages));
  next.pages = mergePages(next.pages, starter.extraPages || []);
  next.targetWords = starter.targets || [];
  next.maskTargets = Boolean(starter.targets?.length);
  next.phrases = phraseDefaultsForStarter(starter.id);
  return next;
}

function mergePages(basePages, extraPages) {
  const nextPages = JSON.parse(JSON.stringify(basePages));
  extraPages.forEach((extraPage) => {
    const existing = nextPages.find((candidate) => candidate.id === extraPage.id);
    if (existing) {
      existing.tiles.push(...JSON.parse(JSON.stringify(extraPage.tiles)));
    } else {
      nextPages.push(JSON.parse(JSON.stringify(extraPage)));
    }
  });
  return nextPages;
}

function phraseDefaultsForStarter(id) {
  const phraseMap = {
    "first-words": ["I want help", "more please", "all done", "go play"],
    "lamp-style-practice": ["my turn", "go up", "turn off", "eat more"],
    mealtime: ["I want drink", "more please", "I am all done", "I need help"],
    play: ["my turn", "your turn", "play more", "I want different"],
    school: ["I need help", "I need a break", "I am finished", "Can you show me"],
    "feelings-needs": ["I feel sick", "I need quiet", "I need a break", "my body hurts"],
    "bathroom-care": ["I need bathroom", "I need help", "I am all done", "please wait"],
    "sick-pain": ["I feel sick", "my body hurts", "I need medicine", "I want bed"],
    "devices-media": ["I want iPad", "open music", "volume down", "all done"],
  };
  return phraseMap[id] || phraseDefaults;
}

function loadStarterBoard() {
  const starter = starterBoards.find((candidate) => candidate.id === el.starterBoard.value);
  if (!starter) return;
  state = buildStarterBoard(starter);
  activePage = state.pages[0]?.id || "core";
  saveState();
  render();
  switchMode("talk");
}

function applyTargetWords() {
  state.targetWords = el.targetWords.value
    .split(/[\n,]+/)
    .map((word) => word.trim())
    .filter(Boolean);
  state.maskTargets = el.maskTargets.checked;
  saveState();
  render();
  switchMode("talk");
}

function guessKind(word) {
  if (["eat", "drink", "play", "read", "listen", "look", "go"].includes(word)) return "verb";
  if (["happy", "sad", "mad", "sick", "tired", "hungry", "thirsty"].includes(word)) return "adjective";
  if (["yes", "no", "please", "thank you"].includes(word)) return "social";
  return "noun";
}

function clamp(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function exportBackup() {
  downloadText(`${state.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-backup.json`, JSON.stringify(state, null, 2), "application/json");
}

function downloadText(filename, text, type = "text/plain") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function saveCurrentProfile() {
  const name = el.profileName.value.trim() || state.name || `AAC Board ${new Date().toLocaleDateString()}`;
  const id = profileIdFromName(name);
  const profiles = loadProfiles();
  const profile = {
    id,
    name,
    savedAt: new Date().toISOString(),
    state: JSON.parse(JSON.stringify(state)),
  };
  const existingIndex = profiles.findIndex((item) => item.id === id);
  if (existingIndex >= 0) profiles[existingIndex] = profile;
  else profiles.push(profile);
  saveProfiles(profiles);
  renderProfileOptions();
  el.profileSelect.value = id;
  setProfileStatus(`Saved ${name}.`);
}

function loadSelectedProfile() {
  const profiles = loadProfiles();
  const profile = profiles.find((item) => item.id === el.profileSelect.value);
  if (!profile) {
    setProfileStatus("Choose a saved profile first.");
    return;
  }
  state = migrateState({ ...cloneStarter(), ...profile.state });
  activePage = state.pages[0]?.id || "core";
  saveState();
  render();
  switchMode("builder");
  setProfileStatus(`Loaded ${profile.name}.`);
}

function deleteSelectedProfile() {
  const profiles = loadProfiles();
  const profile = profiles.find((item) => item.id === el.profileSelect.value);
  if (!profile) {
    setProfileStatus("Choose a saved profile first.");
    return;
  }
  if (!confirm(`Delete saved profile "${profile.name}" from this browser?`)) return;
  saveProfiles(profiles.filter((item) => item.id !== profile.id));
  renderProfileOptions();
  setProfileStatus(`Deleted ${profile.name}.`);
}

function localStorageBytes() {
  let total = 0;
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key?.startsWith("picture-aac-talker")) continue;
    total += key.length + (localStorage.getItem(key)?.length || 0);
  }
  return total * 2;
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "unknown";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function updateStorageStatus() {
  if (!el.storageStatus || !el.storageMeterFill) return;
  const appBytes = localStorageBytes();
  let meterPercent = Math.min(100, (appBytes / MAX_LOCAL_STORAGE_WARNING_BYTES) * 100);
  let text = `App profiles and boards use about ${formatBytes(appBytes)} locally.`;
  if (navigator.storage?.estimate) {
    try {
      const estimate = await navigator.storage.estimate();
      if (estimate.quota) {
        meterPercent = Math.min(100, (estimate.usage / estimate.quota) * 100);
        text += ` Browser storage: ${formatBytes(estimate.usage)} of ${formatBytes(estimate.quota)}.`;
      }
    } catch {
      // Keep the local estimate.
    }
  }
  if (appBytes > MAX_LOCAL_STORAGE_WARNING_BYTES) text += " Consider exporting backups and deleting older profiles.";
  el.storageMeterFill.style.width = `${Math.max(2, meterPercent)}%`;
  el.storageStatus.textContent = text;
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const next = JSON.parse(reader.result);
      if (!Array.isArray(next.pages)) throw new Error("Missing pages");
      state = migrateState({ ...cloneStarter(), ...next });
      activePage = state.pages[0]?.id || "core";
      saveState();
      render();
      switchMode("talk");
    } catch {
      alert("That backup could not be imported.");
    }
  };
  reader.readAsText(file);
}

function setSmsStatus(text) {
  el.smsStatus.textContent = text;
}

function smsSeparator() {
  const ua = navigator.userAgent || "";
  return /iPad|iPhone|iPod|Macintosh/.test(ua) ? "&" : "?";
}

function sendSms() {
  const text = currentMessageText();
  const phone = el.smsNumber.value.trim();
  state.smsNumber = phone;
  saveState();

  if (!text) {
    setSmsStatus("Build a message first, then tap Send SMS.");
    return;
  }

  const body = encodeURIComponent(text);
  const number = encodeURIComponent(phone);
  window.location.href = `sms:${number}${smsSeparator()}body=${body}`;
  setSmsStatus("Opening the device SMS app. Review before sending.");
}

async function copyMessage() {
  const text = currentMessageText();
  if (!text) {
    setSmsStatus("Build a message first, then copy it.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setSmsStatus("Message copied.");
  } catch {
    setSmsStatus("Copy was blocked by the browser. Select the message text manually.");
  }
}

function chatRoomKey() {
  const room = (state.chatRoom || "therapy-room").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-") || "therapy-room";
  return `picture-aac-chat-${room}`;
}

function loadChatMessages() {
  try {
    return JSON.parse(localStorage.getItem(chatRoomKey()) || "[]");
  } catch {
    return [];
  }
}

function saveChatMessages(messages) {
  localStorage.setItem(chatRoomKey(), JSON.stringify(messages.slice(-100)));
  updateStorageStatus();
}

function setChatStatus(text) {
  el.chatStatus.textContent = text;
}

function renderChat() {
  if (!el.chatLog) return;
  const messages = loadChatMessages();
  el.chatLog.innerHTML = "";
  messages.forEach((item) => {
    const li = document.createElement("li");
    li.className = `chat-message${item.senderId === state.chatSenderId ? " own-message" : ""}`;

    const meta = document.createElement("div");
    meta.className = "chat-meta";
    const time = new Date(item.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    meta.textContent = `${item.senderName || "AAC User"} • ${time}`;

    const text = document.createElement("div");
    text.className = "chat-text";
    text.textContent = item.text;

    li.append(meta, text);
    li.addEventListener("click", () => speak(item.text));
    el.chatLog.append(li);
  });
  el.chatLog.scrollTop = el.chatLog.scrollHeight;
}

function ensureChatSender() {
  if (!state.chatSenderId) {
    state.chatSenderId = makeId();
    saveState();
  }
}

function connectChatChannel() {
  ensureChatSender();
  if (chatChannel) chatChannel.close();
  if ("BroadcastChannel" in window) {
    chatChannel = new BroadcastChannel(chatRoomKey());
    chatChannel.addEventListener("message", () => renderChat());
  }
}

function sendChatMessage(text) {
  const cleanText = text.trim();
  if (!cleanText) {
    setChatStatus("Build or type a message first.");
    return;
  }

  state.chatName = el.chatName.value.trim() || "AAC User";
  state.chatRoom = el.chatRoom.value.trim() || "therapy-room";
  saveState();
  connectChatChannel();

  const messages = loadChatMessages();
  messages.push({
    id: makeId(),
    senderId: state.chatSenderId,
    senderName: state.chatName,
    text: cleanText,
    createdAt: new Date().toISOString(),
  });
  saveChatMessages(messages);
  chatChannel?.postMessage({ type: "chat-message" });
  renderChat();
  setChatStatus("Message sent to the local group chat.");
}

function clearChat() {
  if (!confirm("Clear this local chat room on this device?")) return;
  localStorage.removeItem(chatRoomKey());
  updateStorageStatus();
  chatChannel?.postMessage({ type: "chat-cleared" });
  renderChat();
  setChatStatus("Local chat cleared.");
}

function speakLastChatMessage() {
  const messages = loadChatMessages();
  const last = messages[messages.length - 1];
  if (last) speak(last.text);
}

function chatTranscriptText(messages = loadChatMessages()) {
  const room = state.chatRoom || "therapy-room";
  const lines = [`Picture AAC Talker chat transcript`, `Room: ${room}`, `Saved: ${new Date().toLocaleString()}`, ""];
  messages.forEach((item) => {
    const time = new Date(item.createdAt).toLocaleString();
    lines.push(`[${time}] ${item.senderName || "AAC User"}: ${item.text}`);
  });
  return lines.join("\n");
}

function speakChatTranscript() {
  const messages = loadChatMessages();
  if (!messages.length) {
    setChatStatus("There are no room messages to speak.");
    return;
  }
  const spoken = messages.map((item) => `${item.senderName || "AAC User"} said, ${item.text}`).join(". ");
  speak(spoken);
  setChatStatus("Speaking the group chat transcript.");
}

function exportChatTranscript() {
  const messages = loadChatMessages();
  if (!messages.length) {
    setChatStatus("There are no room messages to save.");
    return;
  }
  const room = (state.chatRoom || "therapy-room").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  downloadText(`${room}-chat-transcript.txt`, chatTranscriptText(messages));
  setChatStatus("Chat transcript saved as a text file.");
}

function setupContextHelp() {
  contextHelpTopics.forEach(([selector, title, body]) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.dataset.helpTitle = title;
      node.dataset.helpBody = body;
      node.dataset.helpSummary = body.split("\n")[0];
      if (!node.hasAttribute("aria-describedby")) node.setAttribute("aria-describedby", "helpTooltip");
    });
  });
}

function closestHelpTarget(target) {
  return target?.closest?.("[data-help-title]");
}

function renderTooltip(helpTarget, summaryOnly = true) {
  const body = summaryOnly ? helpTarget.dataset.helpSummary : helpTarget.dataset.helpBody;
  el.helpTooltip.innerHTML = `<strong>${helpTarget.dataset.helpTitle}</strong><span>${body}</span>`;
}

function scheduleTooltip(target, event) {
  const helpTarget = closestHelpTarget(target);
  if (!helpTarget) return;
  pendingTooltip = {
    target: helpTarget,
    x: event.clientX,
    y: event.clientY,
  };
  window.clearTimeout(tooltipTimer);
  tooltipTimer = window.setTimeout(() => {
    if (!pendingTooltip || !document.contains(pendingTooltip.target)) return;
    renderTooltip(pendingTooltip.target);
    el.helpTooltip.classList.add("visible");
    moveTooltip({ clientX: pendingTooltip.x, clientY: pendingTooltip.y });
  }, TOOLTIP_DELAY_MS);
}

function moveTooltip(event) {
  if (pendingTooltip) {
    pendingTooltip.x = event.clientX;
    pendingTooltip.y = event.clientY;
  }
  if (!el.helpTooltip.classList.contains("visible")) return;
  const margin = 14;
  const x = Math.min(event.clientX + margin, window.innerWidth - el.helpTooltip.offsetWidth - margin);
  const y = Math.min(event.clientY + margin, window.innerHeight - el.helpTooltip.offsetHeight - margin);
  el.helpTooltip.style.left = `${Math.max(margin, x)}px`;
  el.helpTooltip.style.top = `${Math.max(margin, y)}px`;
}

function hideTooltip() {
  window.clearTimeout(tooltipTimer);
  tooltipTimer = null;
  pendingTooltip = null;
  el.helpTooltip.classList.remove("visible");
}

function openContextHelp(target = document.activeElement) {
  const helpTarget = closestHelpTarget(target) || document.querySelector(".mode-tab[aria-selected='true']");
  if (!helpTarget?.dataset.helpTitle) return;
  el.contextHelpTitle.textContent = helpTarget.dataset.helpTitle;
  el.contextHelpBody.textContent = helpTarget.dataset.helpBody;
  el.contextHelpDialog.showModal();
}

function openGuide(card) {
  const image = card.querySelector("img");
  const caption = card.querySelector("figcaption")?.textContent || "Help guide";
  el.guideDialogTitle.textContent = caption;
  el.guideDialogImage.src = image.src;
  el.guideDialogImage.alt = image.alt || caption;
  if (typeof el.guideDialog.showModal === "function") {
    el.guideDialog.showModal();
  } else {
    window.open(image.src, "_blank", "noopener");
  }
}

async function toggleGuideFullscreen() {
  if (!document.fullscreenElement) {
    await el.guideDialog.requestFullscreen?.();
    el.guideFullscreenBtn.textContent = "Exit full screen";
    return;
  }

  await document.exitFullscreen?.();
  el.guideFullscreenBtn.textContent = "Full screen";
}

el.speakBtn.addEventListener("click", () => {
  if (message.length) speak(message.join(" "));
});

el.quickSpeakBtn.addEventListener("click", () => {
  const query = el.search.value.trim();
  if (query) speak(query);
});

el.smsNumber.addEventListener("change", () => {
  state.smsNumber = el.smsNumber.value.trim();
  saveState();
});

el.smsSendBtn.addEventListener("click", sendSms);
el.copyMessageBtn.addEventListener("click", copyMessage);
el.speakReceivedBtn.addEventListener("click", () => {
  const received = el.receivedMessage.value.trim();
  if (received) speak(received);
});

el.chatName.addEventListener("change", () => {
  state.chatName = el.chatName.value.trim() || "AAC User";
  saveState();
});

el.chatRoom.addEventListener("change", () => {
  state.chatRoom = el.chatRoom.value.trim() || "therapy-room";
  saveState();
  connectChatChannel();
  renderChat();
});

el.sendChatBtn.addEventListener("click", () => sendChatMessage(currentMessageText()));
el.sendTypedChatBtn.addEventListener("click", () => {
  sendChatMessage(el.chatTypedMessage.value);
  el.chatTypedMessage.value = "";
});
el.speakChatBtn.addEventListener("click", speakChatTranscript);
el.exportChatBtn.addEventListener("click", exportChatTranscript);
el.clearChatBtn.addEventListener("click", clearChat);
el.speakLastChatBtn.addEventListener("click", speakLastChatMessage);

window.addEventListener("storage", (event) => {
  if (event.key === chatRoomKey()) renderChat();
});

el.guideCards.forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${card.querySelector("figcaption")?.textContent || "help guide"}`);
  card.addEventListener("click", () => openGuide(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGuide(card);
    }
  });
});

el.guideCloseBtn.addEventListener("click", () => el.guideDialog.close());
el.guideFullscreenBtn.addEventListener("click", toggleGuideFullscreen);
el.guideDialog.addEventListener("click", (event) => {
  if (event.target === el.guideDialog) el.guideDialog.close();
});
el.contextHelpCloseBtn.addEventListener("click", () => el.contextHelpDialog.close());
el.contextHelpDialog.addEventListener("click", (event) => {
  if (event.target === el.contextHelpDialog) el.contextHelpDialog.close();
});
document.addEventListener("mouseover", (event) => scheduleTooltip(event.target, event));
document.addEventListener("mousemove", moveTooltip);
document.addEventListener("mouseout", (event) => {
  if (closestHelpTarget(event.target)) hideTooltip();
});
document.addEventListener("focusin", (event) => {
  const helpTarget = closestHelpTarget(event.target);
  if (!helpTarget) return;
  window.clearTimeout(tooltipTimer);
  tooltipTimer = window.setTimeout(() => {
    renderTooltip(helpTarget);
    const box = helpTarget.getBoundingClientRect();
    el.helpTooltip.style.left = `${Math.max(14, box.left)}px`;
    el.helpTooltip.style.top = `${Math.min(window.innerHeight - 120, box.bottom + 10)}px`;
    el.helpTooltip.classList.add("visible");
  }, TOOLTIP_DELAY_MS);
});
document.addEventListener("focusout", hideTooltip);
document.addEventListener("keydown", (event) => {
  if (event.key === "F1") {
    event.preventDefault();
    hideTooltip();
    openContextHelp(event.target);
  }
});
document.addEventListener("fullscreenchange", () => {
  el.guideFullscreenBtn.textContent = document.fullscreenElement ? "Exit full screen" : "Full screen";
});

el.clearBtn.addEventListener("click", () => {
  message = [];
  renderSentence();
});

el.backspaceBtn.addEventListener("click", () => {
  message.pop();
  renderSentence();
});

el.search.addEventListener("input", renderBoard);

el.modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchMode(tab.dataset.mode));
});

el.builderPageSelect.addEventListener("change", () => {
  activePage = el.builderPageSelect.value;
  render();
});
el.wordCategory.addEventListener("change", renderWordBank);
el.wordBankSearch.addEventListener("input", renderWordBank);
el.builderBoardDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
  el.builderBoardDrop.classList.add("drag-over");
  event.dataTransfer.dropEffect = "copy";
});
el.builderBoardDrop.addEventListener("dragleave", () => {
  el.builderBoardDrop.classList.remove("drag-over");
});
el.builderBoardDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  el.builderBoardDrop.classList.remove("drag-over");
  const item = wordBankItemByKey(event.dataTransfer.getData("text/plain"));
  if (item) addWordBankItemToPage(item);
});

el.generatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  generateBoardFromPrompt();
});

el.tileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const label = el.tileWord.value.trim();
  if (!label) return;
  const pageItem = state.pages.find((candidate) => candidate.id === el.tilePage.value);
  pageItem.tiles.push(tile(label, el.tileSpeak.value.trim() || label, normalizeIcon(el.tileIcon.value, label), el.tileKind.value));
  el.tileForm.reset();
  activePage = pageItem.id;
  saveState();
  render();
  switchMode("talk");
});

el.pageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addPage(el.pageName.value.trim());
  el.pageForm.reset();
});

el.editModeBtn.addEventListener("click", () => {
  editMode = !editMode;
  if (editMode) state.settings.lockBoard = false;
  saveState();
  render();
});

el.printBtn.addEventListener("click", () => window.print());
el.exportBtn.addEventListener("click", exportBackup);
el.importFile.addEventListener("change", () => {
  const [file] = el.importFile.files;
  if (file) importBackup(file);
});
el.saveProfileBtn.addEventListener("click", saveCurrentProfile);
el.loadProfileBtn.addEventListener("click", loadSelectedProfile);
el.deleteProfileBtn.addEventListener("click", deleteSelectedProfile);

el.loadStarterBtn.addEventListener("click", loadStarterBoard);
el.applyTargetsBtn.addEventListener("click", applyTargetWords);

el.resetBtn.addEventListener("click", () => {
  if (!confirm("Restore the starter board and remove local custom changes?")) return;
  state = cloneStarter();
  activePage = state.pages[0].id;
  saveState();
  render();
});

[el.speechRate, el.speechPitch, el.speakEachWord, el.lockBoard, el.largeText, el.highContrast].forEach((input) => {
  input.addEventListener("input", () => {
    state.settings.rate = Number(el.speechRate.value);
    state.settings.pitch = Number(el.speechPitch.value);
    state.settings.speakEachWord = el.speakEachWord.checked;
    state.settings.lockBoard = el.lockBoard.checked;
    state.settings.largeText = el.largeText.checked;
    state.settings.highContrast = el.highContrast.checked;
    saveState();
    renderSettings();
    renderBoard();
  });
});

window.speechSynthesis?.addEventListener("voiceschanged", loadVoices);
setupContextHelp();
connectChatChannel();
loadVoices();
render();
updateStorageStatus();
