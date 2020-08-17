
var db = firebase.firestore();

const understood = document.querySelector('#understood');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sno = urlParams.get('q');

//alert(sno);
async function add() {
    var today = new Date();
    var time = (today.getHours() * 10000) + (today.getMinutes() * 100) + today.getSeconds();
    //alert(sno);
    await db.collection('time').doc(sno).set({
        //time: time,
        time: time,
    })
        .then(function () {
            console.log('Saved');
        }).catch(function (error) {
            console.log('Error : ', error);
        });

    var link = "http://127.0.0.1:5500/pages/test.html?t=" + time + "&s=" + sno;
    window.location = link;
}

understood.addEventListener("click", function () {


    add();
});