
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

//get data
// db.collection('users').get().then(snapshots => {
//     setupUsers(snapshots.docs);
// })

//listen of auth status changes
auth.onAuthStateChanged(user => {
    if(user){
        console.log('user logged in');
        window.location.href = 'periodicTable.html';
    }else{
        console.log('user logged out');
        document.getElementById('page-top').style.display = 'none';
    }
});


function register(){
    //get user info
    const givenName = document.getElementById('firstName').value;
    const givenSurname = document.getElementById('lastName').value;
    const givenEmail = document.getElementById('inputEmail').value;
    const givenPassword = document.getElementById('inputPassword').value;
    const confirmedPassword = document.getElementById('confirmPassword').value;
    //First checking the passwords
    if(confirmedPassword == givenPassword){
        //register user
        auth.createUserWithEmailAndPassword(givenEmail, givenPassword).then(() => {
            document.querySelector('#register-form').reset();
            //write data to db
            db.collection('users').add({
                eduLevel: 0,
                email: givenEmail,
                name: givenName,
                surname: givenSurname
                //ToDo: chemLevel
            });
        }).catch(e => alert(e));
    }else{
        alert('Passwords do not match, FOCUS!');
    }
};

//logout
function logout(){
    auth.signOut();
    window.location.href = 'index.html';
}

//login
function login(){
    //get the users info
    const givenEmail = document.getElementById('inputEmail').value;
    const givenPassword = document.getElementById('inputPassword').value;

    auth.signInWithEmailAndPassword(givenEmail, givenPassword).then(() => {
        document.querySelector('#signup-form').reset();
        window.location.href = 'periodicTable.html'
    });
    auth.signInWithEmailAndPassword(givenEmail, givenPassword).catch(e => alert(e));

}
