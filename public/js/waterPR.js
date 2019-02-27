Sea = function(){

    // create the geometry (shape) of the cylinder;
      // the parameters are: 
      // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
    var geom = new THREE.CylinderGeometry(600,600,800,40,10);
  
    // rotate the geometry on the x axis
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    geom.mergeVertices();
    var l = geom.vertices.length;
  
    this.waves = [];
  
    for (var i=0;i<l;i++){
      var v = geom.vertices[i];
      this.waves.push({y:v.y,
                       x:v.x,
                       z:v.z,
                       ang:Math.random()*Math.PI*2,
                       amp:5 + Math.random()*15,
                       speed:0.016 + Math.random()*0.032
                      });
    };
  
    // create the material 
    var mat = new THREE.MeshPhongMaterial({
      color:Colors.blue,
      transparent:true,
      opacity:.8,
      shading:THREE.FlatShading,
  
    });
  
    // To create an object in Three.js, we have to create a mesh 
      // which is a combination of a geometry and some material
    this.mesh = new THREE.Mesh(geom, mat);
  
    // Allow the sea to receive shadow
    this.mesh.receiveShadow = true;
  
  }