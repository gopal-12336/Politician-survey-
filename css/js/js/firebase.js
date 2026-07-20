// Firebase Configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVhwl6lA5Q-fiKC8dzUIxHXXG4DiQywGk",
  authDomain: "politician-survey.firebaseapp.com",
  projectId: "politician-survey",
  storageBucket: "politician-survey.firebasestorage.app",
  messagingSenderId: "802387421098",
  appId: "1:802387421098:web:2c3e5b8a8692a3a2d22dd3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
const auth = firebase.auth();

// reCAPTCHA
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-container',
    {
        size: 'normal'
    }
);

recaptchaVerifier.render();
