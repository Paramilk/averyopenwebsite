{
    const catboyIDs = '876045677694681098876045673164853248876045667544494100876045663140462612876045659634028544876045655892688906876045651392225310876045647827046430876045642961662002'.match(/.{18}/g);
    let i = 0;
    document.getElementById("catboys").onclick = () => {
        var z = document.createElement('img');z.src = `https://cdn.discordapp.com/attachments/876044942731018250/${catboyIDs[i]}/${i}.png`;z.style = `width: auto; height: auto; max-width:500px; max-height: 500px; position: fixed; top: 0; left: 0; z-index: ${i+1}`;z.onload=function(){document.body.append(z);z._x=Math.random()*(innerWidth-z.scrollWidth);z._y=Math.random()*(innerHeight-z.scrollHeight);z._h=Math.round(Math.random())?5:-5;z._v = Math.round(Math.random())?5:-5;setInterval(function(){z._x+=z._h;z._y+=z._v;if(Math.max(0,Math.min(z._x,innerWidth-z.scrollWidth))!=z._x)z._h*=-1;if(Math.max(0,Math.min(z._y,innerHeight-z.scrollHeight))!=z._y)z._v*=-1;z.style.transform=`translate(${z._x}px,${z._y}px)`;},100/6);}
        i++;
        if (i >= catboyIDs.length) {
            document.getElementById("catboys").disabled = true;
        }
    }
}
