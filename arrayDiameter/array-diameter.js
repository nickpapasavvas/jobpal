/*
The function presumes that it receives an array of numbers (int)
it does not handle cases where the array contains other data types such as
null, undefined, strings, objects, etc.
It is also presumed that the array does not contain holes (eg: [1, ,2])
If the user story wants that cases to be covered, tell me and I will add them
*/
function getDiameter(array) {
  if (array.length >= 2) {
    let vMax = (vMin = array[0]);
    array.forEach(v => {
      if (v > vMax) vMax = v;
      if (v < vMin) vMin = v;
    });
    return vMax - vMin;
  } else {
    return "Array should contain at least two integers";
  }
}

module.exports = getDiameter;
/*
                                          STEPS
if (array.length >= 2) {          1 comparison
  let vMax = (vMin = array[0]);   1 retrieval of an array value, 2 assignments

                                  In the worst case scenario eg [..10,..1] the assignment
                                  of the first if will never happen, but the assignment of
                                  the second will happen n-1 times so:
  array.forEach(v => {
    if (v > vMax) vMax = v;       n comparisons + 0    assignments
    if (v < vMin) vMin = v;       n comparisons + n -1 assignments
  });
  return vMax - vMin;             1 abstraction
}

So the total steps are: 1 + 1 + 2 + n + n + n - 1 =  3n+3
and the time complexity of the function is linear O(N)
*/
