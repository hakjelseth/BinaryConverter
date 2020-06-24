function bin2dec(){
    var binaert = document.getElementById("binaert").value;
    var sum = 0;
    var teller = 0;
    if(binaert.length > 8){
        document.getElementById("resultat").innerHTML = "Invalid binary number. You cannot enter more than 8 digits.";
        return;
    }

    while(binaert > 0){
        if(binaert%10 != 0 && binaert%10 != 1){
            document.getElementById("resultat").innerHTML = "Invalid binary number. You can only use 1s or 0s.";
            return;
        }
        sum += binaert%10 * Math.pow(2,teller);
        binaert = Math.floor(binaert/10);
        teller++;
    }
    document.getElementById("resultat").innerHTML = "Decimal: " + sum;
}