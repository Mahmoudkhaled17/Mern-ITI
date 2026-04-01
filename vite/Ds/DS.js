function sortPeople(names, heights) {

  let result = [];
  let n = names.length;

  for (let i = 0; i < n; i++) {

    let maxIndex = 0;

    for (let j = 1; j < heights.length; j++) {
      if (heights[j] > heights[maxIndex]) {
        maxIndex = j;
      }
    }

    result.push(names[maxIndex]);

    names.splice(maxIndex, 1);
    heights.splice(maxIndex, 1);
  }

  return result;
}