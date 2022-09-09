// Your web app's Firebase configuration
var   firebaseConfig = {
      apiKey: "AIzaSyCbtqT2qvOnl35Y0J-e_ry0qI_iYQAOlyU",
      authDomain: "kwitter-test-bb91f.firebaseapp.com",
      databaseURL: "https://kwitter-test-bb91f-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-bb91f",
      storageBucket: "kwitter-test-bb91f.appspot.com",
      messagingSenderId: "30905981765",
      appId: "1:30905981765:web:125139b9f30af6ec417c2c"
    };
    
    // Initialize Firebase



    firebase.initializeApp(firebaseConfig); 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}