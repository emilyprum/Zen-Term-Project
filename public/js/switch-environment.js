    AFRAME.registerComponent('switch-environment', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('mousedown', function(event) {
           
            console.log("mousedown");
            Context_AF.changeEnv();

        });
    },
    changeEnv : function() {
        const Context_AF = this;
        location.replace("angerRoom.html");
        
    }
});