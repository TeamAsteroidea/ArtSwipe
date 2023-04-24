export const user = {
  userId: 1,
  username: 'artBuyer',
  bookmarks: [2, 5],
  rejected: [4]
};

export const artwork = [
  { // most time; should not show
    id: 1,
    bidders: ['artBuyer'],
    bidIncrement: 1000,
    bidStartingPrice: 100000,
    artist: 'Van Gogh',
    currentOwner: 'artOwner',
    title: 'The Starry Night',
    image: null,
    dateAuctioned: 1682361164,
    bidDuration: 604800
  },
  { // soonest
    id: 2,
    bidders: [],
    bidIncrement: 2000,
    bidStartingPrice: 150000,
    artist: 'Henri Matisse',
    currentOwner: 'artOwner',
    title: 'Cat With Red Fish',
    image: null,
    dateAuctioned: 1682015564,
    bidDuration: 604800
  },
  { // third soonest; should not show
    id: 3,
    bidders: ['artBuyer'],
    bidIncrement: 5000,
    bidStartingPrice: 30000,
    artist: 'Alfred R. Mitchell',
    currentOwner: 'artOwner',
    title: 'La Jolla Cove',
    image: null,
    dateAuctioned: 1682188364,
    bidDuration: 604800
  },
  { // second most time; should not show
    id: 4,
    bidders: [],
    bidIncrement: 10000,
    bidStartingPrice: 500000,
    artist: 'Rembrandt Harmenszoon van Rijn',
    currentOwner: 'artOwner',
    title: 'Landscape with the Rest on the Flight into Egypt',
    image: null,
    dateAuctioned: 1682274764,
    bidDuration: 604800
  },
  { // third soonest
    id: 5,
    bidders: [],
    bidIncrement: 1500,
    bidStartingPrice: 200000,
    artist: 'Johannes Vermeer',
    currentOwner: 'artOwner',
    title: 'Girl with a Pearl Earring',
    image: null,
    dateAuctioned: 1682101964,
    bidDuration: 604800
  },
  { // second soonest
    id: 6,
    bidders: [],
    bidIncrement: 1500,
    bidStartingPrice: 200000,
    artist: 'Johannes Vermeer',
    currentOwner: 'artOwner',
    title: 'Girl with a Pearl Earring',
    image: null,
    dateAuctioned: 1682101964,
    bidDuration: 604700
  }
]
