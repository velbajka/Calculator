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

    liczba = "";
}