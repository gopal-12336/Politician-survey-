// Elements
const sendOTPBtn = document.getElementById("sendOTP");
const verifyOTPBtn = document.getElementById("verifyOTP");
const otpSection = document.getElementById("otpSection");

let confirmationResult = null;

// Send OTP
sendOTPBtn.addEventListener("click", function () {

    let mobile = document.getElementById("mobile").value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter valid 10 digit mobile number");
        return;
    }

    mobile = "+91" + mobile;

    auth.signInWithPhoneNumber(mobile, window.recaptchaVerifier)

    .then(function(result){

        confirmationResult = result;

        otpSection.style.display = "block";

        alert("OTP Sent Successfully");

    })

    .catch(function(error){

        alert(error.message);

    });

});
