var newArray = [
  {
    title: 'book 1',
    author: 'author 1',
    isbn: '12345678910',
  },
  {
    title: 'book 2',
    author: 'author 2',
    isbn: '3475637577',
  },
  {
    title: 'book 3',
    author: 'author 3',
    isbn: '547866546756',
  }
];

console.log('Array: ',newArray);
console.log('typeof Array: ', typeof newArray);

console.log('stringify value of newArray',JSON.stringify(newArray));
console.log('typeof newArray',JSON.stringify(typeof newArray));

console.log('student',JSON.stringify({name:'Keivan Mojmali',numberId:'1234'}));
console.log('typeof student',typeof JSON.stringify({ name: 'Keivan Mojmali', numberId: '1234' }));

var jParse = JSON.parse(JSON.stringify({ name: 'Keivan Mojmali', numberId: '1234' }));

console.log('Value of jParse',jParse);
console.log('typeof Jparse: ',typeof jParse);
