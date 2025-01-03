function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "admin" && password === "password123") {
        message.style.color = "green";
        message.innerHTML = "Login successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid username or password.";
    }
}
