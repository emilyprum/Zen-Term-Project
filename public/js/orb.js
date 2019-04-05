AFRAME.registerComponent('menu-orb', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            Context_AF.loadMenu();

            // Context_AF.el.addEventListener('mousedown', function(event){
            //     console.log("delete menu");
            //     Context_AF.deleteMenu();
            // });

        });
    },
    loadMenu : function() {
      
        const Context_AF = this;

    
        let ExitMenu = document.createElement('a-entity');
        ExitMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/exit_OBJ.obj'});
        ExitMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/ExitTXT.png'}, {transparent: true} );
        ExitMenu.setAttribute('position', {x:-0.242, y:3.6, z:-18.5});
        ExitMenu.setAttribute('rotation', {x:0, y:0, z:0});
        ExitMenu.setAttribute('scale', {x:1, y:1, z:1});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(ExitMenu);




    } //,
    // deleteMenu : function() {
    //     const Context_AF = this;
    //     location.assign("menuRoom.html"); 

    //     //create Elements
        
    //     let scene = document.querySelector('#PeaceRoom');
    // }
});