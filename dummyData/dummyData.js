export const userData = [
  {
    uid: "ua",
    activeBids: [],
    bookmarks: [],
    personalInfo: {
      birthdate: "01/01/2000",
      number: "123-456-7890",
      email: "ua@email.com",
      location: "San Francisco, CA",
      lastName: "Causevic",
      firstName: "Mevludin",
      genderId: "Prefer not to say",
    },
    rejected: [],
    userName: "ua",
  },
  {
    uid: "ub",
    activeBids: [],
    bookmarks: [],
    personalInfo: {
      birthdate: "01/01/2000",
      number: "123-456-7890",
      email: "ub@email.com",
      location: "San Francisco, CA",
      lastName: "Mevludin",
      firstName: "Definitely",
      genderId: "Prefer not to say",
    },
    rejected: [],
    userName: "ub",
  },
  {
    uid: "uc",
    activeBids: [],
    bookmarks: [],
    personalInfo: {
      birthdate: "01/01/2000",
      number: "123-456-7890",
      email: "uc@email.com",
      location: "San Francisco, CA",
      lastName: "Milligan",
      firstName: "Nicholas",
      genderId: "Prefer not to say",
    },
    rejected: [],
    userName: "uc",
  },
  {
    uid: "ud",
    activeBids: [],
    bookmarks: [],
    personalInfo: {
      birthdate: "01/01/2000",
      number: "123-456-7890",
      email: "ud@email.com",
      location: "San Francisco, CA",
      lastName: "Mo Problems",
      firstName: "Mo Money",
      genderId: "Prefer not to say",
    },
    rejected: [],
    userName: "ud",
  },
];

export const eventData = [
  {
    contactinfo: "eventOrganizer@eventweb.com",
    description: "Big art party at Mr. Fancyson's. Bring money!",
    eventdate: "1682382828",
    id: "ea",
    imageurl:
      "https://www.cdm.org/wp-content/uploads/2023/02/2023_Muneeba-Zeeshan-Gallery-01.png",
    title: "Mr. Fancyson's Art Show",
    userid: "ub",
    username: "ub",
    venue: "122 Conch Street, Bikini Bottom, Ocean Floor",
    websiteurl: "event@eventweb.com",
  },
  {
    contactinfo: "eventOrganizer@eventweb.com",
    description: "We graduate, get jobs soon, maybe make money. Yes.",
    eventdate: "1683270000",
    id: "eb",
    imageurl:
      "https://www.cdm.org/wp-content/uploads/2023/02/2023_Muneeba-Zeeshan-Gallery-01.png",
    title: "Hack Reactor Graduation",
    userid: "uc",
    username: "uc",
    venue: "Graduation Zoom Room",
    websiteurl: "event@eventweb.com",
  },
  {
    contactinfo: "eventOrganizer@eventweb.com",
    description: "We came. We coded. We conquered. Now, we party.",
    eventdate: "1683270000",
    id: "ec",
    imageurl:
      "https://www.cdm.org/wp-content/uploads/2023/02/2023_Muneeba-Zeeshan-Gallery-01.png",
    title: "Party at Dennis' Place",
    userid: "ud",
    username: "ud",
    venue: "Santa Clara, CA 95050",
    websiteurl: "event@eventweb.com",
  },
];
export const groupData = [
  {
    chat_id: "ca",
    image:
      "https://media.licdn.com/dms/image/D5603AQFcnuK4UxzI5g/profile-displayphoto-shrink_800_800/0/1676394813216?e=1687996800&v=beta&t=Zz9oWRJf1rW6yjT_oFHKqumEflxuP5Tq4QIoWXZ7S_A",
    name: "Mevludin Causevic",
    users: ["ua"],
    messages: [
      {
        chat_id: "ca",
        message_id: 2,
        user_id: "ua",
        message_body: "So unfortunately, I'm just keeping myself company...",
        message_date: "",
        isContinueBelow: false,
        isContinueAbove: true,
      },
      {
        chat_id: "ca",
        message_id: 1,
        user_id: "ua",
        message_body: "This is a chat by myself",
        message_date: "",
        isContinueBelow: true,
        isContinueAbove: false,
      },
    ],
  },
  {
    chat_id: "cb",
    image:
      "https://media.discordapp.net/attachments/1072992937639686269/1101463716794486835/Mev2.jpeg?width=850&height=850",
    name: "Definitely Mevludin",
    users: ["ua", "ub"],
    messages: [
      {
        chat_id: "cb",
        message_id: 4,
        user_id: "ub",
        message_body: "That seems fair, I can do that.",
        message_date: "",
        isContinueBelow: false,
        isContinueAbove: false,
      },
      {
        chat_id: "cb",
        message_id: 3,
        user_id: "ua",
        message_body:
          "I'll give you Dark Magician at a discount if you give me your Black Lotus?",
        message_date: "",
        isContinueBelow: false,
        isContinueAbove: true,
      },
      {
        chat_id: "cb",
        message_id: 2,
        user_id: "ua",
        message_body:
          "Hi Definitely, I'm Mev and, I can tell you all about art. Only Yugioh card art though...",
        message_date: "",
        isContinueBelow: true,
        isContinueAbove: false,
      },
      {
        chat_id: "cb",
        message_id: 1,
        user_id: "ub",
        message_body: "Hi I'm Definitely Mev, and I'm asking about art!",
        message_date: "",
        isContinueBelow: false,
        isContinueAbove: false,
      },
    ],
  },
  {
    chat_id: "cc",
    image:
      "https://media.discordapp.net/attachments/1072992937639686269/1101464676593836153/Nic_TypesOfFish.jpg?width=841&height=850",
    name: "Nicholas Milligan",
    users: ["ua", "uc"],
    messages: [
      {
        chat_id: "cb",
        message_id: 4,
        user_id: "ua",
        message_body: "I don't recall his name, but trust me, he was big.",
        message_date: "",
        isContinueBelow: true,
        isContinueAbove: false,
      },
      {
        chat_id: "cb",
        message_id: 3,
        user_id: "ua",
        message_body: "Definitely Nick! It was hand-painted by a famous artist",
        message_date: "",
        isContinueBelow: true,
        isContinueAbove: false,
      },
      {
        chat_id: "cb",
        message_id: 2,
        user_id: "ub",
        message_body: "I'm a little skeptical of it's authenticity...",
        message_date: "",
        isContinueBelow: false,
        isContinueAbove: true,
      },
      {
        chat_id: "cb",
        message_id: 1,
        user_id: "ub",
        message_body:
          "Hi Mev, can I get details on the original Starry Night you said you had?",
        message_date: "",
        isContinueBelow: true,
        isContinueAbove: false,
      },
    ],
  },
  {
    chat_id: "cd",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464566241710140/Screenshot_2023-03-09_202446.png",
    name: "Mo Money Mo Problems",
    users: ["ua", "ud"],
    messages: [],
  },
  {
    chat_id: "ce",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464566745006191/Screenshot_2023-03-06_202248.png",
    name: "Andrew Heimerdinger",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "cf",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464566988296212/Screenshot_2023-03-06_202254.png",
    name: "Thomas Edison",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "cg",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464567491592252/Screenshot_20230227_064237.png",
    name: "Jordan Air Michael",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "ch",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464568389185607/Screenshot_20230221_043201.png",
    name: "Sun Saluter",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "ci",
    image:
      "https://media.discordapp.net/attachments/1090066202598051881/1101464614300045322/Screenshot_20230221_044713.png?width=1499&height=850",
    name: "Harvard Yang",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "cj",
    image:
      "https://media.discordapp.net/attachments/1072992937639686269/1101464192365637642/Mo_GymLeader_crop.jpg?width=1367&height=850",
    name: "Gym Leader Mo",
    users: ["ua"],
    messages: [],
  },
  {
    chat_id: "ck",
    image:
      "https://media.discordapp.net/attachments/1072992937639686269/1101464234707124284/Jordan_readTheDocs.png",
    name: "Read the Docs",
    users: ["ua"],
    messages: [],
  },
];
