document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getTnputValue('name');
    var email = getTnputValue('email');
    var phone = getTnputValue('phone');
    var message = getTnputValue('message');
   
    saveMessage(name, email, phone,message);
}

function getTnputValue(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, phone,message){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user){     
         db.collection("contacts").add({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message
                    }).then(function () {
                        console.log("New user added to firestore");
                        // sendMail();
                         window.location.assign("mainClient.html");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
                }
        });
    }
