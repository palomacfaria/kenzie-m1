let slenzie = {
    nameEvent: '',
    questions: [],
}
let question = {
    user: '',
    userQuestion: '', 
    vote: 0
}

//************************************************
function creatEvent(objSlenzie, str){

    if(typeof str == 'string' && str.length >= 5){
        objSlenzie.nameEvent = str;
        return "Objeto slenzie atualizado.";
    }
    return "The input value is invalid";
}
console.log(creatEvent(slenzie, 'teste'));

//************************************************
function addQuestion(objSlenzie, objQuestion){

}