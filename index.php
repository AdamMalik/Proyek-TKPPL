<?php

/*
Author: Pradeep Khodke
URL: http://www.codingcage.com/
*/


session_start();

if(isset($_SESSION['user_session'])!="")
{
	header("Location: home.php");
}

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
    <meta name="description" content="charity, web, app">
    <title>ApesBener.id</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/animate.css/animate.min.css">
    <link rel="stylesheet" href="assets/mobirise/css/style.css">
    <link rel="stylesheet" href="assets/dropdown-menu-plugin/style.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">


    <script src="assets/web/assets/jquery/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/script.js"></script>
    <script>
        $(function () {
            $("#header").load("nav.html");

        });
    </script>
</head>

<body>


<!--
    <div id="header">

    </div>
    
-->
   <?php
    include "nav.html";
    ?>
    <section class="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background mbr-after-navbar" id="header1-19" style="background-image: url(assets/images/header-index-960x528-11.jpg);">
        <div class="mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-center">
            <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(34, 34, 34);"></div>
            <div class="mbr-box__container mbr-section__container container">
                <div class="mbr-box mbr-box--stretched">
                    <div class="mbr-box__magnet mbr-box__magnet--center-center">
                        <div class="row">
                            <div class=" col-sm-8 col-sm-offset-2">
                                <div class="mbr-hero animated fadeInUp">
                                    <h1 class="mbr-hero__text">ApesBener.id</h1>
                                    <p class="mbr-hero__subtext">Menuju Indonesia yang Sehat, Merata.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mbr-arrow mbr-arrow--floating text-center">
                <div class="mbr-section__container container">
                    <a class="mbr-arrow__link" href="#features1-18"><i class="glyphicon glyphicon-menu-down"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="features1-18" style="background-color: rgb(255, 255, 255);">

        <div class="mbr-section__container mbr-section__container--std-top-padding mbr-section__container--sm-bot-padding mbr-section-title container" style="padding-top: 93px;">
            <div class="mbr-header mbr-header--center mbr-header--wysiwyg row">
                <div class="col-sm-8 col-sm-offset-2">
                    <h3 class="mbr-header__text">Partners</h3>

                </div>
            </div>
        </div>
        <div class="mbr-section__container container">
            <div class="mbr-section__row row">
                <div class="mbr-section__col col-xs-12 col-md-3 col-sm-6">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--last" style="padding-bottom: 93px;">
                        <figure class="mbr-figure"><img src="assets/images/partner-pencerah-nusantara-383x350-70.jpg" class="mbr-figure__img"></figure>
                    </div>



                </div>
                <div class="mbr-section__col col-xs-12 col-md-3 col-sm-6">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--last" style="padding-bottom: 93px;">
                        <figure class="mbr-figure"><img src="assets/images/pemkot-bandung-1021x846-1.png" class="mbr-figure__img"></figure>
                    </div>



                </div>
                <div class="clearfix visible-sm-block"></div>
                <div class="mbr-section__col col-xs-12 col-md-3 col-sm-6">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--last" style="padding-bottom: 93px;">
                        <figure class="mbr-figure"><img src="assets/images/pvra-233x144-84.jpg" class="mbr-figure__img"></figure>
                    </div>



                </div>

                <div class="mbr-section__col col-xs-12 col-md-3 col-sm-6">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--last" style="padding-bottom: 93px;">
                        <figure class="mbr-figure"><img src="assets/images/uber-1280x854-55.jpg" class="mbr-figure__img"></figure>
                    </div>



                </div>



            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="features1-19" style="background-color: rgb(255, 255, 255);">

        <div class="mbr-section__container mbr-section__container--std-top-padding mbr-section__container--sm-bot-padding mbr-section-title container" style="padding-top: 93px;">
            <div class="mbr-header mbr-header--center mbr-header--wysiwyg row">
                <div class="col-sm-8 col-sm-offset-2">
                    <h3 class="mbr-header__text">Bagaimana Kami Bekerja</h3>
                    <p class="mbr-header__subtext"><strong>ApesBener.id</strong> mengumpulkan dana bagi pasien yang kurang mampu untuk memperoleh
                        <br>pengobatan optimal dengan sistem crowdfunding.&nbsp;</p>
                </div>
            </div>
        </div>
        <div class="mbr-section__container container">
            <div class="mbr-section__row row">
                <div class="mbr-section__col col-xs-12 col-sm-4">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--middle">
                        <figure class="mbr-figure"><img src="assets/images/ic-local-hospital2x-236x240-12.png" class="mbr-figure__img"></figure>
                    </div>
                    <div class="mbr-section__container mbr-section__container--middle">
                        <div class="mbr-header mbr-header--reduce mbr-header--center mbr-header--wysiwyg">
                            <h3 class="mbr-header__text">Pencarian Pasien</h3>
                        </div>
                    </div>
                    <div class="mbr-section__container mbr-section__container--last" style="padding-bottom: 93px;">
                        <div class="mbr-article mbr-article--wysiwyg">
                            <p>Rekan medis kami dan para katalis (penghubung) menemukan pasien.</p>
                        </div>
                    </div>

                </div>
                <div class="mbr-section__col col-xs-12 col-sm-4">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--middle">
                        <figure class="mbr-figure"><img src="assets/images/ic-approve2x-236x240-93.png" class="mbr-figure__img"></figure>
                    </div>
                    <div class="mbr-section__container mbr-section__container--middle">
                        <div class="mbr-header mbr-header--reduce mbr-header--center mbr-header--wysiwyg">
                            <h3 class="mbr-header__text">Verifikasi</h3>
                        </div>
                    </div>
                    <div class="mbr-section__container mbr-section__container--last" style="padding-bottom: 93px;">
                        <div class="mbr-article mbr-article--wysiwyg">
                            <p>Tim kami akan melakukan verifikasi informasi pasien. </p>
                        </div>
                    </div>

                </div>

                <div class="mbr-section__col col-xs-12 col-sm-4">
                    <div class="mbr-section__container mbr-section__container--center mbr-section__container--middle">
                        <figure class="mbr-figure"><img src="assets/images/ic-donate2x-236x240-43.png" class="mbr-figure__img"></figure>
                    </div>
                    <div class="mbr-section__container mbr-section__container--middle">
                        <div class="mbr-header mbr-header--reduce mbr-header--center mbr-header--wysiwyg">
                            <h3 class="mbr-header__text">Donasi</h3>
                        </div>
                    </div>
                    <div class="mbr-section__container mbr-section__container--last" style="padding-bottom: 93px;">
                        <div class="mbr-article mbr-article--wysiwyg">
                            <p>Kita semua dapat berpartisipasi bahkan hanya dengan menyumbang Rp 25.000! .</p>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section--relative mbr-section--short-paddings" id="msg-box2-22" style="background-color: rgb(255, 255, 255);">



        <div class="mbr-section__container mbr-section__container--isolated container" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="row">
                <div class="mbr-box mbr-box--fixed mbr-box--adapted">
                    <div class="mbr-box__magnet mbr-box__magnet--top-left mbr-section__left col-sm-8">
                        <div class="mbr-section__container mbr-section__container--middle">
                            <div class="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                <h3 class="mbr-header__text">Bingung Memilih Pasien</h3>
                            </div>
                        </div>
                        <div class="mbr-section__container">
                            <div class="mbr-article mbr-article--auto-align mbr-article--wysiwyg">
                                <p>Anda dapat memberikan donasi #UntukSemua
                                    <br>dimana kami akan membantu memilihkan
                                    <br>pasien untuk Anda.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mbr-box__magnet mbr-box__magnet--top-left mbr-section__right col-sm-4">
                        <div class="mbr-section__container">
                            <div class="mbr-buttons mbr-buttons--auto-align mbr-buttons--top mbr-buttons--left"><a class="mbr-buttons__btn btn btn-lg btn-default" href="#">DONASI #UNTUKSEMUA</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="contacts1-14" style="background-color: rgb(60, 60, 60);">

        <div class="mbr-section__container container">
            <div class="mbr-contacts mbr-contacts--wysiwyg row" style="padding-top: 45px; padding-bottom: 45px;">
                <div class="col-sm-4">
                    <div><img src="assets/images/logo-50x42-73.png" class="mbr-contacts__img mbr-contacts__img--left"></div>
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


    <script src="assets/smooth-scroll/SmoothScroll.js"></script>
    <script src="assets/jarallax/jarallax.js"></script>
    <script src="assets/mobirise/js/script.js"></script>
    <script src="assets/dropdown-menu-plugin/script.js"></script>


</body>

</html>