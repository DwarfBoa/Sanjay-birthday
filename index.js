const quizData = [
    {
      question: "What is your favourite food?",
      options: ["Cheese", "Steak", "Roti", "Burger"],
      answer: "Steak"
    },
    {
      question: "What is your favourite colour?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "What is your favourite country?",
      options: ["England", "Zimbabwe", "Dubai", "India"],
      answer: "Zimbabwe"
    },
    {
      question: "Who is your favourite musician?",
      options: ["Taylor swift",  "Michael jackson", "Slipknot", "Cardi B"],
      answer: "Cardi B"
    },
    {
      question: "What is your shoe size?",
      options: ["19", "5", "11.5", "8.5"],
      answer: "8.5"
    },
    {
      question: "When did you get married?",
      options: ["1998", "1978", "1993", "2004"],
      answer: "1993"
    },
    {
      question: "How many children do you have?",
      options: ["1", "4", "2", "3"],
      answer: "2"
    },
    {
      question: "Who snores louder than you?",
      options: ["No-one", "Krischen", "Meena", "Serena"],
      answer: "No-one"
    },
    {
      question: "What is your favourite sport?",
      options: ["Golf", "Cricket", "Rugby", "Basketball"],
      answer: "Golf"
    },
    {
      question: "When did your start warm embrace?",
      options: ["2023", "2010", "2024", "2019"],
      answer: "2023"
    },

    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
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
    setInterval(nextSlide, 5000); // Change interval as needed
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