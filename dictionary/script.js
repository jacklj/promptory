const adverbs = require('./Adverb.js').data;
const adjectives = require('./Adjective.js').data;
const verbs = require('./Verb.js').data;
const nouns = require('./Noun.js').data;

const data = {
  adverbs,
  adjectives,
  verbs,
  nouns
};

const posTypes = ['adverbs', 'adjectives', 'verbs', 'nouns'];

const linearSearch = (word, data) => {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const entity = data[i];
    const words = entity.words;
    for (let j = 0; j < words.length; j++) {
      if (words[j] === word) {
        console.log("RESULT")
        results.push(entity);
      }
    }
  }
  return results;
}

const answer = linearSearch('reluctantly', adverbs);
console.log(answer)
