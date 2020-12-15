function ExampleConstructor() {

}
console.log('Value of ExampleConstructor: ',ExampleConstructor);
console.log('Typeof of ExampleConstructor: ', typeof ExampleConstructor);

var aVar = new ExampleConstructor();
console.log('Value of aVar: ', aVar);

var instanceCheck = aVar instanceof ExampleConstructor;
console.log('Value of instanceCheck: ', instanceCheck);
