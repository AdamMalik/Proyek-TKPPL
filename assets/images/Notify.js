<!DOCTYPE html>
<html class="wf-droidsansmono-n4-active wf-active" lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Notify.js</title>
    <meta name="description" content="Notify.js - A simple, versatile notification library">
    <meta name="author" content="Jaime Pillora &lt;dev@jpillora.com&gt;">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    <link rel="stylesheet" href="Notify_files/app.css">
    <link href="Notify_files/css_002.css" rel="stylesheet" type="text/css">
    <style>[ng-cloak] { display:none; }</style>
    <!--if lt IE 9
    script(src='//html5shim.googlecode.com/svn/trunk/html5.js')
    
    -->
  <style id="notify-bootstrap" type="text/css">.notifyjs-bootstrap-base {
	font-weight: bold;
	padding: 8px 15px 8px 14px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	background-color: #fcf8e3;
	border: 1px solid #fbeed5;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	white-space: nowrap;
	padding-left: 25px;
	background-repeat: no-repeat;
	background-position: 3px 7px;
}
.notifyjs-bootstrap-error {
	color: #B94A48;
	background-color: #F2DEDE;
	border-color: #EED3D7;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=);
}
.notifyjs-bootstrap-success {
	color: #468847;
	background-color: #DFF0D8;
	border-color: #D6E9C6;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==);
}
.notifyjs-bootstrap-info {
	color: #3A87AD;
	background-color: #D9EDF7;
	border-color: #BCE8F1;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=);
}
.notifyjs-bootstrap-warn {
	color: #C09853;
	background-color: #FCF8E3;
	border-color: #FBEED5;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC);
}
</style><script src="Notify_files/button.js" async="" charset="utf-8" type="text/javascript"></script><style id="core-notify" type="text/css">.notifyjs-corner {
	position: fixed;
	margin: 5px;
	z-index: 1050;
}

.notifyjs-corner .notifyjs-wrapper,
.notifyjs-corner .notifyjs-container {
	position: relative;
	display: block;
	height: inherit;
	width: inherit;
	margin: 3px;
}

.notifyjs-wrapper {
	z-index: 1;
	position: absolute;
	display: inline-block;
	height: 0;
	width: 0;
}

.notifyjs-container {
	display: none;
	z-index: 1;
	position: absolute;
}

.notifyjs-hidable {
	cursor: pointer;
}

[data-notify-text],[data-notify-html] {
	position: relative;
}

.notifyjs-arrow {
	position: absolute;
	z-index: 2;
	width: 0;
	height: 0;
}</style><style id="notify-happyblue" type="text/css">.notifyjs-happyblue-base {
	white-space: nowrap;
	background-color: lightblue;
	padding: 5px;
}
.notifyjs-happyblue-superblue {
	color: white;
	background-color: blue;
}
</style><link media="all" href="Notify_files/css.css" rel="stylesheet"><style type="text/css">.notifyjs-foo-base {
  opacity: 0.85;
  width: 200px;
  background: #F5F5F5;
  padding: 5px;
  border-radius: 10px;
}

.notifyjs-foo-base .title {
  width: 100px;
  float: left;
  margin: 10px 0 0 10px;
  text-align: right;
}

.notifyjs-foo-base .buttons {
  width: 70px;
  float: right;
  font-size: 9px;
  padding: 5px;
  margin: 2px;
}

.notifyjs-foo-base button {
  font-size: 9px;
  padding: 5px;
  margin: 2px;
  width: 60px;
}</style></head>
  <body><a href="https://github.com/notifyjs/notifyjs"><img style="position: absolute; top: 0; right: 0; border: 0;" src="Notify_files/forkme_right_green_007200.png" alt="Fork me on GitHub"></a>
    <div class="main container">
      <div class="eight columns">
        <h1 class="title">Notify.js</h1>
      </div>
      <div class="eight columns right"><span>
          <iframe src="Notify_files/github-btn.htm" allowtransparency="true" scrolling="0" frameborder="0" height="20" width="120"></iframe></span><span><iframe data-url="http://notifyjs.com" src="Notify_files/tweet_button.htm" title="Twitter Tweet Button" style="position: static; visibility: visible; width: 61px; height: 20px;" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" allowtransparency="true" scrolling="no" id="twitter-widget-0" frameborder="0"></iframe>
          <script src="Notify_files/analytics.js" async=""></script><script async="" type="text/javascript" src="Notify_files/webfont.js"></script><script src="Notify_files/widgets.js" id="twitter-wjs"></script><script>
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            
          </script></span></div>
      <hr>
      <div class="eight columns summary">
        <h3>Summary</h3>
        <p>
          Notify.js is a jQuery plugin to provide simple yet fully customisable notifications.
          The javascript code snippets in this documentation with the <code>green</code> edge are runnable by clicking them.
        </p>
        <p>
          </p><pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"Hello World"</span><span class="pun">);</span></pre>
        <p></p><img src="Notify_files/pointer.png" class="demo-mouse">
      </div>
      <div class="eight columns">
        <h3>Download</h3>
        <p>Download Notify.js including the pre-made <code>bootstrap</code> notification style:<br>
          </p><p><a href="https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js" data-download="" data-filename="notify.js">
              <button>Download notify.js</button></a><a href="https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js" data-minify-download="" data-filename="notify.min.js">
              <button>Download notify.min.js</button></a></p>
        <p></p>
      </div>
      <div class="sixteen columns">
        <h3>Basic Usage</h3>
      </div>
      <div class="eight columns">
        <h4>Element Notifications</h4>
        <p>You can place notifications on any element:</p>
        <p>
          </p><pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">(</span><span class="str">".elem-demo"</span><span class="pun">).</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"Hello Box"</span><span class="pun">);</span></pre>
        <p></p>
        <p class="center">Like this <div class="notifyjs-wrapper notifyjs-hidable">
	<div style="top: 23.5px; left: 10px; border-bottom: 5px solid rgb(214, 233, 198); border-left: 5px solid transparent; border-right: 5px solid transparent; display: none;" class="notifyjs-arrow"></div>
	<div style="top: 28.5px; left: 0px; display: none;" class="notifyjs-container"><div class="notifyjs-bootstrap-base notifyjs-bootstrap-success">
<span data-notify-text="">Hello Box</span>
</div></div>
</div><span class="box elem-demo">box</span></p>
      </div>
      <div class="eight columns">
        <h4>Global Notifications</h4>
        <p>
          If you don't specify an element, notification
          will appear in the top left (unless you specify a
          different position - See <a data-highlight="">Positioning</a>)
        </p>
        <p>
          </p><pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"I'm over here !"</span><span class="pun">);</span></pre>
        <p></p>
      </div>
      <div class="sixteen columns">
        <h4>Notification Styles</h4>
        <p>
          Each style may define a set of classes to use to substyle the notification.
          The pre-packaged version includes a bootstrap notification style (see more below in Styling).
          These classes include:
          
        </p>
        <div><span>Success</span>
          <pre style="" class="prettyprint runnable indent1 prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"Access granted"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"success"</span><span class="pun">);</span></pre><span>Info</span>
          <pre style="" class="prettyprint runnable indent1 prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"Do not press this button"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"info"</span><span class="pun">);</span></pre><span>Warning</span>
          <pre style="" class="prettyprint runnable indent1 prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"Warning: Self-destruct in 3.. 2.."</span><span class="pun">,</span><span class="pln"> </span><span class="str">"warn"</span><span class="pun">);</span></pre><span>Error</span>
          <pre style="" class="prettyprint runnable indent1 prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">"BOOM!"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"error"</span><span class="pun">);</span></pre>
        </div>
        <p style="margin-top:10px" class="italic">Note: This page has set the default class to<code>"success"</code> with<code>$.notify.defaults({ className: "success" });</code>.</p>
      </div>
      <div id="position" class="sixteen columns">
        <h3>Positioning</h3>
        <p>
          The <code>position</code> string option is used to describe both vertical and horizontal alignment. 
          Element notifications and Global notifications can be vertically repositioned to: <code>"top"</code>, <code>"middle" </code>or <code>"bottom" </code>and horozontally repositioned to: <code>"left"</code>, <code>"center" </code>or <code>"right"</code>. If we don't provide a <code>position</code> option the default alignments are 
          defined in the default settings: <code>globalPosition</code> and <code>elementPosition</code>.
          When only one alignment is provided, the vertical alignment is <code>middle</code> 
          and horizontal alignment is <code>centre</code>.
        </p>
        <p>
          </p><pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">(</span><span class="str">".pos-demo"</span><span class="pun">).</span><span class="pln">notify</span><span class="pun">(</span><span class="pln">
  </span><span class="str">"I'm to the right of this box"</span><span class="pun">,</span><span class="pln"> 
  </span><span class="pun">{</span><span class="pln"> position</span><span class="pun">:</span><span class="str">"right"</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span></pre>
        <p></p>
        <p class="center">We can position the notification around this <div class="notifyjs-wrapper notifyjs-hidable">
	<div style="left: 34px; top: 7px; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid rgb(214, 233, 198); display: none;" class="notifyjs-arrow"></div>
	<div style="left: 39px; top: -9px; display: none;" class="notifyjs-container"><div class="notifyjs-bootstrap-base notifyjs-bootstrap-success">
<span data-notify-text="">I'm to the right of this box</span>
</div></div>
</div><span class="box pos-demo">box</span></p>
        <p style="padding-top: 30px">Use this positioning tool to see all possible <code>position</code> combinations.</p>
        <div style="padding: 30px;">
          <label for="pos-elem" class="inline">Element</label>
          <input id="pos-elem" value="elem" name="pos-type" checked="checked" type="radio">
          <label for="pos-glob" class="inline">Global</label>
          <input id="pos-glob" value="glob" name="pos-type" type="radio">
        </div>
        <div style="margin-left: 60px">
          <div style="display:inline;width:100px;height:100px;"><canvas class=".pos-chooser-dial" width="100" height="100px"></canvas><input value="0" style="display: none; width: 0px; visibility: hidden;" data-thickness=".3" data-width="100" data-height="100" data-max="12" data-cursor="true" data-fgcolor="#080" data-displayinput="false" data-angleoffset="-15" data-linecap="round" class="pos-chooser"></div>
        </div>
        <p class="center"><span>An awesome cool </span><span class="box pos-chooser-demo">larrrggggeeee box</span></p>
      </div>
      <div class="sixteen columns">
        <h3>API</h3>
        <div class="entry">
          <h5><code class="black">$.notify( </code><code>string|object</code><code class="black">, [ </code><code>options</code><code class="black"> ])</code></h5>
          <p class="indent1"><code>string|object</code> - global notification data<br><code>options</code> - an options object or class name string </p>
        </div>
        <div class="entry">
          <h5><code class="black">$.notify( </code><code>element</code><code class="black">, </code><code>string|object</code><code class="black">, [ </code><code>options</code><code class="black"> ])</code></h5>
          <p class="indent1"><code>element</code> - a jquery element<br><code>string|object</code> - element notification data<br><code>options</code> - an options object or class name string </p>
        </div>
        <div class="entry">
          <h5><code class="black">$( </code><code>selector</code><code class="black"> ).notify( </code><code>string|object</code><code class="black">, [ </code><code>options</code><code class="black"> ])</code></h5>
          <p class="indent1"><code>selector</code> - jquery selector<br><code>string|object</code> - element notification data<br><code>options</code> - an options object or class name string </p>
        </div>
        <div class="entry">
          <h5><code class="black">$.notify.addStyle( </code><code>styleName</code><code class="black">, </code><code>styleDefinition</code><code class="black"> )</code></h5>
          <p class="indent1"><code>styleName</code> - string (the  <b>style</b> option references this name)<br> <code>styleDefinition</code> - style definition object (see <b>Styling</b> below)</p>
        </div>
        <div class="entry">
          <h5><code class="black">$.notify.defaults( </code><code>options</code><code class="black"> )</code></h5>
          <p class="indent1"><code>options</code> - an options object (updates the defaults listed below) </p>
        </div>
      </div>
      <div class="sixteen columns">
        <h3>Options</h3>
        <p>
          The options object listed above are in the form below.
          This object below is the actual used to check option
          validity and set defaults.  
        </p>
        <pre style="" class="prettyprint prettyprinted"><span class="pun">{</span><span class="pln">
  </span><span class="com">// whether to hide the notification on click</span><span class="pln">
  clickToHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// whether to auto-hide the notification</span><span class="pln">
  autoHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// if autoHide, hide after milliseconds</span><span class="pln">
  autoHideDelay</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5000</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// show the arrow pointing at the element</span><span class="pln">
  arrowShow</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// arrow size in pixels</span><span class="pln">
  arrowSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// position defines the notification position though uses the defaults below</span><span class="pln">
  position</span><span class="pun">:</span><span class="pln"> </span><span class="str">'...'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// default positions</span><span class="pln">
  elementPosition</span><span class="pun">:</span><span class="pln"> </span><span class="str">'bottom left'</span><span class="pun">,</span><span class="pln">
  globalPosition</span><span class="pun">:</span><span class="pln"> </span><span class="str">'top right'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// default style</span><span class="pln">
  style</span><span class="pun">:</span><span class="pln"> </span><span class="str">'bootstrap'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// default class (string or [string])</span><span class="pln">
  className</span><span class="pun">:</span><span class="pln"> </span><span class="str">'error'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// show animation</span><span class="pln">
  showAnimation</span><span class="pun">:</span><span class="pln"> </span><span class="str">'slideDown'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// show animation duration</span><span class="pln">
  showDuration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">400</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// hide animation</span><span class="pln">
  hideAnimation</span><span class="pun">:</span><span class="pln"> </span><span class="str">'slideUp'</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// hide animation duration</span><span class="pln">
  hideDuration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// padding between element and notification</span><span class="pln">
  gap</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pln">
</span><span class="pun">}</span></pre>
      </div>
      <div class="sixteen columns">
        <div class="section">
          <h3>Custom Styling Guide</h3>
          <p>You can add your own styles to Notify.js with the<code>$.notify.addStyle </code>method. See  <a data-highlight="">API</a>.</p>
          <p>Style definition objects are in the form:</p>
          <pre style="" class="prettyprint prettyprinted"><span class="pun">{</span><span class="pln">
  </span><span class="com">//required html representing each notification </span><span class="pln">
  html</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
  </span><span class="com">//optional object to be converted to css</span><span class="pln">
  classes</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">&lt;className&gt;</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">&lt;propertyName&gt;</span><span class="pun">:</span><span class="pln"> </span><span class="str">&lt;value&gt;</span><span class="pln"> 
    </span><span class="pun">},</span><span class="pln">
    </span><span class="str">&lt;className&gt;</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="pun">...</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  </span><span class="com">//optional css to be inserted onto the page</span><span class="pln">
  css</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pln">
</span><span class="pun">}</span></pre>
          <p>
            </p><h5 class="inline">html</h5> - If you only have HTML element that you need to modify per
            notification then you should give this element an attribute of <code>data-notify-text</code> or <code>data-notify-html</code>. Use <code>data-notify-html</code> if you wish to display arbitrary HTML inside the notification,
             otherwise, use <code>data-notify-text</code> as it is more secure.<br> Otherwise, if you wish to modify multiple HTML elements per
            notification then you'll need to give each element one of the two
            attributes above <b>as well as a value</b>. For an example of this see the Advanced Example below.
          <p></p>
          <p>
            </p><h5 class="inline">classes</h5> - This object will be used to construct css. It must be in the form described above and there is an example below.
          <p></p>
          <p>
            </p><h5 class="inline">css</h5> - This string is simply raw css. Use this property if you want to keep your style definition inside
             your js files.
          <p></p>
        </div>
        <div class="section">
          <h4>Class naming convention</h4>
          <p>
            When each notification is constructed, it's container 
            (outer most element defined in your style html) will automatically 
            apply the class:
          </p>
          <p><code>notifyjs-&lt;style name&gt;-base</code></p>
          <p>When you use the class name option (<code>className</code>) the class:</p>
          <p><code>notifyjs-&lt;style name&gt;-&lt;class name&gt;</code></p>
          <p>
            will be applied. So if you define your styles in an external CSS file or in the style's css
            property, you must define your CSS rules using this naming convention.
            
          </p>
        </div>
        <div class="section">
          <h4>Simple Example</h4>
          <p>If you were to define the style:</p>
          <pre style="" class="prettyprint auto-run happyblue-example prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">.</span><span class="pln">addStyle</span><span class="pun">(</span><span class="str">'happyblue'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  html</span><span class="pun">:</span><span class="pln"> </span><span class="str">"&lt;div&gt;☺&lt;span data-notify-text/&gt;☺&lt;/div&gt;"</span><span class="pun">,</span><span class="pln">
  classes</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">base</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"white-space"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"nowrap"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"background-color"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"lightblue"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"padding"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"5px"</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    superblue</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"color"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"white"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"background-color"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"blue"</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></pre>
          <p>Upon running this code, the <code>classes</code> object in this example will be converted the following css:</p>
          <pre style="" class="prettyprint lang-css prettyprinted"><span class="pun">.</span><span class="pln">notifyjs-happyblue-base </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">white-space</span><span class="pun">:</span><span class="pln"> nowrap</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">background-color</span><span class="pun">:</span><span class="pln"> lightblue</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5px</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="pun">.</span><span class="pln">notifyjs-happyblue-superblue </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">color</span><span class="pun">:</span><span class="pln"> white</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">background-color</span><span class="pun">:</span><span class="pln"> blue</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre>
          <p:i>You can confirm this now by inspecting the DOM (look for the tagged style element in the head)</p:i>
          <p>You can now use your new style with:</p>
          <pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">'hello !!'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  style</span><span class="pun">:</span><span class="pln"> </span><span class="str">'happyblue'</span><span class="pln">
</span><span class="pun">});</span></pre>
          <p>and you can use the <code>superblue</code> class with:</p>
          <pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">(</span><span class="str">'HELLO !!!!'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  style</span><span class="pun">:</span><span class="pln"> </span><span class="str">'happyblue'</span><span class="pun">,</span><span class="pln">
  className</span><span class="pun">:</span><span class="pln"> </span><span class="str">'superblue'</span><span class="pln">
</span><span class="pun">});</span></pre>
        </div>
        <div class="section">
          <h4>Advanced Example</h4>
          <p>Say you wanted to use buttons in your notifications then you could do something like:</p>
          <pre style="" class="prettyprint auto-run button-js-example prettyprinted"><span class="com">//add a new style 'foo'</span><span class="pln">
$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">.</span><span class="pln">addStyle</span><span class="pun">(</span><span class="str">'foo'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  html</span><span class="pun">:</span><span class="pln"> 
    </span><span class="str">"&lt;div&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
      </span><span class="str">"&lt;div class='clearfix'&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        </span><span class="str">"&lt;div class='title' data-notify-html='title'/&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        </span><span class="str">"&lt;div class='buttons'&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
          </span><span class="str">"&lt;button class='no'&gt;Cancel&lt;/button&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
          </span><span class="str">"&lt;button class='yes' data-notify-text='button'&gt;&lt;/button&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        </span><span class="str">"&lt;/div&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
      </span><span class="str">"&lt;/div&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
    </span><span class="str">"&lt;/div&gt;"</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="com">//listen for click events from this style</span><span class="pln">
$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">on</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'.notifyjs-foo-base .no'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="com">//programmatically trigger propogating hide event</span><span class="pln">
  $</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">).</span><span class="pln">trigger</span><span class="pun">(</span><span class="str">'notify-hide'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">on</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'.notifyjs-foo-base .yes'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="com">//show button text</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln">$</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">).</span><span class="pln">text</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">" clicked!"</span><span class="pun">);</span><span class="pln">
  </span><span class="com">//hide notification</span><span class="pln">
  $</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">).</span><span class="pln">trigger</span><span class="pun">(</span><span class="str">'notify-hide'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></pre>
          <p>Notice there is no <code>classes</code> property defined above. Since the CSS in this example is non-trivial, we'll use an exteral CSS file instead:</p>
          <p class="italic">Note: you could also convert this CSS code to a JavaScript string and use it with the <code>css</code> property. It's not very readable though it's better for distribution.</p>
          <pre style="" class="prettyprint auto-add foo-css-example lang-css prettyprinted"><span class="pun">.</span><span class="pln">notifyjs-foo-base </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">opacity</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.85</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">background</span><span class="pun">:</span><span class="pln"> </span><span class="lit">#F5F5F5</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">border-radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10px</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="pun">.</span><span class="pln">notifyjs-foo-base </span><span class="pun">.</span><span class="pln">title </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">float</span><span class="pun">:</span><span class="pln"> left</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">margin</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10px</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="lit">10px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">text-align</span><span class="pun">:</span><span class="pln"> right</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="pun">.</span><span class="pln">notifyjs-foo-base </span><span class="pun">.</span><span class="pln">buttons </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">70px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">float</span><span class="pun">:</span><span class="pln"> right</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">font-size</span><span class="pun">:</span><span class="pln"> </span><span class="lit">9px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">margin</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2px</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="pun">.</span><span class="pln">notifyjs-foo-base button </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">font-size</span><span class="pun">:</span><span class="pln"> </span><span class="lit">9px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">margin</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2px</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">60px</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre>
          <p>You can now use this style with:</p>
          <pre style="" class="prettyprint runnable prettyprinted"><span class="pln">$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">({</span><span class="pln">
  title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Would you like some Foo ?'</span><span class="pun">,</span><span class="pln">
  button</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Confirm'</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> 
  style</span><span class="pun">:</span><span class="pln"> </span><span class="str">'foo'</span><span class="pun">,</span><span class="pln">
  autoHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
  clickToHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
</span><span class="pun">});</span></pre>
        </div>
        <div class="section">
          <h4>Extra Example</h4>
          <p>
            If using the above methods still don't provide you
            with what you need then you can, pass jQuery objects
            straight into the notification (provided that the
            element has the <code>data-notify-html</code> attribute):
            
          </p>
          <pre style="" class="prettyprint runnable prettyprinted"><span class="kwd">var</span><span class="pln"> h5 </span><span class="pun">=</span><span class="pln"> $</span><span class="pun">(</span><span class="str">"&lt;h5/&gt;"</span><span class="pun">).</span><span class="pln">append</span><span class="pun">(</span><span class="str">"You MUST have some Foo !"</span><span class="pun">)</span><span class="pln">

$</span><span class="pun">.</span><span class="pln">notify</span><span class="pun">({</span><span class="pln">
  title</span><span class="pun">:</span><span class="pln"> h5</span><span class="pun">,</span><span class="pln">
  button</span><span class="pun">:</span><span class="pln"> </span><span class="str">'YES !'</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> 
  style</span><span class="pun">:</span><span class="pln"> </span><span class="str">'foo'</span><span class="pun">,</span><span class="pln">
  autoHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
  clickToHide</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
</span><span class="pun">});</span></pre>
        </div>
        <div class="section">
          <h4>Style List</h4>
          <p>
            </p><ul class="square">
              <li><a href="https://github.com/notifyjs/notifyjs/blob/0b8891e/dist/notify.js#L531-L571" target="_blank">bootstrap</a></li>
            </ul>
            <ul class="square">
              <li><a href="https://github.com/notifyjs/notifyjs/tree/master/dist/styles/metro" target="_blank">metro</a></li>
            </ul>
          <p></p>
        </div>
      </div>
      <div class="sixteen columns">
        <h3>Contributing More Styles </h3>
        <p>Contributing more styles is easy!
          </p><ol>
            <li>Click <a href="https://github.com/notifyjs/notifyjs/new/master/src/styles" target="_blank">this</a> link</li>
            <li>Sign into GitHub (if you're not already)</li>
            <li>Click 'Fork'</li>
            <li>Enter your new style</li>
            <li>Click 'Commit New File'</li>
            <li>Click 'Send Pull Request'!</li>
          </ol>
        <p></p>
        <p>To get people started with some styles ideas, checkout this <a href="http://mac.appstorm.net/roundups/utilities-roundups/36-sweet-growl-styles-to-keep-your-notifications-snappy/" target="_blank">post on various Growl styles</a>.</p>
        <p class="italic">
          Note: If you wish to contribute to the library by fixing bugs or adding features,
          see the <b>src</b> folder. Also, the source is in CoffeeScript, however, new styles can be either JavaScript or CoffeeScript.
           I'm using <a href="https://gruntjs.com/" target="_blank">Grunt </a> to compile, minify and concat the builds, you can do so with:
          </p><ol>
            <li>Fork <a href="https://github.com/notifyjs/notifyjs">https://github.com/notifyjs/notifyjs</a></li>
            <li><code>cd notifyjs</code></li>
            <li><code>npm install -g grunt-cli</code></li>
            <li><code>npm install</code></li>
            <li><code>grunt</code></li>
            <li>Pull-request ! </li>
          </ol>
        <p></p>
      </div>
    </div>
    <script src="Notify_files/jquery.js"></script>
    <script src="Notify_files/notify.js"></script>
    <script src="Notify_files/compile.js"></script>
    <script src="Notify_files/jquery_002.js"></script>
    <script src="Notify_files/prettify.js"></script>
    <script src="Notify_files/app.js"></script>
    <script>
      //async fonts
      WebFontConfig = { google: { families: [ 'Droid+Sans+Mono::latin' ] } };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
      //ga
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-38709761-6', 'notifyjs.com');
      ga('send', 'pageview');
    </script>
  
<iframe style="display: none;" name="compilejs-e2f1213b.8525589f9b83fc.cfd3d8"></iframe><iframe style="position: absolute; visibility: hidden; display: none; width: 0px; height: 0px; padding: 0px; border: medium none;" allowfullscreen="true" allowtransparency="true" scrolling="no" id="rufous-sandbox" frameborder="0"></iframe><div class="notifyjs-corner" style="bottom: 0px; right: 0px;"></div><div class="notifyjs-corner" style="bottom: 0px; left: 0px;"></div><div class="notifyjs-corner" style="top: 0px; right: 0px;"></div></body></html>