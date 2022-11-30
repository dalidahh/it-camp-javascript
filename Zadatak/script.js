arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(arr) {
    var phoneNumber = "";
    for(var i = 0; i <= arr.length -1; i++){
        if(i === 0){
            phoneNumber = phoneNumber + "("
        }

        phoneNumber = phoneNumber + arr[i];

        if(i === 2){
            phoneNumber = phoneNumber + ")"
        }
        if(i === 5){
            phoneNumber = phoneNumber + "-"
        }
    }
    return phoneNumber
}

console.log(createPhoneNumber9(arr));

// //////////////////////////////////////////////////////////////////////////////////////////////////

function doInvert(arr) {
        for(var i = 0; i < invert.length; i++){
            arr[i] = (-1) * arr[i];
        }
        return arr;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function numbers(arr) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i <= arr.length -1; i++){
        if (arr[i] > 0){
            count++;
        }
        else if (arr[i] < 0){
            sum += arr[i];
        }     
    }
    return [count, sum];
}

console.log(numbers(arr))

//////////////////////////////////////////////////////////////////////////////////////////////////

var arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, num){
    var newArr = [];
    if( num === undefined){
        num = 1;
    }
    for( var i = 0; i < num; i++ ){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(first(arr, 2))

 /////////////////////////////////////////////////////////////////////////////////////////////////////

function sortByLength (array) {
    for (var i = 0; i <= arr.length - 2; i++) {
        for (var j = i + 1; j <= arr.length - 1; j++) {
            if (array[i].length < array[j].length) {
                var pom = arr[i];
                arr[i] = arr[j];
                arr[j] = pom;
            }
        }
    }
 return array;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function dontGiveMeFive (start, end){
    var count = 0

    for(var i = start; i <= end; i++){
        var numString = " " + i;   
        // String(i)
        // "" + 5 ===> "5"
        if(!numString.includes("5")) {
            count++
        }
    }
    return count;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function min(arr, toReturn){
    var minimum = arr[0];
    for ( var i = 1; i <= arr.length -1; i++){
        if(arr[i] < minimum){
            minimum = arr[i];
            minIndex = i;
        }
    }
    if(toReturn === "index"){
        return minIndex;
    }
    else if ( toReturn === "value")
        return minimum;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function wave(str) {
    var wavedStrings = [];
    for( var i = 0; i <= str.length -1; i++){
        var word = str.toLowerCase(); // metoda koja sa slova u stringu pretvara u mala slova
        var letters = word.split(""); // "hello".split("") ===> ["h", "e", "l", "l", "o"]
        if(letters[i] === " "){
            continue;
        }
        letters[i] = letters[i].toUpperCase(); // metoda koja  pretvara da slova budu velika
        word = letters.join("");
        wavedStrings.push(word);
    }
    return wavedStrings;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function twoOldestAges(arr){

    for (var i = 0; i <= arr.length - 2; i++){
      for (var j = i + 1; j <= arr.length - 1; j++) {
         if (arr[j] < arr[i]) {
          var pom = arr[i];
          arr[i] = arr[j];
          arr[j] = pom;
        }
       }
    }
    return(arr[1],arr[0]);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkExam(arrOne, arrTwo) {
   var points = 0
   for( var i = 0; i <= arrOne.length; i++){
    if (arrTwo[i] === ""){
        continue;
    }
    if (arrOne[i] === arrTwo[i]){
        points += 4;
    } else {
        points -= 1;
    }
    if (points < 0) {
        return 0;
      }
    }
      return points;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isSorteAndHow(array) {
    var typeOfSort;
    if(array[0] < array[1]){
        typeOfSort = "yes, ascending";
    } else if(array[0] > array[1]){
        typeOfSort = "yes, descending"
    } else{
        typeOfSort = "no";
        return typeOfSort;
    }
    for( var i = 1; i <= array.length -1; i++){
    if(typeOfSort === "yes, ascending" && array[i-1] > array[i]){
        typeOfSort = "no";
        break;
    }
    if(typeOfSort === "yes, descending" && array[i-1] < array[i]){
        typeOfSort = "no";
        break;
    }
    }
    return typeOfSort;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
    var result= true;
  for(var i = 0; i < limit.length; i++){
    if ( a[i] > limit ){
        result = false;
        break;
    }      
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

