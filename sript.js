//CHUNK
let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
let newarr=_.chunk(arr, 3)
console.log("below array is divided array of above array into 3 parts using chunk command from Loadash")
console.log(newarr)
  //******************************************************************************************* */
//FIND
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
   console.log(users)
  // The `_.property` iteratee shorthand.
  let actuser=_.find(users, 'active');
  // finding active users in array
  console.log("below object is found using find command in Loadash by keeping condition as users:active")
  console.log(actuser)

  //******************************************************************************************* */

//REDUCE
  let red=_.reduce([50, 60, 75], function(sum, n) {
    return sum + n;
  }, 0);
  // => 185

  console.log(red)

//******************************************************************************************* */

//SUM
let arr1=[50,75,185,456,12,3,0]
let add=_.sum(arr1);
console.log(arr1)
// =>781
console.log("Below value is addition of above array using sum in Loadash ")
console.log(add)

//******************************************************************************************* */

//FILTER

// The `_.matches` iteratee shorthand.
let filterAgeActive=_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

console.log(filterAgeActive)
 
// The `_.matchesProperty` iteratee shorthand.
let filterActive=_.filter(users, ['active', false]);
// => objects for ['fred']
console.log(filterActive)