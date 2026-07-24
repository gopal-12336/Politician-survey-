// Firestore
const db = firebase.firestore();

// Submit Button
document.getElementById("submitSurvey").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let village = document.getElementById("village").value.trim();
    let assembly = document.getElementById("assembly").value.trim();
    let party = document.getElementById("party").value;
    let candidate = document.getElementById("candidate").value.trim();
    let feedback = document.getElementById("feedback").value.trim();

    if (
        name === "" ||
        age === "" ||
        gender === "" ||
        village === "" ||
        assembly === "" ||
        party === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    db.collection("surveys").add({

        name: name,
        age: age,
        gender: gender,
        village: village,
        assembly: assembly,
        party: party,
        candidate: candidate,
        feedback: feedback,
        mobile: localStorage.getItem("userPhone"),
        date: new Date()

    })

    .then(function () {

        alert("Survey Submitted Successfully");

    })

    .catch(function (error) {

        alert(error.message);

    });

});
