var Gallery = require('../models/gallery');
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