var username = ""
var password = ""

function setUser(user){
    username = user
}

function setPassword(pass){
    password = pass
}

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = "app/index.html";
    }
});

function signIn(){
    auth.signInWithEmailAndPassword(username, password).then(function(user) {
        console.log(user)
        window.location.href = "index.html"
    }).catch(function(error) {
        alert(error.message)
    });
}
