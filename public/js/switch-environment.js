AFRAME.registerComponent('go-to-mountain-room', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            Context_AF.switchEnv1();


        });
    },
    switchEnv1 : function() {
        const Context_AF = this;
        location.assign("AngerRoom.html"); 
        
        let scene = document.querySelector('#AngerRoom');
    }
});

AFRAME.registerComponent('go-to-euphoria-room', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            Context_AF.switchEnv3();


        });
    },
    switchEnv3 : function() {
        const Context_AF = this;
        location.assign("euphoriaRoom.html"); 
        
        
    }
});

AFRAME.registerComponent('go-to-menu-room', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            Context_AF.switchEnv3();


        });
    },
    switchEnv3 : function() {
        const Context_AF = this;
        location.assign("menuRoom.html"); 
        
        
    }
});

