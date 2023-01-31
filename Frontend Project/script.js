const login1 = function validateForm() {
    // Get the value of the input field with id="email"
    var email = document.getElementById("email").value;
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Regular expression to check if the email is in the correct format
    // var emailRegex = "user@123"
    // Check if the email is empty
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    // Check if the email is in the correct format
    // if (!email.match(emailRegex)) {
    //   alert("Please enter a valid email address");
    //   return false;
    // }
    // Check if the password is empty
    if (password == "") {
      alert("Password field must be filled out");
      return false;
    }
    if(email === "admin@admin.com" && password === "123456"){
        alert("login succesfull");
    }else {
        alert("Wrong Email Adress or Password");
    }
    // Send a request to the server to check the user's credentials
    // If the credentials are correct, return true to submit the form
    // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
    return true;
  }
   
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;


    const loginButton = document.querySelector('#logbut');

//   loginButton.addEventListener("click", validateForm( {
//     if (emailid === "user@123" && password === "user") {
//        alert("You have successfully logged in.");
 
//      }else{
//       alert("oh");
//      }

loginButton.addEventListener("click", login1);










