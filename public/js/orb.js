AFRAME.registerComponent('switch-environment', {
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
        location.assign("menuRoom.html"); 

        //create Elements
        
        let scene = document.querySelector('#PeaceRoom');
    } //,
    // deleteMenu : function() {
    //     const Context_AF = this;
    //     location.assign("menuRoom.html"); 

    //     //create Elements
        
    //     let scene = document.querySelector('#PeaceRoom');
    // }
});