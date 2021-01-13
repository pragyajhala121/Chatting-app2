  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwCf4uY770z9LmKNukjE9lraA9PwMav0Q",
    authDomain: "chatapp-d7a02.firebaseapp.com",
    databaseURL: "https://chatapp-d7a02-default-rtdb.firebaseio.com",
    projectId: "chatapp-d7a02",
    storageBucket: "chatapp-d7a02.appspot.com",
    messagingSenderId: "630246564324",
    appId: "1:630246564324:web:85f2b91f29592057be67f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
