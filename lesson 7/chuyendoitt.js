function chuyendoi() {
    var number= parseInt(document.getElementById ("number").value);
    var from = document.getElementById ("from").value;
    var to = document.getElementById ("to").value;
    var count;
    if (from == to) {
        count = number  * 1 * 1;
    } else if (from == "VND" && to == "USD") {
        count = number * 1 / 23000;
    } else if (from == "USD" && to == "VND") {
        count = number * 1 * 23000;
    }
    console.log(count);
    document.getElementById("demo").innerHTML = "restur :"  + count; 
    }