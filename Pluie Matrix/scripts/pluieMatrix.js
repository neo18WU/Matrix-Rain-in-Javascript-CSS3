// code créé par Alain Thomassigny - Janvier 2021 - www.artofnetwork.fr

var divMatrix = document.getElementById("matrix");

const tabJaponais = ["\u3006","\u4EDD","\u30FD","\u30FE","\u309D","\u309E","\u3003","\u3032","\u30F6","\u3012","/u3004"];
// creation du tableau multidimentionnel pour 10 chaines en variable global
var min=0;
var max=10;
var uniqueHasardMin = 0;
var uniqueHasardMax = 10;
const chaineJaponais = new Array();
	for (let i =0; i <10; i++)
	{
		chaineJaponais[i] = new Array();
	}
	for (let j=0; j <10; j++)
	{
			for (let i = 0; i < 18; i++)
			{
				var random = Math.floor(Math.random() * (max - min)) + min;
				var insertion = tabJaponais[random];
				chaineJaponais[j].push(insertion);
			}	
	}

// creation des gouttes
function pluie() {
	 //creation de dix chaines pour contenir les gouttes
	for (let i = 0; i < 10; i++)
	{

		
		divMatrix.insertAdjacentHTML("afterbegin","<div class=\"chaine\"></div>");

	}
	// Espace défini d'apparition des gouttes
	var minPlaceLeft = 0;
	var maxPlaceLeft = 1880;
	var minPlaceTop = -600;
	var maxPlaceTop = -400;
	

			
	// implementation des 10 class chaine avec les classes goutte
	var getGoutte = document.querySelectorAll(".chaine");
	for (let i = 0; i <10; i++)
	{
		var unique = Math.floor(Math.random() * (uniqueHasardMax - uniqueHasardMin)) + uniqueHasardMin;
		var unique2 = Math.floor(Math.random() * (uniqueHasardMax - uniqueHasardMin)) + uniqueHasardMin;
		var unique3 = Math.floor(Math.random() * (uniqueHasardMax - uniqueHasardMin)) + uniqueHasardMin;		
	getGoutte[i].innerHTML = "<p class=\"goutte\"><span class=\"goutte25\">5</span><span class=\"goutte50\">4</span><span class=\"goutteVerte\">"+chaineJaponais[i].join("")+"</span><span class=\"goutteGrise\">"+tabJaponais[unique2]+tabJaponais[unique3]+"</span><span class=\"goutteBlanche\">"+tabJaponais[unique]+"</span></p>";
	}
	// placement au hasard
	for (let i = 0; i < 10; i++) // pour les dix chaines
	{

		var randomPlaceLeft = Math.floor(Math.random() * (maxPlaceLeft - minPlaceLeft)) + minPlaceLeft;
		var randomPlaceTop = Math.floor(Math.random() * (maxPlaceTop - minPlaceTop)) + minPlaceTop;
		var divChaine = document.querySelectorAll(".goutte");

		divChaine[i].style.left = randomPlaceLeft+"px";
		divChaine[i].style.top = randomPlaceTop+"px";
	}
	// definition du temps de chute pour chaque goutte
	
		for (let k = 0; k <10; k++)
		{
			var temps = 10;
			divChaine[k].style.animation = "travelMatrix "+(temps+(k*4))+"s";
			divChaine[k].style.animationFillMode = "forwards";
		}	
	
	
}
	
	// renouvellement des elements dnas le tableau
function charChange() {
		var minr1=0;
		var maxr1=10;
		var maxr2=18;
	for(let i = 0; i < 100; i++)
	{
		//recuperation de la goutte verte à modifier
		var divGoutte = document.querySelectorAll(".goutte");

		var goutteVerte = document.querySelectorAll(".goutteVerte");	
		var verteToChange = new Array();
		var maxrGoutte = goutteVerte.length;
		var random1 = Math.floor(Math.random() * (maxrGoutte - minr1)) + minr1;
		//une goutte au hasard, recuperation de la chaine
		verteToChange = goutteVerte[random1].textContent;
		var arr = verteToChange.split("");
		//modification du char
		var random2 = Math.floor(Math.random() * (maxr2 - minr1)) + minr1;
		var random3 = Math.floor(Math.random() * (maxr1 - minr1)) + minr1;
		arr.splice(random2, 1, tabJaponais[random3]);
		var resultGreen = arr.join("");
		
		// aleatoire des gouttes blanches
		var randomB = Math.floor(Math.random() * (max - min)) + min;
		var goutteBlanche = tabJaponais[randomB];
			// aleatoire des gouttes grises
		var gouttesGrises = tabJaponais[(randomB%2)+3]+tabJaponais[randomB%3];
			// aleatoire gouttes 50
		var gouttes50 = tabJaponais[(randomB%3)+2]+tabJaponais[randomB%2]+tabJaponais[(randomB%3)+1]+tabJaponais[(randomB%2)+5];
					// aleatoire gouttes 25
		var gouttes25 = tabJaponais[randomB]+tabJaponais[(randomB%2)+4]+tabJaponais[randomB%3];
		
		//implementation
		divGoutte[random1].innerHTML = "<span class=\"goutte25\">"+gouttes25+"</span><span class=\"goutte50\">"+gouttes50+"</span><span class=\"goutteVerte\">"+resultGreen+"</span><span class=\"goutteGrise\">"+gouttesGrises+"</span><span class=\"goutteBlanche\">"+goutteBlanche+"</span>";
	}	

}
// destruction des div pour eviter la saturation

function destruction() {
		var getDestruction = document.getElementById("matrix");
		var chaineDestruct = document.querySelectorAll(".chaine");
		
		var tailleDestruct = chaineDestruct.length;
		console.log("avant"+tailleDestruct);
		var demiTaille = (tailleDestruct/2);
		if ((demiTaille%5 == 0)&&(demiTaille%2 != 0))
				{
					demiTaille = demiTaille-5;
				}			
		if (tailleDestruct > 200)//39
		{
			for (let i = demiTaille; i < tailleDestruct; i++)//30 40
			{
				chaineDestruct[i].style.animation = "outMatrix 2s";
				chaineDestruct[i].style.animationFillMode = "forwards";				 
			}
			function remove() {
				
				var getDestruction = document.getElementById("matrix");
				var chaineDestruct = document.querySelectorAll(".chaine");
			
				var tailleDestruct = chaineDestruct.length;
			
				var demiTaille = (tailleDestruct/2);
				if ((demiTaille%5 == 0)&&(demiTaille%2 != 0))
				{
					demiTaille = demiTaille-5;
				}
				
				for (let i = demiTaille; i < tailleDestruct; i++)//30 40
				{
				getDestruction.removeChild(chaineDestruct[i]);
				console.log("aprés"+tailleDestruct);
				}
			}						
			setTimeout(remove, 2000);
		}		
}

// demarrage des ressources
pluie();
var pluie = setInterval(pluie, 1000);
//var pluie = setInterval(pluie, 1000);
//var pluie = setInterval(pluie, 1000);
//var pluie = setInterval(pluie, 1000);
setInterval(destruction, 3000);
//demarrage renouvellement tableau	
var go = setInterval(charChange, 1);
