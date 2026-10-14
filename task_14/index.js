'use strict';

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}

async function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => promise.then(data => resolve(data)).catch(error => reject(error)));
    });
}

(async () => {
    const data = await race([
        wait(2000), Promise.reject(new Error('error'))
    ]);

    console.log(data);
})();