<?php
require_once "Wechat/jssdk.php";
$jssdk = new JSSDK("wxac8b073da44e03ec", "868f80a4642fad5952775737e03211f8");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" id="viewport" content="width=device-width, user-scalable=no, minimum-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>推倒TA你有几套</title>
    <link type="text/css" rel="stylesheet" href="style.css" />
	
</head>
<body>
    <canvas id="canvas">Your borwser does not suport html5 canvans!</canvas>
    <div id="landscape" style="display:none"></div>
    
    <script src="libs/jquery-1.8.0.min.js"></script>
    <script src="libs/stats.min.js"></script>
    <script src="libs/pixi.js"></script>
    <script src="libs/spp.min.js"></script>
    <script src="libs/TimelineLite.min.js"></script>
    <script src="libs/TweenMax.min.js"></script>
    <script src="libs/EasePack.min.js"></script>

    <script src="src/Game.js"></script>
    <script src="src/Utils.js"></script>

    <script src="src/scene/Scene.js"></script>
    <script src="src/scene/GameScene1.js"></script>
    <script src="src/scene/GameScene2.js"></script>
    <script src="src/scene/GameScene3.js"></script>
    <script src="src/scene/GameScene4.js"></script>
    <script src="src/scene/GameScene5.js"></script>
    <script src="src/scene/GameScene6.js"></script>

    <script src="src/scene/LoadingScene.js"></script>

    <script src="src/AssetsManager.js"></script>
    <script src="src/main.js"></script>



    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript"></script>
    <script>
        wx.config({
            debug: false,
            appId: '<?php echo $signPackage["appId"];?>',
            timestamp: <?php echo $signPackage["timestamp"];?>,
            nonceStr: '<?php echo $signPackage["nonceStr"];?>',
            signature: '<?php echo $signPackage["signature"];?>',
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        });
        wx.ready(function(){
           
            if(GAME.isEnd)
            {
                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: '推倒TA你有'+GAME.SNum+'套', 
                    link: 'http://test.180china.com/tuidao/', 
                    imgUrl: 'http://test.180china.com/tuidao/', 
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: '推倒TA你有'+GAME.SNum+'套，羡慕吧？', 
                    desc: '激情520快来到，推倒技能get√', 
                    link: 'http://test.180china.com/tuidao/', 
                    imgUrl: 'http://test.180china.com/tuidao/', 
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        //alert("分享朋友成功");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            }else{
                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: '推倒TA你有几套？', 
                    link: 'http://test.180china.com/tuidao/', 
                    imgUrl: 'http://test.180china.com/tuidao/', 
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });  

                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: '推倒TA你有几套？', 
                    desc: '激情520快来到，推倒技能get√', 
                    link: 'http://test.180china.com/tuidao/', 
                    imgUrl: 'http://test.180china.com/tuidao/', 
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        //alert("分享朋友成功");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            }

            
        });
    </script>

</body>
</html>