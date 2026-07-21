// Examples of Conditions //

let subscribed = true;
let loggedIn = true;

if (subscribed === true) {
  console.log("Show the video");
} else if (loggedIn === true) {
  console.log("Upgrade your subscription");
} else {
  console.log("Log into your account");
}

let cash = 50;
let price = 40;
let difference = cash - price;

if (cash > price) {
  console.log(`here is your change of ${difference} dollars`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day");
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`);
}

// Utilizing Logical Operators //

let isStoreOpen = true;

if (cash >= price && isStoreOpen === true) {
  console.log(`print the receipt`);
} else {
  console.log(`you are unable to make a purchase`);
}

// Truthy & Falsy Values //

let val = "Justin";

if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}

// Ternary Operators //

let hot = true;

hot ? console.log(`weather is hot outside`) : console.log(`weather is cold`);

let storeTrip = cash >= price && isStoreOpen ? `give receipt` : `no receipt`;
console.log(storeTrip);
