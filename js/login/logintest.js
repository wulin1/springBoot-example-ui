function checkUser(){
    var result = document.getElementById("userid").value;
    var password = document.getElementById("userpassid").value;
    if(result == ""  ){
        alert("用户名不能为空");
        return false;
    }
    if(password == ""  ){
        alert("密码不能为空");
        return false;
    }else{
        return true;
    }
}
