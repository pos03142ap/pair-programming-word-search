const wordSearch = (letters, word) => {
  // state is originally false 
  let state = false;

  // given function searches for words horizontally
  const horizontalJoin = letters.map(ls => ls.join(''))
  // given function checks if word is in letters
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      state = true;
    }
  }

  // implement vertical search
  const verticalJoin = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[0].length; j++) {
      if (i === 0) {
        // push an array to store vertical words at 
        // the beginning of each search
        verticalJoin.push([])
      }
      verticalJoin[j] += horizontalJoin[i][j];
    }
  }
  // implement function to check if word is in letters
  for (l of verticalJoin) {
    if (l.includes(word)) {
      state = true;
    }
  }  
  return state 
}

module.exports = wordSearch;