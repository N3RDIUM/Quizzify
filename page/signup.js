_username = ""
_password = ""
_name = ""

function setUser(user){
    _username = user
}

function setPassword(pass){
    _password = pass
}

function setName(n){
    _name = n
}

function signIn(account_type){ // account_type: "student" or "teacher"
    if(account_type == "student"){
        auth.createUserWithEmailAndPassword(_username, _password).then(function(user) {
            console.log(user)
        }).catch(function(error) {
            alert(error.message)
        });
    } else if(account_type == "teacher"){
        auth.createUserWithEmailAndPassword(_username, _password).then(function(user) {
            console.log(user)
        }).catch(function(error) {
            alert(error.message)
        });
    }
}
