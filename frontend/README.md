Run
----

```bash
yarn start
react-native run-ios
```

Dictionaries
------------

1. [GNU Collaborative International Dictionary of English](http://gcide.gnu.org.ua/)
2. [Princeton WordNet](http://wordnet.princeton.edu/wordnet/)
3. [Moby Part-of-Speech](http://icon.shef.ac.uk/Moby/mpos.html)
4. [The Gutenberg Webster's Unabridged Dictionary by Project Gutenberg](http://www.gutenberg.org/ebooks/673)
5. [Freedict foreign language (translation) dictionaries](http://www.freedict.org/ru/)

#### js
1. [wordnet.js](https://github.com/nlp-compromise/wordnet.js) (an opinionated assembly of wordnet for javascript) ([npm](https://www.npmjs.com/package/wordnetjs))
2. [WordNet in JSON Format](https://github.com/fluhus/wordnet-to-json)


TIL
----

React Native doesn't run on Node, so you can't use built-in Node modules like
`fs` and `child_process`, or built-in global objects like `__dirname` (the
directory name of the current module).

Solutions:
1. [ReactNativify](https://github.com/philikon/ReactNativify) or
   [rn-nodeify](https://github.com/mvayngrib/rn-nodeify) - allow react-native
   projects to use node core modules. But this looks very fragile and tricky
2. Remove the built-in node module requiring code!


Storing large amounts of data in RN app: https://stackoverflow.com/questions/34935837/best-approach-for-storing-large-data-collection-from-json-api-in-react-native
