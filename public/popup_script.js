//region {variables and functions}
var greetingId = "greeting";
var blockOpener = document.getElementById("kkk");
var timeId = "time";
var dateId = "date";
var days = ["Son","Mon","Die","Mit","Don","Fre","Sam"];
var months = ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dez"];
var consoleGreeting = "Hello World! - from popup_script.js";
function setTimeAndDate(timeElement,dateElement,greetingElement) {
 var date = new Date();

 console.log(date.getDay());
 console.log(date.getMonth());
 console.log(date.getHours());
 console.log(date.getMinutes());
 console.log(date.getFullYear());
 console.log(date.getDate());
 console.log(date.getSeconds());


 var hours = date.getHours();
 var minutes = (date.getMinutes() < 10 ? '0' : "" )+ date.getMinutes();
 var time = (date.getHours() <10 ? '0': "") +date.getHours() + ":" + minutes;

  // SECONDS ..+ ":" +(date.getSeconds()< 10 ? '0': "")+date.getSeconds();
 //var time = date.getHours() + ":" + date.getMinutes();

 var date = days[date.getDay()] + ", " +  date.getDate() + " " + months[date.getMonth()] +
  " " + date.getFullYear();


 if (hours >=5) {
   greeting = "Good Morning!";
 }
 if (hours >= 12) {
   greeting = "Good Evening!";
 }
 if (hours>=19 ) {
   greeting = "Good Night!";
 }

 timeElement.innerHTML = time;
 dateElement.innerHTML = date;
 greetingElement.innerHTML = greeting



}
//end-region

//region {calls}
console.log(consoleGreeting);
document.addEventListener("DOMContentLoaded",function(dcle) {
 var timeElement = document.getElementById(timeId);
 var dateElement = document.getElementById(dateId);
 var greetingElement = document.getElementById(greetingId)
 //setInterval(() => {function();},INTERVAL_LENGHT);
 setTimeAndDate(timeElement,dateElement,greetingElement);
 setInterval(() => {setTimeAndDate(timeElement,dateElement,greetingElement);},1000);

});
//end-region
