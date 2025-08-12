console.log("Sachin is Hacker")
console.log("Bittu is Hacker")

setTimeout(()=>{
    console.log("I am inside setTimeOut")
},2000)
console.log("The end")
setTimeout(()=>{
    console.log("I am inside setTimeOut2")
},2000)

const fn = () =>{
    console.log("Nothing")
}
const callback = (arg , fn) =>{
    console.log(arg)
    fn()
}
const loadScript = (src , callback)=>{
   let sc =  document.createElement("script")
    sc.src = src;
    sc.onload = callback("Sachin",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)