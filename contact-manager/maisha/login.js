
var loginForm = document.querySelector('#loginForm');
var userName = document.querySelector('#userName');
var password = document.querySelector('#password');


function validate() {
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    var usersArr = JSON.parse(localStorage.getItem("users"));
    for (var user of usersArr) {
        //console.log(user.name, user.password, userName.value, password.value);
        if (user.name === userName.value && user.password === password.value /*&& user.active===true*/) {
            //console.log(user.name, user.password, userName.value, password.value);
            localStorage.setItem("session", user.name);
            if (user.type === "admin") {
                window.location="./admin.html";
                return false;
            }
            return true;
        }
    } 
    alert("Invalid User Name or Password");
    return false;
}  