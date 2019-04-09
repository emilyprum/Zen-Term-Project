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
        ExitMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/ExitTXT.png'} );
        ExitMenu.setAttribute('position', {x:-0.05, y:3.7, z:-18.5});
        ExitMenu.setAttribute('rotation', {x:0, y:0, z:0});
        ExitMenu.setAttribute('scale', {x:1, y:1, z:1});
        
      
        



        let BackToMenu = document.createElement('a-entity');
        BackToMenu.setAttribute('go-to-menu-room',{});
        BackToMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/backToMenu_OBJ.obj'});
        BackToMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/BackToMenuRoomTXT.png'} );
        BackToMenu.setAttribute('position', {x:-0.205, y:3.7, z:-18.5});
        BackToMenu.setAttribute('rotation', {x:0, iy:0, z:0});
        BackToMenu.setAttribute('scale', {x:1, y:1, z:1});

        let DuoTalkMenu = document.createElement('a-entity');
        DuoTalkMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/duoTalk_OBJ.obj'});
        DuoTalkMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/duoTalkTXT.png'} );
        DuoTalkMenu.setAttribute('position', {x:-0.05, y:5, z:-18.5});
        DuoTalkMenu.setAttribute('rotation', {x:0, y:0, z:0});
        DuoTalkMenu.setAttribute('scale', {x:1, y:1, z:1});
        

        let meditateMenu = document.createElement('a-entity');
        meditateMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/meditate_OBJ.obj'});
        meditateMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/meditateTXT.png'} );
        meditateMenu.setAttribute('position', {x:-0.205, y:5, z:-18.5});
        meditateMenu.setAttribute('rotation', {x:0, y:0, z:0});
        meditateMenu.setAttribute('scale', {x:1, y:1, z:1});



        let scene = document.querySelector('a-scene');
        scene.appendChild(ExitMenu);
        scene.appendChild(BackToMenu);
        scene.appendChild(DuoTalkMenu);
        scene.appendChild(meditateMenu);




    } //,
    // deleteMenu : function() {
    //     const Context_AF = this;
    //     location.assign("menuRoom.html"); 

    //     //create Elements
        
    //     let scene = document.querySelector('#PeaceRoom');
    // }
});


//moutainRoom Orb

AFRAME.registerComponent('mountain-orb', {
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
        ExitMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/ExitTXT.png'} );
        ExitMenu.setAttribute('position', {x:-4.54, y:12.88, z:11.87});
        ExitMenu.setAttribute('rotation', {x:0, y:0, z:0});
        ExitMenu.setAttribute('scale', {x:1, y:1, z:1});
        
      
        



        let BackToMenu = document.createElement('a-entity');
        BackToMenu.setAttribute('go-to-menu-room',{});
        BackToMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/backToMenu_OBJ.obj'});
        BackToMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/BackToMenuRoomTXT.png'} );
        BackToMenu.setAttribute('position', {x:-4.94, y:12.88, z:11.87});
        BackToMenu.setAttribute('rotation', {x:0, iy:0, z:0});
        BackToMenu.setAttribute('scale', {x:1, y:1, z:1});

        let DuoTalkMenu = document.createElement('a-entity');
        DuoTalkMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/duoTalk_OBJ.obj'});
        DuoTalkMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/duoTalkTXT.png'} );
        DuoTalkMenu.setAttribute('position', {x:-4.54, y:14.3, z:11.87});
        DuoTalkMenu.setAttribute('rotation', {x:0, y:0, z:0});
        DuoTalkMenu.setAttribute('scale', {x:1, y:1, z:1});
        

        let meditateMenu = document.createElement('a-entity');
        meditateMenu.setAttribute('sound', {src:'/assets/Sounds/ElevationRoom/AngerRoomScript.mp3', on:'click', volume:30} );

        meditateMenu.setAttribute('obj-model', {obj:'/assets/OrbMenu/meditate_OBJ.obj'});
        meditateMenu.setAttribute('material', {src:'/assets/Textures/OrbMenu/meditateTXT.png'} );
        meditateMenu.setAttribute('position', {x:-4.94, y:14.3, z:11.87});
        meditateMenu.setAttribute('rotation', {x:0, y:0, z:0});
        meditateMenu.setAttribute('scale', {x:1, y:1, z:1});



        let scene = document.querySelector('a-scene');
        scene.appendChild(ExitMenu);
        scene.appendChild(BackToMenu);
        scene.appendChild(DuoTalkMenu);
        scene.appendChild(meditateMenu);




    } //,
    // deleteMenu : function() {
    //     const Context_AF = this;
    //     location.assign("menuRoom.html"); 

    //     //create Elements
        
    //     let scene = document.querySelector('#PeaceRoom');
    // }
});