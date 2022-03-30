let currentIndex = 0
let saved = false

let titles = [
    "Enter title here"
];

let options = {
    0: [
        "Enter option here",
        "Enter option here",
        "Enter option here",
        "Enter option here"
    ],
}

let correct_options = {
    0: [
        false,
        false,
        false,
        false
    ],
}

function setTitle(value){
    titles[currentIndex] = value;
}

function setOption(index, value){
    options[currentIndex][index] = value;
}

function setCorrect(index, value){
    correct_options[currentIndex][index] = value;
}

function incrementIndex(){
    currentIndex++;
    if(currentIndex >= titles.length){
        titles.push("Enter title here");
        options[currentIndex] = [
            "Enter option here",
            "Enter option here",
            "Enter option here",
            "Enter option here"
        ];
        correct_options[currentIndex] = [
            false,
            false,
            false,
            false
        ];
        clearFields();
    } else {
        updateFields(currentIndex);
    }
}

function decrementIndex(){
    if (currentIndex > 0){
        currentIndex--;
        updateFields(currentIndex);
    }
}

async function save_question(){
    let question = {
        titles: titles,
        options: options,
        correct_options: correct_options,
        creator: userID,
        class: current_class,
    }
    nQuizzes ++
    saved = true;
    await quizRef.set(question).then(function(){
        firestore.collection("quizzes").doc("_nQuizzes").update({
            quizzes: nQuizzes + 1
        }).then(function(){

            firestore.collection("classes").doc(current_class).get().then(function(doc){
                let class_data = doc.data();
                let quizzes = class_data.quizzes;
                quizzes.push(quizRef.id);
                firestore.collection("classes").doc(current_class).update({
                    quizzes: quizzes
                });
            }).then(function(){

                firestore.collection('users').doc(userID).get().then(function(doc){
                    let user_data = doc.data();
                    let quizHist = user_data.quiz_history;
                    quizHist.push(quizHist[quizHist.length - 1] + 1);
                    firestore.collection('users').doc(userID).update({
                        quiz_history: quizHist
                    });
                }).then(function(){
                    clearFields();
                    window.location.href = "../index.html"
                });
            });
        });
    });
}

function clearFields(){
        // clear all fields
        document.getElementById("title_input").value = "Enter title here";
        document.getElementById("option1").checked = false;
        document.getElementById("option2").checked = false;
        document.getElementById("option3").checked = false;
        document.getElementById("option4").checked = false;
        document.getElementById("option_text1").value = "Enter option here";
        document.getElementById("option_text2").value = "Enter option here";
        document.getElementById("option_text3").value = "Enter option here";
        document.getElementById("option_text4").value = "Enter option here";
}

function updateFields(index){
    document.getElementById("title_input").value = titles[index];
    document.getElementById("option1").checked = correct_options[index][0];
    document.getElementById("option2").checked = correct_options[index][1];
    document.getElementById("option3").checked = correct_options[index][2];
    document.getElementById("option4").checked = correct_options[index][3];
    document.getElementById("option_text1").value = options[index][0];
    document.getElementById("option_text2").value = options[index][1];
    document.getElementById("option_text3").value = options[index][2];
    document.getElementById("option_text4").value = options[index][3];
}
