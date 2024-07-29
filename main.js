var modal = document.getElementById("modal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  console.log("Username:", username);
  console.log("Password:", password);
  
  modal.style.display = "none";
});
