//Synchronous JS (By default)
// Every instruction runs once after the previous instruction gets executed. 
console.log("fired First")
console.log("fired Second")
console.log("fired Third")


//Asynchronous JS
console.log('First');

// Set timeout function waits for 2 seconds before being executed
setTimeout(() => console.log('Second'), 2000);

console.log('Third');



// Promises
let myPromise = new Promise(function (myResolve, myReject) {
    // Simulate an asynchronous operation with setTimeout
    setTimeout(function () {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            myResolve(randomNumber); // Resolve the promise with the random number if successful
        } else {
            myReject("Error: Random number is greater than or equal to 0.5"); // Reject the promise with an error message if unsuccessful
        }
    }, 2000); // Simulate a 2-second delay
});

// Consuming Code (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) {
        console.log("Resolved with value:", value);
    },
    function (error) {
        console.error("Rejected with error:", error);
    }
);



// Async Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function myAsyncFunction() {
    try {
        // Simulate an asynchronous operation with a delay
        await delay(2000);

        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return randomNumber; // Resolve the promise with the random number if successful
        } else {
            throw new Error("Random number is greater than or equal to 0.5"); // Throw an error if unsuccessful
        }
    } catch (error) {
        throw error; // Rethrow the error to propagate it to the calling code
    }
}

// Consuming Code (Must wait for the async function to complete)
async function consumeAsyncFunction() {
    try {
        const result = await myAsyncFunction();
        console.log("Resolved with value:", result);
    } catch (error) {
        console.error("Rejected with error:", error.message);
    }
}

consumeAsyncFunction();

