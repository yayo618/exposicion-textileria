function init(){
    var cdr,tx1,tx2,ww,hh;
    
    tx1 = new THREE.TextureLoader();
    tx2 = new tx1.load("img/pic/b1.jpg",
		      function (){ww=tx2.image.width; hh=tx2.image.height;
    cdr = new THREE.Mesh(
	new THREE.PlaneGeometry(ww/1000,hh/1000),
	new THREE.MeshBasicMaterial({color:0xffffff,map:tx2})
    );
    cdr.position.set(-4,0,-4.9);
    scene.add(cdr);
    });
}

window.onload = init;
