// set up the scene, camera and renderer
var scene =new THREE.Scene();
var camera=new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
  1,
  1000
)

camera.position.z=10; //how close the object is to us
camera.position.x=0;
camera.position.y=0;  









var renderer =new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight)

// //for mb

// renderer.shadowMap.enabled = true;
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

// // mb end

var requestID;
document.body.appendChild(renderer.domElement)
// document.addEventListener( 'click', stopAnimation );




//motion blur
const container = document.getElementById("container");















// Post-processing inits
// var renderPass = new THREE.RenderPass( scene, camera );

// var copyPass = new THREE.ShaderPass( THREE.CopyShader );
// copyPass.renderToScreen = true;

// var composer = new THREE.EffectComposer( renderer );




// composer.render( 0.5);
// var effectFilm = new THREE.FilmPass( 0, 0, 0, false );
// effectFilm.renderToScreen = true;
// composer.addPass( effectFilm );

// render pass
// const renderPass = new THREE.RenderPass(scene, camera);

//     const renderTargetParameters = {
//     minFilter: THREE.LinearFilter,
//     magFilter: THREE.LinearFilter,
//     stencilBuffer: false
// };

// // save pass
// const savePass = new THREE.SavePass(
//   new THREE.WebGLRenderTarget(
//     container.clientWidth,
//     container.clientHeight,
//     renderTargetParameters
//   )
// );

// // blend pass
// const blendPass = new THREE.ShaderPass(THREE.BlendShader, "tDiffuse1");
// blendPass.uniforms["tDiffuse2"].value = savePass.renderTarget.texture;
// blendPass.uniforms["mixRatio"].value = 0.8;



// // output pass
// const outputPass = new THREE.ShaderPass(THREE.CopyShader);
// outputPass.renderToScreen = true;

// // adding passes to composer
// composer.addPass(renderPass);
// composer.addPass(blendPass);
// composer.addPass(savePass);
// composer.addPass(outputPass);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// let counter = 0;
// function render() {
//   composer.render();
//   requestAnimationFrame(render);

//   mesh.rotation.x += 0.02;
//   mesh.rotation.y += -0.02;
//   mesh.rotation.z += 0.03;
//   mesh.position.x += Math.sin(counter);
//   counter += 0.05;
// }

// render();



//motion blur end

  // make it responsive
  window.addEventListener('resize', () => {                          
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

//scene.background =;
const loader = new THREE.TextureLoader(); 
loader.load('images/PSstarfield2.jpg' , function(texture)
      {
       scene.background = texture;  
      });



var geometry= new THREE.BufferGeometry().fromGeometry(new THREE.SphereGeometry(0.5  ,5, 5))
//var material= new THREE.MeshLambertMaterial({color: 0xFFCC00})






const texture = new THREE.TextureLoader().load( 'images/asteroid3.jpg' );
var material= new THREE.MeshPhongMaterial( { map:texture} );
var mesh= new THREE.Mesh(geometry, material);
mesh.overdraw=false;

//material.map    = THREE.ImageUtils.loadTexture('images/asteroid.jpg',THREE.SphericalRefractionMapping);
var light= new THREE.DirectionalLight(0xFF4500, 1, 500)
light.position.set(-10,0,5);
scene.add(light); 

var light = new THREE.AmbientLight( 0x404040,1,300 ); // soft white light
light.position.set(10,0,5)
scene.add( light );
   

// mesh.position.set((window.innerWidth), (window.innerHeight), 0) //move object on x, y, z axes
//  mesh.position.set(window.innerWidth,window.innerHeight,0)
mesh.position.set(4,3,3)
//mesh.updateMatrix();

mesh.rotation.set(0,0,0) //rotate object on x, y, z axes
mesh.scale.set(1,1,1) //scale the object in the x, y, z dimensions

//scene.add(mesh);

function isEven(n) {
return n % 2 == 0;
}

function isOdd(n) {
return Math.abs(n % 2) == 1;
}


// for(var j =0; j<2;j++)
// {
//meshX = -20;
// if(mesh.position.y!=3) {
// mesh.visible=true
// }
// else {
// mesh.visible=false
// }
geometry = new THREE.SphereGeometry(0.5, 5, 5);

for (var i = 0; i < 100; i++) {
mesh = new THREE.Mesh(geometry.clone(), material);

meshes=[]


mesh.position.x = 2 + 5*Math.random()-5*Math.random()
meshxsp = mesh.position.x
mesh.position.y = 3
mesh.position.z = 4 



//console.log(scene.children)

//mesh.matrixAutoUpdate=true;
// mesh_num=   toString(document.write (i));
// mesh_text="this is mesh"
mesh.name="meshy";
// const group = new THREE.Group();
// group.add(mesh);
// console.log(group[2])
scene.add(mesh);

//meshX += 1;

var render = function () {
requestAnimationFrame(render);  
// if(mesh.position.y>=3) {
//   mesh.visible=false
// }
// else {
//   mesh.visible=true
// } 
scene.traverse( function(child) {
if(child instanceof THREE.Mesh) {
    if(child.position.y>=3) {
        child.visible = false
    } else {
        child.visible = true;
    }
    // if(child.position.y<=-window.outerHeight){
    // child.visible=false;
}});



//  this.mesh.rotation.x += 0.02;
//  this.mesh.rotation.y += -0.02;
//  //mesh.rotation.z += 0.03;
//  this.mesh.position.y +=0.03  *Math.random()*Math.cos(counter)
//  this.mesh.position.z +=0.04*Math.random()*Math.cos(counter)/2
//  //mesh.position.x +=0.2


//mesh.position.x += 0.2*Math.sin(counter);
// counter += 0.05;


//  this.tl.to(this.mesh.rotation, duration, {y:50*Math.PI},"+=-duration");
//  this.tl.to(this.mesh.rotation, duration, {x:50*Math.PI},"+=-duration");
//this.tl.to(this.mesh.rotation, duration, {x:2*Math.PI},"+=-duration");

// this.tl.to(this.mesh.rotation, duration, {x:10*Math.PI},"+=-duration");
//this.tl.to(this.mesh.rotation, duration, {y:10*Math.PI},"+=-duration");
//  this.tl.to(this.mesh.position, {y:+0.003*Math.random()*Math.cos(counter)},"+=-duration");
//  this.tl.to(this.mesh.position.z, {z:+0.04*Math.random()*Math.cos(counter)/2},"+=-duration")



//gets current timeScale
//  var currentTimeScale = tl.timeScale(); 

//sets timeScale to half-speed

renderer.render(scene, camera);
//render();

};

function stopAnimation() {

  cancelAnimationFrame( requestID );

}


this.tl = new TimelineMax({//repeat:10
}).delay(
5*Math.random()//.2+Math.random()           
);
this.tl.to("container",3, { top: '90px', });


document.getElementById("container").click(function(){
  this.tl.to.stop();
  
})
// this.tl.to(this.mesh.scale, 1, {x:3, ease: Expo.easeOut})
//this.tl.to(this.mesh.scale, .5, {x:.5, ease: Expo.easeOut})
var duration = 10


this.tl.to(this.mesh.position, duration, { x: (meshxsp - window.outerWidth) });
this.tl.to(this.mesh.position, duration, { y: -window.outerHeight }, "+=-duration");
this.tl.to(this.mesh.rotation, duration, {y: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")
this.tl.to(this.mesh.rotation, duration, {z: Math.PI*50*Math.random(), ease: Expo.easeOut}, "+=-duration")

tl.timeScale(0.01);

// camera.lookAt(mesh.position) 
// document.addEventListener('mousemove', (e) => {
//     camera.position.x = (e.x - (window.innerWidth / 2)) * 0.05;
//     camera.position.y = (e.y - (window.innerHeight / 2)) * 0.005})

//     camera.lookAt(mesh.position)  }
// //     // camera.lookAt(scene.position);
render.loop=false;
requestAnimationFrame(render);  
render();
}
//this.tl.to(this.mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
// });



// this.tl.timescale(0.5);
//this.tl.to(this.mesh.position, duration, {z:+window.innerHeight},"+=-duration");

// }
//this.tl.to(this.mesh.rotate, duration, {x:45, ease:Expo.easeOut}, "+=-duration");








//this.tl.to(this.mesh.rotate, duration, {x:45, ease:Expo.easeOut}, "+=-duration");


//this.tl.to(this.mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
