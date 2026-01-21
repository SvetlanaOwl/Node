const promise = new Promise((resolve, reject) => {
    if (true) resolve("Done!");
    else reject("Error!");
});

promise
.then(result => console.log(result))
.catch(err => console.log(err));