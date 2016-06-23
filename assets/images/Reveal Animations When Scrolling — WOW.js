<!DOCTYPE html>
<html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Reveal Animations When Scrolling — WOW.js</title>
  <meta name="description" content="WOW.js is a JavaScript plugin that reveals animations when you scroll. Very Animate.css Friend.">
  <meta name="viewport" content="initial-scale=1.0">
  <meta charset="utf-8"><!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="http://mynameismatthieu.com/favicon.ico" type="image/x-icon">
    <link rel="icon" href="http://mynameismatthieu.com/favicon.ico" type="image/x-icon"><!-- Styles -->
    <link rel="stylesheet" href="Reveal%20Animations%20When%20Scrolling%20%E2%80%94%20WOW_files/style.css">
    <link rel="stylesheet" href="Reveal%20Animations%20When%20Scrolling%20%E2%80%94%20WOW_files/animate.css">
  </head>
  <body>
    <div class="container-gray">
      <div class="container">
        <div style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;" class="row small center wow fadeInDown top__element" data-wow-delay="0.5s">
          <div class="span2 offset1"><a href="http://mynameismatthieu.com/WOW/index.html" title="Home">Home</a></div>
          <div class="span2"><a href="http://mynameismatthieu.com/WOW/docs.html">How to use? </a></div>
          <div class="span2"> <a target="" href="http://mynameismatthieu.com/WOW/index.html#pricing" style="color: #eb3980;">Pricing</a></div>
          <div class="span2"> <a target="_blank" href="https://github.com/matthieua/WOW">Github</a></div>
          <div class="span2"> <a target="_blank" href="https://twitter.com/mattaussaguel" title="Matt Aussaguel">@mattaussaguel </a></div>
        </div>
      </div>
    </div>
    <div class="container-white">
      <div class="container">
        <div class="row">
          <div style="visibility: visible; animation-name: fadeInDown;" class="span12 wow fadeInDown top__element">
            <img src="Reveal%20Animations%20When%20Scrolling%20%E2%80%94%20WOW_files/doc.jpg">
          </div>
        </div>
        <div class="row">
          <div class="span12">
            <h1>Setup WOW.js</h1>
            <h3>
              <div class="pill">1 </div>Link to the CSS animation library
            </h3>
            <p>Link to <a href="http://daneden.github.io/animate.css/" title="Animate.css" target="_blank">Animate.css </a><br><i class="small">(You can link to another CSS animation library by changing WOW.js settings)</i><br></p>
            <pre>&lt;link rel="stylesheet" href="css/animate.css"&gt;</pre>
            <h3>
              <div class="pill">2 </div>Link and activate WOW.js

            </h3>
            <pre>              &lt;script src="js/wow.min.js"&gt;&lt;/script&gt;
              &lt;script&gt;
              new WOW().init();
              &lt;/script&gt;</pre>
              <h1>Reveal CSS Animations</h1>
              <h3>
                <div class="pill">1 </div>Make an element revealable
              </h3>
              <p>Add the CSS class .wow to a HTML element: it will be invisible until the user scrolls to reveal it.<br><i class="small">(You can change this CSS class in the WOW settings to avoid name conflicts.)</i></p>
              <pre>                &lt;div class="wow"&gt;
                Content to Reveal Here
                &lt;/div&gt;</pre>
                <h3>
                  <div class="pill">2 </div>Choose the animation style
                </h3>
                <p>Pick an animation style in <a href="http://daneden.github.io/animate.css/" title="Animate.css" target="_blank">Animate.css </a>, then add the CSS class to the HTML element</p>
                <pre>                  &lt;div class="wow bounceInUp"&gt;
                  Content to Reveal Here
                  &lt;/div&gt;</pre>
                  <h1>You’re done! </h1>
                  <p><strong>Now your animations will be revealed when the user scrolls.</strong></p>
                  <p>Check these examples of WOW.js + Animate.css uses:	<br><br>
                    <a href="http://www.materialup.com/" title="Daily Material Design Inspiration - MaterialUp" target="_blank">* MaterialUp </a><br>
                    <a href="https://www.fliplingo.com/" title="Fliplingo - Translation Automated on Twitter" target="_blank">* Fliplingo </a><br>
                    <a href="http://www.streamlineicons.com/" title="Streamline Icons - iOS7 Icons" target="_blank">* Streamline Icons </a>
                  </p>

                  <h1>Advanced Options</h1>
                  <p><strong>data-wow-duration: </strong>Change the animation duration<br><strong>data-wow-delay: </strong>Delay before the animation starts<br><strong>data-wow-offset: </strong>Distance to start the animation (related to the browser bottom)<br><strong>data-wow-iteration: </strong>Number of times the animation is repeated<br><br></p>
                  <pre>                    &lt;section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"&gt;
                    &lt;/section&gt;

                    &lt;section class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10"&gt;
                    &lt;/section&gt;</pre>
                    <h1>Customize Settings</h1>
                    <p><strong>boxClass: </strong>Class name that reveals the hidden box when user scrolls.</p>
                    <p><strong>animateClass: </strong>Class name that triggers the CSS animations (’animated’ by default for the animate.css library)</p>
                    <p><strong>offset: </strong>Define the distance between the bottom of browser viewport and the top of hidden box.<br>When the user scrolls and reach this distance the hidden box is revealed. </p>
                    <p><strong>mobile: </strong>Turn on/off WOW.js on mobile devices. </p>
                    <p><strong>live: </strong>consatantly check for new WOW elements on the page. </p><br>
                    <pre>                      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();</pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-white">
              <div class="container">
                <div class="row">
                  <div class="span12 center">
                    <p class="small">Developed by <a href="http://mynameismatthieu.com/" title="Matthieu Aussaguel" target="_blank">Matthieu Aussaguel</a> –
                      Initiated &amp; Designed by <a target="_blank" href="http://www.webalys.com/" title="Webalys - Free Resources for Designers">Webalys</a>
                    </p>
                    <p class="small">
                      Contributed by <a href="http://attilaolah.eu/" title="Attila Oláh" target="_blank">Attila Oláh</a>
                    </p>
                    <p class="small">CSS animations powered by  <a href="https://github.com/matthieua/WOW">WOW.js </a>and <a href="https://daneden.me/animate" target="_blank" title="Animate.css">Animate.css</a></p><br><br>
                  </div>
                </div>
              </div>
            </div>
          
          <script src="Reveal%20Animations%20When%20Scrolling%20%E2%80%94%20WOW_files/wow.js"></script>
          <script>
           new WOW().init();
         </script>

         
</body></html>