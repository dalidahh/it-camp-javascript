// var num = 1;
// for (num = 1; i <= 20; i++) {

//    if (i % 3 === 0) {
//        console.log(num)
//    }}

// DOMACI: Napisati skriptu koja ce za dva uneta broja
// ispitati sve te brojeve izmedju ta dva broja
// ukljucujuci ta dva broja
// i ispisati u konzoli sledece
// - ako je broj deljiv sa 3 "fizz"
// - ako je broj deljiv sa 5 "buzz"
// - ako je broj deljiv i sa 3 i sa 5 "fizz buzz"

// na HTML stranici ispisati koliko puta se ispisao "fizz"
// koliko puta "buzz", a koliko puta "fizz buzz"

// for(i=a; i<=b; i++)

//var a;
//var b;
//var fizz = 0;
//var buzz = 0;
//var fizzbuzz = 0;

//document.getElementById("calculate").addEventListener("click", function () {
  //  a = +document.getElementById("broj1").value;
  //  b = +document.getElementById("broj2").value;

//    for ( i = 0 ; i <= a; i++ ) {
//       if ( i % 3 === 0 &&  i % 5 === 0) 
//    { console.log( i, "fizzbuzz");
//       fizzbuzz++;
//    }
//    else if ( i % 5 === 0 ) {
//       console.log ( i, "buzz");
//       buzz++;
//    }
//   else if ( i % 3 === 0) {
//        console.log ( i, "fizz");
//       fizz++;
//    }
// }
// document.getElementById("fizz").textContent = fizz;
// document.getElementById("buzz").textContent = buzz;
// document.getElementById("fizzbuzz").textContent = fizzbuzz;
//}) niz[i] element niza indeksa i


var niz = [1, 2, 4, 1, 1, 8, 1, 1, 2, 3];
var zbir = 0;

for( i = 0; i <= niz.length -1; i++) {
  if( niz[i] % 2 === 0 ) {
  
  } else {
    // niz[i] = Math.pow(niz[i], 2);
    niz[i] = niz[i] * niz[i];
  }
}

console.log(niz);

var niz = [1, 2, 4, 1, 1, 8, 1, 1, 2, 3];
var zbir = 0;

for( i = 0; i <= niz.length -1; i++) {
  if( niz[i] % 2 === 0 ) {
     niz[i] = "paran";
  } else {
    // niz[i] = Math.pow(niz[i], 2);
   // niz[i] = niz[i] * niz[i];
     //niz[i] = "neparan";
     el.textContent = "neparan";
  }
  niz[i] = el
}



console.log(niz);