<?php
include('koneksi.php');
//$check = mysql_query("SELECT * FROM comment order by id desc");
//if(isset($_POST['content']))
//{
$content=mysql_real_escape_string($_POST['id']);
//$ip=mysql_real_escape_string($_SERVER['REMOTE_ADDR']);
//mysql_query("insert into comment(msg,ip_add) values ('$content','$ip')");
$fetch= mysql_query("SELECT * FROM pasien where idPasien='$content'");

//$row=mysql_fetch_array($fetch);
$row=mysql_fetch_array($fetch);
$id=$row['idPasien'];
$query=mysql_query("SELECT * FROM donasi where idPasien='$id'");
$jumlah=0;
$nDonatur=0;
while($row1=mysql_fetch_array($query)){
    $jumlah+=$row1['Nominal'];
    $nDonatur+=1;
}
?>
    <script>
        $(function () {
            $("#header").load("nav.html");
            $(".auto-numeric").autoNumeric('init');

        });
    </script>




    <body>
        <div id="header"></div>
        <div id="show">

        </div>
        <section class=" mbr-after-navbar panel " id="header3-51">
            <div class="header-pasien"></div>
            <div class="mbr-section__container container pasien ">
                <div class="mbr-header mbr-header--wysiwyg row">
                    <div class="col-sm-3 panel-pasien">
                        <div class="pasien-img" style="background:url(assets/pasien/<?php echo $row['fotoPasien']; ?>) no-repeat center; background-size: 100%;"></div>
                    </div>
                    <div class="col-sm-9 container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h1 class="patient-name"><?php echo $row['namaPasien']; ?></h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="donation-summary row">
                                    <div class="col-md-4 col-xs-6">
                                        <h3 class="raised auto-numeric" data-a-sep="." data-a-dec="," data-a-sign="Rp." data-v-max="500000000" data-v-min="0"><?php echo $jumlah; ?></h3>
                                        <p class="donation-label">terdanai</p>
                                    </div>
                                    <div class="col-md-4 col-xs-6">
                                        <h3 class="to-go auto-numeric" data-a-sep="." data-a-dec="," data-a-sign="Rp." data-v-max="500000000" data-v-min="0"><?php echo $row['estimasiBiaya']-$jumlah; ?></h3>
                                        <p class="donation-label">kekurangan</p>
                                    </div>
                                    <div class="col-md-4 col-xs-12">
                                        <h3 class="donator"><?php echo $nDonatur; ?></h3>
                                        <p class="donation-label">donatur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                          <form action="">
                            <div class="col-md-6 col-xs-9 col-md-push-1">
                                <input id="donation-amount" class="form-control auto-numeric"  data-a-sign="Rp." placeholder="e.g., 50.000" aria-describedby="amount" data-v-max="1000000000" data-v-min="0" data-a-sep="." data-a-dec="," name="amount" value="" type="text"> </div>
                            <div class="col-md-3 col-xs-12 col-md-push-1 text-center">
                                
                                <input class="mbr-buttons__btn btn btn-lg btn-default" value="Donasikan" type="submit"> </div>
                            </form>
                        </div>
                    </div>
                    <div class="row  col-md-12">
                        <div class="col-xs-12">
                            <div class="donation-progress progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: <?php echo 100*(($jumlah/$row['estimasiBiaya'])); ?>%" title="0 %">
                                    <span class="sr-only"><?php echo 100*(($jumlah/$row['estimasiBiaya'])); ?>% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="mbr-section mbr-section--relative mbr-section--fixed-size pasien-body" id="msg-box3-48">

            <div class="container pasien-isi">
                <div class="col-md-8">
                    <div class="panel col-md-12">
                        <div class=" panel1">
                            <p>
                                <?php
                            echo $row['Keterangan'];
                            ?>
                            </p>
                            <div class="text-center">

                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="row row-pasien">
                        <div class="panel1 col-md-12">
                            <h3 class="widget-title">Didanai oleh</h3>
                            <div class="row ">
                            </div>
                        </div>
                    </div>
                    <div class="row row-pasien">
                        <div class="panel1 col-md-12">
                            <h3 class="widget-title">Dirawat di</h3>
                            <a href="https://www.google.com/maps/place/Jakarta,+Indonesia/">
                                <img src="assets/images/staticmap.png"></a>
                            <address id="hospital-address"><strong><?php echo $row['rumahSakitDirawat']; ?></strong><br>Ciumbuleuit No 203</address>
                            <div class="text-center">
                                <h4><a href="#" class=" mbr-buttons__btn btn btn-lg btn-default">Pelajari Lebih Lanjut</a></h4>
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