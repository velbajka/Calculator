var a = ""
var b = ""
var res = ""
var op = ""
var output = ""

function refreshOutput(character){
    let output = document.getElementById(100);
    output.value = output.value + character;
}

function refreshOutput1(){
    let output1 = document.getElementById(101);
    output1.value = res;
}


function handleDigitButton(digit){
    refreshOutput(digit);

    if (op == ""){
        a = a + digit; 
        res = a;       
    }
    else{
        b = b + digit;
        //liczymy 
        calculate();
        //pokazanie wyniki        
        refreshOutput1();
    }
}

//oblicz a op b
function calculate(){
    if (op == "*"){
        res =  parseInt(a) * parseInt(b);
    }
    //TODO    
}

// *, +, /, -
function handleOperatorButton(operator){
    refreshOutput(operator);
    op = operator;
    a = res;
    b = "";
}


// function enterNumber(id){
   

//     button = document.getElementById(id);
//     //console.log(button.value);

//     output = document.getElementById(100);
//     //console.log(output.value);           
//     output.value = output.value + button.value;

//     equals();
//     displayTotalResult();

//     if (id != "*"){
//         a = a + button.value;
//     }
// }

// function multiply(){
//     console.log(a)

//     wynik = a;
//     a = "";
//     enterNumber("*");
//     op = "*" //rodzaj ostatniej operacji
// }

// function equals(){
//     console.log(wynik)
//     console.log(a)    

//     if (op == "*"){
//         wynik = parseInt(wynik) * parseInt(a);
//         output.value = wynik;
//     }

//     a = wynik;
// }

function clearAll(){
    a = ""
    wynik = ""
    output.value="" // gorny 
    output1.value=""    //dolny

}

function clearLastDigit(){
    a = a.slice(0, -1);
    output.value = output.value.slice(0, -1)

}

function displayTotalResult(){
    let output1 = document.getElementById(101)
    output1.value = wynik
}


function clearLastNumber(){
    console.log(output.value.slice(-1)); 
    while (output.value.slice(-1) != '*') {
        output.value = output.value.slice(0,-1);
        console.log(output.value)
      }
    a = ""
}

