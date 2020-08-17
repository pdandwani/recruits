


var db = firebase.firestore();
const submit = document.querySelector('#submit');
// // var sname = "paras";
//submit.addEventListener("click", function () {

// //     // alert(sname.value + ' ' + email.value + ' ' + mobile.value + ' ' + scholar.value + ' ' + executive.value + ' ' + quizmaster.value + ' ' + other.value);
// //     // db.collection("students").doc().set({
// //     //     // name: sname.value,
// //     //     // email: email.value,
// //     //     // mobile: mobile.value,
// //     //     // scholar: scholar.value,
// //     //     // executive: executive.value,
// //     //     // quizmaster: quizmaster.value,
// //     //     // other: other.value
// //     //     Name: name,
// //     // })
// //     //     .then(function () {
// //     //         console.log('Saved');
// //     //     }).catch(function (error) {
// //     //         console.log('Error : ', error);
// //     //     });



// //     db.collection('student').doc().set({
// //         studName: sname,
// //     })
// //         .then(function () {
// //             console.log('Saved');
// //         }).catch(function (error) {
// //             console.log('Error : ', error);
// //         });
// // });


const sname = document.querySelector('#name');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const scholar = document.querySelector('#scholar');
const executive = document.querySelector('#executive');
const quizmaster = document.querySelector('#quizmaster');
const other = document.querySelector('#other');



// var db = firebase.firestore();

// const understood = document.querySelector('#submit');

// //var today = new Date();
// //var time = (today.getHours() * 10000) + (today.getMinutes() * 100) + today.getSeconds();


// understood.addEventListener("click", function () {
//     // var today = new Date();
//     // var time = (today.getHours() * 10000) + (today.getMinutes() * 100) + today.getSeconds();
//     alert('HEllo');
//     db.collection('students').doc().set({
//         //name: sname.value
//         // email: email.value,
//         // mobile: mobile.value,
//         // scholarNumber: scholar.value,
//         // executive: executive.value,
//         // quizmaster: quizmaster.value,
//         // other: other.value
//         name: 'hello hii',
//     })
//         .then(function () {
//             console.log('Saved');
//         }).catch(function (error) {
//             console.log('Error : ', error);
//         });
// });



(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                else {
                    add();
                    event.preventDefault();
                    event.stopPropagation();
                    //alert("CHECK");

                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

async function add() {
    //alert("HEllo validated");
    await db.collection('students').doc(scholar.value).set({
        name: sname.value,
        email: email.value,
        mobile: mobile.value,
        scholarNumber: scholar.value,
        executive: executive.checked,
        quizmaster: quizmaster.checked,
        other: other.checked
        //name: 'bhai add krdo koiiiii',
    })
        .then(function () {
            console.log('Saved');
        }).catch(function (error) {
            console.log('Error : ', error);
        });
    var link = "pages/instructions.html?q=" + scholar.value;
    window.location = link;
}
