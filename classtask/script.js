// var questions =[
//     {
//     question: "what is 2 + 2?",
//     choices: [1,2,3,4],
//     answerIndex: 3
//     }
//     {
//         question: "what is 1 + 3?",
//         choices: [1,2,3,4],
//         answerIndex: 3
//         }
//         {
//             question: "what is 1 + 1?",
//             choices: [1,2,3,4],
//             answerIndex: 1
//             }
//             {
//                 question: "what is 1 + 2?",
//                 choices: [1,2,3,4],
//                 answerIndex: 2
//                 }
// ]
// var currentQuestionIndex = 0
// var score = 0
// function showQuestion(){
//     var questionEl = document.getElementById('question')
//     questionEl.textContent = questions[currentQuestionIndex].question
//     questionEl.getElementById('choice1').textContent = questions[currentQuestionIndex].choices[0]
//     questionEl.getElementById('choice2').textContent = questions[currentQuestionIndex].choices[0]
//     questionEl.getElementById('choice3').textContent = questions[currentQuestionIndex].choices[0]
//     questionEl.getElementById('choice4').textContent = questions[currentQuestionIndex].choices[0]
// }

// function checkAnswer(selectOptionIndex){
//     if(selectOptionIndex === questions[currentQuestionIndex].answerIndex){
//         alert("you are right")
//         score++
//         currentQuestionIndex++
//         showQuestion()
//     }else{
//         alert("wrong! try again next time")
//         currentQuestionIndex++
//         showQuestion()
//     }
// }
// showQuestion()


// Define the array of questions
var questions = [
    {
        question: "What is 2 + 2?",
        choices: [1, 2, 3, 4],
        answerIndex: 3
    },
    {
        question: "What is 1 + 3?",
        choices: [1, 2, 3, 4],
        answerIndex: 3
    },
    {
        question: "What is 1 + 1?",
        choices: [1, 2, 3, 4],
        answerIndex: 1
    },
    {
        question: "What is 1 + 2?",
        choices: [1, 2, 3, 4],
        answerIndex: 2
    }
];

var currentQuestionIndex = 0;
var score = 0;


function showQuestion() {
    var questionEl = document.getElementById('question');
    var choice1El = document.getElementById('choice1');
    var choice2El = document.getElementById('choice2');
    var choice3El = document.getElementById('choice3');
    var choice4El = document.getElementById('choice4');
    
    
    questionEl.textContent = questions[currentQuestionIndex].question;
    
    
    choice1El.textContent = questions[currentQuestionIndex].choices[0];
    choice2El.textContent = questions[currentQuestionIndex].choices[1];
    choice3El.textContent = questions[currentQuestionIndex].choices[2];
    choice4El.textContent = questions[currentQuestionIndex].choices[3];
}


function checkAnswer(selectedOptionIndex) {
    if (selectedOptionIndex === questions[currentQuestionIndex].answerIndex) {
        alert("You are right!");
        score++;
    } else {
        alert("Wrong! Try again next time.");
    }
    
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz over! Your score is " + score);
        
    }
}


showQuestion();
