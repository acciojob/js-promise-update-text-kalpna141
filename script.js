// //your JS code here. If required.
// let promise= new Promise(function(resolve,reject){
// 	resolve("Hello, world!");
// })
// promise.then(function success(result){
//   console.log(result);
// })

function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}