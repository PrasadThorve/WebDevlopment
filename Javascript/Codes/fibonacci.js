function fibonacciGenerator(n,  ans = []) {
  //Do NOT change any of the code above 👆
  //Write your code here:


  console.log("hii...");
  var i = 0;
  while (i <= n) {
    if (i === 0) {
      ans.push(0);
    }
    if (i === 1) {
      ans.push(1);
    }

    if (n >= 2) {
      var prev1 = 0;
      var prev2 = 1;
      var curr = 0;
      for (var i = 2; i < n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
      }
      ans.push(curr);
    }
    // console.log(curr);
    i++;
  }
  console.log("")
  console.log(ans);

  //Return an array of fibonacci numbers starting from 0.
  //Do NOT change any of the code below 👇
}

var empty = [];
var ans = fibonacciGenerator(3,empty );
console.log(empty);
