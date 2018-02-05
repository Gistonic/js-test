

window.onload = function(){
    document.getElementById("patata").innerHTML=velocidad(5,1);
    document.getElementById("b1").onclick =function()
    										{
    											alert(3);
    										};
}


function cuadradoNumeroDado(num)
{
	return num*num;
}

//-- Verificar si un número es para o impar.

function EsPar(num)
{
	if(num % 2 == 0) return true;
	return false;
}
//-- Calcular si los lados dados pertenecen a un rectángulo o a un cuadrado.
function EsCuadrado(c1,c2)
{
	if(c1===c2)return true;
	return false;
}
//-- Calcular el factorial de un número dado.
function factorialRecursivo (n) { 
    	if (n == 0){ 
    		return 1; 
    	}
   return n * factorialRecursivo (n-1); 
 }
 //Crear una función que calcule la velocidad de una bala (en metros).
function velocidad(tiempo,desplazamiento)
{
	return desplazamiento/tiempo;
}

//-- Crear una función que evalúe cuál de 4 números es el mayor.
function maxNum(n1,n2,n3,n4)
{
	return Math.max(n1,n2,n3,n4); 
}


//-- Calcular el MCM y MCD de un número.

//Calcular maximo comun divisor: El máximo común divisor es el mayor número entero por el cual dos numeros son divisibles sin dejar resto.
 function mcd (a,b) {
  return (b===0) ? a:mcd(b, a%b);
}

//Calcular mcm por el Algoritmo de Euricles: mcm = a*b/mcd(a,b);
 function mcm (a, b)
{ 
  return a*b/mcd(a,b);
}

//-- Crear una función que ejecute otra función.
function hipotenusa(c1,c2)
{
	return Math.sqrt(cuadradoNumeroDado(c1)+ cuadradoNumeroDado(c2));
}
