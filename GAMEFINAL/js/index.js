var c = document.createElement('canvas');
var ctx = c.getContext('2d');
var cw = c.width = 400;
var ch = c.height = 200;
var count=0;
document.body.appendChild(c);

ctx.font = 'normal 20px monospace';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
ctx.fillStyle = '#3f3';
ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
ctx.shadowColor = '#3f3';

var messageString = 'Pretentious Gamers present...';
var messageArray = messageString.split('');
var messageLength = messageArray.length;
var pointer = 0;
var typeTick = 0;
var typeTickMax = 5;
var typeResetTick = 0;
var typeResetMax = 140;

var updateTypeTick = function(){
  if(pointer < messageLength){
    if(typeTick < typeTickMax){
      typeTick++;
    } else {
      typeTick = 0;
      pointer++;
    }
  } else {
    if(typeResetTick < typeResetMax){
      typeResetTick++;
    } else {
    	typeResetTick = 0;
      typeTick = 0;
      pointer = 0;
    }
  }
}

var renderMessage = function(){
	var text = messageArray.slice(0, pointer);
  ctx.shadowBlur = 6;
	ctx.fillText(text.join(''), 20, 20);
  ctx.shadowBlur = 0;
}
    
var renderLines = function(){
  ctx.beginPath();
  for(var i = 0; i < ch/2; i += 1){    
    ctx.moveTo(0, (i*2) + .5);
    ctx.lineTo(cw, (i*2) + .5);    
  }
  ctx.stroke();
}

var loop = function(){
  ctx.clearRect(0, 0, cw, ch);
  updateTypeTick();
	renderMessage();
  renderLines();
  setTimeout(loop, 16);
  //count++;
  //if(count==250)
  //{
 c.addEventListener("click", goOnClick, false);
//}
 }
 
function goOnClick()
{
window.location.href="menu.html";
}
 
    
loop();
