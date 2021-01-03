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
const texture = new THREE.TextureLoader().load( 'images/asteroid4.jpg' );
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




// create for loop to generate asteroids
for (var i = 0; i < 100; i++) {
mesh = new THREE.Mesh(geometry.clone(), material);

meshes=[]

// randomly position on x axis
mesh.position.x = 2 + 5*Math.random()-5*Math.random()

meshxsp = mesh.position.x
mesh.position.y = 3
mesh.position.z = 4 




mesh.name="meshy";

scene.add(mesh);
this.tl = new TimelineMax({ force3D: false//repeat:10
}).delay(
10*Math.random()//.2+Math.random()           
);
//this.tl.to("container",3, { top: '90px', });




var duration = 500


this.tl.to(this.mesh.position, duration, { x: (meshxsp - window.outerWidth) });
this.tl.to(this.mesh.position, duration, { y: -window.outerHeight }, "+=-duration");
// this.tl.to(this.mesh.rotation, duration, {y: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")
// this.tl.to(this.mesh.rotation, duration, {z: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")

tl.timeScale(0.1);
//meshX += 1;


}




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
  
  
  
  
  renderer.render(scene, camera);
  
  
  };
  
  
  
  

  
  
  //render.loop=false;
  requestAnimationFrame(render);  
  render();