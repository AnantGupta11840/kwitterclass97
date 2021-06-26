  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyA9bf3_PfMp-4z3IjA575Fer53EL7G8k7k",
      authDomain: "infinitegaming-ceeh.firebaseapp.com",
      databaseURL: "https://infinitegaming-ceeh-default-rtdb.firebaseio.com",
      projectId: "infinitegaming-ceeh",
      storageBucket: "infinitegaming-ceeh.appspot.com",
      messagingSenderId: "913090874013",
      appId: "1:913090874013:web:f647a460ec3b9c4553e274"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom()
{
      room_name = document.getElementById ("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
       localStorage.setitem("room_name", room_name);
       window.location = "kwitter_page.html"; 
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout(){
      localStroge.removeItem("user_name");
      localStroge.removeItem("room_name");
      window.location = "kwitter.html";
}