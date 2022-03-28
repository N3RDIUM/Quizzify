var username = ""
var password = ""

function setUser(user){
    username = user
}

function setPassword(pass){
    password = pass
}

function signIn(){
    auth.signInWithEmailAndPassword(username, password).then(function(user) {
        console.log(user)
    }).catch(function(error) {
        alert(error.message)
    });
}
