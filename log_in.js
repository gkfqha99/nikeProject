document.addEventListener('DOMContentLoaded', function() {
    let customBox = document.querySelector('.custom_box');
    let rectangle = document.querySelector('.rectangle');
    let isActive = false; // 상태를 저장할 변수

    customBox.addEventListener('click', function() {
        isActive = !isActive; // 상태를 토글

        if (isActive) {
            // rectangle을 보이게 하고 색상을 흰색으로 변경
            rectangle.style.display = 'block'; // rectangle을 보이게 함
            rectangle.style.borderColor = '#fff'; // 테두리 색상을 흰색으로 변경
            this.style.background = "#333"; // 배경색을 어두운 색으로 변경
        } else {
            // rectangle을 숨기고 색상을 원래대로 변경
            rectangle.style.display = 'none'; // rectangle을 숨김
            rectangle.style.borderColor = ''; // 테두리 색상을 원래대로 변경
            this.style.background = ""; // 배경색을 원래대로 변경
        }
    });
});