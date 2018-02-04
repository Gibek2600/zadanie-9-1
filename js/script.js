
function getTriangleArea(a, h){
	if (a ,h == 0){
	console.log("nieprawidłowe dane");
	}
	else {
		return a*h/2;
	}

}
console.log(getTriangleArea(10, 6));

/*Jeśli chodzi o podpunkt 5 z zadania to nie wiem czy dobrze to zinterpretowałem*/

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(3,16);
var triangle3Area = getTriangleArea(6,67);
console.log('Pole trójkąta 1 to ' + triangle1Area);
console.log('Pole trójkąta 2 to ' + triangle2Area);
console.log('Pole trójkąta 3 to ' + triangle3Area);