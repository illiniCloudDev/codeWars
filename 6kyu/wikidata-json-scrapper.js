//You are given a single argument named url, a string with a link to a wikidata page in JSON format. Your function should return a dictonary with keys "ID", "LABEL", and "DESCRIPTION" containing the matching "en" values.


//my solution 
const axios = require('axios') 
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  
  const response = await fetch(url)
  const data = await response.json()

  let id = Object.keys(data.entities)[0]
  let item = data.entities[id]

//   let secondP = '';
    
  //return english 'en' values of identifier, label, description
  //need a conditional to check item.labels.en
  //if(item.labels.en){
  // secongItem = item.label.value
  // } else { secondItem = 'No Label' }
  let secondP = item.labels.en ? item.labels.en.value : 'No Label';
  let thirdP = item.descriptions.en ? item.descriptions.en.value : 'No Description'


  return {
    id:id,
    label: secondP,
    description: thirdP
  }
}

//proper syntax 
const axios = require('axios') 
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  
  const response = await axios.get(url, { headers });
  const data = response.data

  let id = Object.keys(data.entities)[0]
  let item = data.entities[id]

//   let secondP = '';
    
  //return english 'en' values of identifier, label, description
  //need a conditional to check item.labels.en
  //if(item.labels.en){
  // secongItem = item.label.value
  // } else { secondItem = 'No Label' }
  let secondP = item.labels.en ? item.labels.en.value : 'No Label';
  let thirdP = item.descriptions.en ? item.descriptions.en.value : 'No Description'


  return {
    id:id,
    label: secondP,
    description: thirdP
  }
}