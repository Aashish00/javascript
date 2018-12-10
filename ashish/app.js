// function setCookie(){
//   var cookieString = "username=" + document.getElementById('username').value;
//   var cookieString1 = "password=" + document.getElementById('password').value;

//   document.cookie = cookieString;
//   document.cookie = cookieString1;
// }

// function getCookie(){
//   alert(document.cookie);
// }

function setCookie(){
  var customObject = {};
  customObject.user = document.getElementById('username').value;
  customObject.pass = document.getElementById('password').value;
  customObject.emails = document.getElementById('email').value;

  var jsonString = JSON.stringify(customObject);
  document.cookie = "cookieObject=" + jsonString;
}
function getCookie() 
{
    var nameValueArray = document.cookie.split("=");

     var customObject = JSON.parse(nameValueArray[1]);

    document.getElementById("username").value = customObject.user;
    document.getElementById("password").value = customObject.pass;
    document.getElementById("email").value = customObject.emails;
 }
 