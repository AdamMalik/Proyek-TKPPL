<div class="container">
    <div class="main">
        <form method="post" name="form" action="">
            <textarea style="width:500px; font-size:14px; height:60px; font-weight:bold; resize:none;" name="content" id="content"></textarea>
            <br />
            <input type="submit" value="Post" name="submit" class="submit_button" />
        </form>
    </div>
    <div class="space"></div>
    <div id="flash"></div>
    <div id="show"></div>
</div>
<script type="text/javascript" src="../assets/web/assets/jquery/jquery.min.js"></script>
<script src="../login.js"></script>
<script type="text/javascript">
    $(function () {

        var art = {};
        art.id="1";
        art.id2="2";
        //                var dataString = 'id=' + textcontent;
        $.ajax({
            type: "POST"
            , url: "action.php"
            , data: {
                "points": JSON.stringify(art)
            }
            , cache: true
            , success: function (html) {
                $("#show").after(html);
            }
        });

        detailPasien("1");


    });
</script>