$( window ).on( "load", function() { 
    var min = true;

    $( "button" ).click( function() {
        if(min){
            $( "#BigLit" ).animate({
            width: "70%",
            height: "50%",
            opacity: 0.4,
           
            fontSize: "3em",
            borderWidth: "10px"
          }, 1500 );
           
        }
        else {
               $( "#BigLit" ).animate({
            width: "30%",
            height: "10%",
            opacity: 1,
          
            fontSize: "0em",

            borderWidth: "0px"
          }, 1500 );

        }
         min=!min;
    });

});
