window.onload = function(){
   // document.getElementById("patata").innerHTML=velocidad(5,1);
  
   
   document.getElementById("DesApareceRojo").onclick =function()
    										{

    											 document.getElementById('divRed').style.display = ' none';
    										};
    document.getElementById("EscondeAzul").onclick =function()
    										{
    											var x = document.getElementsByClassName("blueClass");
    											x[0].style.display = " none";
    											x[1].style.display = " none";
    										
    										};

	document.getElementById("EliminaDiv").onclick =function()
    										{
    										var element = document.getElementsByTagName(div);
    										 /*
    										  for ( i = 0 - 1; i <4; i++i) {
    										  		element[i].remove();
    										  	}	
    										  //element.remove();										 
    										};
    										
   
}