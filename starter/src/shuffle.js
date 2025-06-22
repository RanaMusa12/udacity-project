/**
 * Shuffles an array of cards using the Fisher-Yates algorithm
 * @param {Array} cards - The array of cards to shuffle
 * @returns {Array} - The shuffled array
 */
const shuffle = (cards) => {
  let current = cards.length;
  const newCardsArray = [...cards];
  
  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;

    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current],
    ];
  }
  return newCardsArray;
};

export { shuffle };