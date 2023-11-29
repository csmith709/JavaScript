//Javascrpt Hotel Guest Information
//Written by Charity Smith  
//Written on 18-24 Nov 2023
// git@github.com:csmith709/JavaScript.git

//enter constants
const guest = {
  custFName : `Theodora`,
  custLName : 'Vince',
  custGender : `Female`,
  custRoomPref : [103, 105, 202, 206, 301, 304],
  custPayMeth : `Amex`,
  custAddress : {
    custStAdd : [ "12 Main Street" ],
    custCity : [ "Lethbridge" ],
    custProv : [ "Newfoundland" ],
    custPost : [ "A1A 1A1" ],
  },
  custPhone : `709-777-0000`,
}

// Enter variables
var customer = {
  custBDate: new Date(1994, 9, 13), // Note: Months are zero-based, so 9 represents October
};

// Current date
var currentDate = new Date();

// Calculate age
var age = currentDate.getFullYear() - customer.custBDate.getFullYear();

// Check if the birthday has occurred this year
if (
  currentDate.getMonth() < customer.custBDate.getMonth() ||
  (currentDate.getMonth() === customer.custBDate.getMonth() && currentDate.getDate() < customer.custBDate.getDate())
) {
  age--;
}

// Customer Stay
var custStay = {
  dates: {
      custCheckIn: [new Date(2023, 10, 12)],
      custCheckOut: [new Date(2023, 10, 18)],
  }
};

//Calculate stay length - inputs
const checkInTimestamp = custStay.dates.custCheckIn[0].getTime();
const checkOutTimestamp = custStay.dates.custCheckOut[0].getTime();

// Difference in Days
const differenceInDays = Math.floor((checkOutTimestamp - checkInTimestamp) / (1000 * 60 * 60 * 24));

// Format the dates as YYYY-MM-DD
const formattedCheckInDate = custStay.dates.custCheckIn[0].toLocaleDateString('en-CA');
const formattedCheckOutDate = custStay.dates.custCheckOut[0].toLocaleDateString('en-CA');

console.log(formattedCheckInDate); // Output: 2023-11-12
console.log(formattedCheckOutDate); // Output: 2023-11-18

// Write customer desciption
let val;
val = `My name is ${guest.custFName} ${guest.custLName}. I am ${guest.custGender.toLowerCase()} and I am ${age} years old. I prefer the hotel rooms that have a view of the sunrise and the ocean, including rooms: ${guest.custRoomPref}. My address is ${guest.custAddress.custStAdd}, ${guest.custAddress.custCity}, ${guest.custAddress.custProv}, ${guest.custAddress.custPost}. My phone number is ${guest.custPhone}. I am going on vacation from ${formattedCheckInDate} to ${formattedCheckOutDate}, which is a total of ${differenceInDays} days.`;

html = `<p>${val}<p>`;
document.body.innerHTML = html;


// displays
console.log(customer.custBDate);
console.log(guest.custRoomPref);
console.log(guest.custAddress);
console.log(custStay);
console.log(differenceInDays);
console.log(val);
