/*Add 5 at the end of the following array*/
var addArr = [1,2,3,4];
addArr.push(5)

/*Remove the last value of the following array*/
var removeArr = [1,2,3,4,5];
removeArr.pop()

/*Add 1 to the beginning of the following array*/
var addStartArr = [2,3,4,5];
addStartArr.unshift(1);

/*Remove the first value from the following array*/
var removeStartArr = [0,1,2,3,4];
addStartArr.shift();

/*Create a copy of the following array*/
var copyMe = [1,3,5,7,9];
copyMe.slice();

/*Remove a 3 from the following array*/
var removeThree = [1,2,3,3,4];
removeThree.splice(2, 1);

/*Add 2 to the following array*/
var addTwo = [1,3,4];
addTwo.splice(1, 0, 2);

/*Replace 7 with 3 in the following array*/
var replaceSeven = [1,2,7,4];
replaceSeven.splice(2, 1, 3);

/*Find the index of "foo" in the following array*/
var strings = ["me", "bar", "foo", "get"];
strings.indexOf("foo");
