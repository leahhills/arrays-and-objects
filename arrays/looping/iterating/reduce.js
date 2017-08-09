/*Using reduce get the total of the following array*/
var totalArr = [1,2,3,4,5,6,7,10,20,50].reduce(function(prev,current)
{
  return prev + current;
},0);

/*Using reduce calculate the total of only the negative numbers of this array*/
var totalArr = [1,2,-3,4,-5,6,7,-10,-20,50].reduce(function(prev,curr){
  if (curr < 0){
    return prev + curr;
  }
 else{
   return prev;
 }
},0);

//reduce the following nested array to a flat array containing all the Values
var nestedArr =[[1,2],[3,4],[5,6]];
nestedArr.reduce(function(flatArr,current){
  return flatArr.concat(current);
}, []);
