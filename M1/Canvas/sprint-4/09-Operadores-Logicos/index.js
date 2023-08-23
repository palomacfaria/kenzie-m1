//Operador Lógico NOT
/* !true 
!false
!undefined
!null */

//Operador AND (Todas as condições precisam ser verdade para retornar true);
let souHumano = true;
let souSuperHeroi = false;
let gostoDePizza = true;
let gostoDeJilo = false;

console.log(souHumano && souSuperHeroi); //false
console.log(gostoDePizza && gostoDeJilo); //false
console.log(souHumano && gostoDePizza); //true
console.log(souSuperHeroi && gostoDeJilo); //false

//Operador OUR (Apenas uma condição precisa ser verdadeira)
console.log(souHumano || souSuperHeroi); //true
console.log(gostoDePizza || gostoDeJilo); //true
console.log(souSuperHeroi || gostoDeJilo); //false

//BONUS
console.log(souHumano && !souSuperHeroi); //true
console.log(souSuperHeroi ||!gostoDeJilo); //true
console.log(!!souHumano && gostoDePizza); //true (Negar duas vezes volta ao meu estado inicial)