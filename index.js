const quizData = [
    {
      question: "What is Sanjays favourite food?",
      options: ["Cheese", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is Sanjays favourite colour?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What is Sanjays favourite country?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What is Sanjays favourite musician?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What is Sanjays shoe size?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "When did Sanjay get married?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "How many children does Sanjay have?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "Who snores louder than sanjay?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What is Sanjays favourite sport?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What was sanjays first car?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "When did sanjay start warm embrace?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
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
  
      // Show the slide at the given index
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
  