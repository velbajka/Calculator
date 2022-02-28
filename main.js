var liczba = ""
function enterNumber(id){
    button = document.getElementById(id);
    //console.log(button.value);

    output = document.getElementById(100);
    //console.log(output.value);           
    output.value = output.value + button.value;

    if (id != "*"){
        liczba = liczba + button.value;
    }
}

function multiply(){
    console.log(liczba)

    wynik = liczba;
    liczba = "";
    enterNumber("*");
    rodzaj_operacji = "*" //rodzaj ostatniej operacji
}

function equals(){
    console.log(wynik)
    console.log(liczba)
    

    if (rodzaj_operacji == "*"){
        wynik = parseInt(wynik) * parseInt(liczba);
        output.value = wynik;
    }

    liczba = wynik;
}

function clearAll(){
    liczba = ""
    wynik = ""
    output.value=""
    output1.value=""

}

function clearLastDigit(){
    liczba = liczba.slice(0, -1);
    output.value = output.value.slice(0, -1)

}

function displayTotalResult(){
    output1 = document.getElementById(101)
    output1.value = wynik
}


function clearLastNumber(){
    console.log(output.value.slice(-1)); 
    while (output.value.slice(-1) != '*') {
        output.value = output.value.slice(0,-1);
        console.log(output.value)
      }
    liczba = ""
}

