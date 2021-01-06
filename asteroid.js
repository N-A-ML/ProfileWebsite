// const { SSL_OP_MSIE_SSLV2_RSA_PADDING } = require("constants");

// set up the scene, camera and renderer
var scene =new THREE.Scene();
var camera=new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
  1,
  1000
)

camera.position.z=10; 
camera.position.x=0;
camera.position.y=0;



var renderer =new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight)



// var requestID;
document.body.appendChild(renderer.domElement)





  // make it responsive
  window.addEventListener('resize', () => {                          
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

// load background (created in photoshop)
const loader = new THREE.TextureLoader(); 
loader.load('images/PSstarfield2.jpg' , function(texture)
      {
       scene.background = texture;  
      });


//define prerequisites for a mesh and the mesh itself
var geometry= new THREE.BufferGeometry().fromGeometry(new THREE.SphereGeometry(0.5  ,6, 6))
const texture = new THREE.TextureLoader().load( 'images/asteroid3.jpg' );
var material= new THREE.MeshPhongMaterial( { map:texture} );
var mesh= new THREE.Mesh(geometry, material);
mesh.overdraw=false;

//let there be  light
var light= new THREE.DirectionalLight(0xFF4500, 1, 500)
light.position.set(-10,0,5);
scene.add(light); 

var light = new THREE.AmbientLight( 0x404040,1,300 ); // soft white light
light.position.set(10,0,5)
scene.add( light );
   
//position, rotate and scale the mesh
mesh.position.set(4,3,3)
mesh.rotation.set(0,0,0) //rotate object on x, y, z axes
mesh.scale.set(1,1,1) //scale the object in the x, y, z dimensions

// scene.add(mesh)
// scene.updateMatrixWorld(true);

// create for loop to generate asteroids  https://stackoverflow.com/questions/60555457/javascript-three-js-how-to-pause-after-adding-an-object-to-three-js-scene
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
meshy = 0;


  // do something when this window object gets focus.
async function makemeshes() {
  for (var i = 0; i < 100; i++) {
    mesh = new THREE.Mesh(geometry.clone(), material);
    // if(obid.position.y!=3) {

    // randomly position on x axis
    mesh.position.x = 2 + 5 * Math.random() - 5 * Math.random()


    mesh.position.y = 3
    mesh.position.z = 4

    await wait(1000);



    // if (scene.getObjectById(i,true).position.y!=3) {
      
        if( document.visibilityState != 'visible' ) {
         
        }
        else  {
          scene.add(mesh)
        }
      
     
    
    // if (meshy===3) {
    //   meshy += 1;
    //   for (let i = scene.children.length - 1; i >= 0; i--) {
    //     if(scene.children[i].type === "Mesh")
    //         scene.remove(scene.children[i]);
    // }

    //  }
   
    
    // }

    console.log(i)
    console.log(scene.children.length)
    console.log(meshy)

    
    
    var meshy = mesh.position.y;



  }}
  makemeshes()
  // obid=scene.getObjectById(i);
 






  

  
// this.tl = new TimelineMax({ force3D: false//repeat:10
// }).delay(
// 10*Math.random()//.2+Math.random()           
// );
// //this.tl.to("container",3, { top: '90px', });




// var duration = 500


// this.tl.to(this.mesh.position, duration, { x: (meshxsp - window.outerWidth) });
// this.tl.to(this.mesh.position, duration, { y: -window.outerHeight }, "+=-duration");
// // this.tl.to(this.mesh.rotation, duration, {y: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")
// // this.tl.to(this.mesh.rotation, duration, {z: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")

// tl.timeScale(0.1);
// // meshX += 1;







var render = function () {
  requestAnimationFrame(render);  
  
  scene.traverse( function(child) {
  if(child instanceof THREE.Mesh) {
      if(Math.abs(child.position.y)>3) {
          child.visible = false
      } else {
          child.visible = true;
      }
    
  }});
  


  
  
  
  
 
  



  
  scene.traverse( function( mesh ) {

    if ( mesh instanceof THREE.Mesh ) {

       mesh.rotation.x+=Math.random()*0.01;
       mesh.rotation.y+=Math.random()*0.01;
       mesh.position.x+=-0.01;
       mesh.position.y+=-0.01


    }

} );


  
  renderer.render(scene, camera);
  
  
}
  
  
  
  

  
  
  requestAnimationFrame(render);  
  render();