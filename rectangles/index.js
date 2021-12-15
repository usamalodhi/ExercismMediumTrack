["+-+", "| |", "+-+"];

console.log(count(["+-+", "| |", "+-+"])); //returns 1
console.log(count([])); //returns 0

const feed = ["A", "B", "C"];
const test = feed.map((feed) => [...feed]);

console.log(test);

function count(input) {
  // define rectangle points
  const isCorner = (str) => /^[+]$/.test(str); //corner is always +
  const isHorizontal = (str) => /^[-+]$/.test(str); //horizontal origin + and - along H-Length
  const isVertical = (str) => /^[|+]$/.test(str); //vertical origin + and | along V-Length

  // test for no rectangles
  if (input.length === 0) return 0;

  // unpack input into 2D array i.e. matrix: [['+','-','+'],['|',' ','|'],['+'-'-'+'|']]
  const matrix = input.map((input) => [...input]);
  console.log(matrix);

  //2D array destructuring i.e. [['+','-','+'],['|',' ','|'],['+'-'-'+'|']] === [2,2]
  const [row, col] = [matrix.length - 1, matrix.length - 1];

  let numRectangles = 0;
  // scan from top left corner of matrix

  for (let top = 0; top < row; top++) {
    for (let left = 0; left < col; left++) {
      if (!isCorner(matrix[top][left]));
      for (let right = left + 1; right <= col; right++) {
        if (!isHorizontal(matrix[top][right]));
        if (!isCorner(matrix[top][right])) continue;
        for (let bottom = top + 1; bottom <= row; bottom++) {
          if (
            isCorner(matrix[bottom][left]) &&
            isCorner(matrix[bottom][right])
          ) {
            console.log(numRectangles);
            numRectangles++;
            console.log(numRectangles);
          }
          if (
            !isVertical(matrix[bottom][left]) ||
            !isVertical(matrix[bottom][right])
          ) {
            console.log(numRectangles);
            break;
          }
        }
      }
    }
  }
  console.log(numRectangles);
  return numRectangles;
}
