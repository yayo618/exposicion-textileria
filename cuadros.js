function init(){

	//cuadro 1
	var txt1 = new THREE.TextureLoader().load("img/pic/b1.jpg");
	var cdr1 = new THREE.Mesh(
	    new THREE.PlaneGeometry(984/1000,600/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt1})
	);
	//borde cuadro 1
	var cdrB1 = new THREE.Mesh(
	    new THREE.BoxGeometry(984/1000,600/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr1.position.set((1*2.3)-10.5,0,-4.9);
	cdrB1.position.set((1*2.3)-10.5,0,-4.925);
	scene.add(cdr1,cdrB1);
	//etiqueta 1
	var txq1 = new THREE.TextureLoader().load("img/etq/e1.jpg");
	var etq1 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq1})
	);
	etq1.position.set((1*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq1);

	//cuadro 2
	var txt2 = new THREE.TextureLoader().load("img/pic/b2.jpg");
	var cdr2 = new THREE.Mesh(
	    new THREE.PlaneGeometry(735/1000,978/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt2})
	);
	//borde cuadro 2
	var cdrB2 = new THREE.Mesh(
	    new THREE.BoxGeometry(735/1000,978/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr2.position.set((2*2.3)-10.5,0,-4.9);
	cdrB2.position.set((2*2.3)-10.5,0,-4.925);
	scene.add(cdr2,cdrB2);
	//etiqueta 2
	var txq2 = new THREE.TextureLoader().load("img/etq/e2.jpg");
	var etq2 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
	);
	etq2.position.set((2*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq2);

	//cuadro 3
	var txt3 = new THREE.TextureLoader().load("img/pic/b3.jpg");
	var cdr3 = new THREE.Mesh(
	    new THREE.PlaneGeometry(612/1000,936/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt3})
	);
	//borde cuadro 3
	var cdrB3 = new THREE.Mesh(
	    new THREE.BoxGeometry(612/1000,936/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr3.position.set((3*2.3)-10.5,0,-4.9);
	cdrB3.position.set((3*2.3)-10.5,0,-4.925);
	scene.add(cdr3,cdrB3);
	//etiqueta 3
	var txq3 = new THREE.TextureLoader().load("img/etq/e3.jpg");
	var etq3 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq3})
	);
	etq3.position.set((3*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq3);

	//cuadro 4
	var txt4 = new THREE.TextureLoader().load("img/pic/b4.jpg");
	var cdr4 = new THREE.Mesh(
	    new THREE.PlaneGeometry(795/1000,975/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt4})
	);
	//borde cuadro 4
	var cdrB4 = new THREE.Mesh(
	    new THREE.BoxGeometry(795/1000,975/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr4.position.set((4*2.3)-10.5,0,-4.9);
	cdrB4.position.set((4*2.3)-10.5,0,-4.925);
	scene.add(cdr4,cdrB4);
	//etiqueta 4
	var txq4 = new THREE.TextureLoader().load("img/etq/e4.jpg");
	var etq4 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq4})
	);
	etq4.position.set((4*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq4);

	//cuadro 5
	var txt5 = new THREE.TextureLoader().load("img/pic/b5.jpg");
	var cdr5 = new THREE.Mesh(
	    new THREE.PlaneGeometry(912/1000,778/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt5})
	);
	//borde cuadro 5
	var cdrB5 = new THREE.Mesh(
	    new THREE.BoxGeometry(912/1000,778/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr5.position.set((5*2.3)-10.5,0,-4.9);
	cdrB5.position.set((5*2.3)-10.5,0,-4.925);
	scene.add(cdr5,cdrB5);
	//etiqueta 5
	var txq5 = new THREE.TextureLoader().load("img/etq/e5.jpg");
	var etq5 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq5})
	);
	etq5.position.set((5*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq5);

	//cuadro 6
	var txt6 = new THREE.TextureLoader().load("img/pic/b6.jpg");
	var cdr6 = new THREE.Mesh(
	    new THREE.PlaneGeometry(968/1000,1176/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt6})
	);
	//borde cuadro 6
	var cdrB6 = new THREE.Mesh(
	    new THREE.BoxGeometry(968/1000,1176/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr6.position.set((6*2.3)-10.5,0,-4.9);
	cdrB6.position.set((6*2.3)-10.5,0,-4.925);
	scene.add(cdr6,cdrB6);
	//etiqueta 6
	var txq6 = new THREE.TextureLoader().load("img/etq/e6.jpg");
	var etq6 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq6})
	);
	etq6.position.set((6*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq6);

	//cuadro 7
	var txt7 = new THREE.TextureLoader().load("img/pic/b7.jpg");
	var cdr7 = new THREE.Mesh(
	    new THREE.PlaneGeometry(830/1000,707/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt7})
	);
	//borde cuadro 7
	var cdrB7 = new THREE.Mesh(
	    new THREE.BoxGeometry(830/1000,707/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr7.position.set((7*2.3)-10.5,0,-4.9);
	cdrB7.position.set((7*2.3)-10.5,0,-4.925);
	scene.add(cdr7,cdrB7);
	//etiqueta 7
	var txq7 = new THREE.TextureLoader().load("img/etq/e7.jpg");
	var etq7 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq7})
	);
	etq7.position.set((7*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq7);

	//cuadro 8
	var txt8 = new THREE.TextureLoader().load("img/pic/b8.jpg");
	var cdr8 = new THREE.Mesh(
	    new THREE.PlaneGeometry(785/1000,1030/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt8})
	);
	//borde cuadro 8
	var cdrB8 = new THREE.Mesh(
	    new THREE.BoxGeometry(785/1000,1030/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr8.position.set((8*2.3)-10.5,0,-4.9);
	cdrB8.position.set((8*2.3)-10.5,0,-4.925);
	scene.add(cdr8,cdrB8);
	//etiqueta 8
	var txq8 = new THREE.TextureLoader().load("img/etq/e8.jpg");
	var etq8 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq8})
	);
	etq8.position.set((8*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq8);

	//cuadro 9
	var txt9 = new THREE.TextureLoader().load("img/pic/b9.jpg");
	var cdr9 = new THREE.Mesh(
	    new THREE.PlaneGeometry(794/1000,1074/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt9})
	);
	//borde cuadro 9
	var cdrB9 = new THREE.Mesh(
	    new THREE.BoxGeometry(794/1000,1074/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr9.position.set(((9-8)*2.3)-10.5,0,4.9);
	cdr9.rotation.y = Math.PI;
	cdrB9.position.set(((9-8)*2.3)-10.5,0,4.925);
	cdr9.rotation.y = Math.PI;
	scene.add(cdr9,cdrB9);
	//etiqueta 9
	var txq9 = new THREE.TextureLoader().load("img/etq/e9.jpg");
	var etq9 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq9})
	);
	etq9.position.set(((9-8)*2.3)-10.6+0.9,0,4.99);
	etq9.rotation.y = Math.PI;
	scene.add(etq9);

	//cuadro 10
	var txt10 = new THREE.TextureLoader().load("img/pic/b10.jpg");
	var cdr10 = new THREE.Mesh(
	    new THREE.PlaneGeometry(800/1000,719/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt10})
	);
	//borde cuadro 10
	var cdrB10 = new THREE.Mesh(
	    new THREE.BoxGeometry(800/1000,719/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr10.position.set(((10-8)*2.3)-10.5,0,4.9);
	cdr10.rotation.y = Math.PI;
	cdrB10.position.set(((10-8)*2.3)-10.5,0,4.925);
	cdr10.rotation.y = Math.PI;
	scene.add(cdr10,cdrB10);
	//etiqueta 10
	var txq10 = new THREE.TextureLoader().load("img/etq/e10.jpg");
	var etq10 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq10})
	);
	etq10.position.set(((10-8)*2.3)-10.6+0.9,0,4.99);
	etq10.rotation.y = Math.PI;
	scene.add(etq10);

	//cuadro 11
	var txt11 = new THREE.TextureLoader().load("img/pic/b11.jpg");
	var cdr11 = new THREE.Mesh(
	    new THREE.PlaneGeometry(811/1000,965/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt11})
	);
	//borde cuadro 11
	var cdrB11 = new THREE.Mesh(
	    new THREE.BoxGeometry(811/1000,965/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr11.position.set(((11-8)*2.3)-10.5,0,4.9);
	cdr11.rotation.y = Math.PI;
	cdrB11.position.set(((11-8)*2.3)-10.5,0,4.925);
	cdr11.rotation.y = Math.PI;
	scene.add(cdr11,cdrB11);
	//etiqueta 11
	var txq11 = new THREE.TextureLoader().load("img/etq/e11.jpg");
	var etq11 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq11})
	);
	etq11.position.set(((11-8)*2.3)-10.6+0.9,0,4.99);
	etq11.rotation.y = Math.PI;
	scene.add(etq11);

	//cuadro 12
	var txt12 = new THREE.TextureLoader().load("img/pic/b12.jpg");
	var cdr12 = new THREE.Mesh(
	    new THREE.PlaneGeometry(985/1000,533/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt12})
	);
	//borde cuadro 12
	var cdrB12 = new THREE.Mesh(
	    new THREE.BoxGeometry(985/1000,533/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr12.position.set(((12-8)*2.3)-10.5,0,4.9);
	cdr12.rotation.y = Math.PI;
	cdrB12.position.set(((12-8)*2.3)-10.5,0,4.925);
	cdr12.rotation.y = Math.PI;
	scene.add(cdr12,cdrB12);
	//etiqueta 12
	var txq12 = new THREE.TextureLoader().load("img/etq/e12.jpg");
	var etq12 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq12})
	);
	etq12.position.set(((12-8)*2.3)-10.6+0.9,0,4.99);
	etq12.rotation.y = Math.PI;
	scene.add(etq12);

	//cuadro 13
	var txt13 = new THREE.TextureLoader().load("img/pic/b13.jpg");
	var cdr13 = new THREE.Mesh(
	    new THREE.PlaneGeometry(756/1000,1176/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt13})
	);
	//borde cuadro 13
	var cdrB13 = new THREE.Mesh(
	    new THREE.BoxGeometry(756/1000,1176/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr13.position.set(((13-8)*2.3)-10.5,0,4.9);
	cdr13.rotation.y = Math.PI;
	cdrB13.position.set(((13-8)*2.3)-10.5,0,4.925);
	cdr13.rotation.y = Math.PI;
	scene.add(cdr13,cdrB13);
	//etiqueta 13
	var txq13 = new THREE.TextureLoader().load("img/etq/e13.jpg");
	var etq13 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq13})
	);
	etq13.position.set(((13-8)*2.3)-10.6+0.9,0,4.99);
	etq13.rotation.y = Math.PI;
	scene.add(etq13);

	//cuadro 14
	var txt14 = new THREE.TextureLoader().load("img/pic/b14.jpg");
	var cdr14 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1176/1000,974/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt14})
	);
	//borde cuadro 14
	var cdrB14 = new THREE.Mesh(
	    new THREE.BoxGeometry(1176/1000,974/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr14.position.set(((14-8)*2.3)-10.5,0,4.9);
	cdr14.rotation.y = Math.PI;
	cdrB14.position.set(((14-8)*2.3)-10.5,0,4.925);
	cdr14.rotation.y = Math.PI;
	scene.add(cdr14,cdrB14);
	//etiqueta 14
	var txq14 = new THREE.TextureLoader().load("img/etq/e14.jpg");
	var etq14 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq14})
	);
	etq14.position.set(((14-8)*2.3)-10.6+0.9,0,4.99);
	etq14.rotation.y = Math.PI;
	scene.add(etq14);

	//cuadro 15
	var txt15 = new THREE.TextureLoader().load("img/pic/b15.jpg");
	var cdr15 = new THREE.Mesh(
	    new THREE.PlaneGeometry(966/1000,779/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt15})
	);
	//borde cuadro 15
	var cdrB15 = new THREE.Mesh(
	    new THREE.BoxGeometry(966/1000,779/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr15.position.set(((15-8)*2.3)-10.5,0,4.9);
	cdr15.rotation.y = Math.PI;
	cdrB15.position.set(((15-8)*2.3)-10.5,0,4.925);
	cdr15.rotation.y = Math.PI;
	scene.add(cdr15,cdrB15);
	//etiqueta 15
	var txq15 = new THREE.TextureLoader().load("img/etq/e15.jpg");
	var etq15 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq15})
	);
	etq15.position.set(((15-8)*2.3)-10.6+0.9,0,4.99);
	etq15.rotation.y = Math.PI;
	scene.add(etq15);

	//cuadro 16
	var txt16 = new THREE.TextureLoader().load("img/pic/b16.jpg");
	var cdr16 = new THREE.Mesh(
	    new THREE.PlaneGeometry(718/1000,1017/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt16})
	);
	//borde cuadro 16
	var cdrB16 = new THREE.Mesh(
	    new THREE.BoxGeometry(718/1000,1017/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr16.position.set(((16-8)*2.3)-10.5,0,4.9);
	cdr16.rotation.y = Math.PI;
	cdrB16.position.set(((16-8)*2.3)-10.5,0,4.925);
	cdr16.rotation.y = Math.PI;
	scene.add(cdr16,cdrB16);
	//etiqueta 16
	var txq16 = new THREE.TextureLoader().load("img/etq/e16.jpg");
	var etq16 = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq16})
	);
	etq16.position.set(((16-8)*2.3)-10.6+0.9,0,4.99);
	etq16.rotation.y = Math.PI;
	scene.add(etq16);
}
window.onload = init;
