var db = firebase.firestore();

const submitTest = document.querySelector("#submitTest");

submitTest.addEventListener("click", function () {
    alert("Hello");
    db.collections('answers').doc().set({
        name: 'HEllo'
    }).then(function () {
        console.log('saved');
    }).catch(function (error) {
        console.log("Error : " + error);
    })
});