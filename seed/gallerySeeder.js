var Gallery = require('../db/gallery');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/galleries');

var gallery = [
  new Gallery({
    restaurant_name: "1770 House",
    restaurant_id: "13399"
  }),
  new Gallery({
    restaurant_name: "Arethusa al Tavolo",
    restaurant_id: "114433"
  }),
  new Gallery({
    restaurant_name: "Atera",
    restaurant_id: "51988"
  }),
  new Gallery({
    restaurant_name: "Barclay Prime",
    restaurant_id: "3424"
  }),
  new Gallery({
    restaurant_name: "Barrique Venice",
    restaurant_id: "204862"
  }),
  new Gallery({
    restaurant_name: "Bavette's",
    restaurant_id: "89395"
  }),
  new Gallery({
    restaurant_name: "Benu",
    restaurant_id: "45916"
  }),
  new Gallery({
    restaurant_name: "Bida Manda Restaurant and Bar",
    restaurant_id: "92563"
  }),
  new Gallery({
    restaurant_name: "Bones",
    restaurant_id: "1554"
  }),
  new Gallery({
    restaurant_name: "BONDST",
    restaurant_id: "1791"
  }),
  new Gallery({
    restaurant_name: "Buccan",
    restaurant_id: "54223"
  }),
  new Gallery({
    restaurant_name: "Café Monarch",
    restaurant_id: "133999"
  }),
  new Gallery({
    restaurant_name: "Cafe Provence",
    restaurant_id: "7785"
  }),
  new Gallery({
    restaurant_name: "Charleston",
    restaurant_id: "1501"
  }),
  new Gallery({
    restaurant_name: "Charleston Grill",
    restaurant_id: "3227"
  }),
  new Gallery({
    restaurant_name: "Chez Billy Sud",
    restaurant_id: "149158"
  }),
  new Gallery({
    restaurant_name: "chi SPACCA",
    restaurant_id: "64306"
  }),
  new Gallery({
    restaurant_name: "Coppa",
    restaurant_id: "166435"
  }),
  new Gallery({
    restaurant_name: "CRUST",
    restaurant_id: "167428"
  }),
  new Gallery({
    restaurant_name: "Daniel",
    restaurant_id: "337"
  }),
  new Gallery({
    restaurant_name: "Del Posto",
    restaurant_id: "7126"
  }),
  new Gallery({
    restaurant_name: "Double Knot",
    restaurant_id: "211231"
  }),
  new Gallery({
    restaurant_name: "Fishing With Dynamite",
    restaurant_id: "105820"
  }),
  new Gallery({
    restaurant_name: "Frances",
    restaurant_id: "36655"
  }),
  new Gallery({
    restaurant_name: "Gabriel Kreuther",
    restaurant_id: "186475"
  }),
  new Gallery({
    restaurant_name: "Geronimo",
    restaurant_id: "3267"
  }),
  new Gallery({
    restaurant_name: "Girl & the Goat",
    restaurant_id: "44629"
  }),
  new Gallery({
    restaurant_name: "Giulia Restaurant",
    restaurant_id: "95506"
  }),
  new Gallery({
    restaurant_name: "Gramercy Tavern",
    restaurant_id: "942"
  }),
  new Gallery({
    restaurant_name: "The Grill - The Ritz-Carlton, Naples",
    restaurant_id: "2651"
  }),
  new Gallery({
    restaurant_name: "Halls Chophouse",
    restaurant_id: "28387"
  }),
  new Gallery({
    restaurant_name: "Harold Black",
    restaurant_id: "152296"
  }),
  new Gallery({
    restaurant_name: "Heirloom Cafe",
    restaurant_id: "53884"
  }),
  new Gallery({
    restaurant_name: "Hersh's",
    restaurant_id: "74767"
  }),
  new Gallery({
    restaurant_name: "Highlands Bar & Grill",
    restaurant_id: "4041"
  }),
  new Gallery({
    restaurant_name: "The Inn at Little Washington",
    restaurant_id: "191728"
  }),
  new Gallery({
    restaurant_name: "Joe's Seafood, Prime Steak & Stone Crab - Multiple Locations",
    restaurant_id: ""
  }),
  new Gallery({
    restaurant_name: "JUNGSIK",
    restaurant_id: "63064"
  }),
  new Gallery({
    restaurant_name: "Kinship",
    restaurant_id: "191320"
  }),
  new Gallery({
    restaurant_name: "Koi",
    restaurant_id: "2038"
  }),
  new Gallery({
    restaurant_name: "Kokkari Estiatorio",
    restaurant_id: "1935"
  }),
  new Gallery({
    restaurant_name: "L'Auberge Chez Francois",
    restaurant_id: "48031"
  }),
  new Gallery({
    restaurant_name: "La Grotta",
    restaurant_id: "39637"
  }),
  new Gallery({
    restaurant_name: "Lahaina Grill",
    restaurant_id: "2849"
  }),
  new Gallery({
    restaurant_name: "LArtusi",
    restaurant_id: "26869"
  }),
  new Gallery({
    restaurant_name: "Le Bilboquet - Dallas",
    restaurant_id: "107092"
  }),
  new Gallery({
    restaurant_name: "Le Coucou",
    restaurant_id: "214936"
  }),
  new Gallery({
    restaurant_name: "Le Diplomate",
    restaurant_id: "104143"
  }),
  new Gallery({
    restaurant_name: "Le Vallauris",
    restaurant_id: "74665"
  }),
  new Gallery({
    restaurant_name: "Linwoods",
    restaurant_id: "30262"
  }),
  new Gallery({
    restaurant_name: "Mama's Fish House",
    restaurant_id: "2767"
  }),
  new Gallery({
    restaurant_name: "Marc Forgione",
    restaurant_id: "21229"
  }),
  new Gallery({
    restaurant_name: "Marcel's by Robert Wiedmaier",
    restaurant_id: "233"
  }),
  new Gallery({
    restaurant_name: "Marea",
    restaurant_id: "31159"
  }),
  new Gallery({
    restaurant_name: "Market Restaurant and Bar",
    restaurant_id: "2528"
  }),
  new Gallery({
    restaurant_name: "Mistral - Sherman Oaks",
    restaurant_id: "48805"
  }),
  new Gallery({
    restaurant_name: "The Modern - Bar Room and Dining Room",
    restaurant_id: "4304"
  }),
  new Gallery({
    restaurant_name: "Momofuku Ko",
    restaurant_id: "335104"
  }),
  new Gallery({
    restaurant_name: "Neighborhood Services",
    restaurant_id: "101116"
  }),
  new Gallery({
    restaurant_name: "Orchids at Palm Court",
    restaurant_id: "6594"
  }),
  new Gallery({
    restaurant_name: "Oriole",
    restaurant_id: "213847"
  }),
  new Gallery({
    restaurant_name: "Parc",
    restaurant_id: "22711"
  }),
  new Gallery({
    restaurant_name: "Per Se",
    restaurant_id: "2783"
  }),
  new Gallery({
    restaurant_name: "The Polo Bar",
    restaurant_id: "157336"
  }),
  new Gallery({
    restaurant_name: "Polo Lounge @ The Beverly Hills Hotel",
    restaurant_id: "18085"
  }),
  new Gallery({
    restaurant_name: "PRESS",
    restaurant_id: "4374"
  }),
  new Gallery({
    restaurant_name: "Quince",
    restaurant_id: "24451"
  }),
  new Gallery({
    restaurant_name: "Raoul's",
    restaurant_id: "13462"
  }),
  new Gallery({
    restaurant_name: "Rasika",
    restaurant_id: "5674"
  }),
  new Gallery({
    restaurant_name: "Restaurant L",
    restaurant_id: "265591"
  }),
  new Gallery({
    restaurant_name: "Riccardo Enoteca",
    restaurant_id: "99751"
  }),
  new Gallery({
    restaurant_name: "Rich Table",
    restaurant_id: "97309"
  }),
  new Gallery({
    restaurant_name: "RL Restaurant",
    restaurant_id: "2092"
  }),
  new Gallery({
    restaurant_name: "RPM Restaurants - Multiple Locations",
    restaurant_id: "80437"
  }),
  new Gallery({
    restaurant_name: "Rudy & Paco Restaurant & Bar",
    restaurant_id: "25864"
  }),
  new Gallery({
    restaurant_name: "Ruth's Chris Steak House - Baton Rouge",
    restaurant_id: "25249"
  }),
  new Gallery({
    restaurant_name: "The Saddle River Inn",
    restaurant_id: "105040"
  }),
  new Gallery({
    restaurant_name: "Saint Jacques French Cuisine",
    restaurant_id: "5444"
  }),
  new Gallery({
    restaurant_name: "Shinsei Restaurant",
    restaurant_id: "6943"
  }),
  new Gallery({
    restaurant_name: "SHU - Sushi House Unico - Bel Air",
    restaurant_id: "6051"
  }),
  new Gallery({
    restaurant_name: "Sotto",
    restaurant_id: "103285"
  }),
  new Gallery({
    restaurant_name: "Spinasse",
    restaurant_id: "39061"
  }),
  new Gallery({
    restaurant_name: "St. Francis Winery & Vineyards",
    restaurant_id: "100342"
  }),
  new Gallery({
    restaurant_name: "Steve & Cookie's By the Bay",
    restaurant_id: "1831"
  }),
  new Gallery({
    restaurant_name: "Stonehouse at San Ysidro Ranch",
    restaurant_id: "7707"
  }),
  new Gallery({
    restaurant_name: "Sushi Nakazawa - Sushi Bar",
    restaurant_id: "118903"
  }),
  new Gallery({
    restaurant_name: "The Table at Season To Taste",
    restaurant_id: "193498"
  }),
  new Gallery({
    restaurant_name: "Talula’s Garden",
    restaurant_id: "60391"
  }),
  new Gallery({
    restaurant_name: "The Metro Wine Bar & Bistro",
    restaurant_id: "48019"
  }),
  new Gallery({
    restaurant_name: "Toscana",
    restaurant_id: "38809"
  }),
  new Gallery({
    restaurant_name: "Townsend",
    restaurant_id: "139690"
  }),
  new Gallery({
    restaurant_name: "True Food Kitchen - Chicago",
    restaurant_id: "262840"
  }),
  new Gallery({
    restaurant_name: "Uchi - Dallas",
    restaurant_id: "160822"
  }),
  new Gallery({
    restaurant_name: "UMI",
    restaurant_id: "107725"
  }),
  new Gallery({
    restaurant_name: "Upland",
    restaurant_id: "151747"
  }),
  new Gallery({
    restaurant_name: "Vernick Food & Drink",
    restaurant_id: "85150"
  }),
  new Gallery({
    restaurant_name: "Vetri Cucina",
    restaurant_id: "2575"
  }),
  new Gallery({
    restaurant_name: "Yvonne's",
    restaurant_id: "173581"
  }),
  new Gallery({
    restaurant_name: "Zahav",
    restaurant_id: "20398"
  }),
  new Gallery({
    restaurant_name: "Zero Restaurant + Bar",
    restaurant_id: "149044"
  }),
]


var done = 0;
for (var i = 0; i < gallery.length; i++) {
  gallery[i].save(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      done++;
      if (done === gallery.length) {
        exit();
      }
    }
  });
};

function exit() {
  mongoose.disconnect();
};

// new Gallery({
//   restaurant_name: ,
//   restaurant_id: 
// }),