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
                if(account_type == "student"){
                    // set points
                    users.doc(user.user.uid).update({
                        points: 100,
                        achievements: ["50 points"],
                        badges: ["joined"],
                        leaderboard_position: 1,
                    })
                    // leaderboard/users is a list of uids, so we need to add the uid to the list
                    db.collection("users").doc("leaderboard").get().then((values) => {
                        let leaderboard = values.data()
                        leaderboard.users.push(user.user.uid)
                        db.collection("users").doc("leaderboard").set(leaderboard).then(
                            function(){
                                window.location.href = "./app/index.html"
                            }
                        )
                    })
                }
                else{
                    window.location.href = "./app/index.html"
                }
            }
        )
    })
}
