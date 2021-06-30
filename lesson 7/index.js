function count() {
    let Number = parseInt(document.getElementById("number").value);
    let From = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let count;
    if (From == To) {
        count = Number * 1 * 1;
    } else if (From == "vnd" && To == "usa") {
        count = Number * 1 / 23000;
    } else if (From=="usa" && To == "vnd") {
        count = Number * 1 * 23000;
    }
    console.log(count);
    document.getElementById("demo").innerHTML = "Restur : " + count;
}
