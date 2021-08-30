"use strict";






let des = ["Seattle", "New York", "Austin", "Chicago", "Atlanta"];
let rest = ["Italian", "Thai", "TexMex", "Greek", "American"];
let trans = ["Plane", "Train", "Car", "Bike", "Scooter"];
let ent = ["Concert", "Sporting Event", "Comedy Show", "Musical", "Art Exhibit"];
let tripList = [];
let tripListAsString;

console.log("Generating Trip.....");
tripList.push(randGenerator(des));
tripList.push(randGenerator(rest));
tripList.push(randGenerator(trans));
tripList.push(randGenerator(ent));

tripListAsString = makeIntoString(tripList);
console.log(tripListAsString);

let userChoice = prompt("Would you like to re-generate a selction? Enter Yes or No");

while (userChoice === "Yes") {


    let option = prompt("Enter 0 for Destination, 1 for Restaurant, 2 for Transportation, and 3 for Entertainment");

    switch (option) {
        case "0":
            tripList[0] = randGenerator(des);
            break;
        case "1":
            tripList[1] = randGenerator(rest);
            break;
        case "2":
            tripList[2] = randGenerator(trans);
            break;
        case "3":
            tripList[3] = randGenerator(ent);
            break;
        default:
            option = prompt("Invalid choice, try again");
            break;
    }

    tripListAsString = makeIntoString(tripList);
    console.log(tripListAsString);
    userChoice = prompt("Would you like to re-generate a selction? Enter Yes or No");
}

console.log("Your day trip is as follows: " + tripListAsString);




function randGenerator(array) {

    let string = array[Math.floor(Math.random() * 5)];

    return string;
}

function makeIntoString(array) {

    let string = "";

    for (let i = 0; i < array.length; i++) {
        string = string.concat(array[i] + " ");
    }

    return string;
}