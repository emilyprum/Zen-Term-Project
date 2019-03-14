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
        location.assign("angerRoom.html"); 
        
        let scene = document.querySelector('a-scene');
    }
});