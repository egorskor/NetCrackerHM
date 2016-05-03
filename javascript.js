function calc() {
    var a = +document.getElementById('input1').value;
    var b = +document.getElementById('input2').value;
    var c = +document.getElementById('input3').value;
    var p = (a + b + c) / 2;
    if (check(a, b, c)) {
        document.getElementById('input4').value = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
    else {
        alert("Incorrect input");
    }
}

function check(a, b, c) {
    if (isNumeric(a) && isNumeric(b) && isNumeric(c)) {
        if ((a < b + c) && (b < a + c) && (c < a + b)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
}