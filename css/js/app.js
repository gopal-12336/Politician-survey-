// App JS Loaded
alert("App JS Loaded");

// Elements
const sendOTPBtn = document.getElementById("sendOTP");
const verifyOTPBtn = document.getElementById("verifyOTP");
const otpSection = document.getElementById("otpSection");

let confirmationResult = null;

// Send OTP
sendOTPBtn.addEventListener("click", function () {

    alert("Send OTP button clicked");

    let mobile = document.getElementById("mobile").value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter valid 10 digit mobile number");
        return;
    }

    mobile = "+91" + mobile;

    auth.signInWithPhoneNumber(mobile, window.recaptchaVerifier)

    .then(function(result) {

        confirmationResult = result;

        otpSection.style.display = "block";

        alert("OTP Sent Successfully");

    })

    .catch(function(error) {

        console.log(error);

        alert("Error Code: " + error.code + "\n\nMessage: " + error.message);

    });

});

// Verify OTP
verifyOTPBtn.addEventListener("click", function () {

    let otp = document.getElementById("otp").value.trim();

    if (otp.length !== 6) {
        alert("Enter valid OTP");
        return;
    }

    confirmationResult.confirm(otp)

    .then(function(result) {

        const user = result.user;

        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("userPhone", user.phoneNumber);

        alert("Login Successful");

        window.location.href = "css/js/survey.html";

    })

    .catch(function(error) {

        alert("Wrong OTP\n\n" + error.message);

    });

});
