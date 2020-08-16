



var db = firebase.firestore();

const understood = document.querySelector('#understood');

// var today = new Date();
// var time = (today.getHours() * 10000) + (today.getMinutes() * 100) + today.getSeconds();
understood.addEventListener("click", function () {
    var today = new Date();
    var time = (today.getHours() * 10000) + (today.getMinutes() * 100) + today.getSeconds();
    alert(time);
    db.collection('time').doc().set({
        //time: time,
        time: time,
    })
        .then(function () {
            console.log('Saved');
        }).catch(function (error) {
            console.log('Error : ', error);
        });

    location.replace("http://127.0.0.1:5500/pages/test.html");
});