// set up the scene, camera and renderer
var scene =new THREE.Scene();
var camera=new THREE.PerspectiveCamera(
  50,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
)

camera.position.z=5; //how close the object is to us

var renderer =new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

  // make it responsive
  window.addEventListener('resize', () => {                          
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

scene.background = new THREE.Color(0x000000);




var geometry= new THREE.SphereGeometry(0.5,20,20)
//var material= new THREE.MeshLambertMaterial({color: 0xFFCC00})
var material= new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/asteroid.jpg',THREE.SphericalRefractionMapping) } );
var mesh= new THREE.Mesh(geometry, material);
mesh.overdraw=true;

//material.map    = THREE.ImageUtils.loadTexture('images/asteroid.jpg',THREE.SphericalRefractionMapping);










mesh.position.set(4,2,2) //move object on x, y, z axes

mesh.rotation.set(0,0,0) //rotate object on x, y, z axes
mesh.scale.set(1,1,1) //scale the object in the x, y, z dimensions








scene.add(mesh);




var light= new THREE.DirectionalLight(0xFF4500, 2, 500)
light.position.set(-10,0,5);
scene.add(light); 

var light = new THREE.AmbientLight( 0x404040,1.5,300 ); // soft white light
light.position.set(10,0,5)
scene.add( light );






var render= function () {
 requestAnimationFrame(render);
 




 renderer.render(scene,camera);
}

render();

this.tl = new TimelineMax().delay(0.2);
// this.tl.to(this.mesh.scale, 1, {x:3, ease: Expo.easeOut})
//this.tl.to(this.mesh.scale, .5, {x:.5, ease: Expo.easeOut})
var duration = 10000


this.tl.to(this.mesh.position, duration, {x:-window.outerWidth});
this.tl.to(this.mesh.position, duration, {y:-window.outerHeight},"+=-duration");
this.tl.to(this.mesh.position, duration, {z:-1000},"+=-2*duration");


//this.tl.to(this.mesh.rotate, duration, {x:45, ease:Expo.easeOut}, "+=-duration");


//this.tl.to(this.mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")