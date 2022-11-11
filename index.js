// var data = 0
// document.getElementById("თვლა");


// function decrement() {
//     data=data-1;
//     document.getElementById("თვლა").innerText=data;
// }

// function increment() {
//     data=data+1;
//     document.getElementById("თვლა").innerText=data;
// }



// var x=0
// var y=10
// var a=0
// if (a>=x && a<=y) {
//    function increment() {
//     a = 0
//     document.write (a)
//    }
   
// }  else {
//     function decrement() {
//         a=0
//         document.write(a)
//        }
// }



var data = 0
document.getElementById("თვლა").innerText=data;


function decrement() {
    if(data>0){
        data=data-1;
    }else{
        data=0;
        console.log("data is 0");
    }
    document.getElementById("თვლა").innerText=data;
}

function increment() {
    if(data<10){
        data=data+1;
    }else{
        data=10;
        console.log("data is 10");
    }
    document.getElementById("თვლა").innerText=data;
}