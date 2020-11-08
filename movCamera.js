//TOUCHSCREEN
const body = document.body;
body.addEventListener('touchstart', startTouch, false);
body.addEventListener('touchend', levantaStop);
body.addEventListener('touchmove', moveTouch, false);

var inX = null;
var inY = null;
      
function startTouch(e){
    inX = e.touches[0].clientX;
    inY = e.touches[0].clientY;
}
function moveTouch(e){
    if (inX === null){return;}
    if (inY === null){return;}
    
    var cuX = e.touches[0].clientX;
    var cuY = e.touches[0].clientY;
    var numTq = e.touches.length;

    var x = inX - cuX;
    var y = inY - cuY;
    
    if (numTq == 2){
	if (x>0){stop(); rotaIz=true;}
	else if (x<0){stop(); rotaDe=true;}
    }
    if (Math.abs(x)>Math.abs(y)&&numTq == 1){
	if (x>0){stop(); nStopM(); moverDer=true}
	else if (x<0){stop(); nStopM(); moverIzq=true}
    }
    else if (numTq==1){
	if (y<0){stop(); nStopM(); moverAde=true}
	else if (y>0){stop(); nStopM(); moverAtr=true}
    }
    inX = null;
    inY = null;
}
function levantaStop(){stop();}
//TOUCHSCREEN END

var moverIzq,moverDer,moverAde,moverAtr,rotaIz,rotaDe;
var clock = new THREE.Clock();
var blockZn = true;
var blockZp = true;
var blockXn = true;
var blockXp = true;
var lblockZn = true;
var lblockZp = true;
var lblockXn = true;
var lblockXp = true;

var stop = function(){
    moverIzq=false;
    moverDer=false;
    moverAde=false;
    moverAtr=false;
    rotaIz=false;
    rotaDe=false;
}
var nStopM = function(){
    blockZp=true;
    blockZn=true;
    blockXp=true;
    blockXn=true;
    lblockZp=true;
    lblockZn=true;
    lblockXp=true;
    lblockXn=true;
}

var restringeMZN = function (){
    if(Math.cos(camera.rotation.y)>0){blockZn=false;}
    else if(Math.cos(camera.rotation.y)<0){blockZp=false;}
}
var restringeMZNL = function (){
    if(Math.sin(camera.rotation.y)>0){lblockZp=false;}
    else if(Math.sin(camera.rotation.y)<0){lblockZn=false;}
}
var restringeMZP = function (){
    if(Math.cos(camera.rotation.y)>0){blockZp=false;}
    else if(Math.cos(camera.rotation.y)<0){blockZn=false;}
}
var restringeMZPL = function (){
    if(Math.sin(camera.rotation.y)>0){lblockZn=false;}
    else if(Math.sin(camera.rotation.y)<0){lblockZp=false;}
}
var restringeMXN = function (){
    if(Math.sin(camera.rotation.y)>0){blockXn=false;}
    else if(Math.sin(camera.rotation.y)<0){blockXp=false;}
}
var restringeMXNL = function (){
    if(Math.cos(camera.rotation.y)>0){lblockXn=false;}
    else if(Math.cos(camera.rotation.y)<0){lblockXp=false;}
}
var restringeMXP = function (){
    if(Math.sin(camera.rotation.y)>0){blockXp=false;}
    else if(Math.sin(camera.rotation.y)<0){blockXn=false;}
}
var restringeMXPL = function (){
    if(Math.cos(camera.rotation.y)>0){lblockXp=false;}
    else if(Math.cos(camera.rotation.y)<0){lblockXn=false;}
}

var collide = function (){
    //restringe movimmientos camara en x z
    if (camera.position.z<-4.5){
	restringeMZN ();
	restringeMZNL ();
    }
    if (camera.position.x<-9.5){
	restringeMXN ();
	restringeMXNL ();
    }
    if (camera.position.z>4.5){
	restringeMZP ();
	restringeMZPL ();
    }
    if (camera.position.x>9.5){
	restringeMXP ();
	restringeMXPL ();
    }
    //collide con azul
    //collide con rojo
}
// movimientos camara en x z
var movXn = function (){camera.position.x -=
			-Math.sin(-camera.rotation.y)*0.02;}
var movXp = function (){camera.position.x +=
			-Math.sin(-camera.rotation.y)*0.02;}
var movZn = function (){camera.position.z -=
			Math.cos(-camera.rotation.y)*0.02;}
var movZp = function (){camera.position.z +=
			Math.cos(-camera.rotation.y)*0.02;}	
var lmovXn = function (){camera.position.x -=
			 Math.cos(camera.rotation.y)*0.02;}
var lmovXp = function (){camera.position.x +=
			 Math.cos(camera.rotation.y)*0.02;}
var lmovZn = function (){camera.position.z -=
			 -Math.sin(camera.rotation.y)*0.02;}
var lmovZp = function (){camera.position.z +=
			 -Math.sin(camera.rotation.y)*0.02;}

//ANIMATE
var animate = function(){
    requestAnimationFrame(animate);
    collide();
    //MOV DE CAMARA
    if (moverIzq){
	if (lblockXn){lmovXn();}
	if (lblockZn){lmovZn();}
    }
    if (moverDer){
	if (lblockXp){lmovXp();}
	if (lblockZp){lmovZp();}
    }
    if (moverAde){
	if (blockXn){movXn();}
	if (blockZn){movZn();}
    }
    if (moverAtr){
	if (blockXp){movXp();}
	if (blockZp){movZp();}
    }
    if (rotaIz){camera.rotation.y += Math.PI*0.002;}
    if (rotaDe){camera.rotation.y -= Math.PI*0.002;}
    
    renderer.render( scene, camera );
}
//resize
window.addEventListener('resize',function(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
