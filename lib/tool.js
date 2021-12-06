var oneLinerJoke = require('one-liner-joke');

const joke = () => {
  return oneLinerJoke.getRandomJoke()
}

module.exports = joke;