function perulangan() {
  var Data=[180,108,147,100,200,176,190,154,160,110];
  console.log("dengan for");
  for(var i = 0; i<Data.length; i++){
    console.log(Data[i]);
  }
  console.log("dengan for of");
  for (let x of Data) {
    console.log(x);
  }
}
perulangan()
