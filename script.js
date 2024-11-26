const questions = [
    { question: "Сколько будет 2 + 2?", correctAnswer: 4, wrongAnswer: 5 },
    { question: "Сколько будет 3 * 3?", correctAnswer: 9, wrongAnswer: 8 },
    { question: "Сколько будет 10 - 6?", correctAnswer: 4, wrongAnswer: 5 },
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".option");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Случайное расположение правильного и неправильного ответа
    if (Math.random() > 0.5) {
      options[0].textContent = currentQuestion.correctAnswer;
      options[0].dataset.correct = "true";
      options[1].textContent = currentQuestion.wrongAnswer;
      options[1].dataset.correct = "false";
    } else {
      options[1].textContent = currentQuestion.correctAnswer;
      options[1].dataset.correct = "true";
      options[0].textContent = currentQuestion.wrongAnswer;
      options[0].dataset.correct = "false";
    }
  }
  
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";
      if (isCorrect) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
      } else {
        resultElement.textContent = "Неправильно!";
        resultElement.className = "incorrect";
      }
  
      // Задержка перед следующим вопросом
      setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
        resultElement.textContent = "";
      }, 1000);
    });
  });
  
  // Загрузка первого вопроса
  loadQuestion();
  