// var ar = [1, 2, 3, 4, 5, 6];
// var k = 5;
// var numberOfPairs = 0;
// var indeksi = [];

//  for( var i = 0; i <= ar.length -2; i++) {
//      for( var j = 1; j <= ar.length -1; j++) {
//         if((ar[i] + ar[j]) % k  === 0 ) {
//             if( i < j ) {
//                indeksi.push(ar[i]);
//                indeksi.push(ar[j]);
//                numberOfPairs++;
//             }     
//         }
//     }
// }     

//  console.log(indeksi);

// Deliver the solution in this format

// ar - array of numbers
// n - length of ar
// k - ar[i]+ar[j] should be devided by this number
 
function divisibleSumPairs( ar, k, n) {
    var numberOfPairs = 0;
     
    for( var i = 0; i <= ar.length -1; i++) {
             for( var j = 0; j <= ar.length -1; j++) {
                for( var m = 0; m <= ar.length -1; m++ )
                if((ar[i] + ar[j] + ar[m]) % k === 0 ) {
                    if( i < j && j < m ) {
                    numberOfPairs++;
                    }     
                }
            }
        }     
     
        return numberOfPairs;
}

var result = divisibleSumPairs([1, 2, 3, 4, 5, 6], 5, 2);
console.log(result)