GAME.GameScene6 = function ()
{
    GAME.Scene.call(this);
    var _this = this;
    var _isSceneIn = false;
    var _stageContainer;

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
        _stageContainer = new PIXI.DisplayObjectContainer();
        _this.addChild(_stageContainer);
        ///
        var gms=GAME.imageScale;
        var _p1=cSprite("s6_p1.png",185+270/2,78+253/2,gms,gms,270,253,0.5,0.5,gms,gms,1);
        _stageContainer.addChild(_p1);
        TweenMax.from(_p1, 1, { alpha: 0,ease:Strong.easeOut,delay:0.1});
        TweenMax.from(_p1.scale, 1, {x: 0.1, y: 0.1,ease:Elastic.easeOut,delay:0.1});

        var p2=cSprite("s6_p2.png",46,366,gms,gms,546,85,0,0,gms,gms,null);
        _stageContainer.addChild(p2);
        var p3=cSprite("s6_p3.png",0,GAME.stageHeight,gms,null,640,73,0,1,gms,gms,null);
        _stageContainer.addChild(p3);

        var p4=cSprite("s6_btn1.png",112,523,gms,gms,185,195,0,0,gms,gms,null);
        _stageContainer.addChild(p4);
        p4.interactive=true;
        p4.mouseup = p4.tap =function()
        {
            _this.dispatchEvent(new SPP.Event(GAME.ON_REPLAY));
        }
        var p5=cSprite("s6_btn2.png",362,496,gms,gms,181,216,0,0,gms,gms,null);
        _stageContainer.addChild(p5);
        p5.interactive=true;
        p5.mouseup = p5.tap =function()
        {
            TweenMax.to(bg3, 0.6, { alpha: 1,ease:Strong.easeOut});
            TweenMax.to(bg3, 0.6, { alpha: 0,ease:Strong.easeOut,delay:1});

        }

        var bg3=cSprite("bg3.jpg",11,0,gms,gms,629,638,0,0,gms,gms,0);
        _stageContainer.addChild(bg3);
        //尝试手动同步当前分支以及目标分支和再试一次。如果这个错误持续请电子邮件支持
    }

    function cSprite(url,x,y,xPercent,yPercent,w,h,anchorX,anchorY,spScaleX,spScaleY,alp){
        var sp=new PIXI.Sprite(PIXI.Texture.fromImage(url));
        //设置坐标
        xPercent!=null?sp.position.x=x*xPercent:sp.position.x=x;
        yPercent!=null?sp.position.y=y*yPercent:sp.position.y=y;
        //设置宽高
        sp.width=w;
        sp.height=h;
        //设置中心点
        if(anchorX)sp.anchor.x=anchorX;
        if(anchorY)sp.anchor.y=anchorY;
        //设置缩放比例
        spScaleX!=null?sp.scale.x = spScaleX:sp.scale.x = 1;
        spScaleY!=null?sp.scale.y = spScaleY:sp.scale.y = 1;
        //设置alpha
        alp!=null?sp.alpha=alp:sp.alpha=1;
        return sp;
    }

    this.sceneOut = function ()
    {
        GAME.Scene.prototype.sceneOut.apply(this);

        TweenMax.to(_this, 0.4, {alpha:0,ease:Strong.easeOut,
            onComplete:function(){_this.sceneOutComplete()}
        });
    }

};
GAME.Utils.inherit(GAME.GameScene6, GAME.Scene);
