document.getElementById('Subscriptionform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var email = getTnputValue('subscribedEmail');
    var today = new Date();
    var currentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    saveMessage(email, currentdate);
}

function getTnputValue(id) {
    return document.getElementById(id).value;
}

function saveMessage(email, currentdate) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("subscribedUsers").add({
                email: email,
                date: currentdate
            }).then(function () {
                console.log("New user added to firestore");
                // sendMail();
                var alertstr = "thank you for subscribing";
                alert(alertstr);
            }).catch(function (error) {
                console.log("Error adding new user: " + error);
            });
        }
    });
}
