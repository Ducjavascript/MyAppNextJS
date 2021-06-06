function validateForm()
{
    // Bước 1: Lấy giá trị
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cf_password = document.getElementById('cf_password').value;

    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (username == '')
    {
        alert('Bạn chưa nhập tên đăng nhập');
    }
    else if(email == '')
    {
        alert('Bạn chưa nhập mật khẩu');
    }
    else if (password == '')
    {
        alert('Bạn chưa nhập mật khẩu');
    }
    else if (cf_password == '')
    {
        alert('Bạn chưa nhập lại mật khẩu');
    }
    else if (password != cf_password)
    {
        alert('Mật khẩu không khớp');
    }
    else{
        alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
        return true;
    }
    return false;
}
 