AFRAME.registerComponent('switch-environment', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            Context_AF.switchEnv();


        });
    },
    switchEnv : function() {
        const Context_AF = this;
        location.assign("menuRoom.html"); 
        
        let scene = document.querySelector('#PeaceRoom');
    }
});

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

AFRAME.registerComponent('go-to-zen-room', {
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
        location.assign("index.html"); 
        
        let scene = document.querySelector('#AngerRoom');
    }
});

AFRAME.registerComponent('in-env-orb', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mouseover', function(event) {
            console.log("mouseover");
            Context_AF.loadmMenu();


        });
    },
    loadmMenu : function() {
        const Context_AF = this;
        location.assign("index.html"); 
        
        let scene = document.querySelector('#AngerRoom');
    }
});
