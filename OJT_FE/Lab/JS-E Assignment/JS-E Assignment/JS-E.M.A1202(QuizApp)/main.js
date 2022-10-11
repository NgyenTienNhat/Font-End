(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // add checkbox answer 
        answers.push(
          `<label>
                <input type="checkbox" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousBtn.style.display = "none";
    } else {
      previousBtn.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitBtn = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Javascript is _________ language.",
      answers: {
        a: "Programming",
        b: "Application",
        c: "None of These",
        d: "Scripting",
      },
      multi: false,
      correctAnswer: "d",
    },
    {
      question:
        "Which of the following is a valid type of function javascript supports?",
      answers: {
        a: "named function",
        b: "anonymous function",
        c: "both of the above",
        d: "none of the above",
      },
      multi: false,
      correctAnswer: "c",
    },
    {
      question:
        "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
      answers: {
        a: "getIndex()",
        b: "location()",
        c: "indexOf()",
        d: "getLocation()",
      },
      multi: false,
      correctAnswer: "c",
    },
    {
      question: "Which one of the following is valid data type of JavaScript",
      answers: {
        a: "number",
        b: "void",
        c: "boolean",
        d: "nothing",
      },
      multi: false,
      correctAnswer: "c",
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitBtn.addEventListener("click", showResults);
  previousBtn.addEventListener("click", showPreviousSlide);
  nextBtn.addEventListener("click", showNextSlide);
})();
