const fs = require('fs');
var Converter = require('json-2-csv');

const adverbs = require('./Adverb.js').data;
const adjectives = require('./Adjective.js').data;
const verbs = require('./Verb.js').data;
const nouns = require('./Noun.js').data;

const convertObjectToJsonFile = (jsObject, filename) => {
  const json = JSON.stringify(jsObject);
  fs.writeFile(filename, json, 'utf8');
}

// convertObjectToJsonFile(adverbs, 'adverbs.json');
// convertObjectToJsonFile(adjectives, 'adjectives.json');
// convertObjectToJsonFile(verbs, 'verbs.json');
// convertObjectToJsonFile(nouns, 'nouns.json');


const convertObjectsToCSVFile = (objectArray, filename) => {
  const jsonArray = [];
  for (let i = 0; i < objectArray.length; i += 1) {
    const object = objectArray[i];
    const json = JSON.stringify(object);
    console.log(json.slice(1,200))
    jsonArray.push(json);
  }
  Converter.json2csv(jsonArray, results => {
    console.log(results)
    fs.writeFile(filename, results, 'utf8');
  });
}

const dictionary = [adverbs];
convertObjectsToCSVFile(dictionary, 'dictionary.csv');
