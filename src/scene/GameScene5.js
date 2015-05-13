GAME.GameScene5 = function ()
{
    GAME.Scene.call(this);
    var _this = this;
    var _isSceneIn = false;
    var _stageContainer;
    var _p1,_f1,_f2;
    var _t1,_t2,_t3;
    var _st0,_st1;
    var _smoke1,_smoke2,_smoke3;

    this.init = function ()
    {
        /////////
        GAME.stage.setBackgroundColor (0x28bde8);
        ////////

        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: '推倒TA我有'+GAME.SNum+'套，羡慕吧？',
            link: 'http://test.180china.com/tuidao/',
            imgUrl: 'http://test.180china.com/tuidao/share.jpg',
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //分享给朋友
        wx.onMenuShareAppMessage({
            title: '推倒TA我有'+GAME.SNum+'套',
            desc: '激情520快来到，推倒技能get√',
            link: 'http://test.180china.com/tuidao/',
            imgUrl: 'http://test.180china.com/tuidao/share.jpg',
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


    this.sceneIn = function ()
    {
        GAME.Scene.prototype.sceneIn.apply(this);

        initStage();

        _isSceneIn = true;
    }
    this.update = function ()
    {
        if (!_isSceneIn)return;
    }


    function initStage()
    {
        _stageContainer = new PIXI.DisplayObjectContainer();
        _this.addChild(_stageContainer);

        _p1 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_p1.png"));
        _p1.anchor.y = 1;
        _p1.scale.y = _p1.scale.x = 1 * GAME.imageScale;
        _p1.position.y = GAME.stageHeight-20 * GAME.imageScale;
        _stageContainer.addChild(_p1);
        TweenMax.from(_p1, 1, { alpha: 0,ease:Strong.easeOut});
        TweenMax.from(_p1.position, 1, {y:GAME.stageHeight+100,ease:Elastic.easeOut});

        _f1 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_f1.png"));
        _f1.position.x = 89;
        _f1.position.y = -400;
        _p1.addChild(_f1);
        TweenMax.delayedCall(1,f1Movie);

        _f2 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_f2.png"));
        _f2.position.x = 104;
        _f2.position.y = -370;
        _p1.addChild(_f2);
        TweenMax.delayedCall(1,f2Movie);




        _t2 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_t2.png"));
        _t2.anchor.x = 0.5;
        _t2.scale.y = _t2.scale.x = 1 * GAME.imageScale;
        _t2.position.x = GAME.stageWidth/2;
        _t2.position.y = 90 * GAME.imageScale;
        _stageContainer.addChild(_t2);
        TweenMax.from(_t2, 1, { alpha: 0,ease:Strong.easeOut,delay:0.8});
        TweenMax.from(_t2.position, 1, {y:0,ease:Elastic.easeOut,delay:0.8});

        _t1 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_t1.png"));
        _t1.anchor.x = 1;
        _t1.anchor.y = 1;
        _t1.position.x = -45;
        _t1.position.y = 33;
        _t2.addChild(_t1);
        TweenMax.from(_t1.scale, 1.2, {x: 0.6, y: 0,ease:Elastic.easeOut,delay:1});

        _t3 = new PIXI.Sprite(PIXI.Texture.fromImage("s5_t3.png"));
        _t3.anchor.x = 0.5;
        _t3.scale.y = _t3.scale.x = 1 * GAME.imageScale;
        _t3.position.x = GAME.stageWidth/2;
        _t3.position.y = 210 * GAME.imageScale;
        _stageContainer.addChild(_t3);
        TweenMax.from(_t3, 1, { alpha: 0,ease:Strong.easeOut,delay:1.4});
        TweenMax.from(_t3.position, 1, {y:150 * GAME.imageScale,ease:Elastic.easeOut,delay:1.4});


        _st0 = new PIXI.Sprite(PIXI.Texture.fromImage("0.png"));
        _st0.scale.y = _st0.scale.x = 1.3;
        _st0.position.x = 40;
        _st0.position.y = 20;
        _t2.addChild(_st0);

        _st1 = new PIXI.Sprite(PIXI.Texture.fromImage("0.png"));
        _st1.scale.y = _st1.scale.x = 1.3;
        _st1.position.x = 112;
        _st1.position.y = 20;
        _t2.addChild(_st1);


        //
        _smoke1 = new PIXI.Sprite(PIXI.Texture.fromImage("smoke1.png"));
        _smoke1.anchor.x = 0.5;
        _smoke1.anchor.y = 1;
        _smoke1.scale.y = _smoke1.scale.x = 0.1;
        _smoke1.position.x = 393;
        _smoke1.position.y = -180;
        _p1.addChild(_smoke1);
        TweenMax.to(_smoke1, 3, { alpha: 0,ease:Strong.easeIn,repeat:-1});
        TweenMax.to(_smoke1.position, 3, {y:-240,ease:Strong.easeIn,repeat:-1});
        TweenMax.to(_smoke1.scale, 3, {x:2,y:2.6,ease:Strong.easeOut,repeat:-1});



        TweenMax.delayedCall(1,smoke2Movie);
        TweenMax.delayedCall(2,smoke2Movie);
        TweenMax.delayedCall(2.5,smoke2Movie);
        TweenMax.delayedCall(3,smoke2Movie);



        TweenMax.delayedCall(1.8,tMovie);


        TweenMax.delayedCall(5,addListener);
    }

    function addListener()
    {
        /*
        _stageContainer.interactive = true;
        _stageContainer.mouseup = _stageContainer.tap = function ()
        {
            _this.sceneOut();
        }
        */
        _this.sceneOut();
    }


    function smoke2Movie()
    {
        var _smoke2 = new PIXI.Sprite(PIXI.Texture.fromImage("smoke2.png"));
        _smoke2.anchor.x = 0.5;
        _smoke2.anchor.y = 1;
        _smoke2.scale.y = _smoke2.scale.x = 0;
        _smoke2.position.x = 330;
        _smoke2.position.y = -300;
        _p1.addChild(_smoke2);
        TweenMax.to(_smoke2, 4, { alpha: 0,ease:Strong.easeIn,repeat:-1});
        TweenMax.to(_smoke2.position, 4, {x:270,y:-480,ease:Strong.easeIn,repeat:-1});
        TweenMax.to(_smoke2.scale, 4, {x:2,y:2,ease:Strong.easeIn,repeat:-1});
    }

    function f1Movie()
    {
        _f1.alpha=1;
        TweenMax.to(_f1, 0.2, { alpha: 0,ease:Strong.easeIn});
        TweenMax.delayedCall(Math.random()*3+1,f1Movie);
    }

    function f2Movie()
    {
        TweenMax.to(_f2, 0.6, { alpha: 1,ease:Strong.easeOut});
        TweenMax.to(_f2, 0.4, { alpha: 0,ease:Strong.easeOut,delay:0.6});

        TweenMax.delayedCall(Math.random()*2+1,f2Movie);
    }

    var _num=0;
    function tMovie()
    {
        _num++;

        if(_num>GAME.SNum)
        {

        }else
        {
            var _stNum1=_num%10;
            var _stNum0=Math.floor(_num/10);
            setTxtNum(_st0,_stNum0);
            setTxtNum(_st1,_stNum1);

            TweenMax.delayedCall(0.05,tMovie);
        }
    }

    function setTxtNum(_txt,_num)
    {
        _txt.setTexture(PIXI.Texture.fromImage(_num+".png"));
    }


    this.sceneOut = function ()
    {
        GAME.Scene.prototype.sceneOut.apply(this);

        TweenMax.to(_this, 0.4, {alpha:0,ease:Strong.easeOut,
            onComplete:function(){
                TweenMax.killAll();
                _this.sceneOutComplete();
            }
        });
    }






};
GAME.Utils.inherit(GAME.GameScene5, GAME.Scene);
