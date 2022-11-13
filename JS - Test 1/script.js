var ar = [1, 2, 3, 4, 5, 6];
var k = 5;
var numberOfPairs = 0;
var indeksi = [];

// for( var i = 0; i <= ar.length -2; i++) {
//     for( var j = 1; j <= ar.length -1; j++) {
//         if( i < j && ((ar[i] + ar[j]) % k) === 0 ) {
//             if( !indeksi.includes(ar[i]) && !indeksi.includes(ar[j]) ) {
//               indeksi.push(ar[i]);
//               indeksi.push(ar[j]);
//               numberOfPairs++;   
//             }
//         }
//     }
// }

// console.log(indeksi); 

 for( var i = 0; i <= ar.length -2; i++) {
     for( var j = 1; j <= ar.length -1; j++) {
        if(((ar[i] + ar[j]) % k ) === 0 ) {
            if( i < j ) {
               indeksi.push(ar[i]);
               indeksi.push(ar[j]);
               numberOfPairs++;
            }     
        }
    }
}     

 console.log(indeksi); 