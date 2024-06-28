// Part 1: Fizz Buzz
console.log("fizz buzz");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}

// Part 2: Prime Time
console.log("prime time");

for (let n = 1; n <= 30; n++) {
    // prints prime for prime numbers
    if (n === 5 || n === 7 || n === 11 || n === 13 || n === 17 || n === 19 || n === 23 || n === 29) {
        console.log(n + ' is prime');
    }
}

// Part 3: Feeling Loopy
console.log("feeling loopy");

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each "cell" of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the "\r\n" sequence, move to the next "row."
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than "\n".

// looping through the string, I would start with a for loop
for (let i = 0; i < data.length; i++) {
    // store each cell in a variable
    // i know that I'm at the end of a cell when I get to the comma
    if (data[i] === ',') {
        console.log(data[i]);
    }
    // i know that I am at the end of the row when I get to '\n'
    // at the end of the row, I console.log(cell1, cell2, cell3, cell4)
    if (data[i] === '\n') {
        console.log('end of row of data');
    }

}