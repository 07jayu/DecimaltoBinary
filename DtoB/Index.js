//Initial References

let decInp = document.getElementById("dec-inp");
let BinInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//convert decimal to binary when user input in the decimal Number

decInp.addEventListener("input",()=> {
    let decValue = parseInt(decInp.value);
    //converts the decimal value to binary
    BinInp.value = decValue.toString(2);
});

