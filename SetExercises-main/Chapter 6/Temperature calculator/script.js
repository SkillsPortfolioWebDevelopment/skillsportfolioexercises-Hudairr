function fConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputC").innerHTML = (valNum-32) / 1.8;
    document.getElementById("outputK").innerHTML = ((valNum-32)/1.8)+273.15;
}
function cConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputF").innerHTML = (valNum)*(9/5) + 32;
    document.getElementById("outputKelvin").innerHTML = (valNum)+273.15;
}