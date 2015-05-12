var allsoundLoaded = false;

function soundManagerInit()
{
	soundManager.setup({
		url: './swf/',
		ontimeout: function(status) {
			allsoundLoaded = false;
			//alert('SM2 failed to start. Flash missing, blocked or security error?');
			//alert('The status is ' + status.success + ', the error type is ' + status.error.type)
		},
		onready: function()
        {
            soundManager.createSound({
                id: 'bgSound',
                url: './sound/bg.mp3',
                autoLoad: true,
                autoPlay: false,
                onload: function()
                {
                    console.log('The sound '+this.id+' loaded!');
                    allsoundLoaded = true;
                },
                volume: 75
            });
		}
	});
}

function playSound($id)
{
	if (allsoundLoaded) {
		var sound = soundManager.getSoundById($id);
        sound.play({
            onfinish: function() {
                playSound($id);
            }
        });
	}
}

function stopSound($id)
{
	if (allsoundLoaded) {
		var sound = soundManager.getSoundById($id);
		sound.stop();
	}

}