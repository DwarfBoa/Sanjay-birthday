const questions = [
    {
      question: "What is your favourite food?",
      answers: [
        {text: "Grapes", correct: false}, 
        {text: "Steak", correct: false}, 
        {text: "Roti", correct: false}, 
        {text: "Burger", correct: true}
      ]
    },
    {
      question: "What is your favourite book?",
      answers: [
      {text: "See you at the top - Zig Zaglar", correct: true},
      {text: "Atomic habits - James Clear", correct: false},
      {text: "How to win friends and influence people - Dale Carnegie", correct: false},
      {text: "Chicken soup for the soul - Jack Canfield", correct: false}
        ]
    },
    {
      question: "What is your favourite country?",
      answers: [
        {text: "England" ,correct: false},
        {text: "Zimbabwe" ,correct: false},
        {text: "Dubai" ,correct: true},
        {text: "India" ,correct: false}
      ]
    },
    {
      question: "Who is your favourite musician?",
      answers: [
        {text: "Taylor swift", correct: false},
        {text: "Michael jackson", correct: false},
        {text: "Slipknot", correct: false},
        {text: "Cardi B", correct: true}
          ],
    },
    {
      question: "What is your shoe size?",
      answers: [
        {text: "9", correct: false},
        {text: "8", correct: false},
        {text: "11.5", correct: false},
        {text: "8.5", correct: true}
          ],
    },
    {
      question: "How many years of marriage are you celebrating this year?",
      answers: [
        {text: "29", correct: false},
        {text: "30", correct: false}, 
        {text: "31", correct: true}, 
        {text: "32", correct: false}
      ],

    },
    {
      question: "What is your favourite shoe brand",
      answers: [
        {text: "Adidas", correct: false}, 
        {text: "Sketchers", correct: true}, 
        {text: "Nike", correct: false}, 
        {text: "New Balance", correct: false}
      ],
    },
    {
      question: "Who snores louder than you?",
      answers: [
        {text: "No-one", correct: true}, 
        {text: "Krischen Masa", correct: false}, 
        {text: "Meena", correct: false}, 
        {text: "Uncle Steve", correct: false}
      ],
    },
    {
      question: "What is your favourite sport to watch?",
      answers: [
        {text: "Golf", correct: false}, 
        {text: "Cricket", correct: false}, 
        {text: "Rugby", correct: false}, 
        {text: "Tennis", correct: true}
      ],
    },
    {
      question: "What would be the best birthday treat?",
      answers: [
        {text: "A lovely evening at a fancy wine & cheese bar", correct: true}, 
        {text: "A trip to salt lane car park", correct: false}, 
        {text: "Give toffee eye medicine", correct: false}, 
        {text: "Night out of with Meena's girl friends", correct: false}
      ],
    },

    // Add more questions here...
  ];
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer=> {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  })
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }

}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
    nextButton.style.display = "block";
  }
  )
}


function showScore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
  showQuestion();
}
else{
  showScore();
}
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})


startQuiz();

  document.addEventListener('DOMContentLoaded', function () {
    var imageSlides = document.querySelectorAll('.imageSlides');
    var counter = 0;
  
    function showSlide(n) {
      // Hide all slides
      imageSlides.forEach(function (slide) {
        slide.classList.remove('active');
      });
  
      // Show the slide at thegiven index
      imageSlides[n].classList.add('active');
    }
  
    function nextSlide() {
      counter = (counter + 1) % imageSlides.length;
      showSlide(counter);
    }
  
    // Show first slide
    showSlide(counter);
  
    // Auto slide
    setInterval(nextSlide, 2000); // Change interval as needed
  });
  
  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
