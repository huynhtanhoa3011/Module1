let imgObj = null;
        imgObj = document.getElementById('myImage');
        function init() {//hàm init() để khởi tạo Obj mà chúng ta đặt vị trí và các thuộc tính còn lại
            imgObj = document.getElementById('myImage');
            imgObj.style.position = 'relative';
            imgObj.style.left = '0px';
        }
        function moveRight() {//tăng khoảng cách trái 10px
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        }
        window.onload = init; //Gọi hàm init() khi trình duyệt được tải lần đầu
