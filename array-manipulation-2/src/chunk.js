/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var theArray = array;
  console.log('value of the array',theArray);
  count = 0;
  for (var i = count; i < theArray.length; i = i + size) {
      newArray.push(theArray.slice(i, size+1));
    console.log('value of ', theArray.slice(i, size+1))
      count += size;
    console.log('value of i anc ount',i,count);

    }
    console.log(newArray);
  }
