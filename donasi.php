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
    <title>Donasi</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/mobirise/css/style.css">
    <link rel="stylesheet" href="assets/dropdown-menu-plugin/style.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">

    <style>

    </style>
    <script src="assets/web/assets/jquery/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script>
        $(function () {
            $("#header").load("nav.html");

        });
    </script>
</head>

<body>
    <div id="header"></div>

    <section class="mbr-section mbr-after-navbar" id="header3-51">
        <div class="mbr-section__container container mbr-section__container--isolated">
            <div class="mbr-header mbr-header--wysiwyg row">
                <div class="col-sm-8 col-sm-offset-2">
                    <h3 class="mbr-header__text">SEMUA PASIEN</h3>

                </div>
            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section--relative mbr-section--fixed-size pasien-body" id="msg-box3-48">

        <div class="mbr-section__container container mbr-section__container--first " style="padding-top: 31px;">
            <div class="mbr-header mbr-header--wysiwyg row">
                <div class="row">
                <?php
                    include('koneksi.php');

                    //$row=mysql_fetch_array($fetch);
                    $query=mysql_query("SELECT * FROM pasien where statusPasien=1 limit 3");
                    $query1=mysql_query("SELECT * FROM pasien where statusPasien=1 limit 3");
                    $row2=mysql_fetch_array($query1);
                    $id=$row2['idKatalis'];
                    $query2=mysql_query("SELECT * FROM katalis where idKatalis='$id' ");
                    $row3=mysql_fetch_array($query2);
                    while($row1=mysql_fetch_array($query)){
?>
                   
                        <div class="patient-card col-md-4">
                            <div class="panel col-md-12">
                                <div class="row patient-img" style="background: #57e291 url('assets/pasien/<?php echo $row1['fotoPasien']; ?>') no-repeat center; background-size: 100%;"></div>
                                <div class="patient-summary">

                                    <h4 class="patient-headline"><?php echo $row1['namaPasien']."(".$row1['usiaPasien'].")"; ?></h4>
                                    <span class="patient-loc"><?php echo $row3['Kota']; ?></span>
                                    <h4 class="patient-diagnosis"><?php echo $row1['Diagnosis'] ?></h4>
                                    <!--span.patient-location(style="display:block;")--><span>
		  <div class="patient-story"><?php echo $row1['Keterangan'] ?></div>
                  <a href="detailPasien.php?id=<?php echo $row1['idPasien'] ?>" class="form-control mbr-buttons__btn btn btn-lg btn-default text-center">Baca Selengkapnya</a>

				</span></div>
                                <div class="donation-progress progress row">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="19.333915429712" aria-valuemin="0" aria-valuemax="100" style="width: 19.333915429712%" title="19.333915429712 %">
                                        <span class="sr-only">19.333915429712% Terdanai</span>
                                    </div>
                                </div>
                                <div class="donation-summary row">
                                    <div class="col-md-4 col-xs-4">
                                        <small class="raised"> <span class="raised auto-numeric" data-a-sep="." data-a-dec="," data-a-sign="Rp." data-v-max="100000000" data-v-min="0">Rp.1.550.000</span></small>
                                        <span class="donation-label">terdanai</span>
                                    </div>
                                    <div class="col-md-4 col-xs-4">
                                        <small class="raised"><span class="to-go auto-numeric" data-a-sep="." data-a-dec="," data-a-sign="Rp." data-v-max="100000000" data-v-min="0">Rp.6.467.000</span> </small>
                                        <span class="donation-label">kekurangan</span>
                                    </div>
                                    <div class="col-md-4 col-xs-4">
                                        <small class="raised"><span class="donator">5</span></small>
                                        <span class="donation-label">donatur</span>
                                    </div>
                                </div>

                            </div>
                        </div>




                  
                    <?php
                    }
                ?>
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