$( window ).on( "load", function() { 
    var min = true;
    var idPokemon=1 ;

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

        
        $.get( " https://www.pokeapi.co/api/v2/pokemon/"+idPokemon+"/",  function( data ) {
          // data = data received
          // as we used the "json" argument at the end, data is parsed JSON
          $("#ID").prepend(data.id);
          
          $("#nameP").append( data.name);
          $("#type").append(data.types[0].type.name)
          $("#Shiny").append("<img src="+ data.sprites.front_shiny+">")
          $("#Normal").append("<img src="+ data.sprites.front_default+">")

         // alert(data.name);
          /*
            if we have received {name:"john"}, data.name = john

            if the object is like [{name:"john"}], to retrieve "john" we would 
                need data[0].name

            if the object is like {name:["john","chris"]}, to get "chris" we 
                would need data.name[2]
          */
          
        }, "json" );


});
