// question1
document.querySelector(".card-body").style.color = '#c1c3d6';

// question2
let teamMembers = ['Nutjob', 'Krisemeka', 'Kasie', 'Ladel', 'Drew', 'E4ma', 'Stanleyceejay']
console.log(teamMembers[1])

// question3
let me = {
    Firstname: 'Chukwuemeka',
    Lastname: 'Anyanwu',
    Bestmovie: 'Avengers_Endgame',
    Bestfood: 'Yamarita',
    Complexion: 'Light_Brown',
    BirthMonth: 'October',
    State: 'Lagos',
    Group_Name: 'Apollo',
}
console.log(me.Bestmovie)

// question4
let noun = 'Emeka'
let verb = 'ran'
let adjective = 'big'

let sentenceOne = noun + ' ' + 'the ' + adjective + ' ' + 'boy ' + verb + ' a ' + 'great length.' 
let sentenceOTwo = noun + ' ' + verb + ' to the river.'
let sentenceThree = 'The ' + adjective + ' fish was eaten by ' + noun +'.'
let sentenceFour = 'I ' + verb + ' to the stream with a ' + adjective + ' bowl.'
let sentenceFive = 'The ' + verb + ' dog belongs to ' + noun + '.'
console.log(sentenceOne, sentenceOTwo, sentenceThree, sentenceFour, sentenceFive)

// question5
const calcdivision = function(firstNumber, secondNumber) {
    let remainder = firstNumber % secondNumber;
    console.log(remainder)
}
calcdivision(10, 3)

// question6
const almightyFormula = function(a, b, c) {
    let formularPositive = Math.floor(((-1 * b) + Math.sqrt((b**2)-4*a*c))/2*a);
    let formularNegative = Math.floor(((-1 * b) - Math.sqrt((b**2)-4*a*c))/2*a);
    console.log(formularPositive)
    console.log(formularNegative)
}
almightyFormula(1, -8, 5)

// question7
const myNoun = 'kamsi'
const myAdjective = 'beautifully'
const myVerb = 'sings'
const myAdverb = 'very'
const wordBlanks = `${myNoun} ${myVerb} ${myAdverb} ${myAdjective}.`
console.log(wordBlanks)

// question8
const calcArea = function(raduis) {
    const Pi = 3.142;
    let area = Pi * raduis**2;
    console.log(area)
}
calcArea(6)

// question9
const calcInterest = function(p, r, t) {
    let simpleInterest = (p * r * t) /100;
    console.log(simpleInterest)
}
calcInterest(8200, 17.5, 2.5)

// question10
console.log(10 % 4)

// question11
// first test data
let Mheight = 1.69
let Mmass = 78
let Nheight = 1.95
let Nmass = 92

const meritBMI = Mmass / Mheight**2
console.log(meritBMI)

const nutjobBMI = Nmass / Nheight**2
console.log(nutjobBMI)

let meritHigherBMI = (meritBMI > nutjobBMI)
console.log(meritHigherBMI)

// second test data
let Mheight2 = 1.69
let Mmass2 = 85
let Nheight2 = 1.88
let Nmass2 = 95

const meritBMI2 = Mmass / Mheight**2
console.log(meritBMI)

const nutjobBMI2 = Nmass / Nheight**2
console.log(nutjobBMI)

let meritHigherBMI2 = (meritBMI2 > nutjobBMI2)
console.log(meritHigherBMI)