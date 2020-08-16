var db = firebase.firestore();

const submitTest = document.querySelector("#submitTest");

submitTest.addEventListener("click", function () {
    alert("Hello");
    db.collection('answers').doc().set({
        name: 'answer eoufeofjebwofevwewfyewofw PE DATA GAYA'
    }).then(function () {
        console.log('saved');
    }).catch(function (error) {
        console.log("Error : " + error);
    })
});        