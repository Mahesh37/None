var userDetails = [
    {
        "userName": "Prudhvi",
        "passWord": "inTraMSprudhvi"
    },
    {
        "userName": "Arshaque",
        "passWord": "inTraMSashu"
    }
];

document.getElementById("loginBtn").addEventListener("click",loginRead());
function loginRead() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var alertDiv = document.getElementById("alertBlock");
    var alertSpan = document.getElementById("loginAlert");
    var error = 0;
    alertDiv.style.visibility = "hidden";
    console.log("Script loaded");
    for (i = 0; i < userDetails.length; i++) {
        if (username == userDetails[i].userName) {
            console.log("UserName matched");
            if (password == userDetails[i].passWord) {
                console.log("Password also matched");
            } else {
                error = 2;
                console.log("Password doesn't match");
            }

        } else {
            error = 1;
            console.log("Script loaded");
        }
    }
    if (error == 1) {
        alertDiv.style.visibility = "visible";
        alertSpan.innerHTML = "User not found.";
        console.log("Script loaded");
    } else if (error == 2) {
        alertDiv.style.visibility = "visible";
        alertSpan.innerHTML = "Password doesn't match.";
        console.log("UserName not found");
    }
}
