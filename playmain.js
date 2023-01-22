			function tvtable() {
                const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
                
                const woodenfloor = new THREE.TextureLoader().load( 'Assets/Textures/Wood2.jpg' );
			const geometry = new THREE.BoxGeometry( 0.5, 0.1, 1 );
			const material = new THREE.MeshLambertMaterial( { map: woodenfloor } );
			const floor = new THREE.Mesh( geometry, material );
			scene.add( floor );

				floor.position.x = 3.5;
				floor.position.y = -1;
				floor.rotation.x = 0;
				floor.rotation.y = 1.571;
                tvstand();
                television();
        

			
			};
            function tvstand () {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/Wood2.jpg' );
                const geometry = new THREE.BoxGeometry( 0.9, 1, 0.4 );
			const material = new THREE.MeshLambertMaterial( { map : tvcolor } );
			const floor = new THREE.Mesh( geometry, material );
			scene.add( floor );

            floor.position.x = 3.5;
			floor.position.y = -1.5;
			floor.rotation.x = 0;
			floor.rotation.y = 0;

            }

            function television () {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/TV.jpg' );
                const geometry = new THREE.BoxGeometry( 1, 0.9, 0.1 );
                const material = new THREE.MeshPhongMaterial( { map : tvcolor  } );
                const floor = new THREE.Mesh( geometry, material );
                scene.add( floor );
    
                floor.position.x = 3.4;
                floor.position.y = -0.5;
                floor.rotation.x = 0;
                floor.rotation.y = 1.571;
                tvscreen();

            }
            function tvscreen () {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/blue.jpg' );
                const geometry = new THREE.BoxGeometry( 0.9, 0.8, 0.1 );
                const material = new THREE.MeshPhongMaterial( { map : tvcolor  } );
                const floor = new THREE.Mesh( geometry, material );
                scene.add( floor );
    
                floor.position.x = 3.39;
                floor.position.y = -0.5;
                floor.rotation.x = 0;
                floor.rotation.y = 1.571;

            }
            // chair
            function chair() {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/Chair.jpg' );
                const geometry = new THREE.BoxGeometry( 0.5, 0.5, 1 );
                const material = new THREE.MeshPhongMaterial( { map : tvcolor  } );
                const floor = new THREE.Mesh( geometry, material );
                scene.add( floor );
    
                floor.position.x = 1;
                floor.position.y = -1.5;
                floor.rotation.x = 0;
                floor.rotation.y = 1.571;
                chair2();

            }
            function chair2() {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/Chair.jpg' );
                const geometry = new THREE.BoxGeometry( 0.3, 0.5, 0.5 );
                const material = new THREE.MeshPhongMaterial( { map : tvcolor  } );
                const floor = new THREE.Mesh( geometry, material );
                scene.add( floor );
    
                floor.position.x = 0.65;
                floor.position.y = -1;
                floor.rotation.x = 0;
                floor.rotation.y = 0;

            }
            function othertable() {
                
                

			const geometry = new THREE.BoxGeometry( 0.5, 0.1, 2 );
			const material = new THREE.MeshPhysicalMaterial( { map: woodenfloor } );
			const floor = new THREE.Mesh( geometry, material );
			scene.add( floor );

				floor.position.x = -2;
				floor.position.y = -0.8;
				floor.rotation.x = 0;
				floor.rotation.y = 1.571;
                othertable2();


            }
            function othertable2() {
                const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set(20, 0, 20 );
scene.add( light );
			const geometry = new THREE.BoxGeometry( 0.9, 0.1, 2 );
			const material = new THREE.MeshPhysicalMaterial( { color: 0x000000 } );
			const floor = new THREE.Mesh( geometry, material );
			scene.add( floor );

				floor.position.x = -2;
				floor.position.y = -1.3;
				floor.rotation.x = 1.571;
				floor.rotation.y = 1.571;
            }

            function wall() {
                const tvcolor = new THREE.TextureLoader().load( 'Assets/Textures/wall.jpg' );
                const geometry = new THREE.BoxGeometry( -10, 10, 20 );
                const material = new THREE.MeshPhongMaterial( { map : tvcolor  } );
                const floor = new THREE.Mesh( geometry, material );
                scene.add( floor );
    
                floor.position.x = 0;
                floor.position.y = 0;
                floor.rotation.x = 0;
                floor.rotation.y = 1.571;
            }
    

        

