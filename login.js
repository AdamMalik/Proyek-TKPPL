$(document).ready(function () {
    $("#loginModal").click(function () {
        var email = $("#emailLogin").val();
        var password = $("#passLogin").val();
        // Checking for blank fields.
        if (email == '' || password == '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        } else {
            $.post("cekLogin.php", {
                    email1: email
                    , password1: password
                }
                , function (data) {
                    if (data == 'Invalid Email.......') {
                        $('input[type="text"]').css({
                            "border": "2px solid red"
                            , "box-shadow": "0 0 3px red"
                        });
                        $('input[type="password"]').css({
                            "border": "2px solid #00F5FF"
                            , "box-shadow": "0 0 5px #00F5FF"
                        });
                        alert(data);
                    } else if (data == 'Email or Password is wrong...!!!!') {
                        $('input[type="text"],input[type="password"]').css({
                            "border": "2px solid red"
                            , "box-shadow": "0 0 3px red"
                        });
                        alert(data);
                    } else if (data == 'Successfully Logged in...') {
                        $("form")[0].reset();
                        $('input[type="text"],input[type="password"]').css({
                            "border": "2px solid #00F5FF"
                            , "box-shadow": "0 0 5px #00F5FF"
                        });
                        window.location = "home.php";
                        //                        alert(data);
                    } else {
                        alert(data);
                    }
                });
        }
    });

    function detailPasien(id) {
        
        var dataString = 'id=' + id;
        $.ajax({
            type: "POST"
            , url: "php/action.php"
            , data: dataString
            , cache: true
            , success: function (html) {
                $(".patient-name").after(html);
            }
        });
    }
 
   
});