

// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyCsrrHKcqzgfIJCaJmy2Ja1AiwRnLGEB3Y",
    authDomain: "construction-407e6.firebaseapp.com",
    databaseURL: "https://construction-407e6.firebaseio.com",
    projectId: "construction-407e6",
    storageBucket: "",
    messagingSenderId: "860298261638",
    appId: "1:860298261638:web:e90659eb3abeaf37e8cd07"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  
  
  var firestore = firebase.firestore();
  
  const submitBtn = document.querySelector("#submit");
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let message = document.querySelector('#message');
  
  const db = firestore.collection("contactData");
  
  submitBtn.addEventListener("click" , function(){
    let userNameInput = name.value;
    let userEmailInput = email.value;
    let userPhoneInput = phone.value;
    let userMessageInput = message.value;  
    //acces to database
  
    db.doc().set({
      name: userNameInput,
      email: userEmailInput,
      phone: userPhoneInput,
      message: userMessageInput,
    })
    .then(function(){
      console.log("data save");
    })
    .catch(function(error){
      console.log(error);
      console.log("failed");
    })
  });