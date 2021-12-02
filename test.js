// THIS IS WHERE WE TEST CODE LINE BY LINE
// THIS IS NOT ACTUAL FUNCTION IMPLEMENTATION

let letters = [
  ['A', 'P', 'N'],
  ['N', 'A', 'A'],
  ['D', 'R', 'M'],
  ['Y', 'K', 'E']
]
const horizontalJoin = letters.map(ls => ls.join(''));
const verticalJoin = [];
// let verticalLetters = []
// for (let i = 0; i < word.length; i++) {
//   for (let j = 0; j < word[0].length; j++) {
//     verticalLetters += word[i][j]
//   }
// }

for (let i = 0; i < letters.length; i++) {
  for (let j = 0; j < letters[0].length; j++) {
    if (i === 0) {
      verticalJoin.push([])
    }
    verticalJoin += horizontalJoin[i][j];
  }
}

console.log(verticalJoin)