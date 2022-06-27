const datas = [
    {
        name: 'Santosh',
    profession:'software'},
    {
        name: 'Devi',
    profession:'software'}
]


// Problem
/*

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`
        });
        document.body.innerHTML = output

    }, 1000);
}


function createdata(newdata) {
    setTimeout(() => {
        datas.push(newdata);     // we are pushing the object into the array
    }, 2000);
}

createdata({name:"Papa",profession:"software"});

getDatas();

*/

// By following above code, we will see in page like below

/* 
    Santosh
    Devi

    but not 

    Santosh
    Devi
    Harsha
                       
*/

    // because getDatas got called it refreshes the DOM at 1sec, at that time createdata isn't called so we see only santosh,devi in the console

// To clear this problem we use async, awit, callbacks, promises

// Using callback


/*

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`
        });
        document.body.innerHTML = output

    }, 1000);
}


function createdata(newdata,callback) {  // we recieve a callback means getdatas function as a callback
    setTimeout(() => {
        datas.push(newdata);
        callback();   // the function call happens after the value is pushed
    }, 2000);
}

createdata({name:"Harsha",profession:"software"},getDatas);  // we call getdatas here

*/

/* 
    Santosh
    Devi
    Harsha

    but not 

    santosh
    Devi
    

    So, by using callback, we get rid from the bad user experience of not getting all three data
                       
*/


// Promises

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`
        });
        document.body.innerHTML = output

    }, 1000);
}


function createdata(newdata) {  
    return new Promise((resolve,reject) => {  // created promise object nad prommise takes two things resolve and reject.
        setTimeout(() => {
            datas.push(newdata);
            let error = false;  
            if (!error) {      // if any error is not there then resolve function calls else reject function calls
                resolve();
            } else {
                reject("something went wrong");
            }
        }, 2000);
    })

    
}

// createdata({ name: "Harsha", profession: "software" }).then(getDatas);  // then here means it is for the resolve function . whenever the function resolve calls, then this then is executes





/* 
    Santosh
    Devi
    Harsha

    but not 

    santosh
    Devi
    

    So, by using promise, we get rid from the bad user experience of not getting all three data
                       
*/


// Async & await

async function start()  {    // async means it won't stop for anything, it executes the next one
    await createdata({ name: 'Harsha', profession: 'software' });  // await here means as soon as start is called, createdata function calledand the data is pushed into the array.after that getDatas function called
    getDatas();
}
start()

//output is

/* 
    Santosh
    Devi
    Harsha

    but not 

    santosh
    Devi
    

    So, by using asyc and await, we get rid from the bad user experience of not getting all three data
                       
*/