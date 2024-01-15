// Trường cấp 3 Lý Tự Trọng: 3000 học sinh
// var hocSinh = "Sơn", "Đạt", "Minh", "Huy";

// Mảng (Array)
// Mảng chưa có dữ liệu sẽ được gọi là mảng rỗng
// var arrHocSinh = [];
// Trong mảng để ngăn cách các phần tử với nhau, sử dụng dấu phẩy (,)
// Trong mảng có vị trí index, giúp xác định các phần tử nằm trong mảng
//                  0     1       2       3     4
var arrHocSinh = ["Sơn", "Đạt", "Minh", "Huy", "Long"];
// Láy dữ liệu trong mảng ra sử dụng
var tenCuaSon = arrHocSinh[0];
console.log(tenCuaSon);

// Yêu cầu: tạo ra một mảng lưu trữ tên của các bạn nữ tham gia ngày hội khéo tay: Lan, Ngân, Linh, Quyên, Giao, Nam
// Lấy ra tên bạn Ngân trong mảng và xuất ra một console.log là bạn Ngân là trưởng nhóm khéo tay
// Yêu cầu: đếm xem trong nhóm có tổng cộng bao nhiêu bạn
// Bạn nào là bạn nằm cuối cùng
// Thay bạn Nam trong nhóm của chúng ta bằng bạn Kim
var arrCacBanNu = ["Lan", "Ngân", "Linh", "Quyên", "Giao", "Nam"];
var tenTruongNhom = arrCacBanNu[1];
console.log("Bạn " + tenTruongNhom + " là trưởng nhóm khéo tay");
// Lấy ra tổng số phần tử trong mảng
// var soLuongThanhVien = arrCacBanNu.length;
// console.log(soLuongThanhVien + " thành viên");
// Vị trí index cuối cùng luôn nhỏ hơn độ dài mảng 1 đơn vị (vị trí index cuối cùng = n(độ dài mảng) - 1)
var soLuongThanhVien = arrCacBanNu.length;
for (var i = 0; i < arrCacBanNu.length; i++) {
  console.log(`Xin chào bạn: ${arrCacBanNu[i]}`);
  // cấu trúc đièu kiện để kiểm tra xem Nam nằm ở vị trí index số bao nhiêu
  if (arrCacBanNu[i] == "Nam") {
    console.log("Nam nằm ở đây", i);
  }
}
var thanhVienCuoiCung = arrCacBanNu[arrCacBanNu.length - 1];
console.log(thanhVienCuoiCung + " là thành viên cuối cùng");
arrCacBanNu[thanhVienCuoiCung] = "Kim";
console.log(arrCacBanNu);
console.log(arrCacBanNu[thanhVienCuoiCung]);
console.log(soLuongThanhVien + " thành viên");

// Một số cách tương tác với mảng trong javascript
// Thêm phần tử vào cuối mảng (Push)
var arrSinhVienNgheo = ["Lâm", "Sang", "Sĩ", "Hoàng", "Bình"];
arrSinhVienNgheo.push("Dân", "Sĩ" ,"Cường");
console.log(arrSinhVienNgheo);
var sinhVienNgheoCuoiCung = arrSinhVienNgheo.pop();
console.log(sinhVienNgheoCuoiCung);
console.log(arrSinhVienNgheo);
// Thêm phần tử vào đầu mảng (unshift)
arrSinhVienNgheo.unshift("Hằng","Hạ");
console.log(arrSinhVienNgheo);
arrSinhVienNgheo.shift();
console.log(arrSinhVienNgheo);

// Tìm xem Sĩ nằm ở đâu trong mảng
var viTriCuaSi = arrSinhVienNgheo.indexOf("Sĩ");
console.log(viTriCuaSi);

var viTriCuoiCungCuaSi = arrSinhVienNgheo.lastIndexOf("Sĩ");
console.log(viTriCuoiCungCuaSi);

// Phương thức giúp đảo ngược mảng và sắp xếp mảng
var arrNumber = [4,6,20,1,53];
arrNumber.reverse();
console.log(arrNumber);
arrNumber.sort(function(a,b) {
  // return a - b; //tăng dần
  // return b - a; //giảm dần
});
console.log(arrNumber);
arrSinhVienNgheo.sort();
console.log(arrSinhVienNgheo);

var arrChuCai = ["a",'h','z','g','u','k'];
arrChuCai.sort().reverse();
console.log(arrChuCai);

// Phương thức join (nối các phần tử trong mảng thành 1 chuỗi)
var arrTenCongTy = ['Hồng', 'Phúc', 'Công', 'Ty'];
var chuoiTenCongTy = arrTenCongTy.join(" ");
console.log(chuoiTenCongTy);

// Phương thức slide (giúp cắt một đoạn trên mảng để tạo thành mảng mới)
var monAn = ['Bánh canh', 'Bùn bò', 'Bún riêu', 'Bún chả', 'Cơm sườn', 'Mì quảng'];
// Vị trí bắt đầu cắt, vị trí ngưng cắt
// vị trí ngưng cắt lúc nào cũng sẽ lấy lớn hơn vị trí ptử cuối cùng cần cắt 1 đơn vị
// khi sử dụng slice sẽ không ảnh hưởng tới mảng ban đầu mà là tạo ra một mảng mới dựa trên các ptử muốn cắt của mảng ban đầu
var monBun = monAn.slice(1,4);
console.log(monAn);
console.log(monBun);

// Hàm splice giúp xóa 1 hoặc nhiều ptử khỏi mảng
var arrPhone = ['Iphone 14', 'SamSung S24', 'Bphone', 'Huawei', 'Redmi'];
// truyền tham số đầu tiên đại diện cho vị trí bắt đầu xóa
// tham số thứ 2 là số ptử cần xóa
// tham số thứ 3 sẽ là phần tử được thêm vào ngay vị trí bắt đầu xóa
arrPhone.splice(2,0,'Samsung Galaxy Note10+');
console.log(arrPhone)

// Hàm concat (giúp nối nhiều mảng lại với nhau)
var arrSinhVienNam = ['Đạt', 'Thành', 'Tùng'];
var arrSinhVienNu = ['Tú', 'Ngọc', 'Hari Won'];
var arrSinhVien = arrSinhVienNam.concat(arrSinhVienNu);
console.log(arrSinhVien);


// Bài tập 1: Đảo ngược chuỗi
// Từ 1 chuỗi được cung cấp, các bạn hãy thực hiện đảo ngược chuỗi lại. VD: "Hello" ==> "olleH"
// Gợi ý tìm cách để có thể tách chuỗi thành 1 mảng 
var chuoiDaoNguoc = 'Hello';
var arrChuoiDaoNguoc = chuoiDaoNguoc.split('').reverse().join('');
console.log(arrChuoiDaoNguoc);
function hamChuoiDaoNguoc(string) {
  return string.split("").reverse().join("");
}
var ten = hamChuoiDaoNguoc('hehuhuhe');
console.log(ten);

// Bài tập 2: Tạo ra các option cho 1 select lựa chọn món ăn
// Từ 1 mảng được cung cấp và 1 thẻ select trên giao diện, các bạn sẽ thực hiện tạo ra các option cho select đó dựa trên mảng món án
var monAn2 = ['Mì sủi cảo', 'Lẩu dê', 'Bún đậu', 'Bún bò', 'Lẩu cá', 'Xiên bẩn'];
// for (var i = 0; i < monAn2.length; i++){
//   for(var j = 1; j < monAn2.length; j++){
//     var menu = monAn2.slice(i,j);
//     console.log(menu);
//   }
// }
var eleSelect = document.getElementById('monAn');
var content = '';
for (var i = 0; i < monAn2.length; i++) {
  console.log(monAn2[i]);
  content+= `<option value="${monAn2[i]}">${monAn2[i]}</option>`;
}
console.log(content);
eleSelect.innerHTML = content;

// Bải tập tổng hợp ôn với mảng
// dựa trên layout và đề được cung cấp ở slice số 39, các bạn sẽ hoàn thành các yêu câu 1,2,3,4,5,7,9,10

var arrSoN = [];

document.getElementById('btn_ThemSoN').onclick = function themSoNVaoMang() {
  var soN = document.getElementById('txt_soN').value * 1;
  arrSoN.push(soN);

  document.querySelector('.render_arr').innerHTML = `Mảng: ${arrSoN}`;
}

document.getElementById('btn_ketQua1').onclick = function() {
  var tongSoDuong = 0; 
  var soNguyenDuong = 0;
  for (var i = 0; i < arrSoN.length; i++){
    if (arrSoN[i] > 0) {
      soNguyenDuong = arrSoN[i];
      tongSoDuong += soNguyenDuong;
    }
  }
  document.getElementById('kq1').innerHTML = `Tổng các số dương trong mảng: ${tongSoDuong}`;
}
document.getElementById('btn_ketQua2').onclick = function() {
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++){
    if (arrSoN[i] > 0) {
      count++
    }
  }
  document.getElementById('kq2').innerHTML = `Có ${count} số dương trong mảng`;
}
document.getElementById('btn_ketQua3').onclick = function() {
  arrSoN.sort(function(a,b) {
    return b - a;
  });
  var soNhoNhat = arrSoN.pop();
  document.getElementById('kq3').innerHTML = `Số nhỏ nhất trong mảng: ${soNhoNhat}`;
}
document.getElementById('btn_ketQua4').onclick = function() {
  arrSoN.sort(function(a,b) {
    return a - b;
  });
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      soDuongNhoNhat = arrSoN[i];
      break;
    }
  }
  document.getElementById('kq4').innerHTML = `Số dương nhỏ nhất trong mảng: ${soDuongNhoNhat}`
}

document.getElementById('btn_ketQua5').onclick = function() {
  var soChan = -1;
  for (var i = arrSoN.length - 1; i >= 0; i--) {
    if(arrSoN[i] % 2 == 0){
      soChan = arrSoN[i];
      break;
    }
  }
  document.getElementById('kq5').innerHTML = `Số chẵn cuối cùng trong mảng: ${soChan}`
}

document.getElementById('btn_ketQua6').onclick = function() {
  var viTri1 = document.getElementById('txt_viTri1').value * 1;
  var viTri2 = document.getElementById('txt_viTri2').value * 1;

  if (!isNaN(viTri1) && !isNaN(viTri2)) {
    var giaTriTam = arrSoN[viTri1];
    arrSoN[viTri1] = arrSoN[viTri2];
    arrSoN[viTri2] = giaTriTam;

    document.getElementById('kq6').innerHTML = "Mảng sau khi đổi chỗ: " + arrSoN;
  } else {
    document.getElementById('kq6').innerHTML = "Vị trí không hợp lệ. Vui lòng nhập lại.";
  }
}

document.getElementById('btn_ketQua7').onclick = function() {
  arrSoN.sort(function(a,b) {
    return a - b;
  });
  document.getElementById('kq7').innerHTML = `Mảng theo thứ tự tăng dần: ${arrSoN}`
}

document.getElementById('btn_ketQua8').onclick = function() {
  var soNguyenToDauTien = timSoNguyenToDauTien(arrSoN);
  
  document.getElementById('kq8').innerHTML = "Số nguyên tố đầu tiên trong mảng: " + (soNguyenToDauTien !== -1 ? soNguyenToDauTien : "Không có số nguyên tố");
}

function timSoNguyenToDauTien(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (laSoNguyenTo(arr[i])) {
      return arr[i];
    }
  }
  return -1;
}

function laSoNguyenTo(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var arrayFloat = [];
document.getElementById('btn_ThemSoNMangSoThuc').onclick = function themSoNVaoMang() {
  var soThuc = document.getElementById('txtMangSoThuc').value * 1;
  arrayFloat.push(soThuc);

  document.querySelector('.render_arrSoThuc').innerHTML = `Mảng số thực: ${arrayFloat}`;
}
document.getElementById('btn_ketQua9').onclick = function() {
  var count = 0;
  for (var i = 0; i < arrayFloat.length; i++) {
    if (Number.isInteger(arrayFloat[i])) {
      count++;
    }
  }
  document.getElementById("kq9").innerHTML = "Số nguyên: " + count;
}

document.getElementById('btn_ketQua10').onclick = function() {
  function demSoDuongTrongMang(arrSoN) {
    var soLuongSoDuong = 0;
    for (var i = 0; i < arrSoN.length; i++) {
      if (arrSoN[i] > 0) {
        soLuongSoDuong++;
      }
    }
    return soLuongSoDuong;
  }

  function demSoAmTrongMang(arrSoN) {
    var soLuongSoAm = 0;
    for (var i = 0; i < arrSoN.length; i++) {
      if (arrSoN[i] < 0) {
        soLuongSoAm++;
      }
    }
    return soLuongSoAm;
  }
  
  var soLuongSoDuong = demSoDuongTrongMang(arrSoN);
  var soLuongSoAm = demSoAmTrongMang(arrSoN);

  if(soLuongSoDuong >  soLuongSoAm) {
    document.getElementById('kq10').innerHTML = `Số dương > Số âm`
  } else if (soLuongSoDuong == soLuongSoAm) {
    document.getElementById('kq10').innerHTML = `Số dương = Số âm`
  } else{
    document.getElementById('kq10').innerHTML = `Số âm > Số dương`
  }
}
//Với mỗi câu hỏi, các bạn sẽ qua bên layout và tạo một nút giúp người dùng khi đã thêm đủ các ptử vào mảng thì sẽ bắt đầu bấm vào các nút để trả về kết quả
