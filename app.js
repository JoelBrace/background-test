// main.js
const { Worker } = require('worker_threads');

function runBackgroundTask() {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js');

        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

// Run the background task
runBackgroundTask()
    .then(result => {
        console.log(result); // Output: Task completed
    })
    .catch(err => {
        console.error(err);
    });

console.log("test");
