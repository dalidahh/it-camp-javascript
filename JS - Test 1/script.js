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

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    var numberOfPairs = 0;
     
    for( var i = 0; i <= ar.length -2; i++) {
             for( var j = 1; j <= ar.length -1; j++) {
                if((ar[i] + ar[j]) % k === 0 ) {         // if(( i < j && ar[i] + ar[j]) % k === 0 )
                    if( i < j ) {
                    numberOfPairs++;
                    }     
                }
            }
        }     
     
        return numberOfPairs;
}

    var result = divisibleSumPairs(1, 2, [1, 2, 3]);
console.log(result)
  
  // ar.lenght - broj elemenata u nizu
  // ar[1] - element niza ar na indeksu 1
  // ar[ar.length -1] - vrednost poslednjeg elementa u nizu (length i indeks zadnjeg se razlikuju za jedan)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// function divisibleSumPairs( ar, k, n) {
//     var numberOfPairs = 0;
     
//     for( var i = 0; i <= ar.length -1; i++) {
//              for( var j = 0; j <= ar.length -1; j++) {
//                 for( var m = 0; m <= ar.length -1; m++ )
//                 if((ar[i] + ar[j] + ar[m]) % k === 0 ) {
//                     if( i < j && j < m ) {
//                     numberOfPairs++;
//                     }     
//                 }
//             }
//         }     
     
//         return numberOfPairs;
// }

// var result = divisibleSumPairs([1, 2, 3, 4, 5, 6], 5, 2);
// console.log(result)