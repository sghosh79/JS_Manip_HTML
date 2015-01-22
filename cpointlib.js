
function cpMoveSize(i, x, y, sx, sy, a, b, n)
{
	cpMoveObj(i, x, y, a, 0);
	cpSizeObj(i, sx, sy, a, b, n);
}

// Move object i to x,y by the amount a, return n to cpSequencer()
function cpMoveObj(i, x, y, a, n)
{
	xNow = i.style.posLeft;
	yNow = i.style.posTop;
	var b = a - 1;
	if (xNow > (x + b))
	{
		xNow = xNow - a;
	    i.style.posLeft = xNow;
	}
	else if (xNow < (x - b))
	{
		xNow = xNow + a;
		i.style.posLeft = xNow;
	}
	else
	{
		xNow = x;
		i.style.posLeft = xNow;
	}
	if (yNow > (y + b))
	{
		yNow = yNow - a;
	    i.style.posTop = yNow;
	}
	else if (yNow < (y - b))
	{
		yNow = yNow + a;
		i.style.posTop = yNow;
	}
	else
	{
		yNow = y;
		i.style.posTop = yNow;
	}

	if(xNow == x && yNow == y) 
	{
		if(n) cpSequencer(n);
		return;
	}
	window.setTimeout("cpMoveObj("+i.id+","+x+","+y+","+a+", "+n+");", 1);
}

function cpSizeX(i, x, a, n)
{
	if(i.width<x)  i.width+=a;

	if(i.width >= x)
	{
		cpSequencer(n);
		return;
	}
	window.setTimeout("cpSizeX("+i.id+", "+x+", "+a+", "+n+");", 1);
}

// Size object i to x, y by the amount a, b, return n to cpSequencer()
function cpSizeObj(i, x, y, a, b, n)
{
	if(i.width<x)  i.width+=a;
	if(i.height<y) i.height+=b; 

	if((i.width >= x) && (i.height >= y)) 
	{
		if(n) cpSequencer(n);
		return;
	}
	window.setTimeout("cpSizeObj("+i.id+", "+x+", "+y+", "+a+", "+b+", "+n+");", 1);
}

// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

// END -- support for sound