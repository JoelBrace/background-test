// worker.js
const { parentPort } = require('worker_threads');

// Define the method you want to run in the background
function backgroundMethod() {
    // Simulate a long-running task
    for (let i = 0; i < 1e9; i++) {}
    return 'Task completed';
}

// Execute the method and send the result back to the main thread
const result = backgroundMethod();
parentPort.postMessage(result);
