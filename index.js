/*
1. EVEN OR ODD
 * Programming Quiz: Even or Odd 
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */

let number = 5;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

/*
2. MUSICAL GROUP
 * Programming Quiz: Musical Groups
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully.
 */

let musicians = 3;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}

/*
3. MYSTERY MURDER
 * Programming Quiz: Murder Mystery 
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

// Change the value of "room" and "suspect" to test your code.
let room = "dining room";
let suspect = "Mr. Parkes";

let weapon = "";
let solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehofff") {
    weapon = "poison";
    solved = "true";
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = "true";
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = "true";
} else if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = "true";
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}

/*
4. CHECKING YOUR BALANCE
 * Programming Quiz - Checking Your Balance
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

let balance = 325.0;
let checkBalance = true;
let isActive = true;

if (!checkBalance) {
    console.log("Thank you. Have a nice day!");
} else if (isActive && balance > 0) {
    console.log(`Your balance is $${balance.toFixed(2)}.`);
} else if (!isActive) {
    console.log("Your account is no longer active.");
} else if (isActive && balance === 0) {
    console.log("Your account is empty.");
} else if (isActive && balance !== 0) {
    console.log("Your balance is negative. Please contact bank.");
}

/*
5. ICE CREAM
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 *
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *
 * 5. Your code should NOT log (print) anything when
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 *
 * 6. Your code should not be empty
 */

let flavor = "vanilla";
let vessel = "cone";
let toppings = "sprinkles";

if (
    flavor === "vanilla" ||
    (flavor === "chocolate" && vessel === "cone") ||
    (vessel === "bowl" && toppings === "sprinkles") ||
    toppings === "peanuts"
) {
    console.log(
        `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`
    );
} else {
    console.log("Not available");
}

/*
6. WHAT DO I WEAR?
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */

let shirtWidth = 20;
let shirtLength = 29;
let shirtSleeve = 8.38;

if (
    shirtWidth >= 18 &&
    shirtWidth < 20 &&
    shirtLength >= 28 &&
    shirtLength < 29 &&
    shirtSleeve >= 8.13 &&
    shirtSleeve < 8.38
) {
    console.log("S");
} else if (
    shirtWidth >= 20 &&
    shirtWidth < 22 &&
    shirtLength >= 29 &&
    shirtLength < 30 &&
    shirtSleeve >= 8.38 &&
    shirtSleeve < 8.63
) {
    console.log("M");
} else if (
    shirtWidth >= 22 &&
    shirtWidth < 24 &&
    shirtLength >= 30 &&
    shirtLength < 31 &&
    shirtSleeve >= 8.63 &&
    shirtSleeve < 8.88
) {
    console.log("L");
} else if (
    shirtWidth >= 24 &&
    shirtWidth < 26 &&
    shirtLength >= 31 &&
    shirtLength < 32 &&
    shirtSleeve >= 8.88 &&
    shirtSleeve < 9.63
) {
    console.log("XL");
} else if (
    shirtWidth >= 26 &&
    shirtWidth < 28 &&
    shirtLength >= 32 &&
    shirtLength < 33 &&
    shirtSleeve >= 9.63 &&
    shirtSleeve < 10.13
) {
    console.log("2XL");
} else if (
    shirtWidth >= 28 &&
    shirtWidth < 30 &&
    shirtLength >= 33 &&
    shirtLength < 34 &&
    shirtSleeve >= 10.13 &&
    shirtSleeve < 10.63
) {
    console.log("3XL");
} else {
    console.log("N/A");
}

/*
7. NAVIGATING THE FOOD CHAIN
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement.
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

const eatsPlants = true;
const eatsAnimals = false;

let category = "";

category =
    eatsPlants && eatsAnimals ?
    "omnivore" :
    !eatsPlants && eatsAnimals ?
    "herbivore" :
    !eatsAnimals && eatsPlants ?
    "carnivore" :
    undefined;

console.log(category);

/*
8. BACK TO SCHOOL
 * Programming Quiz: Back to School 
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

let education = "no high school diploma";
let salary = 0;

switch (education) {
    case "no high school diploma":
        salary = "$25,636";
        break;
    case "high school diploma":
        salary = "$35,256";
        break;
    case "associate's degree":
        salary = "$41,496";
        break;
    case "bachelor's degree":
        salary = "$59,124";
        break;
    case "master's degree":
        salary = "$69,732";
        break;
    case "professional degree":
        salary = "$89,960";
        break;
    case "doctoral degree":
        salary = "$89,960";
        break;
    default:
        break;
}

console.log(
    `In 2015, a person with ${education} earned an average of ${salary}/year`
);