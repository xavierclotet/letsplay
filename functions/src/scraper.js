let axios = require('axios'); // HTTP client
let cheerio = require('cheerio');
let url = 'http://jugamosuna.es/tienda/3-juegos?selected_filters=page-2';
let jsonframe = require('jsonframe-cheerio');
let fs = require('fs');

axios.get(url).then(response => {
  if (response.status === 200) {
    var html = response.data;
    let $ = cheerio.load(html); // We load the html we received into cheerio's parser
    fs.writeFileSync('functions/src/ph.html', html);
    jsonframe($); // We add the plugin to the cheerio's parser
    // .img-responsive , .product-desc , .product-name
    // For each .product-container, we add all the structure of a company to the bgList array
    // Don't try to understand what follows because we will do it differently.
    console.log('Scrapping web');

    var frame = {
      games: {
        selector: '#product_list li .product-container', // defines the elements to search for
        data: [
          {
            name: '.product-image-container a.product-name'
          }
        ]
      }
    };
    var gamesList = $('body').scrape(frame);
    fs.writeFileSync(
      'functions/src/games.json',
      JSON.stringify(gamesList, null, 2)
    );
    console.log(gamesList); // Output the data in the terminal
  }
});

/* $('.product-container').each(function(index, element) {
  bgList[index] = {};
  var name = $(element).find('.product-name');
  bgList[index]['name'] = $(name).text();
  bgList[index]['desc'] = $(element).find('.product-desc').text();
  bgList[index]['price'] = $(element).find('.product-price').text();
});
 */
