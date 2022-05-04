const ftoc = function (f) {
  /* let neg = false
   if (f < 0) {
     neg = true
     f = f * -1
   }
 */
  let result = (f - 32) * (5 / 9)


  /* if (neg == true) {
    result = result * -1
  }
*/
  return parseFloat(result.toFixed(1))

};

const ctof = function (c) {
  /*let neg = false
  if (c < 0) {
    neg = true
    c = c * -1
  }
*/
  let result = c * (9 / 5) + 32

  /*
    if (neg == true) {
      result = result * -1
    }
  */
  return parseFloat(result.toFixed(1))

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
