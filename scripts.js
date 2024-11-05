// Definindo as perguntas e respostas
const flashcards = [
    { question: 'Qual é a capital do Brasil?', answer: 'Brasília' },
    { question: 'Qual é o maior planeta do sistema solar?', answer: 'Júpiter' },
    { question: 'Quem escreveu "Dom Casmurro"?', answer: 'Machado de Assis' },
    { question: 'Qual é o elemento químico com o símbolo O?', answer: 'Oxigênio' },
  ];
  
  // Variáveis de controle
  let currentIndex = 0;
  const flashcardElement = document.getElementById('flashcard');
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  
  // Função para exibir a questão
  function showCard() {
    questionElement.textContent = flashcards[currentIndex].question;
    answerElement.textContent = flashcards[currentIndex].answer;
    flashcardElement.classList.remove('flipped');
  }
  
  // Função para virar o flashcard
  function flipCard() {
    flashcardElement.classList.toggle('flipped');
  }
  
  // Função para ir para o próximo flashcard
  function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard();
  }
  
  // Inicializando o primeiro flashcard
  showCard();
  