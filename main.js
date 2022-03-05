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
    else if (op == "+"){
        res =  parseInt(a) + parseInt(b);
    }
    else if (op == "-"){
        res =  parseInt(a) - parseInt(b);
    }
    else if (op == "÷"){
        res =  parseInt(a) / parseInt(b);
    }
     
}

// *, +, /, -
function handleOperatorButton(operator){
    // console.log(a)
    if (a != ""){
        refreshOutput(operator);
        op = operator;
        a = res;
        b = "";
    }

}


// function handleOperatorButton(operator){
//     refreshOutput(operator);
//     op = operator;
//     a = res;
//     b = "";
// }


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
    // a = ""
    // wynik = ""
    // output.value="" // gorny 
    // output1.value=""    //dolny
    a = "";
    b = "";
    res = "";
    op = ""; 
    let output = document.getElementById(100);
    output.value =''
    let output1 = "";
    refreshOutput1();
}

function clearLastDigit(){
    // a = a.slice(0, -1);
    // output.value = output.value.slice(0, -1);
    let output = document.getElementById(100);
    let temporary_res = res
    if (op == ""){
        a = a.slice(0, -1); 
        res = a;
        output.value = a;       
    }
    else{
        if (b != ""){
            b = b.slice(0, -1);
            if (b!=""){
                calculate()
                refreshOutput1();
                output.value = output.value.slice(0,-1);
            }
            else{
                res == temporary_res
                output.value = output.value.slice(0,-1);
                refreshOutput1()

            }
        }
        else{
            op == "";
            output.value = output.value.slice(0,-1);

        }      
                  
    }

}

function displayTotalResult(){

    let output1 = document.getElementById(101);
    let output = document.getElementById(100);
    output1.value = res;
    output.value = res;
    // console.log(output.value)
    // console.log(output1.value)
    a = res;
    b = "";
    op = "";
}


function clearLastNumber(){
    // console.log(output.value.slice(-1)); 
    // while (output.value.slice(-1) != '*') {
    //     output.value = output.value.slice(0,-1);
    //     console.log(output.value)
    //   }
    // a = ""
    let output = document.getElementById(100);
    if (op == ""){
        a = ""; 
        b = "";
        res = a;
        output.value = "";   
        refreshOutput1();    
    }
    else{
        if (b.length != 0){
            let len = b.length;
            // console.log("b rozne od zera")
            // console.log(len)
            // console.log(op)
            b = "";
            res = a;
            refreshOutput1();
            output.value = output.value.slice(0,-len);   
        }
        else{
            // console.log("b rowne zero")
            // console.log(len)
            // console.log(op)
            op = "X";
            output.value = output.value.slice(0,-1);

        }    
    }
}

function handleDotButton(operator){

}


