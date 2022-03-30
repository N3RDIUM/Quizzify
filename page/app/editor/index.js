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
    }
    clearFields()
}

function decrementIndex(){
    if (currentIndex > 0){
        currentIndex--;
        clearFields()
    }
}

function save_question(){
    let question = {
        titles: titles,
        options: options,
        correct_options: correct_options,
        creator: userID,
        assignees: [],
        class: current_class,
    }
    //console.log(question);
    quizRef.set(question);
    firestore.collection("quizzes").doc("_nQuizzes").update({
        quizzes: nQuizzes + 1
    });
    nQuizzes ++
    saved = true;

    clearFields();
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
