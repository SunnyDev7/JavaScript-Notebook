//javascript is synchronous prog lan

// setInterval, setTimeOut, API handling these are some examples of Asynchronous Tasks
// Handle Asynchronous tasks means to make them behave as synchronous
// to handle them we have Promise and Async Await



//Promise

//Promise is the way of writing code that will give promise to complete an asynchronous task
//at some point of time in future, or it will not
//Using promise we can write asynchronous code in a more managable way 

let completed = true;

let learnJS = new Promise((resolve, reject) => {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
})
.then(() => console.log("Good Job")) //output when resolves
.catch(() => console.log("Pls Complete Learning JS")) //output when rejected
.finally(() => console.log("Study everyday"))




//Async Await
//this is the new way of defining promise
//Async makes a function promise based
//and Await lets a task know it needs to be done synchronously
// Using async await we can write asynchronous code more synchronously


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 5000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
f();



//using async only
async function a(){
    let response = await fetch('/article/promise-chaining/user.json'); //1.5sec
    let user = await response.json();
  }

a();





