const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let array = [];

  for (i = 0; i < param.length; i++) {
    if (array.includes(param[i]) == false) {
      array.push(param[i]);
    }
  }
  return array;
}

console.log(removeDuplicates(duplicates));
  