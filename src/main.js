var view,stage,renderer,loading,gameScene,assetsManager,stats,logo,initTimer,_background;
$(document).ready(function()
{
    document.addEventListener('touchmove', function(event){event.preventDefault();}, false);

    GAME.imageScale=1;
    $("#viewport")[0].content="width=device-width, user-scalable=no, minimum-scale=0.5, maximum-scale=0.5";

    $(window).resize(resizeCanvas);
    resizeCanvas();
});

function resizeCanvas()
{
    var winWidth=$(window).get(0).innerWidth;
    var winHeight=$(window).get(0).innerHeight;
    if(winWidth>winHeight)
    {
        $("#landscape").width(winWidth);
        $("#landscape").height(winHeight);
        $("#landscape").show();
        return;
    }
    if(view)
    {
        $("#landscape").hide();
        $("html,body").scrollLeft(0);
        return;
    }
    GAME.stageWidth=winWidth;
    GAME.stageHeight=winHeight;
    init();
    //initStatsBar();
}
function initStatsBar()
{
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
};
function init()
{
    view = document.getElementById("canvas");
    view.width=GAME.stageWidth;
    view.height=GAME.stageHeight;
    GAME.canvas = view;

    stage = new PIXI.Stage(0x28bde8, true);
    GAME.stage = stage;

    renderer = new PIXI.autoDetectRenderer(GAME.stageWidth, GAME.stageHeight, view);
    GAME.renderer = renderer;
    showLoading();
    //soundManagerInit();
}

function showLoading()
{
    loading=new GAME.LoadingScene();
    loading.init();
    loading.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(loading);
        loading=null;
        initScene();

    });
    stage.addChild(loading);
    loading.sceneIn();

    assetsManager=new GAME.AssetsManager();
    assetsManager.onComplete=function()
    {
        loading.sceneOut();
    };
    assetsManager.start();
    requestAnimFrame(animate);
}

function initScene()
{
    /////////////////////////
    GAME.imageScale= GAME.stageWidth/640;
    ///////////////////////

    //playSound("bgSound");

    initScene1();
}

function initScene1()
{
    gameScene=new GAME.GameScene1();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene2();
    });
}

function initScene2()
{
    gameScene=new GAME.GameScene2();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene3();
    });
}
function initScene3()
{
    gameScene=new GAME.GameScene3();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene4();
    });
}
function initScene4()
{
    gameScene=new GAME.GameScene4();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene5();
    });
}
function initScene5()
{
    gameScene=new GAME.GameScene5();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene6();
    });
}
function initScene6()
{
    gameScene=new GAME.GameScene6();
    stage.addChild(gameScene);
    gameScene.init();
    gameScene.sceneIn();
    gameScene.addEventListener(GAME.SCENE_OUT_COMPLETE,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
    });

    gameScene.addEventListener(GAME.ON_REPLAY,function(e)
    {
        stage.removeChild(gameScene);
        gameScene=null;
        initScene4();
    });
}



function animate()
{
    requestAnimFrame(animate);
    GAME.renderer.render(GAME.stage);
    if(stats)stats.update();
    if(loading)
    {
        loading.update();
        return;
    };
    if(gameScene)gameScene.update();

};

