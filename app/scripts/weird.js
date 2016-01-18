;(function( window, document, undefined ) {

    if (Detector.webgl) {
       
        var container, stats, place;
        var camera, scene, renderer, group, particle;
        var particles, geometry, materials = [], 
            parameters, i, h, color, sprite, size;
        var mouseX = 0, mouseY = 0;
        var windowHalfX = window.innerWidth / 2;    
        var windowHalfY = window.innerHeight / 2;

        function init() {

            // Setup the scene & camera
            // Define group
            place = document.getElementById('scene');
            container = document.createElement( 'div' );
            if(place == undefined) {return;}
            place.appendChild( container );

            //console.log(place, container);

            camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 6000 );
            camera.position.z = 900;

            scene = new THREE.Scene();
            group = new THREE.Object3D();
            geometry = new THREE.Geometry();

    // set up the sphere vars
    // var radius = 50,
    //     segments = 16,
    //     rings = 16;

    // create a new mesh with
    //  var sphere1 = new THREE.Mesh(

    //   new THREE.SphereGeometry(
    //     radius,
    //     segments,
    //     rings),

    //   sphereMaterial);

    // scene.add(sphere1);

    var sphereMaterial =
      
      new THREE.MeshNormalMaterial(
        {
          color: 0x0055FF          
        });

            sprite1 = THREE.ImageUtils.loadTexture( "https://s3.amazonaws.com/impromptu-company/squiggle.png" );
            sprite2 = THREE.ImageUtils.loadTexture( "https://s3.amazonaws.com/impromptu-company/line.png" );
            sprite3 = THREE.ImageUtils.loadTexture( "https://s3.amazonaws.com/impromptu-company/hollow-circle.png" );
            sprite4 = THREE.ImageUtils.loadTexture( "https://s3.amazonaws.com/impromptu-company/circle.png" );

            for ( i = 0; i < 40; i ++ ) {
                var vertex = new THREE.Vector3();
                vertex.x = Math.random() * 1000 - 400;
                vertex.y = Math.random() * 1000 - 400;
                vertex.z = Math.random() * 1000 - 400;
                geometry.vertices.push( vertex );
            }

            parameters = [
               [  sprite1, 60 ],
               [  sprite2, 20 ],
               [  sprite3, 50 ],
               [  sprite4, 20 ]
            ];

            //console.log(parameters);

            for ( i = 0; i < parameters.length; i++ ) {

                sprite = parameters[i][0];
                size   = parameters[i][1];

                materials[i] = new THREE.ParticleSystemMaterial( { 
                    size: size, 
                    map: sprite, 
                    sizeAttenuation: true,
                    //blending: THREE.AdditiveBlending, 
                    depthTest: false, 
                    transparent : true,
                    //color: 0x0055FF
                } );

                particles = new THREE.ParticleSystem( geometry, materials[i] );

                particles.rotation.x = Math.random() * 6;
                particles.rotation.y = Math.random() * 6;
                particles.rotation.z = Math.random() * 6;
                group.add( particles );
                scene.add( group );

                }

                renderer = new THREE.WebGLRenderer( { alpha: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                //renderer.setClearColor( 0xF7E6D2, 1 );
                renderer.setClearColor( 0xFFFFFF, 1);
                container.appendChild( renderer.domElement );

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function onDocumentMouseMove( event ) {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }

        function onDocumentTouchStart( event ) {
            if ( event.touches.length === 1 ) {

                //event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }

        function onDocumentTouchMove( event ) {
            if ( event.touches.length === 1 ) {
                //event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }

        function render() {
            camera.position.x += ( mouseX - camera.position.x ) * 0.05;
            camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
            camera.lookAt( scene.position );

            // particles.rotation.x += 0.001;
            // particles.rotation.y += 0.001;

            group.rotation.x += 0.0008;
            group.rotation.y += 0.0008;

            renderer.render( scene, camera );
        }

        function animate() {
            requestAnimationFrame( animate );
            if(place == undefined) {return;}
            render();
            //stats.update();
        }

        init();
        animate();

        // window.isAnimating = true;

        // function scrollPosition() {
        //     window.scrollPos = $(document).scrollTop();

        //     if (window.scrollPos > 1400) {
        //         if (!window.isAnimating) {return;}
        //         console.log('stop');
        //         window.isAnimating = false;
        //         turnOff();
        //     } else {
        //         if (window.isAnimating) {return;}
        //         console.log('start');
        //         window.isAnimating = true;
        //         turnOn();
        //     }
        // }

        // function turnOn() {
        //     init();
        //     animate();
        // }

        // function turnOff() {
        //     cancelAnimationFrame( place );
        //     place = undefined;
        // }
   

        // $(window).scroll( $.throttle( 100, function(){
        //     scrollPosition();
        // })); 


    } else { 
        var msg = 'Update your browser for the full experience :)';
        document.getElementById( 'notice' ).innerHTML = msg;
    }

}( window, document));