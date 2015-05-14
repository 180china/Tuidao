GAME.AssetsManager=function()
{
    var _asset = [GAME.localURL+"assets/assets.json",GAME.localURL+"assets/assets2.json"];
    var _assetLoader;

    if(GAME.Utils.isAndroid()||!GAME.retinaSupport)
        _assetLoader=new PIXI.AssetLoader(_asset);
    else
        _assetLoader=new PIXI.AssetLoader(_asset);

    this.onComplete=null;
    this.start=function()
    {
        _assetLoader.load();
        _assetLoader.onComplete=this.onComplete;
    }
};
