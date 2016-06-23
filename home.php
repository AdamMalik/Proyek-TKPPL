<?php
session_start();

if(!isset($_SESSION['user_session']))
{
	header("Location: index.php");
}

include_once 'php/konekoop.php';

$stmt = $db_con->prepare("SELECT * FROM donatur WHERE idDonatur=:uid");
$stmt->execute(array(":uid"=>$_SESSION['user_session']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);
//echo $row['namaDonatur'];
?>
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
        <title>Donatur</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/mobirise/css/style.css">
        <link rel="stylesheet" href="assets/dropdown-menu-plugin/style.css">
        <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">

        <style>
            .navbar-dropdown .nav .link {
               
                color: #ccc;
            }
        </style>
        <script src="assets/web/assets/jquery/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>

    </head>

    <body>
        <section id="dropdown-menu-4">

            <nav class="navbar navbar-dropdown navbar-fixed-top mbr-navbar__section mbr-section">

                <div class="container ">

                    <div class="navbar-brand ">
                        <a href="index.php" class="navbar-logo"><img src="assets/images/logo-50x42-73.png"></a>
                        <a class="text-white" href="index.php">ApesBener.id</a>
                    </div>

                    <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        ☰
                    </button>

                    <ul class="nav-dropdown collapse pull-xs-right navbar-toggleable-sm nav navbar-nav" id="exCollapsingNavbar">
                        <li class="nav-item dropdown"><a class="nav-link link" href="donasi.php">DONASI</a></li>
                        <li class="nav-item"><a class="nav-link link" href="about.html">TENTANG KAMI</a></li>
                        <li class="nav-item"><a class="nav-link link" href="bantu.html">BANTU SEKARANG</a></li>
                        <li class="nav-item"><a class="nav-link link" href="faq.html">FAQ</a></li>
                        <li class="nav-item dropdown"><a class="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" href="#" aria-expanded="false">HI</a>
                            <div class="dropdown-menu"><a class="dropdown-item" href="detailProfil.php">Profil Saya</a><a class="dropdown-item" href="logout.php">Logout</a></div>
                        </li>
                    </ul>

                </div>

            </nav>

        </section>

        <section class="engine"><a rel="external" href="https://mobirise.com">web design software</a></section>
        <section class="mbr-section mbr-after-navbar" id="header3-51">
            <div class="mbr-section__container container mbr-section__container--isolated">
                <div class="mbr-header mbr-header--wysiwyg row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <h3 class="mbr-header__text">SELAMAT DATANG <?php  echo $row['namaDonatur']?></h3>
<!--                        <p class="mbr-header__subtext">“100% donasi akan disumbangkan ke pasien yang dipilih.”</p>-->
                    </div>
                </div>
            </div>
        </section>

        <section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="msg-box3-48" style="background-color: rgb(255, 255, 255);">

            <div class="mbr-section__container container mbr-section__container--first" style="padding-top: 31px;">
                <div class="mbr-header mbr-header--wysiwyg row">
                    <div class="col-sm-8 col-sm-offset-2">
                      

                    </div>
                </div>
            </div>
           
        </section>

        <section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="contacts1-14" style="background-color: rgb(60, 60, 60);">

            <div class="mbr-section__container container">
                <div class="mbr-contacts mbr-contacts--wysiwyg row" style="padding-top: 45px; padding-bottom: 45px;">
                    <div class="col-sm-4">
                        <div>
                            <a href="index.html"><img src="assets/images/logo-50x42-73.png" class="mbr-contacts__img mbr-contacts__img--left"></a>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="mbr-contacts__text"></p>
                            </div>
                            <div class="col-sm-4">
                                <p class="mbr-contacts__text"><strong>TENTANG KAMI</strong>
                                    <br>ApesBener.id
                                    <br>Transparansi
                                    <br>FAQ
                                    <br>Blog</p>
                            </div>
                            <div class="col-sm-4">
                                <p class="mbr-contacts__text"><strong>HUBUNGI KAMI</strong></p>
                                <ul class="mbr-contacts__list">
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="mbr-section mbr-section--relative mbr-section--fixed-size" id="footer1-15" style="background-color: rgb(68, 68, 68);">

            <div class="mbr-section__container container">
                <div class="mbr-footer mbr-footer--wysiwyg row" style="padding-top: 36.900000000000006px; padding-bottom: 36.900000000000006px;">
                    <div class="col-sm-12">
                        <p class="mbr-footer__copyright">Copyright (c) 2016 BonzDev. | Yayasan &nbsp;Untuk Nusa &nbsp;dan Bangsa</p>
                    </div>
                </div>
            </div>
        </footer>
        <script>
            $(document).ready(function () {
                $("#daftarJadi").click(function () {
                    $(".daftarmodal").modal("show");
                });
            });
        </script>

        <script src="assets/smooth-scroll/SmoothScroll.js"></script>
        <script src="assets/mobirise/js/script.js"></script>
        <script src="assets/dropdown-menu-plugin/script.js"></script>


    </body>

    </html>