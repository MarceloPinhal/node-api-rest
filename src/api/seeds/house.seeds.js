const mongoose = require('mongoose');

// Imporatmos el modelo Character en este nuevo archivo.
const House = require('../houses/house.model');
mongoose.set('strictQuery', false)

const houses = [
    {
        "_id": 1,
        "name": "Stark",
        "words": "Winter Is Coming",
        "region": "The North",
        "characters": [],
        "founder": "Bran the Builder",
        "vassals": [],
      },
      {
        "_id": 2,
        "name": "Lannister",
        "words": "Hear Me Roar",
        "region": "The Westerlands",
        "characters": [],
        "founder": "Lann the Clever",
        "vassals": [],
      },
      {
        "_id": 3,
        "name": "Targaryen",
        "words": "Fire and Blood",
        "region": "The Crownlands",
        "characters": [],
        "founder": "Aegon The Conqueror",
        "vassals":[]
      },
      {
        "_id": 4,
        "name": "Baratheon",
        "words": "Ours is the Fury",
        "region": "The Stormlands",
        "characters": [],
        "founder": "Orys Baratheon",
        "vassals":[]
      },
      {
        "_id": 5,
        "name": "Tyrell",
        "sigil": "A golden rose on a green field",
        "words": "Growing Strong",
        "seat": "Highgarden",
        "region": "The Reach",
        "vassals": [
          "House Tarly",
          "House Hightower",
          "House Florent",
          "House Merryweather",
          "House Fossoway",
          "House Rowan",
          "House Redwyne",
          "House Oakheart"
        ],
        "founder": "Alester Tyrell"
      },
      {
        "_id": 6,
        "name": "Greyjoy",
        "sigil": "A golden kraken on a black field",
        "words": "We Do Not Sow",
        "seat": "Pyke",
        "region": "The Iron Islands",
        "vassals": [
          "House Blacktyde",
          "House Botley",
          "House Drumm",
          "House Goodbrother",
          "House Harlaw",
          "House Merlyn",
          "House Sparr",
          "House Humble"
        ],
        "founder": "The Grey King"
      },
      {
        "_id": 7,
        "name": "Tully",
        "sigil": "A silver trout leaping on a red and blue background",
        "words": "Family, Duty, Honor",
        "seat": "Riverrun",
        "region": "The Riverlands",
        "vassals": [
          "House Frey",
          "House Bracken",
          "House Mallister",
          "House Whent",
          "House Blackwood",
          "House Mooton",
          "House Smallwood",
          "House Darry"
        ],
        "founder": "Axel Tully"
      },
      {
        "_id": 8,
        "name": "Martell",
        "sigil": "A red sun pierced by a gold spear, on an orange field",
        "words": "Unbowed, Unbent, Unbroken",
        "seat": "Sunspear",
        "region": "Dorne",
        "vassals": [
          "House Allyrion",
          "House Blackmont",
          "House Dalt",
          "House Dayne",
          "House Gargalen",
          "House Jordayne",
          "House Qorgyle",
          "House Manwoody",
          "House Santagar",
          "House Uller",
          "House Yronwood"
        ],
        "founder": "Mors Martell"
      },
      {
        "_id": 9,
        "name": "Arryn",
        "sigil": "A white falcon volant and crescent moon on a blue field",
        "words": "As High as Honor",
        "seat": "The Eyrie",
        "region": "The Vale of Arryn",
        "vassals": [
          "House Royce",
          "House Egen",
          "House Waynwood",
          "House Corbray",
          "House Hunter",
          "House Lynderly",
          "House Templeton",
          "House Baelish"
        ],
        "founder": "Artys Arryn"
      },
      {
        "_id": 10,
        "name": "Bolton",
        "sigil": "A red flayed man, hanging upside-down on a white X-shaped cross, on a black background",
        "words": "Our Blades Are Sharp",
        "seat": "The Dreadfort",
        "region": "The North",
        "vassals": [],
        "founder": ""
      },
      {
        "_id": 11,
        "name": "Frey",
        "sigil": "The two stone grey towers and bridge of the Twins, on a dark grey field, surmounting an escutcheon of blue water",
        "words": "We Stand Together",
        "seat": "The Twins",
        "region": "The Riverlands",
        "vassals": ["House Erenford", "House Haigh"],
        "founder": ""
      },
      {
        "_id": 12,
        "name": "Redwyne",
        "sigil": "A burgundy grape cluster on a white field",
        "words": "Ripe for Victory",
        "seat": "The Arbor",
        "region": "The Reach",
        "vassals": [],
        "founder": ""
      },
      {
        "_id": 13,
        "name": "Hightower",
        "sigil": "A stone white watchtower, with a fire on the top, on a grey field",
        "words": "We Light the Way",
        "seat": "The Hightower",
        "region": "The Reach",
        "vassals": ["House Cuy", "House Bulwer", "House Beesbury"],
        "founder": ""
      },
      {
        "_id": 14,
        "name": "Karstark",
        "sigil": "A white sunburst on black",
        "words": "The Sun of Winter",
        "seat": "Karhold",
        "region": "The North",
        "vassals": [],
        "founder": "Karlon Stark"
      },
      {
        "_id": 15,
        "name": "Mormont",
        "sigil": "A rampant black bear on a white field, surrounded by a green escutcheon",
        "words": "Here We Stand",
        "seat": "Bear Island",
        "region": "The North",
        "vassals": [],
        "founder": ""
      },
]

