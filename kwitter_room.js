// Your web app's Firebase configuration
var firebaseConfig = {
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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name :" + Room_names);
            row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName('this.id')' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

        });
    });
}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}