let button = document.getElementById('btn');
button.addEventListener('click', calc);


function calc(){


    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let operator = document.getElementById("operator").value;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let answer = document.getElementById("answer");

    switch(operator){
        case '+':
            alert(answer.innerHTML = numberOne + numberTwo);
            break;
        case '-':
            alert(answer.innerHTML = numberOne - numberTwo);
            break;
        case '*':
            alert(answer.innerHTML = numberOne * numberTwo);
            break;
        default:
            (answer.innerHTML = "Invalid Input");
    }
}