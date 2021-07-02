const step = 50;
function upArrowPressed() {//Xây dựng các hàm xử lý khi nhấn phím lên
    let element = document.getElementById("img");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {// Xây dựng các hàm xử lý khi nhấn phím xuống
    var element = document.getElementById("img");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {//Xây dựng các hàm xử lý khi nhấn phím sang trái
    var element = document.getElementById("img");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {//Xây dựng các hàm xử lý khi nhấn phím sang phải
    var element = document.getElementById("img");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
function moveSelection(evt) {//Xây dựng các hàm nhận các phím
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }


}
function docReady() {//Xây dựng hàm doReady()
    window.addEventListener('keydown', moveSelection);
}