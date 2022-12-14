export const mockLukeSkywalker = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};

export const mockSkywalkerShip1 = {
  name: 'X-wing',
  model: 'T-65 X-wing',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  max_atmosphering_speed: '1050',
  crew: '1',
  passengers: '0',
  cargo_capacity: '110',
  consumables: '1 week',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  starship_class: 'Starfighter',
  pilots: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/9/',
    'https://swapi.dev/api/people/18/',
    'https://swapi.dev/api/people/19/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  created: '2014-12-12T11:19:05.340000Z',
  edited: '2014-12-20T21:23:49.886000Z',
  url: 'https://swapi.dev/api/starships/12/',
};

export const mockSkywalkerShip2 = {
  name: 'Imperial shuttle',
  model: 'Lambda-class T-4a shuttle',
  manufacturer: 'Sienar Fleet Systems',
  cost_in_credits: '240000',
  length: '20',
  max_atmosphering_speed: '850',
  crew: '6',
  passengers: '20',
  cargo_capacity: '80000',
  consumables: '2 months',
  hyperdrive_rating: '1.0',
  MGLT: '50',
  starship_class: 'Armed government transport',
  pilots: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/13/',
    'https://swapi.dev/api/people/14/',
  ],
  films: ['https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/'],
  created: '2014-12-15T13:04:47.235000Z',
  edited: '2014-12-20T21:23:49.900000Z',
  url: 'https://swapi.dev/api/starships/22/',
};

export const mockFilms = [
  {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl:
      'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\n' +
      'their first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\n' +
      "spies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\n" +
      'STAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\n' +
      "Pursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\n" +
      'starship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/8/',
      'https://swapi.dev/api/people/9/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/12/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/15/',
      'https://swapi.dev/api/people/16/',
      'https://swapi.dev/api/people/18/',
      'https://swapi.dev/api/people/19/',
      'https://swapi.dev/api/people/81/',
    ],
    planets: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/2/',
      'https://swapi.dev/api/planets/3/',
    ],
    starships: [
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/3/',
      'https://swapi.dev/api/starships/5/',
      'https://swapi.dev/api/starships/9/',
      'https://swapi.dev/api/starships/10/',
      'https://swapi.dev/api/starships/11/',
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/13/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/4/',
      'https://swapi.dev/api/vehicles/6/',
      'https://swapi.dev/api/vehicles/7/',
      'https://swapi.dev/api/vehicles/8/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/3/',
      'https://swapi.dev/api/species/4/',
      'https://swapi.dev/api/species/5/',
    ],
    created: '2014-12-10T14:23:31.880000Z',
    edited: '2014-12-20T19:49:45.256000Z',
    url: 'https://swapi.dev/api/films/1/',
  },
  {
    title: 'The Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\n' +
      'Imperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\n' +
      'the galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\n' +
      'fighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\n' +
      'of Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\n' +
      'thousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17',
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/18/',
      'https://swapi.dev/api/people/20/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/22/',
      'https://swapi.dev/api/people/23/',
      'https://swapi.dev/api/people/24/',
      'https://swapi.dev/api/people/25/',
      'https://swapi.dev/api/people/26/',
    ],
    planets: [
      'https://swapi.dev/api/planets/4/',
      'https://swapi.dev/api/planets/5/',
      'https://swapi.dev/api/planets/6/',
      'https://swapi.dev/api/planets/27/',
    ],
    starships: [
      'https://swapi.dev/api/starships/3/',
      'https://swapi.dev/api/starships/10/',
      'https://swapi.dev/api/starships/11/',
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/15/',
      'https://swapi.dev/api/starships/17/',
      'https://swapi.dev/api/starships/21/',
      'https://swapi.dev/api/starships/22/',
      'https://swapi.dev/api/starships/23/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/8/',
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/16/',
      'https://swapi.dev/api/vehicles/18/',
      'https://swapi.dev/api/vehicles/19/',
      'https://swapi.dev/api/vehicles/20/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/3/',
      'https://swapi.dev/api/species/6/',
      'https://swapi.dev/api/species/7/',
    ],
    created: '2014-12-12T11:26:24.656000Z',
    edited: '2014-12-15T13:07:53.386000Z',
    url: 'https://swapi.dev/api/films/2/',
  },
  {
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\n' +
      'friend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\n' +
      'Little does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\n' +
      'armored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\n' +
      'When completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\n' +
      'struggling to restore freedom\r\nto the galaxy...',
    director: 'Richard Marquand',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
    release_date: '1983-05-25',
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/16/',
      'https://swapi.dev/api/people/18/',
      'https://swapi.dev/api/people/20/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/22/',
      'https://swapi.dev/api/people/25/',
      'https://swapi.dev/api/people/27/',
      'https://swapi.dev/api/people/28/',
      'https://swapi.dev/api/people/29/',
      'https://swapi.dev/api/people/30/',
      'https://swapi.dev/api/people/31/',
      'https://swapi.dev/api/people/45/',
    ],
    planets: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/5/',
      'https://swapi.dev/api/planets/7/',
      'https://swapi.dev/api/planets/8/',
      'https://swapi.dev/api/planets/9/',
    ],
    starships: [
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/3/',
      'https://swapi.dev/api/starships/10/',
      'https://swapi.dev/api/starships/11/',
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/15/',
      'https://swapi.dev/api/starships/17/',
      'https://swapi.dev/api/starships/22/',
      'https://swapi.dev/api/starships/23/',
      'https://swapi.dev/api/starships/27/',
      'https://swapi.dev/api/starships/28/',
      'https://swapi.dev/api/starships/29/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/8/',
      'https://swapi.dev/api/vehicles/16/',
      'https://swapi.dev/api/vehicles/18/',
      'https://swapi.dev/api/vehicles/19/',
      'https://swapi.dev/api/vehicles/24/',
      'https://swapi.dev/api/vehicles/25/',
      'https://swapi.dev/api/vehicles/26/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/3/',
      'https://swapi.dev/api/species/5/',
      'https://swapi.dev/api/species/6/',
      'https://swapi.dev/api/species/8/',
      'https://swapi.dev/api/species/9/',
      'https://swapi.dev/api/species/10/',
      'https://swapi.dev/api/species/15/',
    ],
    created: '2014-12-18T10:39:33.255000Z',
    edited: '2014-12-20T09:48:37.462000Z',
    url: 'https://swapi.dev/api/films/3/',
  },
  {
    title: 'The Phantom Menace',
    episode_id: 1,
    opening_crawl:
      'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\n' +
      'systems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\n' +
      'battleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\n' +
      'of Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\n' +
      'the Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\n' +
      'peace and justice in the\r\ngalaxy, to settle the conflict....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '1999-05-19',
    characters: [
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/16/',
      'https://swapi.dev/api/people/20/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/32/',
      'https://swapi.dev/api/people/33/',
      'https://swapi.dev/api/people/34/',
      'https://swapi.dev/api/people/35/',
      'https://swapi.dev/api/people/36/',
      'https://swapi.dev/api/people/37/',
      'https://swapi.dev/api/people/38/',
      'https://swapi.dev/api/people/39/',
      'https://swapi.dev/api/people/40/',
      'https://swapi.dev/api/people/41/',
      'https://swapi.dev/api/people/42/',
      'https://swapi.dev/api/people/43/',
      'https://swapi.dev/api/people/44/',
      'https://swapi.dev/api/people/46/',
      'https://swapi.dev/api/people/47/',
      'https://swapi.dev/api/people/48/',
      'https://swapi.dev/api/people/49/',
      'https://swapi.dev/api/people/50/',
      'https://swapi.dev/api/people/51/',
      'https://swapi.dev/api/people/52/',
      'https://swapi.dev/api/people/53/',
      'https://swapi.dev/api/people/54/',
      'https://swapi.dev/api/people/55/',
      'https://swapi.dev/api/people/56/',
      'https://swapi.dev/api/people/57/',
      'https://swapi.dev/api/people/58/',
      'https://swapi.dev/api/people/59/',
    ],
    planets: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/8/',
      'https://swapi.dev/api/planets/9/',
    ],
    starships: [
      'https://swapi.dev/api/starships/31/',
      'https://swapi.dev/api/starships/32/',
      'https://swapi.dev/api/starships/39/',
      'https://swapi.dev/api/starships/40/',
      'https://swapi.dev/api/starships/41/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/33/',
      'https://swapi.dev/api/vehicles/34/',
      'https://swapi.dev/api/vehicles/35/',
      'https://swapi.dev/api/vehicles/36/',
      'https://swapi.dev/api/vehicles/37/',
      'https://swapi.dev/api/vehicles/38/',
      'https://swapi.dev/api/vehicles/42/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/6/',
    ],
    created: '2014-12-19T16:52:55.740000Z',
    edited: '2014-12-20T10:54:07.216000Z',
    url: 'https://swapi.dev/api/films/4/',
  },
  {
    title: 'Attack of the Clones',
    episode_id: 2,
    opening_crawl:
      'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\n' +
      'intentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\n' +
      'mysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\n' +
      'peace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\n' +
      'to the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\n' +
      'to assist the overwhelmed\r\nJedi....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2002-05-16',
    characters: [
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/20/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/22/',
      'https://swapi.dev/api/people/33/',
      'https://swapi.dev/api/people/35/',
      'https://swapi.dev/api/people/36/',
      'https://swapi.dev/api/people/40/',
      'https://swapi.dev/api/people/43/',
      'https://swapi.dev/api/people/46/',
      'https://swapi.dev/api/people/51/',
      'https://swapi.dev/api/people/52/',
      'https://swapi.dev/api/people/53/',
      'https://swapi.dev/api/people/58/',
      'https://swapi.dev/api/people/59/',
      'https://swapi.dev/api/people/60/',
      'https://swapi.dev/api/people/61/',
      'https://swapi.dev/api/people/62/',
      'https://swapi.dev/api/people/63/',
      'https://swapi.dev/api/people/64/',
      'https://swapi.dev/api/people/65/',
      'https://swapi.dev/api/people/66/',
      'https://swapi.dev/api/people/67/',
      'https://swapi.dev/api/people/68/',
      'https://swapi.dev/api/people/69/',
      'https://swapi.dev/api/people/70/',
      'https://swapi.dev/api/people/71/',
      'https://swapi.dev/api/people/72/',
      'https://swapi.dev/api/people/73/',
      'https://swapi.dev/api/people/74/',
      'https://swapi.dev/api/people/75/',
      'https://swapi.dev/api/people/76/',
      'https://swapi.dev/api/people/77/',
      'https://swapi.dev/api/people/78/',
      'https://swapi.dev/api/people/82/',
    ],
    planets: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/8/',
      'https://swapi.dev/api/planets/9/',
      'https://swapi.dev/api/planets/10/',
      'https://swapi.dev/api/planets/11/',
    ],
    starships: [
      'https://swapi.dev/api/starships/21/',
      'https://swapi.dev/api/starships/32/',
      'https://swapi.dev/api/starships/39/',
      'https://swapi.dev/api/starships/43/',
      'https://swapi.dev/api/starships/47/',
      'https://swapi.dev/api/starships/48/',
      'https://swapi.dev/api/starships/49/',
      'https://swapi.dev/api/starships/52/',
      'https://swapi.dev/api/starships/58/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/4/',
      'https://swapi.dev/api/vehicles/44/',
      'https://swapi.dev/api/vehicles/45/',
      'https://swapi.dev/api/vehicles/46/',
      'https://swapi.dev/api/vehicles/50/',
      'https://swapi.dev/api/vehicles/51/',
      'https://swapi.dev/api/vehicles/53/',
      'https://swapi.dev/api/vehicles/54/',
      'https://swapi.dev/api/vehicles/55/',
      'https://swapi.dev/api/vehicles/56/',
      'https://swapi.dev/api/vehicles/57/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/6/',
      'https://swapi.dev/api/species/12/',
      'https://swapi.dev/api/species/13/',
      'https://swapi.dev/api/species/15/',
      'https://swapi.dev/api/species/28/',
      'https://swapi.dev/api/species/29/',
      'https://swapi.dev/api/species/30/',
      'https://swapi.dev/api/species/31/',
      'https://swapi.dev/api/species/32/',
      'https://swapi.dev/api/species/33/',
      'https://swapi.dev/api/species/34/',
      'https://swapi.dev/api/species/35/',
    ],
    created: '2014-12-20T10:57:57.886000Z',
    edited: '2014-12-20T20:18:48.516000Z',
    url: 'https://swapi.dev/api/films/5/',
  },
  {
    title: 'Revenge of the Sith',
    episode_id: 3,
    opening_crawl:
      'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\n' +
      'There are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\n' +
      'fiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\n' +
      'Chancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\n' +
      'attempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\n' +
      'desperate mission to rescue the\r\ncaptive Chancellor....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2005-05-19',
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/12/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/20/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/33/',
      'https://swapi.dev/api/people/35/',
      'https://swapi.dev/api/people/46/',
      'https://swapi.dev/api/people/51/',
      'https://swapi.dev/api/people/52/',
      'https://swapi.dev/api/people/53/',
      'https://swapi.dev/api/people/54/',
      'https://swapi.dev/api/people/55/',
      'https://swapi.dev/api/people/56/',
      'https://swapi.dev/api/people/58/',
      'https://swapi.dev/api/people/63/',
      'https://swapi.dev/api/people/64/',
      'https://swapi.dev/api/people/67/',
      'https://swapi.dev/api/people/68/',
      'https://swapi.dev/api/people/75/',
      'https://swapi.dev/api/people/78/',
      'https://swapi.dev/api/people/79/',
      'https://swapi.dev/api/people/80/',
      'https://swapi.dev/api/people/81/',
      'https://swapi.dev/api/people/82/',
      'https://swapi.dev/api/people/83/',
    ],
    planets: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/2/',
      'https://swapi.dev/api/planets/5/',
      'https://swapi.dev/api/planets/8/',
      'https://swapi.dev/api/planets/9/',
      'https://swapi.dev/api/planets/12/',
      'https://swapi.dev/api/planets/13/',
      'https://swapi.dev/api/planets/14/',
      'https://swapi.dev/api/planets/15/',
      'https://swapi.dev/api/planets/16/',
      'https://swapi.dev/api/planets/17/',
      'https://swapi.dev/api/planets/18/',
      'https://swapi.dev/api/planets/19/',
    ],
    starships: [
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/32/',
      'https://swapi.dev/api/starships/48/',
      'https://swapi.dev/api/starships/59/',
      'https://swapi.dev/api/starships/61/',
      'https://swapi.dev/api/starships/63/',
      'https://swapi.dev/api/starships/64/',
      'https://swapi.dev/api/starships/65/',
      'https://swapi.dev/api/starships/66/',
      'https://swapi.dev/api/starships/68/',
      'https://swapi.dev/api/starships/74/',
      'https://swapi.dev/api/starships/75/',
    ],
    vehicles: [
      'https://swapi.dev/api/vehicles/33/',
      'https://swapi.dev/api/vehicles/50/',
      'https://swapi.dev/api/vehicles/53/',
      'https://swapi.dev/api/vehicles/56/',
      'https://swapi.dev/api/vehicles/60/',
      'https://swapi.dev/api/vehicles/62/',
      'https://swapi.dev/api/vehicles/67/',
      'https://swapi.dev/api/vehicles/69/',
      'https://swapi.dev/api/vehicles/70/',
      'https://swapi.dev/api/vehicles/71/',
      'https://swapi.dev/api/vehicles/72/',
      'https://swapi.dev/api/vehicles/73/',
      'https://swapi.dev/api/vehicles/76/',
    ],
    species: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/3/',
      'https://swapi.dev/api/species/6/',
      'https://swapi.dev/api/species/15/',
      'https://swapi.dev/api/species/19/',
      'https://swapi.dev/api/species/20/',
      'https://swapi.dev/api/species/23/',
      'https://swapi.dev/api/species/24/',
      'https://swapi.dev/api/species/25/',
      'https://swapi.dev/api/species/26/',
      'https://swapi.dev/api/species/27/',
      'https://swapi.dev/api/species/28/',
      'https://swapi.dev/api/species/29/',
      'https://swapi.dev/api/species/30/',
      'https://swapi.dev/api/species/33/',
      'https://swapi.dev/api/species/34/',
      'https://swapi.dev/api/species/35/',
      'https://swapi.dev/api/species/36/',
      'https://swapi.dev/api/species/37/',
    ],
    created: '2014-12-20T18:49:38.403000Z',
    edited: '2014-12-20T20:47:52.073000Z',
    url: 'https://swapi.dev/api/films/6/',
  },
];

export const mockFirstEpisode = {
  title: 'The Phantom Menace',
  episode_id: 1,
  opening_crawl:
    'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\n' +
    'systems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\n' +
    'battleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\n' +
    'of Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\n' +
    'the Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\n' +
    'peace and justice in the\r\ngalaxy, to settle the conflict....',
  director: 'George Lucas',
  producer: 'Rick McCallum',
  release_date: '1999-05-19',
  characters: [
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/10/',
    'https://swapi.dev/api/people/11/',
    'https://swapi.dev/api/people/16/',
    'https://swapi.dev/api/people/20/',
    'https://swapi.dev/api/people/21/',
    'https://swapi.dev/api/people/32/',
    'https://swapi.dev/api/people/33/',
    'https://swapi.dev/api/people/34/',
    'https://swapi.dev/api/people/35/',
    'https://swapi.dev/api/people/36/',
    'https://swapi.dev/api/people/37/',
    'https://swapi.dev/api/people/38/',
    'https://swapi.dev/api/people/39/',
    'https://swapi.dev/api/people/40/',
    'https://swapi.dev/api/people/41/',
    'https://swapi.dev/api/people/42/',
    'https://swapi.dev/api/people/43/',
    'https://swapi.dev/api/people/44/',
    'https://swapi.dev/api/people/46/',
    'https://swapi.dev/api/people/47/',
    'https://swapi.dev/api/people/48/',
    'https://swapi.dev/api/people/49/',
    'https://swapi.dev/api/people/50/',
    'https://swapi.dev/api/people/51/',
    'https://swapi.dev/api/people/52/',
    'https://swapi.dev/api/people/53/',
    'https://swapi.dev/api/people/54/',
    'https://swapi.dev/api/people/55/',
    'https://swapi.dev/api/people/56/',
    'https://swapi.dev/api/people/57/',
    'https://swapi.dev/api/people/58/',
    'https://swapi.dev/api/people/59/',
  ],
  planets: [
    'https://swapi.dev/api/planets/1/',
    'https://swapi.dev/api/planets/8/',
    'https://swapi.dev/api/planets/9/',
  ],
  starships: [
    'https://swapi.dev/api/starships/31/',
    'https://swapi.dev/api/starships/32/',
    'https://swapi.dev/api/starships/39/',
    'https://swapi.dev/api/starships/40/',
    'https://swapi.dev/api/starships/41/',
  ],
  vehicles: [
    'https://swapi.dev/api/vehicles/33/',
    'https://swapi.dev/api/vehicles/34/',
    'https://swapi.dev/api/vehicles/35/',
    'https://swapi.dev/api/vehicles/36/',
    'https://swapi.dev/api/vehicles/37/',
    'https://swapi.dev/api/vehicles/38/',
    'https://swapi.dev/api/vehicles/42/',
  ],
  species: [
    'https://swapi.dev/api/species/1/',
    'https://swapi.dev/api/species/2/',
    'https://swapi.dev/api/species/6/',
  ],
  created: '2014-12-19T16:52:55.740000Z',
  edited: '2014-12-20T10:54:07.216000Z',
  url: 'https://swapi.dev/api/films/4/',
};

export const mockSpecies1 = {
  name: 'Human',
  classification: 'mammal',
  designation: 'sentient',
  average_height: '180',
  skin_colors: 'caucasian, black, asian, hispanic',
  hair_colors: 'blonde, brown, black, red',
  eye_colors: 'brown, blue, green, hazel, grey, amber',
  average_lifespan: '120',
  homeworld: 'https://swapi.dev/api/planets/9/',
  language: 'Galactic Basic',
  people: [
    'https://swapi.dev/api/people/66/',
    'https://swapi.dev/api/people/67/',
    'https://swapi.dev/api/people/68/',
    'https://swapi.dev/api/people/74/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-10T13:52:11.567000Z',
  edited: '2014-12-20T21:36:42.136000Z',
  url: 'https://swapi.dev/api/species/1/',
};

export const mockSpecies2 = {
  name: 'Droid',
  classification: 'artificial',
  designation: 'sentient',
  average_height: 'n/a',
  skin_colors: 'n/a',
  hair_colors: 'n/a',
  eye_colors: 'n/a',
  average_lifespan: 'indefinite',
  homeworld: null,
  language: 'n/a',
  people: [
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/8/',
    'https://swapi.dev/api/people/23/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-10T15:16:16.259000Z',
  edited: '2014-12-20T21:36:42.139000Z',
  url: 'https://swapi.dev/api/species/2/',
};

export const mockSpecies3 = {
  name: "Yoda's species",
  classification: 'mammal',
  designation: 'sentient',
  average_height: '66',
  skin_colors: 'green, yellow',
  hair_colors: 'brown, white',
  eye_colors: 'brown, green, yellow',
  average_lifespan: '900',
  homeworld: 'https://swapi.dev/api/planets/28/',
  language: 'Galactic basic',
  people: ['https://swapi.dev/api/people/20/'],
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-15T12:27:22.877000Z',
  edited: '2014-12-20T21:36:42.148000Z',
  url: 'https://swapi.dev/api/species/6/',
};

export const mockPlanet1 = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/4/',
    'https://swapi.dev/api/people/6/',
    'https://swapi.dev/api/people/7/',
    'https://swapi.dev/api/people/8/',
    'https://swapi.dev/api/people/9/',
    'https://swapi.dev/api/people/11/',
    'https://swapi.dev/api/people/43/',
    'https://swapi.dev/api/people/62/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/',
};

export const mockPlanet2 = {
  name: 'Alderaan',
  rotation_period: '24',
  orbital_period: '364',
  diameter: '12500',
  climate: 'temperate',
  gravity: '1 standard',
  terrain: 'grasslands, mountains',
  surface_water: '40',
  population: '2000000000',
  residents: [
    'https://swapi.dev/api/people/5/',
    'https://swapi.dev/api/people/68/',
    'https://swapi.dev/api/people/81/',
  ],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/'],
  created: '2014-12-10T11:35:48.479000Z',
  edited: '2014-12-20T20:58:18.420000Z',
  url: 'https://swapi.dev/api/planets/2/',
};

export const mockPlanet3 = {
  name: 'Hoth',
  rotation_period: '23',
  orbital_period: '549',
  diameter: '7200',
  climate: 'frozen',
  gravity: '1.1 standard',
  terrain: 'tundra, ice caves, mountain ranges',
  surface_water: '100',
  population: 'unknown',
  residents: [],
  films: ['https://swapi.dev/api/films/2/'],
  created: '2014-12-10T11:39:13.934000Z',
  edited: '2014-12-20T20:58:18.423000Z',
  url: 'https://swapi.dev/api/planets/4/',
};
