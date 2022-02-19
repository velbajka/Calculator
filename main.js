function enterNumber(id){
    button = document.getElementById(id);
    console.log(button.value);

    output = document.getElementById(100);
    //console.log(output.value);
           
    output.value = button.value;
}