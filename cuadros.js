function init(){
    var cdr,tx1,tx2,txq1,txq2,ww,hh;
    
    tx1 = new THREE.TextureLoader();
    tx2 = new tx1.load("img/pic/b1.jpg",
      function (){
	  //cuadro
	  ww=tx2.image.width/1000;
	  hh=tx2.image.height/1000;
	  cdr = new THREE.Mesh(
	      new THREE.PlaneGeometry(ww,hh),
	      new THREE.MeshBasicMaterial({color:0xffffff,map:tx2})
	  );
	  cdr.position.set(-4,0,-4.9);
	  scene.add(cdr);
	  //borde cuadro
	  cdrB = new THREE.Mesh(
	      new THREE.BoxGeometry(ww,hh,0.05,0),
	      new THREE.MeshBasicMaterial({color:0x4b3e28})
	  );
	  cdrB.position.set(-4,0,-4.925);
	  scene.add(cdrB);
      });
    txq1 = new THREE.TextureLoader();
    txq2 = new txq1.load("img/etq/e1.jpg");
    etq = new THREE.Mesh(
	new THREE.PlaneGeometry(0.607,0.25),
	new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
    );
    etq.position.set(-4+0.9,0,-4.99);
    scene.add(etq);
}

window.onload = init;
