var db = firebase.firestore();

const submitTest = document.querySelector("#submitTest");

var a1 = document.querySelector("#a1");
var a2a = document.querySelector("#a2-1");
var a2b = document.querySelector("#a2-2");
var a2c = document.querySelector("#a2-3");
var a2d = document.querySelector("#a2-4");
var a3a = document.querySelector("#a3-1");
var a3b = document.querySelector("#a3-2");
var a3c = document.querySelector("#a3-3");
var a3d = document.querySelector("#a3-4");
var a4 = document.querySelector("#a4");
var a5a = document.querySelector("#a5-1");
var a5b = document.querySelector("#a5-2");
var a5c = document.querySelector("#a5-3");
var a5d = document.querySelector("#a5-4");
var a6a = document.querySelector("#a6-1");
var a6b = document.querySelector("#a6-2");
var a6c = document.querySelector("#a6-3");
var a6d = document.querySelector("#a6-4");
var a7 = document.querySelector("#a7");
var a8 = document.querySelector("#a8");
var a9 = document.querySelector("#a9");
var a10a = document.querySelector("#a10-1");

var a10b = document.querySelector("#a10-2");

var a10c = document.querySelector("#a10-3");

var a10d = document.querySelector("#a10-4");
var a11a = document.querySelector("#a11-1");

var a11b = document.querySelector("#a11-2");

var a11c = document.querySelector("#a11-3");

var a11d = document.querySelector("#a11-4");
var a12 = document.querySelector("#a12");
var a13a = document.querySelector("#a13-1");

var a13b = document.querySelector("#a13-2");

var a13c = document.querySelector("#a13-3");

var a13d = document.querySelector("#a13-4");
var a14a = document.querySelector("#a14-1");

var a14b = document.querySelector("#a14-2");

var a14c = document.querySelector("#a14-3");

var a14d = document.querySelector("#a14-4");

var a15 = document.querySelector("#a15");
var a16 = document.querySelector("#a16");
var a17 = document.querySelector("#a17");
var a18 = document.querySelector("#a18");
var a19 = document.querySelector("#a19");
var a20a = document.querySelector("#a20-1");

var a20b = document.querySelector("#a20-2");

var a20c = document.querySelector("#a20-3");

var a20d = document.querySelector("#a20-4");

var a21a = document.querySelector("#a21-1");

var a21b = document.querySelector("#a21-2");

var a21c = document.querySelector("#a21-3");

var a21d = document.querySelector("#a21-4");
var a22 = document.querySelector("#a22");

var a23a = document.querySelector("#a23-1");

var a23b = document.querySelector("#a23-2");

var a23c = document.querySelector("#a23-3");

var a23d = document.querySelector("#a23-4");
var a24a = document.querySelector("#a24-1");

var a24b = document.querySelector("#a24-2");

var a24c = document.querySelector("#a24-3");

var a24d = document.querySelector("#a24-4");
var a25 = document.querySelector("#a25");
var a26 = document.querySelector("#a26");
var a27 = document.querySelector("#a27");
var a28 = document.querySelector("#a28");
var a29a = document.querySelector("#a29-1");

var a29b = document.querySelector("#a29-2");

var a29c = document.querySelector("#a29-3");

var a29d = document.querySelector("#a29-4");
var a30a = document.querySelector("#a30-1");

var a30b = document.querySelector("#a30-2");

var a30c = document.querySelector("#a30-3");

var a30d = document.querySelector("#a30-4");

//alert(a26.value);
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
//const urlParams2 = new URLSearchParams(queryString);
const sno = urlParams.get("s");
const startTime = atob(urlParams.get("t"));
//alert(startTime);
var startHour = Math.floor(startTime / 10000);
var min = startTime % 10000;

const startMin = Math.floor(min / 100);
var sec = (min %= 100);
const startSec = sec;

min = startMin + 25;

var endMin = min > 60 ? min - 60 : min;

var hour = startHour;
var endHour = endMin < startMin ? hour + 1 : hour;

const endSec = startSec;
//alert(endHour + endMin + endSec);
var now_now = new Date();
var date_today_curr = now_now.getDate();
//alert(date_today_curr);
// + date_today +
var countDownDate = new Date(
  "Aug " + date_today_curr + " 20 " + endHour + ":" + endMin + ":" + endSec
).getTime();
//alert(countDownDate);
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s";
  if (minutes === 0 && seconds === 0) {
    submitFinally();
  }
  // If the count down is over, write some text
}, 1000);

async function submitFinally() {
  alert("Submitted Successfully...");
  await add();
}

async function add() {
  await db
    .collection("answers")
    .doc(sno)
    .set({
      apti1: a1.value,
      apti2a: a2a.checked,
      apti2b: a2b.checked,
      apti2c: a2c.checked,
      apti2d: a2d.checked,
      apti3a: a3a.checked,
      apti3b: a3b.checked,
      apti3c: a3c.checked,
      apti3d: a3d.checked,
      apti4: a4.value,
      apti5a: a5a.checked,
      apti5b: a5b.checked,
      apti5c: a5c.checked,
      apti5d: a5d.checked,
      apti6a: a6a.checked,
      apti6b: a6b.checked,
      apti6c: a6c.checked,
      apti6d: a6d.checked,
      apti7: a7.value,
      apti8: a8.value,
      apti9: a9.value,
      apti10a: a10a.checked,
      apti10b: a10b.checked,
      apti10c: a10c.checked,
      apti10d: a10d.checked,
      apti11a: a11a.checked,
      apti11b: a11b.checked,
      apti11c: a11c.checked,
      apti11d: a11d.checked,
      apti12: a12.value,
      apti13a: a13a.checked,
      apti13b: a13b.checked,
      apti13c: a13c.checked,
      apti13d: a13d.checked,
      apti14a: a14a.checked,
      apti14b: a14b.checked,
      apti14c: a14c.checked,
      apti14d: a14d.checked,
      apti15: a15.value,
      gk1: a16.value,
      gk2: a17.value,
      gk3: a18.value,
      gk4: a19.value,
      gk5a: a20a.checked,
      gk5b: a20b.checked,
      gk5c: a20c.checked,
      gk5d: a20d.checked,
      gk6a: a21a.checked,
      gk6b: a21b.checked,
      gk6c: a21c.checked,
      gk6d: a21d.checked,
      gk7: a22.value,
      gk8a: a23a.checked,
      gk8b: a23b.checked,
      gk8c: a23c.checked,
      gk8d: a23d.checked,
      gk9a: a24a.checked,
      gk9b: a24b.checked,
      gk9c: a24c.checked,
      gk9d: a24d.checked,
      gk10: a25.value,
      gk11: a26.value,
      gk12: a27.value,
      gk13: a28.value,
      gk14a: a29a.checked,
      gk14b: a29b.checked,
      gk14c: a29c.checked,
      gk14d: a29d.checked,
      gk15a: a30a.checked,
      gk15b: a30b.checked,
      gk15c: a30c.checked,
      gk15d: a30d.checked,
    })
    .then(function () {
      console.log("saved");
    })
    .catch(function (error) {
      console.log("Error : " + error);
    });
  window.location = "../pages/end.html";
}
