/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


let marksHeight;
let marksMass;
let johnsHeight;
let johnsMass;
let marksBmi;
let johnsBmi;
let markHigherBMI
// DATA 1
marksHeight = 1.69;
marksMass = 78;
johnsHeight = 1.95;
johnsMass = 92;

marksBmi = marksMass / marksHeight ** 2; // or marksMass / marksHeight ** 2
johnsBmi = johnsMass / johnsHeight ** 2; // or johnsMass / johnsHeight ** 2
markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI);

//DATA 2
marksHeight = 1.88;
marksMass = 95;
johnsHeight = 1.76;
johnsMass = 85;

marksBmi = marksMass / marksHeight ** 2; // or marksMass / marksHeight ** 2
johnsBmi = johnsMass / johnsHeight ** 2; // or johnsMass / johnsHeight ** 2
markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI);
*/