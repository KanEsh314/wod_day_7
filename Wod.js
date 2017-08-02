var fbnci = [0, 1], max = 1000, index = 1, next;
var sum = 0;
do {
  index++;
  next = fbnci[index-2] + fbnci[index-1];
  if (next <= max) {
      fbnci[index] = next;
    if((next%2) == 0)
      {
        //798
        var display = sum += next;
      }
  }
} while(next < max);
document.write(display);