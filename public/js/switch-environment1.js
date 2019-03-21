AFRAME.registerComponent('switch-environment1', {
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



