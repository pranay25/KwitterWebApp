
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
   var  firebaseConfig = {
      apiKey: "AIzaSyCjCz4_eIhZCON80bBsTWjpM4ZdfJmK7mo",
      authDomain: "kwitter-8a91f.firebaseapp.com",
      databaseURL: "https://kwitter-8a91f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a91f",
      storageBucket: "kwitter-8a91f.appspot.com",
      messagingSenderId: "735318109489",
      appId: "1:735318109489:web:25a206aa297305f7185410",
      measurementId: "G-C66G4JF602"
    };
    // Initialize Firebase

 
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" +Room_names+ " onclick='redirectToRoomName(this.id)'>#" +Room_names+ " </div> <hr>";
document.getElementById("output").innerHTML  += row;
      //End code
      });});}
getData();

 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}