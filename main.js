// bed and contents
function blanket() {
    const geometry = new THREE.BoxGeometry( 1.42, 0.6, 1.22 );
			const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
			const blanky = new THREE.Mesh( geometry, material );
			scene.add( blanky ); 

            blanky.position.x = 3.2;
			blanky.position.y = -1.06;
			blanky.rotation.x = 0.7;
			blanky.rotation.y = 1.6;
        
}

function pillow() {
    const geometry = new THREE.BoxGeometry( 0.35, -0.11, -0.75 );
			const material = new THREE.MeshBasicMaterial( { color: 0xf7f0db} );
			const headpillow = new THREE.Mesh( geometry, material );
			scene.add( headpillow ); 

            headpillow.position.x = 2.9;
			headpillow.position.y = -0.01;
            headpillow.position.y = -0.2;
			headpillow.rotation.x = 0.7;
			headpillow.rotation.y = 1.6;

}

//window
function window1() {
	const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x1b7ced, side: THREE.DoubleSide} );
const windowone = new THREE.Mesh( geometry, material );
scene.add( windowone );

            windowone.position.x = 3.9;
            windowone.position.y = 0.7;
            
			windowone.rotation.x = 0.7;
			windowone.rotation.y = 1.6;
			windesign();
			window2();
			windesign2();


}

function windesign(){
	windowdesign();
	windowdesign2();
	windowdesign3();
}

function windowdesign() {
	const geometry = new THREE.PlaneGeometry( 0.07, 1.09 );
const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const windowdes = new THREE.Mesh( geometry, material );
scene.add( windowdes );
            windowdes.position.x = 3.88;
            windowdes.position.y = 0.7;
            
			windowdes.rotation.x = 0.7;
			windowdes.rotation.y = 1.6;
}
function windowdesign2() {
	const geometry = new THREE.PlaneGeometry( 1.1, 0.07 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const windowdos = new THREE.Mesh( geometry, material );
	scene.add( windowdos );

	windowdos.position.x = 3.88;
	windowdos.position.y = 0.7;
	
	windowdos.rotation.x = 0.7;
	windowdos.rotation.y = 1.6;

}
function windowdesign3() {
	const geometry = new THREE.PlaneGeometry( 1.19, 1.13 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const windowdas = new THREE.Mesh( geometry, material );
	scene.add( windowdas );

	windowdas.position.x = 3.9;
	windowdas.position.y = 0.71;

	windowdas.rotation.x = 0.7;
	windowdas.rotation.y = 1.6;

}
function windesign2() {
windowdesign4();
windowdesign5();
windowdesign6();
}
function window2() {

	const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x1b7ced, side: THREE.DoubleSide} );
const window2one = new THREE.Mesh( geometry, material );
scene.add( window2one );

            window2one.position.x = -3.9;
            window2one.position.y = 0.7;
            
			window2one.rotation.x = 0.7;
			window2one.rotation.y = 1.6;

}
function windowdesign4() {
	const geometry = new THREE.PlaneGeometry( 1.19, 1.13 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const windowdas = new THREE.Mesh( geometry, material );
	scene.add( windowdas );

	windowdas.position.x = -3.919;
	windowdas.position.y = 0.71;

	windowdas.rotation.x = 0.7;
	windowdas.rotation.y = 1.6;
}
function windowdesign5() {

	const geometry = new THREE.PlaneGeometry( 1.1, 0.07 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const window2dos = new THREE.Mesh( geometry, material );
	scene.add( window2dos );

	window2dos.position.x = -3.88;
	window2dos.position.y = 0.7;
	
	window2dos.rotation.x = 0.7;
	window2dos.rotation.y = 1.6;
}
function windowdesign6() {
	const geometry = new THREE.PlaneGeometry( 0.07, 1.05 );
const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const window2des = new THREE.Mesh( geometry, material );
scene.add( window2des );
            window2des.position.x = -3.88;
            window2des.position.y = 0.7;
            
			window2des.rotation.x = 0.7;
			window2des.rotation.y = 1.6;
	

}
// table 
function table() {
	const geometry = new THREE.BoxGeometry( 2.1, 0.1, 1.02 );
			const material = new THREE.MeshBasicMaterial( { color: 0x8b4513 } );
			const table = new THREE.Mesh( geometry, material );
			scene.add( table );

			table.position.y = 0.5
			table.rotation.x = 0.7;
			table.rotation.y = 0;

			tabledes();
			monitor();
			table2();
			chair();

}

function tabledes(){
	const geometry = new THREE.BoxGeometry( 0.2, 0.5, 1.3 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const windowdos = new THREE.Mesh( geometry, material );
	scene.add( windowdos );

	windowdos.rotation.x = 0.4;
	windowdos.rotation.y = 1.6;

}

function monitor() {
	const geometry = new THREE.BoxGeometry( 0.2, 0.5, 0.8 );
	const material = new THREE.MeshBasicMaterial( {color: 0x555555, side: THREE.DoubleSide} );
	const windowdos = new THREE.Mesh( geometry, material );
	scene.add( windowdos );
	
	windowdos.position.y = 1.1 ;
	windowdos.position.x = -0.5 ;
	windowdos.rotation.x = 0.4;
	windowdos.rotation.y = 1.6;
	monitordes();
	monitordes2();
	keyboard();
	cpu();
}

function monitordes() {
	const geometry = new THREE.BoxGeometry( 0.2, 0.4, 0.65 );
	const material = new THREE.MeshBasicMaterial( {color: 0x1870d5, side: THREE.DoubleSide} );
	const windowdos = new THREE.Mesh( geometry, material );
	scene.add( windowdos );
	
	windowdos.position.y = 1.1 ;
	windowdos.position.x = -0.5 ;
	windowdos.rotation.x = 0.4;
	windowdos.rotation.y = 1.6;
}
function monitordes2() {
	const geometry = new THREE.BoxGeometry( 0.1, 0.3, 0.1 );
	const material = new THREE.MeshBasicMaterial( {color: 0x555555, side: THREE.DoubleSide} );
	const windowdos = new THREE.Mesh( geometry, material );
	scene.add( windowdos );
	
	windowdos.position.y = 0.71 ;
	windowdos.position.x = -0.5 ;
	windowdos.rotation.x = 0.4;
	windowdos.rotation.y = 1.6;
}
function keyboard(){
	const geometry = new THREE.BoxGeometry( 1, 0.1, 1.02 );
			const material = new THREE.MeshBasicMaterial( { color: 0x555555 } );
			const keyboard = new THREE.Mesh( geometry, material );
			scene.add( keyboard );

			keyboard.rotation.x = 0.4;
	        keyboard.rotation.y = 1.6;
			keyboard.position.y = 0.51 ;
			keyboard.position.x = -0.4 ;
}
function cpu() {
	const geometry = new THREE.BoxGeometry( 1, 0.6, 0.2 );
			const material = new THREE.MeshBasicMaterial( { color: 0x555555 } );
			const cpu = new THREE.Mesh( geometry, material );
			scene.add( cpu );
			
			cpu.rotation.x = 0.4;
	        cpu.rotation.y = 1.6;
			cpu.position.y = 1;
			cpu.position.x = 0.2;

}
function table2() {
		const geometry = new THREE.BoxGeometry( 2.1, 0.1, 1.02 );
				const material = new THREE.MeshBasicMaterial( { color: 0x8b4513 } );
				const table = new THREE.Mesh( geometry, material );
				scene.add( table );

				table.rotation.x = 0.7;
				table.rotation.y = 1.6;
				table.position.x = -1.7;
				table.position.y = -0.8;
				table2des();

}
function table2des() {

	const geometry = new THREE.BoxGeometry( 0.8, 0.6, 0.2, 1 );
	const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.x = -2.3;
    table.position.y = -0.8;
	

}

function chair() {
	const geometry = new THREE.BoxGeometry( 0.8, 0.6, 0.2);
	const material = new THREE.MeshBasicMaterial( {color: 0x7d2c03, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.y = -0.9;
	table.position.x = -0.5;
	chair2();
	chair3();

}
function chair2() {
	const geometry = new THREE.BoxGeometry( 0.5, 0.2, 0.6);
	const material = new THREE.MeshBasicMaterial( {color: 0x612202, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.y = -1.2;
	table.position.x = -0.68;
}
function chair3() {
	const geometry = new THREE.BoxGeometry( 0.2, 0.5, 0.18);
	const material = new THREE.MeshBasicMaterial( {color: 0xa9a9a9, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.y = -1.4;
	table.position.x = -0.68;

}

//floor and wall

function floor() {
	const geometry = new THREE.BoxGeometry( 7, 0.49, 8 );
			const material = new THREE.MeshBasicMaterial( { color: 0x654321 } );
			const bed = new THREE.Mesh( geometry, material );
			scene.add( bed );

			bed.rotation.x = 0.7;
		    bed.rotation.y = 1.6;
			bed.position.y = -1.8
			wall();
			wall2();

}

function wall(){
	const geometry = new THREE.BoxGeometry( 0.2, 5, 0.18);
	const material = new THREE.MeshBasicMaterial( {color: 0x654321, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.x = 3.3;
	table.position.y = 2.4;
	

}
function wall2() {
	const geometry = new THREE.BoxGeometry( 0.2, 5, 0.18);
	const material = new THREE.MeshBasicMaterial( {color: 0x654321, side: THREE.DoubleSide} );
	const table = new THREE.Mesh( geometry, material );
	scene.add( table );

	table.rotation.x = 0.7;
    table.rotation.y = 1.6;
	table.position.x = -3.6;
	table.position.y = 2.3;

}