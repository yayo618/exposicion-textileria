function init(){
	var cdr,tx1,tx2,txq1,txq2,ww,hh;

	//cuadro
	tx1 = new THREE.TextureLoader().load(img/pic/b1.jpg);
	cdr = new THREE.Mesh(
	    new THREE.PlaneGeometry(/1000,/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:tx1})
	);
	//borde cuadro
	cdrB = new THREE.Mesh(
	    new THREE.BoxGeometry(/1000,/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr.position.set((1*2.5)-5,0,-4.9);
	cdrB.position.set((1*2.5)-5,0,-4.925);
	scene.add(cdr,cdrB);
	
	txq1 = new THREE.TextureLoader();
	txq2 = new txq1.load(img/etq/e1.jpg);
	etq = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.607,0.25),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
	);
	etq.position.set((1*2.5)-5+0.9,0,-4.99);
	scene.add(etq);

	//cuadro
	tx1 = new THREE.TextureLoader().load(img/pic/b2.jpg);
	cdr = new THREE.Mesh(
	    new THREE.PlaneGeometry(/1000,/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:tx1})
	);
	//borde cuadro
	cdrB = new THREE.Mesh(
	    new THREE.BoxGeometry(/1000,/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr.position.set((2*2.5)-5,0,-4.9);
	cdrB.position.set((2*2.5)-5,0,-4.925);
	scene.add(cdr,cdrB);
	
	txq1 = new THREE.TextureLoader();
	txq2 = new txq1.load(img/etq/e2.jpg);
	etq = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.607,0.25),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
	);
	etq.position.set((2*2.5)-5+0.9,0,-4.99);
	scene.add(etq);

	//cuadro
	tx1 = new THREE.TextureLoader().load(img/pic/b3.jpg);
	cdr = new THREE.Mesh(
	    new THREE.PlaneGeometry(/1000,/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:tx1})
	);
	//borde cuadro
	cdrB = new THREE.Mesh(
	    new THREE.BoxGeometry(/1000,/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr.position.set((3*2.5)-5,0,-4.9);
	cdrB.position.set((3*2.5)-5,0,-4.925);
	scene.add(cdr,cdrB);
	
	txq1 = new THREE.TextureLoader();
	txq2 = new txq1.load(img/etq/e3.jpg);
	etq = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.607,0.25),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
	);
	etq.position.set((3*2.5)-5+0.9,0,-4.99);
	scene.add(etq);
}
window.onload = init;
