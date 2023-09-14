const departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ];

/* 1- Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista. */
function howManyDepartments(){
    return departmentList.length;
}
console.log(howManyDepartments());
/* 2- Desenvolva uma função chamada changeDepartmentName que deverá receber dois parâmetros: o nome atual do departamento e um novo nome para ser atribuído a ele. Esta função deve retornar o objeto correspondente ao departamento com o nome já atualizado. Se o nome do departamento não for encontrado, a função deve retornar: "Department not found." */
function changeDepartmentName(nomeAtual, novoNome){
    for(let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeAtual){
            departmentList[i].departmentName = novoNome;
            return departmentList;
        }
    }
    return "Department not found.";
}
console.log(changeDepartmentName('Capitation', "Information Technology"));

/* 3- Desenvolva uma função chamada giveTheDepartmentABreak que alterne o valor da variável working, sempre que chamada. Em resumo, se working estiver como true, deverá mudar para false, e vice-versa. A função deve retornar a propriedade já atualizada. */
function giveTheDepartmentABreak(){
    for(let i = 0; i < departmentList.length; i++){
        if(departmentList[i].working){
            departmentList[i].working = false;
        }
        else if(!departmentList[i].working){
            departmentList[i].working = true;
        }
    }
    return departmentList;
}
console.log(giveTheDepartmentABreak());
/* 4- Desenvolva uma função chamada howManyEmployeesInDepartment que recebe o nome do departamento como parâmetro e verifica quantos funcionários estão naquele departamento. Caso o departamento não seja encontrado, retornar: "Departament not found". */
function howManyEmployeesInDepartment(nomeDepartamento){
    for(let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeDepartamento){
            return departmentList[i].employees.length;
        }
    }
    return "Departament not found."
}
console.log(howManyEmployeesInDepartment('Expedition'));

/* 5- Desenvolva uma função chamada insertNewEmployeeInDepartment que consiga adicionar um novo funcionário ao departamento. A função deve receber o nome do departamento como parâmetro e um objeto pessoa com:
name, uma variável do tipo string
age, uma variável do tipo number
responsibility, uma variável do tipo string
salary, uma variável do tipo number */
let funcionario = {
    name: "Jake",
    age: 32,
    responsibility: "Expedition analyst Jr",
    salary: 2500
}
function insertNewEmployeeInDepartment(nomeDepartamento, pessoa){
    for(let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeDepartamento){
            departmentList[i].employees = pessoa;
            return departmentList;
        }
    }
}
console.log(insertNewEmployeeInDepartment('Expedition', funcionario));
  