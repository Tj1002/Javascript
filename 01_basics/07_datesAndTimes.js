//To create a Date object representing the current date and time Date is an Object
const currentDate = new Date();
console.log("Current Date:", currentDate);

const specificDate = new Date(2023, 3, 15);
console.log("Specific Date:", specificDate.toDateString()); //Sat Apr 15 2023

// Date Components
const currentYear = currentDate.getFullYear();
console.log("Current Year:", currentYear);

const currentMonth = currentDate.getMonth(); // 0-indexed
console.log("Current Month:", currentMonth);

const currentDay = currentDate.getDate();
console.log("Current Day:", currentDay);

const currentHour = currentDate.getHours();
console.log("Current Hour:", currentHour);

const currentMinutes = currentDate.getMinutes();
console.log("Current Minutes:", currentMinutes);

const currentSeconds = currentDate.getSeconds();
console.log("Current Seconds:", currentSeconds);

// Date Setters

currentDate.setFullYear(2023);
currentDate.setMonth(2); // March (0-indexed)
currentDate.setDate(15);
currentDate.setHours(12);
currentDate.setMinutes(0);
currentDate.setSeconds(0);

console.log("Updated Date:", currentDate);

//
let myTimeStamp = Date.now();
console.log(myTimeStamp); //in ms from 1st jan 1970
let createdDate = new Date("03-15-2023");
console.log(`created date: ${createdDate.toLocaleString()}`);
console.log(createdDate.getTime());

//
// Date Conversion to String
const dateString = currentDate.toDateString();
console.log("Date String:", dateString); //Wed Mar 15 2023

const isoString = currentDate.toISOString();
console.log("ISO String:", isoString); //ISO String: 2023-03-15T06:30:00.707Z

const jsonString = currentDate.toJSON();
console.log("JSON String:", jsonString); //JSON String: 2023-03-15T06:30:00.707Z

const localeDateString = currentDate.toLocaleDateString("en-IN", {
  timeZone: "UTC",
});
console.log("Locale Date String:", localeDateString);

// Others
const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
console.log("Day of Week:", dayOfWeek);

const currentTime = currentDate.getTime(); // Number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log("Current Time:", currentTime);

const timezoneOffset = currentDate.getTimezoneOffset(); // Timezone offset in minutes between UTC and local time
console.log("Timezone Offset:", timezoneOffset);
