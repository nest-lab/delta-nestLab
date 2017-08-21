const CX = 'INSERT YOUR CUSTOM SEARCH ENGINE ID here';
const API_KEY = 'INSERT YOUR API KEY HERE';

module.exports = function (SEARCH) {

var google = require('googleapis');
var customsearch = google.customsearch('v1');

// You can get a custom search engine id at
// https://www.google.com/cse/create/new


customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY }, function (err, resp) {
  if (err) {
    return console.log('An error occured', err);
  }
  // Got the response from custom search
  console.log('Result: ' + resp.searchInformation.formattedTotalResults);
  if (resp.items && resp.items.length > 0) {

      // Returning an y of Searched Reults
    return resp.items;
  }
});
}