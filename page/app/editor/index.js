let title = "Enter title here";

let options = [
    "Enter option here",
    "Enter option here",
    "Enter option here",
    "Enter option here",
]

let correct_options = [
    false,
    false,
    false,
    false,
]

function setTitle(value){
    title = value;
}

function setOption(index, value){
    options[index] = value;
}

function setCorrect(index, value){
    correct_options[index] = value;
}

function save_question(){
    let question = {
        title: title,
        options: options,
        correct_options: correct_options,
        creator: userID,
        assignees: []
    }
    //console.log(question);
    quizRef.set(question);
}
