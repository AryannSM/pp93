
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCDaX0TfbZR5163tNUz2mWl_YWKoggikUA",
      authDomain: "kwitter-634d3.firebaseapp.com",
      databaseURL: "https://kwitter-634d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-634d3",
      storageBucket: "kwitter-634d3.appspot.com",
      messagingSenderId: "446665404740",
      appId: "1:446665404740:web:fd55a219e02359d532e711"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
