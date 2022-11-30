// // Deliver the solution in this format

// // Math.abs(1-2) // === 1
// // Math.abs(2-1) // === 1

// function checkElementInSubArr(sArr, num){
//  var isElementOk = 0
//     for( var i = 0; i <= sArr.length -1 ; i++){
//         for( var j = i + 1; j <= sArr.length -1; j++){
//             if(Math.abs(sArr[i] - sArr[j]) <= num){
//                 isElementOk++;
//             }
//         }
//     }
//     return isElementOk;
// }

// // // a - array of numbers
// function pickingNumbers(a) {
// 		var lengthOfLongestSubarray = 0;

// 		for( var i = 0; i <= a.length -1; i++){
//             var subArr = []
//             subArr.push(a[i]);
//             for( var j = i + 1; j <= a.length -1; j++){
//                 var isNumOk = checkElementInSubArr(subArr, a[j]);
//             }
//             if(subArr.length > lengthOfLongestSubarray){
//                 lengthOfLongestSubarray = subArr.length;
//             }
//         }
		
// 		return lengthOfLongestSubarray;
// }

var a = [1,1,2,2,4,4,5,5,5];
var k = 1;
var isElementOk = 0;

for( var i = 0; i <= a.length -1 ; i++){
            for( var j = i + 1; j <= a.length -1; j++){
                if(Math.abs(a[i] - a[j]) <= k){
                    isElementOk++;
                }
            }
        }
        
console.log(isElementOk);

