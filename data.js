var firebaseConfig = {
    apiKey: "AIzaSyDPA2ErRa_cECEixKP5z_fRhcJH-NmQU-A",
    authDomain: "signuppage-61d08.firebaseapp.com",
    databaseURL: "https://signuppage-61d08-default-rtdb.firebaseio.com",
    projectId: "signuppage-61d08",
    storageBucket: "signuppage-61d08.appspot.com",
    messagingSenderId: "375117672256",
    appId: "1:375117672256:web:27facf0382fdfac51cd4a5",
    measurementId: "G-BE09K4JP2Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}