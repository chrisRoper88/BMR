//An array of questions need to calculate user's BMR
const userDetails =  [
    "What is your weight in kg?",
    "What is your height in cm?",
    "What is your age?",
    "Male or Female?",
    "How much exercise do you do each week? none, light, moderate, heavy or very heavy?"
];

//An empty array and loop to get and hold uesr's answers
userAnswer = [];


for ( let i = 0; i < userDetails.length; i++ ) {
    let question = prompt(userDetails[i]);
    userAnswer.push(question);
    console.log(userAnswer);
}

//sum and conditional statements to finsh calcualting BMR and calorie allowance
var bmr = (10 * userAnswer[0]) + (6.25 * userAnswer[1]) - (5 * userAnswer[2]);

if ( userAnswer[3].toLowerCase() === "male" || userAnswer[3].toLowerCase() === "m") {
    bmr = bmr + 5;  
} else if ( userAnswer[3].toLowerCase() === "female" ||  userAnswer[3].toLowerCase() === "f") {
    bmr = bmr - 161;
} 

if ( userAnswer[4].toLowerCase() === "none") {
    var userCal = bmr * 1.2;
}
else if ( userAnswer[4].toLowerCase() === "light") {
    var userCal = bmr * 1.375;
}
else if ( userAnswer[4].toLowerCase() === "moderate") {
    var userCal = bmr * 1.55;
}
else if ( userAnswer[4].toLowerCase() === "heavy") {
    var userCal = bmr * 1.725;
}
else if ( userAnswer[4].toLowerCase() === "very heavy") {
    var userCal = bmr * 1.9;
} 

//Display results to screen
var result = `
    <p>Weight: ${userAnswer[0]}cm</p>
    <p>Height: ${userAnswer[1]}cm</p>
    <p>Age: ${userAnswer[2]}</p>
    <p>Sex: ${userAnswer[3]}</p>
    <p>You're BMR is: ${Math.round(bmr)}</p>
    <h3>Calorie allowance: ${Math.round(userCal)}</h3>
`;

document.querySelector("main").innerHTML = result;