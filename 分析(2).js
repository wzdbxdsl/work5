setTimeout(() => {
    console.log('setTimeout start');
    new Promise((resolve) => {
    console.log('promise1 start');
    resolve();
    }).then(() => {
    console.log('promise1 end');
    })
    console.log('setTimeout end');
   }, 0);
   function promise2() {
    return new Promise((resolve) => {
    console.log('promise2');
    resolve();
    })
   }
   async function async1() {
    console.log('async1 start');
    await promise2();
    console.log('async1 end');
   }
   async1();
   console.log('script end');
   //因为setTimeout延时长为0，故先执行所有可执行的代码执行完毕后，
   //才轮到setTimeout执行其内部操作
   //async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到
   // await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
//await后面跟一个表达式，async方法执行时，遇到await后会立即执行表达式，然后把表达式后边的代码放到微任务队列中，让出执行栈让同步代码先执行；
//async1 start->promise2->script end->async1 end->
//promise1 start->promise1 end->setTimeout start->setTimeout end
