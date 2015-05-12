GAME.GameScene2 = function ()
{
    GAME.Scene.call(this);
    var _this = this;
    var _isSceneIn = false;
    var _mc;
    var frameNum=0;

    this.init = function ()
    {
        /////////
        GAME.stage.setBackgroundColor (0x28bde8);
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
    }


    function initStage()
    {
        var _Textures = [];
        for (var i=0; i < 18; i++)
        {
            var texture = PIXI.Texture.fromFrame("s2_p" + (i+1) + ".jpg");
            _Textures.push(texture);
        };
        _mc = new PIXI.MovieClip(_Textures);
        _mc.anchor.x = 0.5;
        _mc.anchor.y = 0.5;
        _mc.scale.y = _mc.scale.x=1*GAME.imageScale;
        _mc.position.x = GAME.stageWidth/2;
        _mc.position.y = GAME.stageHeight/2;
        _this.addChild(_mc);

        TweenMax.from(_mc, 1, { alpha: 0,ease:Strong.easeOut});
        TweenMax.from(_mc.scale, 1, {x: 0.1, y: 0.1,ease:Elastic.easeOut});

        TweenMax.delayedCall(0.8,playMc)
    }

    function playMc()
    {
        frameNum++;
        _mc.gotoAndStop(frameNum);


        if(frameNum<18)
        {
            TweenMax.delayedCall(0.08,playMc);
        }else
        {
            _this.sceneOut();
        }
    }



    this.sceneOut = function ()
    {
        /////////
        GAME.stage.setBackgroundColor (0x000);
        ////////

        GAME.Scene.prototype.sceneOut.apply(this);

        _this.sceneOutComplete();
    }






};
GAME.Utils.inherit(GAME.GameScene2, GAME.Scene);
