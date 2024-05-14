const registerFormLabels = {
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password '
};

const loginFormLabels = {
  email: 'Email',
  password: 'Password'
}

const sampleArtists = [
  {
    name: 'Artist Name'
  },
  {
    name: 'Artist Name'
  },
  {
    name: 'Artist Name'
  },
  {
    name: 'Artist Name'
  },
  {
    name: 'Artist Name'
  },
  {
    name: 'Artist Name'
  },
];

const sampleAlbums = [
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
  {
    album: 'Album Name',
    artist: 'Artist Name'
  },
]

const sampleTracks = [
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
  {
    track: 'Track Name',
    album: 'Album Name',
    artist: 'Artist Name',
    duration: '3:06'
  },
]

const reviewsSearcHCategories = [
  { 
    label: 'Album',
    value: 'album'
  },
  { 
    label: 'Artist',
    value: 'artist'
  },
  { 
    label: 'Username',
    value: 'username'
  },
];

const sampleUsers = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const sampleFavorites = [
  {},
  {},
  {},
  {},
  {},
  {},
]

const sampleReviews = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const spotifyQueryLimit = 6;

const imagePlaceholderURL = 'https://placehold.co/300x300?text=No+Image+Available';

module.exports = {
  sampleArtists,
  sampleAlbums,
  sampleTracks,
  reviewsSearcHCategories,
  sampleUsers,
  sampleFavorites,
  sampleReviews,
  registerFormLabels,
  loginFormLabels,
  spotifyQueryLimit,
  imagePlaceholderURL
};