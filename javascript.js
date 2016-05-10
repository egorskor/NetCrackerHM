
function calc() {
    var a = +document.getElementById('input1').value;
    var b = +document.getElementById('input2').value;
    /*var c = +document.getElementById('input3').value;*/
    var c =+$("#input3").val();
    var p = (a + b + c) / 2;
    if (check(a, b, c)) {
        var answer=Math.sqrt(p * (p - a) * (p - b) * (p - c));
        /*document.getElementById('input4').value = answer;*/
        $("#table").append("<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+answer+"</td></tr>");
        $("#window").hide();
        $(".content").show();
        $("body").css("background-color", "lightblue");
    }
    else {
        /*alert("Incorrect input");*/
        $(".mistake").text("Invalid input");
        $(".mistake").show();
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