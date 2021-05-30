let finalResult = ""
let numButtons = document.getElementsByClassName("so")
let resultButton = document.getElementById('ketqua')
resultButton.innerHTML = "0"
for (let i = 0; i <= numButtons.length; i++) {
    // thêm sự kiện cho từng numberbutton
    // nãy e de la 0 ah sua lai thanh numButtons[i]
    numButtons[i].addEventListener('click', function(){
        finalResult = finalResult + numButtons[i].innerHTML
        resultButton.innerHTML = finalResult
    })
}
// Nếu chỉ cần bấm nút được thì em xong rồi nhé, gửi chị
// còn nếu phải thêm nữa thì chị nhắn lại cho em để em làm tiếp