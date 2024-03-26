const quizData = [
    {
      question: "What is Sanjays favourite food?",
      options: ["Cheese", "Steak", "Roti", "Burger"],
      answer: "Steak"
    },
    {
      question: "What is Sanjays favourite colour?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "What is Sanjays favourite country?",
      options: ["England", "Zimbabwe", "Dubai", "India"],
      answer: "Zimbabwe"
    },
    {
      question: "What is Sanjays favourite musician?",
      options: ["Taylro swift", "Cardi B", "Bob Marley", "Slipknot"],
      answer: "Cardi B"
    },
    {
      question: "What is Sanjays shoe size?",
      options: ["19", "5", "11.5", "8.5"],
      answer: "8.5"
    },
    {
      question: "When did Sanjay get married?",
      options: ["1998", "1978", "2001", "2004"],
      answer: "2004"
    },
    {
      question: "How many children does Sanjay have?",
      options: ["1", "4", "2", "3"],
      answer: "2"
    },
    {
      question: "Who snores louder than sanjay?",
      options: ["No-one", "Krischen", "Meena", "Serena"],
      answer: "No-one"
    },
    {
      question: "What is Sanjays favourite sport?",
      options: ["Golf", "Cricket", "Rrugby", "Basketball"],
      answer: "Golf"
    },
    {
      question: "What was sanjays first car?",
      options: ["Corsa", "Pinto", "Panda", "Lexus"],
      answer: "Pinto"
    },
    {
      question: "When did sanjay start warm embrace?",
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
  