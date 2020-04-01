
var firebaseConfig = {
    apiKey: "AIzaSyAtxRJRi9OHpkj3eUyHQ3omiXq_OFZ4mZY",
    authDomain: "chemistry-70b53.firebaseapp.com",
    databaseURL: "https://chemistry-70b53.firebaseio.com",
    projectId: "chemistry-70b53",
    storageBucket: "chemistry-70b53.appspot.com",
    messagingSenderId: "511624671352",
    appId: "1:511624671352:web:7d16196f83fbd68236fd8d",
    measurementId: "G-9SQ288GCVV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

function register(){
    //get user info
    
    const dispayName = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    //register user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    })
};
// function register(){
//     var email = document.getElementById("inputEmail");
//     var password = document.getElementById("inputPassword");

//     const promise = auth.createUserWithEmailAndPassword(email.nodeValue, password.value);
//     promise.catch(e => alert(e.message));

//     alert("registered");
// }


