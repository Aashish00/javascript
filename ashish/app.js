// function setCookie(){
//   var uname = "USERNAME=" + document.getElementById('username').value;
//   var pass = "PASSWORD=" + document.getElementById('password').value;
//   var emails = "EMAIL=" + document.getElementById('email').value;
//     document.cookie = uname;
//     document.cookie = pass;
//     document.cookie = emails;
// }

// function getCookie(){
//   alert(document.cookie);
// }

// const arr1 = [];
// arr1.push({'id':'1','name':'The limitation Game'});
// arr1.push({'id':'2','name':'The limitation Game'});
// console.log(arr1);
// var jsonString = JSON.stringify(arr1);
//   document.cookie = "Cookiesis=" + jsonString;

// const arr = [];
// arr.push({
//   name:'Ashish',
//   email:'Asisiakarkee00@gmail.com',
//   mobile:'Dont ask',
// });
// var jsonString = JSON.stringify(arr);
// document.cookie = "Cookiesis=" + jsonString;
// console.log(arr);

const arr=[]
arr.push({
  name:'Ashish',
  email:'AasisKarkee0@gmail.com',
  mobile:'Dont ask', 
});
  var jsonString = JSON.stringify(arr);
  document.cookie = "Cookiesis" + jsonString;
  console.log(arr);

  function setCookie(){
    var array = [];
    array.document.getElementById('username').value;
    array.document.getElementById('password').value;
    array.document.getElementById('email').value;
    console.log(array);
  }
  var jsonString = JSON.stringify(array);
 // document.cookie = "Coookiesis" + jsonString;
  console.log(array);



//   const arr = []
//   arr.push({document.getElementById("username").value}); 
//  // arr.push = document.getElementById("password").value;
//   //arr.push = document.getElementById("email").value;

//   var jsonString = JSON.stringify(arr);
//   document.cookie = "Cookiesis=" + jsonString;
//}
function getCookie()
{
  var nameValueArray = document.cookie.split("=");
  
  var customObject = JSON.parse(nameValueArray[1]);
  document.getElementById("username").value = customObject.name;
  document.getElementById("password").value = customObject.pass;
  document.getElementById("email").value = customObject.emails;
}



// function setCookie() 
// {
//     var customObject = {};

//     customObject.name = document.getElementById("username").value;
//     customObject.pass = document.getElementById("password").value;
//     customObject.emails = document.getElementById("email").value;

//     var jsonString = JSON.stringify(customObject);

//     document.cookie = "cookieObject=" + jsonString;
// }
// function getCookie()
// {
//     var nameValueArray = document.cookie.split("=");

//     var customObject = JSON.parse(nameValueArray[1]);

//     document.getElementById("username").value = customObject.name;
//     document.getElementById("password").value = customObject.pass;
//     document.getElementById("email").value = customObject.emails;
// }

