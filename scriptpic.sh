#!/bin/bash
echo "function init(){" > cuadros.js
for i in {1..8}
do
let ww=$(identify \-format '%w' img/pic/b$i.jpg)
let hh=$(identify \-format '%h' img/pic/b$i.jpg)
    echo "
	//cuadro $i
	var txt$i = new THREE.TextureLoader().load(\"img/pic/b$i.jpg\");
	var cdr$i = new THREE.Mesh(
	    new THREE.PlaneGeometry($ww/1000,$hh/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
	);
	//borde cuadro $i
	var cdrB$i = new THREE.Mesh(
	    new THREE.BoxGeometry($ww/1000,$hh/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr$i.position.set(($i*2.3)-10.5,0,-4.9);
	cdrB$i.position.set(($i*2.3)-10.5,0,-4.925);
	scene.add(cdr$i,cdrB$i);
	//etiqueta $i
	var txq$i = new THREE.TextureLoader().load(\"img/etq/e$i.jpg\");
	var etq$i = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
	);
	etq$i.position.set(($i*2.3)-10.6+0.9,0,-4.99);
	scene.add(etq$i);" >> cuadros.js
done
for i in {9..16}
do
let ww=$(identify \-format '%w' img/pic/b$i.jpg)
let hh=$(identify \-format '%h' img/pic/b$i.jpg)
    echo "
	//cuadro $i
	var txt$i = new THREE.TextureLoader().load(\"img/pic/b$i.jpg\");
	var cdr$i = new THREE.Mesh(
	    new THREE.PlaneGeometry($ww/1000,$hh/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
	);
	//borde cuadro $i
	var cdrB$i = new THREE.Mesh(
	    new THREE.BoxGeometry($ww/1000,$hh/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdr$i.position.set((($i-8)*2.3)-10.5,0,4.9);
	cdr$i.rotation.y = Math.PI;
	cdrB$i.position.set((($i-8)*2.3)-10.5,0,4.925);
	cdr$i.rotation.y = Math.PI;
	scene.add(cdr$i,cdrB$i);
	//etiqueta $i
	var txq$i = new THREE.TextureLoader().load(\"img/etq/e$i.jpg\");
	var etq$i = new THREE.Mesh(
	    new THREE.PlaneGeometry(0.405,0.166),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
	);
	etq$i.position.set((($i-8)*2.3)-10.6+0.9,0,4.99);
	etq$i.rotation.y = Math.PI;
	scene.add(etq$i);" >> cuadros.js
done

echo "}
window.onload = init;" >> cuadros.js
