/*Nhóm câu lệnh lấy dữ liệu đầu vào imput
N1: prompt('') -> Hộp thoại popoup chứa 1 ô input để nhật dữ liệu
Dữ liệu nhập vào là chuỗi + là cộng chuôi
Cần ép kiểu
N2: Lấy input đưa vào giá trị của phần tử html thông qua thuộc tính của phần tử đó
- Tìm phần tử html cần lấy giá trị qua id của nó
let element = document.getElementById('a')
let valueA =  aElement.value
let a = document.getElementById('a').value
xử lý sự kiên
N3: Hiển thị kết quả đầu ra
- document.write("")
xóa hết mã html có sẵn
- alert() hiển thị popup (ít sử dụng)
- console.log() Hiển thị kết quả ở cửa sổ console của develop dev tool
chỉ dùng để test dữ liệu kết quả debug
N4: Hiển thị kết quả bằng cách thay đổi của nội dung html
- B1: Tìm phần tử html cần thay đỏi nội dung qua id của nó
let pElement =document.getElentmentById('result')
- B2: Sử dụng .innerHTML or .innerText
pElement.innerHTML = "Ket qua"
 */
// let x  = +prompt('Enter X');
// let y  = +prompt('Enter Y');
// let z = x + y;
// document.write(z);

// Viết chương trình nhập vào 3 số a,b,c in ra trung bình cộng
function TinhTrungBinh()
{
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let tb = (a+b/2);
    // document.write((a+b)/2);
    let tmp = document.getElementById('Result');
    tmp.innerText = "Trung bình cộng là = " + tb;
}
function Oparator(o){
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let tmp = document.getElementById('Result');
    if (o == '+')
    {
        tmp.innerText = "Tổng là = " + (a+b);
    }
    else if (o == '-')
    {
        tmp.innerText = " Hiệu là = "+ (a-b);
    }
    else if (o == 'X')
    {
        tmp.innerText = "Nhân là = "+ (a*b);
    }
    else if (o == '/')
    {
        tmp.innerText = "Chia là = "+ (a/b);
    }
    else
    {
        tmp.innerText = "Lỗi"
    }
}
function showMessage(){
    // alert("xin chào!");
    // document.getElementById('messageDiv').innerText = 'Xin Chào';
    // document.write('Xin chào');
    console.log("Xin chào");
}


