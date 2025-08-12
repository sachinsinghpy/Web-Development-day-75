console.log('This is Promises');

let prom1 = new Promise((resolve,rejecet)=>{

    let a = Math.random();
    if (a<0.5){
        rejecet("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Sachin")
            
        }, 3000);
    }
    })

console.log('This is Promises');

let prom2 = new Promise((resolve,rejecet)=>{

    let a = Math.random();
    if (a<0.5){
        rejecet("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Sachin2")
            
        }, 1000);
    }
    })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.any([prom1,prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

