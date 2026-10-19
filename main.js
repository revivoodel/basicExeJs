// Task 2: Build a Right-Angled Triangle Using *
// set variable for a number between 1 and 10. Print that many rows of *, forming a triangle.
// Example: Input: 4 -> Output (4 lines):
// *
// **
// ***
// ****

let rows = 4; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line
let row = "";
for(let i = 0; i<rows;i++){
    for (let j = 0; j <= i; j++) {
        row+="*";
    }
    console.log(row);
    row="";


}