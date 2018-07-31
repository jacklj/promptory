const adverbs = require('./Adverb.js').data;
const adjectives = require('./Adjective.js').data;
const verbs = require('./Verb.js').data;
const nouns = require('./Noun.js').data;

const linearSearch = (word, subDictionary) => {
  const results = [];
  for (let i = 0; i < subDictionary.length; i++) {
    const entity = subDictionary[i];
    const words = entity.words;
    for (let j = 0; j < words.length; j++) {
      if (words[j] === word) {
        results.push(entity);
      }
    }
  }
  return results;
}

const searchAllEntities = (word, dictionary, partsOfSpeech) => {
  let results = [];
  for (let i = 0; i < partsOfSpeech.length; i++) {
    const pos = partsOfSpeech[i];
    const subDictionary = dictionary[pos];
    const subResults = linearSearch(word, subDictionary);
    results = results.concat(subResults);
  }
  return results;
}

const removeElementFromArrayByValue = (array, value) => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

const dictionary = {
  adverbs,
  adjectives,
  verbs,
  nouns,
};

const partsOfSpeech = ['adverbs', 'adjectives', 'verbs', 'nouns'];

const lookUpWord = word => {
  // dictionary and partsOfSpeech in this function's closure
  const results = searchAllEntities(word, dictionary, partsOfSpeech);
  const transformedResults = results.map(entity => {
    const partOfSpeech = entity.syntactic_category;
    const definition = entity.description;
    const equivalentWordsIncludingThisOne = entity.words;
    const equivalentWords = removeElementFromArrayByValue(equivalentWordsIncludingThisOne, word);
    return {
      partOfSpeech,
      definition,
      equivalentWords,
    };
  })
  return transformedResults;
};
