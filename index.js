//Array Methods//
console.log(
  "Array Methods are methods you can use to perform a specific task on an array."
);

let jollofIngri = ["Rice", "Tomatoes", "Pepper", "Onions", "Meat", "Oil"];
console.log(jollofIngri.length);
jollofIngri.push("Fish");
console.log(jollofIngri);
jollofIngri.pop();
console.log(jollofIngri);
jollofIngri.shift();
console.log(jollofIngri);
jollofIngri.unshift("Salt");
console.log(jollofIngri);
let results = jollofIngri.join(" , ");
console.log(results);

const fruits = ["Mango", "Apple", "Orange"];
const veges = ["Cabbage", "Carrot", "Cacumbar"];
let result = fruits.concat(veges);
console.log(result);

jollofIngri.slice(1, 3);
console.log(jollofIngri);

let result1 = jollofIngri.slice(0, 3);
console.log(result1);

console.log("Array lenth property returns the length of an array");
console.log("Array .Push adds an item to the end of an array.");
console.log(".pop removes the last item from an array.");
console.log(".shift removes the first item from an array.");
console.log(".unshift adds an item at the begining of an array.");
console.log(".join joins element in an array.");
console.log(".concat method creates a new array by merging existing arrays");
console.log(".slice method slices out a piece of an array into a new array");

console.log("The splice() method can be used to add new items to an array.");

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);

//Object Method//
console.log(
  "object properties are things inside the object,and object method is a function inside an object and is performing a specific task."
);

let student = {
  name: "Micheal",
  age: 35,
  maritalStatus: "Married",
  job: "Student",

  action: function () {
    return `${this.name} is a ${this.maritalStatus} man, he is ${this.age} years old and a ${this.job}.`;
  },
};

console.log(student.action());

let answer = student.name;
console.log(answer);
let years = student.age;
console.log(years);
let status = student.maritalStatus;
console.log(status);
let employment = student.job;
console.log(employment);

const motorbike = {
  brand: "Yamaha",
  model: "R1",
  year: 2024,
  color: "Black",

  stop: function () {
    return `${this.brand} has a ${this.color} color `;
  },
};

console.log(motorbike.stop());

//string method//
console.log(
  "string methods produce a new string without altering the original string."
);
let text = "sjdkfofhhvjfkddkdjjfjfcjd";
let lenth = text.length;
console.log(lenth);
let myDream = "Riches";
let dream = myDream.toUpperCase();
console.log(dream);

let money = "pounds";
let lowerCase = money.toLowerCase();
console.log(lowerCase);

let text2 = "HELLO WORLD";
let char = text2.charAt(3);
console.log(char);


// let shortCode = prompt();
let mymtnMomo = () => {
  let userPin = "3466";
let userAmount = "5000";
  let pincode = prompt("Enter  your pincode");
  if (pincode === "*170#") {
    let optionSelected = prompt(
      "1) Transfer Money \n 2) MoMoPay&Pay Bill \n 3) Airtime&Bundles \n 4) Allow Cash Out \n 5) Financial Services \n 6) My Wallet"
    );
    if (optionSelected == "1") {
      let service = prompt(
        "1) MoMo User \n 2) Non MoMo User \n 3) Send with Care \n 4) Favorite \n 5) Other Networks \n 6) Bank Account \n 7) Cross Border Payment \n 0) Back"
      );
      if(service == "1"){
        let phoneNum = prompt("Enter mobile number");
        let comfirmNum = prompt("Confirm Number");
        if (phoneNum == comfirmNum) {
          let balance = prompt("Enter  Amount");
          if ( balance <= userAmount ) {
            let reference = prompt("Enter Reference");
            let pin = prompt(
              `Transfer to Kelvin Duah for  GHS${balance} with reference ${reference}:. Fee is GHS 0.00, Tax amount is GHS 0.00. Enter MM PIN for next`
            );
            if (userPin == pin) {
              alert("Transaction successful");
            } else {
              alert("Incorrect Pin");
            }
          }else{
            alert("Insufficient balance")
          }
        }else{
          alert("Incorrect number")
        }
      }
    }

    // 192.168.8.101:5500
    
    // let option1selection = prompt();
    // if (option1selection == "1") {
      
    // }

    // let selectedOption = prompt();
    // if (selectedOption == "2") {
    //   alert(
    //     "1) MoMoPay \n 2) Pay Bill \n 3) GhQR \n 4) Fuels \n 5) Ghana.GOV \n 0) Back"
    //   );
    // }
    // let selectOptin = prompt();
    // if (selectOptin == "3") {
    //   alert(
    //     "1) Airtime \n 2) Internet Bundles \n 3) Fixed Broadband \n 4) Schedule Airtime \n 5) Just4U(Offers for you \n 0) Back)"
    //   );
    // }
    // let numSelected = prompt();
    // if (numSelected == "4") {
    //   alert("1) Yes \n 2) No \n 0) Back");
    // }
  }
};
mymtnMomo();
