AFRAME.registerComponent('switch-environment', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
           
            Context_AF.switchEnv();

        });
    },
    switchEnv : function() {
        const Context_AF = this;
        location.replace("angerRoom.html"); 
        
    }
});