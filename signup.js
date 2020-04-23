
const firebaseConfig = {
  apiKey: "AIzaSyCsrrHKcqzgfIJCaJmy2Ja1AiwRnLGEB3Y",
  authDomain: "construction-407e6.firebaseapp.com",
  databaseURL: "https://construction-407e6.firebaseio.com",
  projectId: "construction-407e6",
  storageBucket: "construction-407e6.appspot.com",
  messagingSenderId: "860298261638",
  appId: "1:860298261638:web:e90659eb3abeaf37e8cd07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var base_provider = new firebase.auth.GoogleAuthProvider();

  
function onSignIn(){
  firebase.auth().signInWithRedirect(base_provider).then(function(result){
    //console.log(result)
    console.log("Success.. Google Account Linked")
      
  }).catch(function(err){
    console.log(err)
    console.log("Failed")
  });
}


const auth = firebase.auth();


function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
  
}



function signIn() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));




}


function signOut() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
    
      var email = user.email; 
      auth.signOut();
      alert("Signed Out" + email);
    }
   

  });



}



auth.onAuthStateChanged(function (user) {

  if (user) {

    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in

  } 
  //  else {

  //  alert("No Active User");
  //   //no user is signed in
  // }



});





// function headerinfo() {
//   auth.onAuthStateChanged(function (user) {
    
//       var email = user.email; 
//       console.log('Email: ' + email);
//   });
      



// }


 

















