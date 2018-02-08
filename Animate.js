  var idPokemon=1 ;


$( window ).on( "load", function() { 
    var min = true;
  
    getPokemon(idPokemon);

    $( "#maxMin"  ).click( function() {
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


     $( "#last" ).click( function() {
        if(idPokemon> 1){
            idPokemon-=1;
            getPokemon(idPokemon);
        }

    });
      $( "#Next" ).click( function() {
        idPokemon+=1;
         getPokemon(idPokemon);
    
    });

      $( "#Search" ).click( function() {
       
       idPokemon=$("#idSearch").val();


         getPokemon(idPokemon);
         $("#idSearch").val(" ");
     
    
    });
        



        


});

  function getPokemon(idPokemon){
        $.get( " https://www.pokeapi.co/api/v2/pokemon/"+idPokemon+"/",  function( data ) {
          // data = data received
          // as we used the "json" argument at the end, data is parsed JSON
          $("#ID").html(data.id);
          
          $("#nameP").html( data.name);
          $("#type").html(data.types[0].type.name)
          $("#Shiny").html("<img src="+ data.sprites.front_shiny+">")
          $("#Normal").html("<img src="+ data.sprites.front_default+">")


   
        }, "json" );

 


     }
