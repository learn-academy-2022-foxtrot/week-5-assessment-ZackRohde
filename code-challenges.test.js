// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("codedMessage", () => {
//   it("takes in a string and returns a coded message.", () => {
//     expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//   })
// })

// Good Fail!
// ReferenceError: codedMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// PSUEDO CODE: 
// 1. Create a function and name it codedMessage.
// 2. Have my parameter as a string.
// 3. Set up a new variable that...
// 4. Convert string into an array - .split("") method 
// Iterate over the array using - .map() method
// 5. Create a conditional that say's if I run into these character letters they are then changed into a number. 
// 6. Then since the array will come back split we must .join("") together.
// 7. Console.log the function name and the variable. 

const codedMessage = (string) => {
  let stringArr = string.split("")
  return stringArr.map((letter) => {
    if (letter === "a") {
      return 4
    } else if (letter === "e") {
      return 3
    } else if (letter === "E") {
      return 3
    } else if (letter === "i") {
      return 1
    } else if (letter === "o") {
      return 0
    } else
      return letter
  }).join("")
}
console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("returnLetterInWord", () => {
//   it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//     expect(returnLetterInWord(letterA)).toEqual(["Mango", "Apricot", "Peach"])
//     expect(returnLetterInWord(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//   })
// })

// Good Fail!
// ReferenceError: returnLetterInWord is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function and name it.
// Have the parameter named array as we are passing through words from an array.
// We must iterate over the array of words to find if a word has a certain letter. 
// If it does have a certain letter than we push it into a new array with the other words. 
// Create the conditional statement. 
// Console log. 
// Not sure what to do to finish it, I don't understand the syntax even after looking it up. 

// const returnLetterInWord = (array, letter) => {
//   return newArray = array.filter((word.includes(letter)
// }
// console.log(returnLetterInWord(fruitArray, letterA))
// console.log(returnLetterInWord(fruitArray, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})

// Good Fail!
// ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// 1. Create a function and name it. 
// 2. Pass an array as the parameter. 
// 3. Create a for loop that iterates over the array. 
// 4. Create a conditional to say whether or not an array has a full house 
// 5. Console log.

// I don't know the syntax to write in the for loop that says whether or not if 3 numbers in the array match than it's true. 

const fullHouse = (array) => {
  for (i = 0; i < fullHouse.length; i++)
    if (array === )
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))