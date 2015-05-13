GAME.GameScene4 = function ()
{
    GAME.Scene.call(this);
    var _this = this;
    var _isSceneIn = false;
    var _stageContainer;
    var _p1,_p2;
    var _tbg,_ts,_t1,_t20,_t21;
    var _bg1;
    var _mask;
    var SNum=0;
    var TimeNum=9;
    var maskT=1;

    this.init = function ()
    {
        /////////
        GAME.stage.setBackgroundColor (0x000);
        ////////

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

        _p2.rotation+=0.02;
    }


    function initStage()
    {
        _stageContainer = new PIXI.DisplayObjectContainer();
        _this.addChild(_stageContainer);

        if(GAME.Utils.isAndroid())
        {
            _bg1 = new PIXI.Sprite(PIXI.Texture.fromImage("bg2.png"));
        }else{
            _bg1 = new PIXI.Sprite(PIXI.Texture.fromImage("bg1.png"));
        }
        _bg1.width=GAME.stageWidth*2;
        _bg1.height=GAME.stageHeight*2;
        _bg1.position.x=-GAME.stageWidth/2;
        _bg1.position.y=-GAME.stageHeight/2;
        _stageContainer.addChild(_bg1);

        if(!GAME.Utils.isAndroid())
        {
            _p1 = new PIXI.Sprite(PIXI.Texture.fromImage("s2_p18.jpg"));
            _p1.anchor.x = 0.5;
            _p1.anchor.y = 0.5;
            _p1.scale.y = _p1.scale.x = 1 * GAME.imageScale;
            _p1.position.x = GAME.stageWidth / 2;
            _p1.position.y = GAME.stageHeight / 2;
            _stageContainer.addChild(_p1);
        }



        if(!GAME.Utils.isAndroid())
        {
            _mask = new PIXI.Graphics();
            _mask.lineStyle(0);
            _mask.beginFill(0x000, 1);
            _mask.drawCircle(0, 0, 90 * GAME.imageScale);
            _this.addChild(_mask);
            _mask.position.x = -GAME.stageWidth / 2;
            _mask.position.y = -GAME.stageHeight / 2;
            _stageContainer.mask = _mask;
        }else{
            _mask = new PIXI.Sprite(PIXI.Texture.fromImage("mask.png"));
            _mask.anchor.x = 0.5;
            _mask.anchor.y = 0.5;
            _stageContainer.addChild(_mask);
            _mask.position.x = -GAME.stageWidth / 2;
            _mask.position.y = -GAME.stageHeight / 2;
        }



        _p2 = new PIXI.Sprite(PIXI.Texture.fromImage("s4_p1.png"));
        _p2.anchor.x = 0.5;
        _p2.anchor.y = 0.5;
        _p2.scale.y = _p2.scale.x=1*GAME.imageScale;
        _p2.position.x = -GAME.stageWidth / 2;
        _stageContainer.addChild(_p2);


        _p2.interactive = true;
        _p2.mousedown = _p2.touchstart = function ()
        {
            AddSNum();
        }


        _ts = new PIXI.Sprite(PIXI.Texture.fromImage("s4_p3.png"));
        _ts.anchor.y = 1;
        _ts.scale.y = _ts.scale.x=1*GAME.imageScale;
        _ts.position.x = 96*GAME.imageScale;
        _ts.position.y = GAME.stageHeight- 46*GAME.imageScale;
        _this.addChild(_ts);


        _t1 = new PIXI.Sprite(PIXI.Texture.fromImage(TimeNum+".png"));
        _t1.anchor.y = 1;
        _t1.position.x = -36;
        _ts.addChild(_t1);


        _tbg = new PIXI.Sprite(PIXI.Texture.fromImage("s4_p2.png"));
        _tbg.anchor.x = 1;
        _tbg.anchor.y = 1;
        _tbg.scale.y = _tbg.scale.x=1*GAME.imageScale;
        _tbg.position.x = GAME.stageWidth-60*GAME.imageScale;
        _tbg.position.y = GAME.stageHeight- 40*GAME.imageScale;
        _this.addChild(_tbg);

        var _tbg2 = new PIXI.Sprite(PIXI.Texture.fromImage("s4_p2.png"));
        _tbg2.anchor.x = 1;
        _tbg2.anchor.y = 1;
        _tbg2.position.x = -55;
        _tbg.addChild(_tbg2);

        _t20 = new PIXI.Sprite(PIXI.Texture.fromImage("0.png"));
        _t20.anchor.x = 1;
        _t20.anchor.y = 1;
        _t20.position.x = -11;
        _t20.position.y = -15;
        _tbg.addChild(_t20);

        _t21 = new PIXI.Sprite(PIXI.Texture.fromImage("0.png"));
        _t21.anchor.x = 1;
        _t21.anchor.y = 1;
        _t21.position.x = -66;
        _t21.position.y = -15;
        _tbg.addChild(_t21);
        _t21.id=0;


        TweenMax.delayedCall(2,initMask);
        TweenMax.delayedCall(2,ChangeTimer);

        init321();
    }
    function init321()
    {
        var _tn3 = new PIXI.Sprite(PIXI.Texture.fromImage("3.png"));
        _tn3.anchor.x = _tn3.anchor.y = 0.5;
        _tn3.scale.y = _tn3.scale.x = 5 * GAME.imageScale;
        _tn3.position.x = GAME.stageWidth / 2;
        _tn3.position.y = GAME.stageHeight / 2;
        _this.addChild(_tn3);
        TweenMax.from(_tn3, 0.4, {alpha:0,ease:Strong.easeOut,delay:0.2});
        TweenMax.to(_tn3.scale, 0.6, {x: 0.2, y: 0.2,ease:Strong.easeOut,delay:0.2,
            onComplete:function(){_this.removeChild(_tn3);}
        });
        var _tn2 = new PIXI.Sprite(PIXI.Texture.fromImage("2.png"));
        _tn2.anchor.x = _tn2.anchor.y = 0.5;
        _tn2.scale.y = _tn2.scale.x = 5 * GAME.imageScale;
        _tn2.position.x = GAME.stageWidth / 2;
        _tn2.position.y = GAME.stageHeight / 2;
        _this.addChild(_tn2);
        TweenMax.from(_tn2, 0.4, {alpha:0,ease:Strong.easeOut,delay:0.8});
        TweenMax.to(_tn2.scale, 0.6, {x: 0.2, y: 0.2,ease:Strong.easeOut,delay:0.8,
            onComplete:function(){_this.removeChild(_tn2);}
        });
        var _tn1 = new PIXI.Sprite(PIXI.Texture.fromImage("1.png"));
        _tn1.anchor.x = _tn1.anchor.y = 0.5;
        _tn1.scale.y = _tn1.scale.x = 5 * GAME.imageScale;
        _tn1.position.x = GAME.stageWidth / 2;
        _tn1.position.y = GAME.stageHeight / 2;
        _this.addChild(_tn1);
        TweenMax.from(_tn1, 0.4, {alpha:0,ease:Strong.easeOut,delay:1.4});
        TweenMax.to(_tn1.scale, 0.6, {x: 0.2, y: 0.2,ease:Strong.easeOut,delay:1.4,
            onComplete:function(){_this.removeChild(_tn1);}
        });

    }


    function initMask()
    {
        var _x=(GAME.stageWidth-200)*Math.random()+100;
        var _y=(GAME.stageHeight-200)*Math.random()+100;
        _mask.position.x = _x;
        _mask.position.y = _y;

        _p2.position.x = _x;
        _p2.position.y = _y;

        _mask.scale.x=_mask.scale.y=0;
        TweenMax.to(_mask.scale, 0.4, {x:1,y:1,ease:Strong.easeOut});

        if(TimeNum>=0)
        {
            TweenMax.delayedCall(0.6, initMask);
            //maskT -= 0.04;
        }

    }

    function ChangeTimer()
    {
        TimeNum--;
        if(TimeNum<0)
        {
            GAME.SNum=SNum;
            _this.sceneOut();
        }else
        {
            setTxtNum(_t1,TimeNum);
            TweenMax.delayedCall(1,ChangeTimer);
        }
    }

    function AddSNum()
    {
        SNum++;

        var _st0=SNum%10;
        var _st1=Math.floor(SNum/10);
        if(_t20.id!=_st0)setTxtNum(_t20,_st0);
        if(_t21.id!=_st1)setTxtNum(_t21,_st1);

        _p2.setTexture(PIXI.Texture.fromImage("s4_p4.png"));
        _p2.scale.x=_p2.scale.y=1.3 * GAME.imageScale;
        _p2.interactive = false;
        TweenMax.delayedCall(0.2,function()
        {
            _p2.setTexture(PIXI.Texture.fromImage("s4_p1.png"));
            _p2.scale.x=_p2.scale.y=1 * GAME.imageScale;
            _p2.interactive = true;
        });
    }




    function setTxtNum(_txt,_num)
    {
        _txt.id=_num;
        _txt.setTexture(PIXI.Texture.fromImage(_num+".png"));
        _txt.scale.y=0.3;
        TweenMax.to(_txt.scale, 0.3, {y:1,ease:Strong.easeOut});
    }



    this.sceneOut = function ()
    {
        GAME.Scene.prototype.sceneOut.apply(this);

        TweenMax.to(_this, 0.4, {alpha:0,ease:Strong.easeOut,
            onComplete:function(){_this.sceneOutComplete()}
        });
    }






};
GAME.Utils.inherit(GAME.GameScene4, GAME.Scene);
