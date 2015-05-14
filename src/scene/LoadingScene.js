GAME.LoadingScene = function ()
{
    GAME.Scene.call(this);
    var _this=this;
    var _snow;
    var _text;
    this.init=function()
    {
        this.alpha=0;
        var _texture = PIXI.Texture.fromImage(GAME.localURL+"assets/loading.png");
        _snow=new PIXI.Sprite(_texture);
        _snow.anchor.x=_snow.anchor.y=0.5;
        _snow.position.x=GAME.stageWidth*0.5;
        _snow.position.y=GAME.stageHeight*0.5;
        this.addChild(_snow);
    }
    this.sceneIn = function ()
    {
        TweenMax.to(_this, 1, {alpha:1});
        move();
    }

    function move()
    {
        TweenMax.to(_snow.scale, 0.6, {x:0.8,y:0.8});
        TweenMax.to(_snow.scale, 1, {x:1,y:1,ease:Elastic.easeOut,delay:1});

        TweenMax.delayedCall(1.6,move);
    }

    this.sceneOut = function ()
    {
        GAME.Scene.prototype.sceneIn.apply(this);
        TweenMax.to(this, 1, {alpha:0,
            onComplete:function(){_this.sceneOutComplete()}
        });
    }
    this.update=function()
    {
        //_snow.rotation+=0.03;
    }
}
GAME.Utils.inherit(GAME.LoadingScene, GAME.Scene);
