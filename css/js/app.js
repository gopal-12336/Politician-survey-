const sendOTPBtn = document.getElementById("sendOTP");
const otpSection = document.getElementById("otpSection");
const mobileInput = document.getElementById("mobile");

sendOTPBtn.addEventListener("click", function () {

    const mobile = mobileInput.value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert("Mobile number verified.\nFirebase OTP integration will be added in the next step.");

    otpSection.style.display = "block";

});

document.getElementById("verifyOTP").addEventListener("click", function () {

    const otp = document.getElementById("otp").value.trim();

    if (otp.length < 6) {
        alert("Enter a valid OTP.");
        return;
    }

    alert("OTP verified successfully (Demo)");

});
