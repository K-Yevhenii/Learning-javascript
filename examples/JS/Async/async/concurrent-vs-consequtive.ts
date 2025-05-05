// All three requests are executed in parallel
function requestsWithPromiseAll() {
    return Promise.all([request1(), request2(), request3()]);
}

// Runs one after the other
async function requestsWithAsyncAwait() {
    await request1();
    await request2();
    await request3();
}

async function requestsWithPromiseAllAndAsyncAwait() {
    // Runs in parallel
    await Promise.all([request1(), request2(), request3()]);

    // Runs after execution of all 3 promises
    await request4();
}
