<!DOCTYPE html>
<html>

<head>
    <!-- Site made with Mobirise Website Builder v2.11.1, https://mobirise.com -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="Mobirise v2.11.1, mobirise.com">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="assets/images/logo-active-50x42-28.png" type="image/x-icon">
    <meta name="description" content="donatur">
    <title>Detail Pasien</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/mobirise/css/style.css">
    <link rel="stylesheet" href="assets/dropdown-menu-plugin/style.css">
    <link rel="stylesheet" href="assets/kostum.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
    <style>
        .panel {
            background: transparent;
            position: relative;
        }
        
        body {
            background: #eee;
        }
    </style>

    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
<!--
    <script src="login.js">
    </script>
-->
    <script>
        $(function () {

            $("#header").load("nav.html");
        
        });
      
    </script>
</head>
<body>
<div id="hasil">

</div>
<script type="text/javascript" src="assets/web/assets/jquery/jquery.min.js"></script>
<script src="assets/autoNumeric-min.js"></script>
<script>
    $(function () {
        
        function detailPasien(id) {

            var dataString = 'id=' + id;
            $.ajax({
                type: "POST"
                , url: "pasien.php"
                , data: dataString
                , cache: true
                , success: function (html) {
                    $("#hasil").after(html);
                }
            });
        }
        <?php
            $id = $_GET['id'];
            echo "detailPasien('$id')";

        ?>
    });
</script>
    </body>
</html>
