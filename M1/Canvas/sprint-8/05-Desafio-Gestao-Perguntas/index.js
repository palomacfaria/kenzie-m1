let slenzie = {
  nameEvent: "",
  questions: []
};
let question = {
  user: "palomacfaria",
  userQuestion: "Tudo bem?",
  vote: 0
};

//************************************************
function creatEvent(objSlenzie, str) {
  if (typeof str == "string" && str.length >= 5) {
    objSlenzie.nameEvent = str;
    return "Objeto slenzie atualizado.";
  }
  return "The input value is invalid";
}
console.log(creatEvent(slenzie, "teste"));

//************************************************
function addQuestion(objSlenzie, objQuestion) {
  if (question.user == "") {
    return "The user can't be empty";
  }

  if (question.userQuestion == "") {
    return "The question can't be null";
  }

  objSlenzie.question = objQuestion.userQuestion;
  return objSlenzie;
}
console.log(addQuestion(slenzie, question));

//************************************************
function addVoteToQuestion(position, objSlenzie) {
    const lengthQuestions = objSlenzie.questions.length;
  
    // Verifica se a posição da pergunta é válida
    if (position < 0 || position > lengthQuestions - 1) {
      return "Question not found.";
    } 
    // Verifica se a posição é um número inteiro
    else if (!Number.isInteger(position)) {
      return "The value is not allowed";
    }
  
    // Incrementa o contador de votos da pergunta na posição especificada
    objEvent.questions[position].vote += 1;
  
    return "Vote registered successfully";
  }
console.log(addVoteToQuestion(0, slenzie));

//************************************************
function questionAnswered(position, objEvent) {
    const lengthQuestions = objEvent.questions.length;
  
    // Verifica se a posição da pergunta é válida
    if (position < 0 || position > lengthQuestions - 1) {
      return "Question not found.";
    } 
    // Verifica se a posição é um número inteiro
    else if (!Number.isInteger(position)) {
      return "The value is not allowed";
    }
  
    // Define a propriedade "answered" da pergunta na posição especificada como verdadeira
    objEvent.questions[position].answered = true;
  }
console.log(questionAnswered(0, slenzie));

//************************************************
function unansweredQuestions(objEvent) {
    output = [];
  
    const questions = objEvent.questions;
  
    // Percorre todas as perguntas do evento
    for (let i = 0; i < questions.length; i++) {
      // Verifica se a pergunta não foi respondida
      if (questions[i].answered !== true) {
        output.push(questions[i]);
      }
    }
  
    return output;
  }
  console.log(unansweredQuestions(slenzie));