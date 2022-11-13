// TEKST ZADATKA //
/*
Naci broj slova iz datog teksta (loremIpsumText)
*/

// 1. Izdvojiti iz teksta sve karaktere
//var charactersInText = loremIpsumText.split(""); // niz svih karaktera u tekstu (ukljucujuci tacku, zarez i razmak)
// console.log(charactersInText);

// 2. Filtrirati niz i iz njega izbaciti tacke, zareze, razmake i prazne stringove
// if(slovo !== '' && slovo !== ' ' && slovo !== '.' && slovo !== ',')
// 3. Izbrojati koliko taj dobijeni niz ima elemenata

var loremIpsumText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book! It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var recenice = loremIpsumText.split(".");
var rijeci = loremIpsumText.split(" ");
var charactersInText = [];

console.log ("Rečenice", recenice);
console.log ("Riječi", rijeci);

for( var i = 0; i <= loremIpsumText.length -1; i++ ){
     if( loremIpsumText[i]!=="." && loremIpsumText[i]!=="," && loremIpsumText[i]!=="!" && loremIpsumText[i]!==" " && loremIpsumText[i]!=="'"){
        charactersInText.push(loremIpsumText[i])
    }
  }

  console.log("Tekst sadrži " + charactersInText.length + " slova.");
  console.log("Slova", charactersInText);


  // var arr = [9, 2, 3, 4, 5, 8, 421, -84, 6];
  // var indeksi = [];

  // for( var i = 0; i <= arr.length -2; i++) {
  //   for( var j = 1; j <= arr.length -1; j++) {
  //     if(arr[i] + arr[j] === 10) {
  //     indeksi.push(i);
  //     indeksi.push(j);
  //     break;
  //     }
  //   }
  //   if (indeksi.length === 2) {
  //     break;
  //   }
  // }

  // console.log(indeksi);
