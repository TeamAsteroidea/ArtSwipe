export const user = {
  userId: 1,
  username: 'artBuyer',
  bookmarks: [2, 5],
  rejected: [4],
  activeBids: [],
};

export const artwork = [
  { // most time; should not show
    id: 1,
    bidders: ['artBuyer'],
    bidIncrement: 1000,
    bidPrice: 100000,
    artist: 'Van Gogh',
    currentOwner: 'artOwner',
    title: 'The Starry Night',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682361164000,
    bidDuration: 604800000
  },
  { // soonest
    id: 2,
    bidders: [],
    bidIncrement: 2000,
    bidPrice: 150000,
    artist: 'Henri Matisse',
    currentOwner: 'artOwner',
    title: 'Cat With Red Fish',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682015564000,
    bidDuration: 604800000
  },
  { // third soonest; should not show
    id: 3,
    bidders: ['artBuyer'],
    bidIncrement: 5000,
    bidPrice: 30000,
    artist: 'Alfred R. Mitchell',
    currentOwner: 'artOwner',
    title: 'La Jolla Cove',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682188364000,
    bidDuration: 604800000
  },
  { // second most time; should not show
    id: 4,
    bidders: [],
    bidIncrement: 10000,
    bidPrice: 500000,
    artist: 'Rembrandt Harmenszoon van Rijn',
    currentOwner: 'artOwner',
    title: 'Landscape with the Rest on the Flight into Egypt',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682274764000,
    bidDuration: 604800000
  },
  { // third soonest
    id: 5,
    bidders: [],
    bidIncrement: 1500,
    bidPrice: 200000,
    artist: 'Johannes Vermeer',
    currentOwner: 'artOwner',
    title: 'Girl with a Pearl Earring',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682101964000,
    bidDuration: 500000000
  },
  { // second soonest
    id: 6,
    bidders: [],
    bidIncrement: 1500,
    bidPrice: 200000,
    artist: '	Edvard Munch',
    currentOwner: 'artOwner',
    title: 'The Scream',
    image: require('../../../assets/icon.png'),
    dateAuctioned: 1682101964000,
    bidDuration: 600000000
  }
]
