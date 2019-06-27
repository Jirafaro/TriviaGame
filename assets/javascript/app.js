// set variables
let questions = [
   {
       question: "What is my favorite color?",
       choiceA: "Blue",
       choiceB: "Green",
       choiceC: "Red",
       choiceD: "Orange",
       correct: "Orange"
   },
   {
       question: "What is the most common favorite color?",
       choiceA: "Blue",
       choiceB: "Green",
       choiceC: "Red",
       choiceD: "Orange",
       correct: "Blue"
   }
]

let lastquestionIndex = questions.length -1;
let runningQuestionIndex = 0;
let score = 0;
let wrongscore = 0;
let timer = 20;

function renderQuestion(){
   let q = questions[runningQuestionIndex];
   $('#question').html(q.question).show();
   $('#A').html(q.choiceA).show();
   $('#B').html(q.choiceB).show();
   $('#C').html(q.choiceC).show();
   $('#D').html(q.choiceD).show();
   $('#new').hide();
   timer=20;
}

function time(){
   timer --;
   $('.timer').html(timer);
   if(timer===0) {
   wrongscore ++;
   timer=20;
   runningQuestionIndex ++;
   renderQuestion();
}}

function delayedalert(){
   timeoutID = setInterval(time, 1000);
}

function intervaltime (){
   setTimeout (renderQuestion, 5000);
}

function win() {
      score ++;
      runningQuestionIndex ++;
      intervaltime();
      $('#question').hide();
      $('#A').hide();
      $('#B').hide();
      $('#C').hide();
      $('#D').hide();
      $('#new').html('Correct!').show();
}

function loss() {
      wrongscore ++;
      runningQuestionIndex ++;
      intervaltime();
      $('#question').hide();
      $('#A').hide();
      $('#B').hide();
      $('#C').hide();
      $('#D').hide();
      $('#new').html('That is Not Correct!').show();
}

renderQuestion();
delayedalert();


$("#A").on('click', function(){
   if (questions[runningQuestionIndex].choiceA===questions[runningQuestionIndex].correct){
      win();
   } else {
      loss();
   }})



   

