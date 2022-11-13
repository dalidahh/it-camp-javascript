var arr = ["Muhamed", "Haris", "Davud", "Mustafa"];

// var result = "";
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (i !== 0) {
//     result = result + "-" + arr[i];
//   } else {
//     result = result + arr[i];
//   }
// }

console.log(arr.join(".")); // pretvara niz u string

var text = "Muhamed.Haris.Davud.Mustafa";

console.log(text.split(".")); // pretvara string u niz
console.log(" ========================== ");

var loremIpsumText =
  "Integer commodo lacus non consectetur gravida. Donec velit nisl, tempor vel rutrum id, gravida sit amet arcu. Aenean lobortis est sed nisi vehicula, ut pellentesque elit tempus. Aenean tristique nisl erat. Sed sit amet dapibus erat. Nam ac purus ante. Nunc non dapibus ligula. Nunc fermentum pharetra consequat. Morbi in nulla metus. Donec sagittis lacinia enim. Cras pulvinar laoreet hendrerit. Sed est mi, viverra vel pellentesque euismod, varius eu mauris. Ut rutrum ipsum dui, a sodales justo porttitor ut. Integer pulvinar est vitae nisl sodales, eu interdum ligula ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos";

var recenice = loremIpsumText.split("."); // niz
var reci = loremIpsumText.split(" "); // niz

console.log("Recenice", recenice);
console.log("Reci", reci);

console.log("Dati tekst ima " + recenice.length + " recenica");
console.log("Dati tekst ima " + reci.length + " reci");

// array metoda "join" pretvara array u string
// string metoda "split" pretvara string u array

var arr = [1, 2, true, "test", undefined, 5, "test 1234"];

var numbers = [];
var texts = [];
var booleans = [];
var undefined = [];
var izabrani 

for ( var i = 0; i <= arr.length -1; i++){
    izabrani = arr[i]
    if(typeof arr[i] === "number"){
        numbers.push(izabrani)
    }
    else if(typeof arr[i] === "string"){
        texts.push(izabrani)
    }
    else if(typeof arr[i] === "boolean"){
        booleans.push(izabrani)
    }
    else if(typeof arr[i] === "undefined"){
        console.log("Element niza arr sa indeksom " + i + " je undefined")
    }
}

console.log(numbers);
console.log(texts);
console.log(booleans);

// type of ===> "number" | "string" | "boolean" | "undefined"
// uzima sve elemenete niza pretvara ih u string gdje ce izmedju svakog elementa nesto dodati = metoda za niz "join" pretvara niz u string

//text.split pretvara string u niz

var loremIpsumText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var recenice = loremIpsumText.split(".");
var rijeci = loremIpsumText.split(" ");

console.log ("Recenice", recenice);
console.log ("Rijeci", rijeci);

console.log("Data recenica ima " + recenice.length + " recenica.")
console.log("Data recenica ima " + rijeci.length + " rijeci.")

var charactersInText = loremIpsumText.split("");

