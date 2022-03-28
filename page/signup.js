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

function signIn(account_type){
    auth.createUserWithEmailAndPassword(_username, _password).then(function(user) {
        let users = db.collection("users")
        users.doc(user.user.uid).set({
            name: _name,
            email: user.user.email,
            account_type: account_type,
            uid: user.user.uid,
            verified: user.user.emailVerified
        }).then(
            function(){
                window.location.href = "./app/index.html"
            }
        )
    })
}
