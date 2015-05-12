GAME.GameScene3 = function ()
{
    GAME.Scene.call(this);
    var _this = this;
    var _isSceneIn = false;
    var _stageContainer;
    var _p1,_p2,_p3,_p4;
    var _bg2;

    this.init = function ()
    {


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

        _bg2 = new PIXI.Sprite(PIXI.Texture.fromImage("bg2.png"));
        _bg2.width=GAME.stageWidth*2;
        _bg2.height=GAME.stageHeight*2;
        _bg2.position.x=-GAME.stageWidth/2;
        _bg2.position.y=-GAME.stageHeight/2;
        _stageContainer.addChild(_bg2);

        _p1 = new PIXI.Sprite(PIXI.Texture.fromImage("s3_p1.png"));
        _p1.scale.y = _p1.scale.x=1*GAME.imageScale;
        _p1.anchor.x = 0.5;
        _p1.position.x = GAME.stageWidth/2;
        _p1.position.y = 180*GAME.imageScale;
        _stageContainer.addChild(_p1);
        TweenMax.from(_p1, 1, { alpha: 0,ease:Strong.easeOut,delay:0.1});
        TweenMax.from(_p1.scale, 1, {x: 0.1, y: 0.1,ease:Elastic.easeOut,delay:0.1});

        _p2 = new PIXI.Sprite(PIXI.Texture.fromImage("s3_p2.png"));
        _p2.scale.y = _p2.scale.x=1*GAME.imageScale;
        _p2.anchor.x = 0.5;
        _p2.position.x = GAME.stageWidth/2;
        _p2.position.y = 308*GAME.imageScale;
        _stageContainer.addChild(_p2);
        TweenMax.from(_p2, 1, { alpha: 0,ease:Strong.easeOut,delay:0.3});
        TweenMax.from(_p2.scale, 1, {x: 0.1, y: 0.1,ease:Elastic.easeOut,delay:0.3});


        _p3 = new PIXI.Sprite(PIXI.Texture.fromImage("s3_p3.png"));
        _p3.scale.y = _p3.scale.x=1*GAME.imageScale;
        _p3.anchor.x = 0.5;
        _p3.position.x = GAME.stageWidth/2;
        _p3.position.y = 498*GAME.imageScale;
        _stageContainer.addChild(_p3);
        TweenMax.from(_p3, 1, { alpha: 0,ease:Strong.easeOut,delay:0.5});
        TweenMax.from(_p3.scale, 1, {x: 0.1, y: 0.1,ease:Elastic.easeOut,delay:0.5});

        _p4 = new PIXI.Sprite(PIXI.Texture.fromImage("s3_p4.png"));
        _p4.position.x = 60;
        _p4.position.y = 130;
        _p3.addChild(_p4);
        TweenMax.to(_p4.position,0.8,{y:110,repeat:-1,yoyo:true,ease:Elastic.easeOut});




        _stageContainer.interactive = true;
        _stageContainer.mousedown = _stageContainer.touchstart = function ()
        {
            _this.sceneOut();
        }
    }




    this.sceneOut = function ()
    {
        GAME.Scene.prototype.sceneOut.apply(this);

        TweenMax.to(this, 0.4, {alpha:0,ease:Strong.easeOut,
            onComplete:function(){_this.sceneOutComplete()}
        });
    }






};
GAME.Utils.inherit(GAME.GameScene3, GAME.Scene);
