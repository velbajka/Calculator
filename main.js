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
        res =  parseFloat(a) * parseFloat(b);
    }
    else if (op == "+"){
        res =  parseFloat(a) + parseFloat(b);
    }
    else if (op == "-"){
        res =  parseFloat(a) - parseFloat(b);
    }
    else if (op == "÷"){
        res =  parseFloat(a) / parseFloat(b);
    }

    
}

// *, +, /, -
function handleOperatorButton(operator){
    if (a != ""){
        if (op != "" && b == ""){
            let output = document.getElementById(100);
            output.value = output.value.slice(0,-1);
            op = operator;
            refreshOutput(operator);
        }
        else{
            refreshOutput(operator);
            op = operator;
            a = res;
            b = "";
        }
    }

}
// if (a != ""){
//     refreshOutput(operator);
//     op = operator;
//     a = res;
//     b = "";
// }

// }


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
//         wynik = parseFloat(wynik) * parseFloat(a);
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
    else if (op =="X"){
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
            op = "X";
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
    else if (op =="X"){
		//nothing to do
    }
    else{
        if (b.length != 0){
            let len = b.length;
            b = "";
            res = a;
            refreshOutput1();
            output.value = output.value.slice(0,-len);   
        }
        else{
            op = "X";
            output.value = output.value.slice(0,-1);

        }    
    }
}

function handleDotButton(operator){ 

}

function setColor(){
    property.style.backgroundColor = rgb(241, 147, 147);

}

function sqrt(character){
    calculate();
    a = res;
    b = ""
    int_a = parseFloat(a);
    res = Math.sqrt(int_a);
    a =  res;
    op = "√";

    refreshOutput(character);
    refreshOutput1();
}

function power(character){
    calculate();
    a = res;
    b = ""
    int_a = parseFloat(a);
    res =int_a*int_a;
    a =  res;
    op = "²";

    refreshOutput(character);
    refreshOutput1();
}

function percentage(character){
    if (b == "") {
        int_a = parseFloat(a);
        res =int_a/100;
        a =  res;
        op = "%";
    }
    else {
        int_b = parseFloat(b);
        b = int_b/100;
        calculate();
        a = res;
        b ="";
        op = "%";
    }

    refreshOutput(character);
    refreshOutput1();
}

function oneToX(character){
    if (a != ""){
        calculate();
        a = res;
        b = ""
        int_a = parseFloat(a);
        if (int_a != 0){
            res =1/int_a
            a =  res;
            op = "//";
        }
        refreshOutput(character);
        refreshOutput1();
    }
}

function negative(character){
    if (a != ""){
        if (b == "") {
            int_a = parseFloat(a);
            res =-(int_a);
            a =  res;
            op = "+/-";
        }
        else {
            int_b = parseFloat(b);
            b_calculated = -(int_b);
            res = - (parseFloat(res))
            // calculate();
            a = res;
            b ="";
            op = "+/-";


        }
    refreshOutput(character);
    refreshOutput1();
    }
}





