var a = ""
var b = ""
var res = ""
var op = ""
var output = ""
var standardOperators = [ '+','-', '*', '÷' ]
var dot = false
//[ '','%', '√', '²' ]

function roundNplace(a, N){	
	pow10N = Math.pow(10, N); 
	a = Math.round(a* pow10N)/pow10N;
	console.log(a);
	return a;		
}

function refreshOutput(character){
	
    let output = document.getElementById(100);
    if (op!="|"){
        output.value = output.value + character;
    }
    else{
        output.value = res;
    }
        
}

// function refreshOutput(character){
//     let output = document.getElementById(100);
//     output.value = output.value + character;
// }


function refreshOutput1(){
    let output1 = document.getElementById(101);
    output1.value = res;
}


function handleDigitButton(digit){

    // console.log("co sie dzieje z kropką", dot)
    // console.log("cholerny operator", op)
    if (dot==false){
        // console.log("dot jest puste")
        if (op =="X"){
            // console.log("tu powinno wejsc", op) 
// ///////////////// co w takim przypadku - w a moze byc kropka a moze jej nie byc
///////////// plus przypadek gdzie kropka po operatorze
        }
        else{
            // console.log("operator inny od x", op)
            refreshOutput(digit);

            if (op == ""){
                // console.log("operator pusty czyli mamy a", op)
                a = a + digit; 
                res = a;  
            
            }
    
            else{
                // console.log("operator nie pusty czyli mamy b", op)
                b = b + digit;
                //liczymy 
                calculate();
                //pokazanie wyniki        
                refreshOutput1();
            }
            if (digit =="."){
                dot = true
            }

        }
        // refreshOutput(digit);

        // if (op == ""){
        //     a = a + digit; 
        //     res = a;  
        
        // }

        // else{
        //     b = b + digit;
        //     //liczymy 
        //     calculate();
        //     //pokazanie wyniki        
        //     refreshOutput1();
        // }
        // if (digit =="."){
        //     dot = "."
        // }

    }
    else{
        if (digit =="."){

        }
        else{
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
        
    }




// //////////////ten kod mozna zapisać jako nowa funkcje

    // refreshOutput(digit);

    // if (op == ""){
    //     a = a + digit; 
    //     res = a;  
    
    // }
    // else{
    //     b = b + digit;
    //     //liczymy 
    //     calculate();
    //     //pokazanie wyniki        
    //     refreshOutput1();
    // }
//////////////////////////////////////////////////////////
    
}
function parseFloatDot(a){
    if (a == "."){
        return 0
    }
    else{
        return parseFloat(a); 
    }
}
//oblicz a op b
function calculate(){
	
	// roundNplace(2.99999999900000000123, 3);
	
    // logAll()
    if (op == "*"){
        res =  parseFloatDot(a) * parseFloatDot(b);
    }
    else if (op == "+"){
        res =  parseFloatDot(a) + parseFloatDot(b);
    }
    else if (op == "-"){
        res =  parseFloatDot(a) - parseFloatDot(b);
    }
    else if (op == "÷"){
        res =  parseFloatDot(a) / parseFloatDot(b);
    }
    // console.log("new b", parseFloatDot(b))
    
}
function logAll(){
    console.log("operator", op)
    // console.log("digit", digit)
    console.log("a", a)
    console.log("b", b)
    console.log("res", res)
    console.log("dot", dot)
}

// *, +, /, -
function handleOperatorButton(operator){
    
    dot = false
    if (a != ""){
        if (op !="" && b == ""){
            if (op == '+' || op == '-' || op == '*' || op == '÷' ){
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
    dot = false
    let output = document.getElementById(100);
    output.value =''
    let output1 = "";
    refreshOutput1();
}

function clearLastDigit(){
    // a = a.slice(0, -1);
    // output.value = output.value.slice(0, -1);
    let output = document.getElementById(100);
    // let temporary_res = res
    if (op == ""){
        if (a.substring(a.length-1, a.length)=="."){
            dot = false
        }
        a = a.slice(0, -1); 
        res = a;
        output.value = a;  
    }
    else if (op =="X"){
    }
    else{
        
        if (b != ""){
            console.log("b nie jest puste")
            if (b.substring(b.length-1, b.length)=="."){
                console.log("sprawdzenie kropki")
                dot=false
            }
            console.log("initial b", b)
            b = b.slice(0, -1);
            console.log("nowe b", b)
            if (b!=""){
                console.log("nowe b nie jest puste", b)
                calculate()
                //refreshOutput1();
                output.value = output.value.slice(0,-1);
                refreshOutput1();
            }
            else{
                console.log("nowe b jest puste", b)
                res = a
                output.value = output.value.slice(0,-1);
                refreshOutput1()
            }
        }
        else{
            console.log("initial b jest puste, czyscimy operator", b)
            op = "X";
            output.value = output.value.slice(0,-1);
            refreshOutput1()
            // res=a
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
    // po wyczyszczeniu operatora brak mozliwości modyfikacji liczby - dodanie cyfr czy kropki - to samo przy clear last digit

    // console.log(output.value.slice(-1)); 
    // while (output.value.slice(-1) != '*') {
    //     output.value = output.value.slice(0,-1);
    //     console.log(output.value)
    //   }
    // a = ""
    let output = document.getElementById(100);
    dot = false
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
    dot = false
    if (a == "") {
    }
    //nothing to do
    else{   
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
}

function power(character){
    dot = false
    if (a == "") {
    }
    //nothing to do
    else{
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
}

function percentage(character){
    dot = false
    if (a == "") {
        //nothing to do
    }
    
    else{
        if (b == "") {
            // co jesli a to kropka (nie dzialają operatory)
            // int_a = parseFloat(a);
            int_a = parseFloatDot(a);
            res =int_a/100;
            a =  res;
            op = "%";
        }
        else {
            // int_b = parseFloat(b);
            int_b = parseFloatDot(b);
            b = int_b/100;
            calculate();
            a = res;
            b ="";
            op = "%";
        }
    refreshOutput(character);
    refreshOutput1();
    }


}

function oneToX(character){
    dot = false
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
            op = "|";
        }
        else {
            int_b = parseFloat(b);
            // b_calculated = -(int_b);
            // res = - (parseFloat(res))

            b=-(int_b)
            console.log(b)
            calculate();
            a = res;
            b ="";
            op = "|";


        }
    
    refreshOutput(character);
    refreshOutput1();
    }
}





