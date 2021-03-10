var firebaseConfig = {
    apiKey: "AIzaSyBF2qqgKmoaWaanzjbiUuA3dQ6d8wqRz9s",
    authDomain: "chatappjs-2ae1c.firebaseapp.com",
    databaseURL: "https://chatappjs-2ae1c-default-rtdb.firebaseio.com",
    projectId: "chatappjs-2ae1c",
    storageBucket: "chatappjs-2ae1c.appspot.com",
    messagingSenderId: "772412106971",
    appId: "1:772412106971:web:812deb6aa10452922c44fe",
    measurementId: "G-17GQV6K7R0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function login(){
      uservar = document.getElementById("userinput").value;
      firebase.database().ref("/").child(uservar).set({
          purpose: "Adding user",
          message: uservar
      });
      uservar2 = document.getElementById("userinput2").value
      firebase.database().ref("/").child(uservar2).push({
          purpose: "Adding second user",
          message: uservar2
      })
      firebase.database().ref("/").child(uservar2).on("value", function(snapshot){
          console.log(snapshot.val());
      });
  firebase.database().ref("/").child(uservar).on("value", function(snapshot){
      console.log(snapshot.val());
  });
  }
  