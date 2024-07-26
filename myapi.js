// myapi.js
const { translateText } = require('./import');

// Example usage
const textToTranslate = 'Hello, what is your age?';
const sourceLanguageCode = 'en'; // English
const targetLanguageCode = 'gu'; // Spanish

translateText(textToTranslate, sourceLanguageCode, targetLanguageCode)
  .then((translatedText) => {
    console.log(`Original Text: ${textToTranslate}`);
    console.log(`Translated Text: ${translatedText}`);
  })
  .catch((error) => {
    console.error('Translation error:', error.message);
  });
