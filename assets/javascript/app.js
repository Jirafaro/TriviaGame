// set variables
let questions = [
   {
       question: "What is my favorite color?",
       choiceA: "Blue",
       choiceB: "Green",
       choiceC: "Red",
       choiceD: "Orange",
       correct: "Orange",
   },
   {
       question: "What is the most common favorite color?",
       choiceA: "Blue",
       choiceB: "Green",
       choiceC: "Red",
       choiceD: "Orange",
       correct: "Blue",
   },
   {
       question: "What is Mac's Favorite Color?",
       choiceA: "The color of an applied mathmatics degree burning to keep you warm at night",
       choiceB: "The color of Zack's face when Brian Calls him Chipmunk",
       choiceC: "The color of Austins face when Mac calls him out for these dastardly choices",
       choiceD: "Why not All of the Above ?",
       correct: "Why not All of the Above ?"
   }
]

let lastquestionIndex = questions.length -1;
let runningQuestionIndex = 0;
let score = 0;
let wrongscore = 0;
let timer = 20;



   $('#start').on('click', function(){
      console.log('hi');
      renderQuestion();  
      delayedalert();
})


function renderQuestion(){
   if (runningQuestionIndex>questions.length) {
      clearInterval(timeoutID);
   } 
   let q = questions[runningQuestionIndex];
   $('#question').html(q.question).show();
   $('#A').html(q.choiceA).show();
   $('#B').html(q.choiceB).show();
   $('#C').html(q.choiceC).show();
   $('#D').html(q.choiceD).show();
   $('#new').hide();
   timer=20;
   time();

}



function time(){
   timer --;
   $('.timer').html(timer);
   if(timer===0) {
   wrongscore ++;
   runningQuestionIndex ++;
   renderQuestion();
}}

function delayedalert(){
   timeoutID = setInterval(time, 1000);
}

function intervaltime (){
   setTimeout (renderQuestion, 2000);
}

function win() {
      score ++;
      $('#wins').html('Correct: '+ score);
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
      $('#losses').html('Incorrect: '+ wrongscore);
      runningQuestionIndex ++;
      intervaltime();
      $('#question').hide();
      $('#A').hide();
      $('#B').hide();
      $('#C').hide();
      $('#D').hide();
      $('#new').html('That is Not Correct!').show();
}

$("#A").on('click', function(){
   if (questions[runningQuestionIndex].choiceA===questions[runningQuestionIndex].correct){
      win();
   } else {
      loss();
}})

$("#B").on('click', function(){
   if (questions[runningQuestionIndex].choiceB===questions[runningQuestionIndex].correct){
      win();
   } else {
      loss();
}})
$("#C").on('click', function(){
    if (questions[runningQuestionIndex].choiceC===questions[runningQuestionIndex].correct){
      win();
   } else {
      loss();
}})
$("#D").on('click', function(){
   if (questions[runningQuestionIndex].choiceD===questions[runningQuestionIndex].correct){
     win();
  } else {
     loss();
}})
