
// var name ="harsh";
// var _name= "harsh";
// var aaha ="harsh";   // this will give us error
// var n12_name ="harsh";


// console.log("harsh" - "harsh");
// console.log("hatsh parmar");

//null and undefinr

// var name=null;
// console.log(name);
// console.log(typeof(name));


//  var harsh; 
// console.log(typeof(harsh));



// var number = 12456454646464;
// var name = " harsh";

// //console.log(isNaN(name));

// if(isNaN(name)){
//     console.log("plese enter valid number");
// }

// //turnary oprator
// var num = 15;
// console.log((num>18)?"you can vote":"yo conte");



// var sum=(a,b)=>{ return a+b; }
// a=sum(5,10);
// console.log(a);

// console.log("hrllo")
// alert("hello world")


// document.getElementById("ck").addEventListener("click",() => {
//         document.getElementById("val").innerHTML = "hello";
//         alert("hello world");


//     })

//     document.getElementById("ck").addEventListener("mouseover",() => {
//         document.getElementById("val").innerHTML = "helloover";
//         alert("hello world");


//     })


    // document.getElementById("ck").addEventListener("mouseout",() => {
    //     document.getElementById("val").innerHTML = "helloout";
    //     alert("hello world");


    // })


    // document.getElementById("ck").addEventListener("click",() => {
    //     document.getElementById("val").innerHTML = "hello";
    //     alert("hello world");


    // })

    // document.getElementById("ck").addEventListener("click",() => {
    //     document.getElementById("val").innerHTML = "hello";
    //     alert("hello world");


    // })

    
    
// 

//array in js
//
//let Myfriends = ['harsh','vivek','mitesh','harsn'];

// for (const key in Myfriends) {
//    console.log(key);
// }



///for of loop

// for (const iterator of Myfriends) {
//     console.log(iterator);
// }

//forEach loop

// Myfriends.forEach((element,index,array)=>{
//    console.log(element + " " + index );
// })
// it call the function for eatch eleement array

//sort mathod to sort the string
//console.log(Myfriends.sort());


//add element in array
//pust element in first

//let Myfriends = ['harsh','vivek','mitesh','harsn'];
// let count= Myfriends.unshift('kutta','vivek','insan');
// console.log(Myfriends);

// let count= Myfriends.push('kutta','vivek','insan');
// console.log(Myfriends);



// let count= Myfriends.pop();
// console.log(Myfriends);

// let count= Myfriends.shift();
// console.log(Myfriends);

//this method is just like  forEach menthod but Advanced

//call back functon aape che 
 

/*Myfriends.map((curelem,index,array)=>{
    console.log(curelem);
 });
*/

let arr=[1,2,2,5,4,6];
let arr1=arr.map((curElem)  => curElem=curElem*2).filter((curElem)=> curElem<10).reduce((accumelater,curElem)=> {  return accumelater+=curElem;})
console.log(arr1);


// let name="harsh, vivek, manish";
// let name1= name.slice(0,5);
// console.log(name1);


  //not take negetive value
// let name="harsh, vivek, manish";
// let name1= name.substring(0,5);
// console.log(name1);


// let name="harsh, vivek, manish";
// let name1= name.substr(-5);
// console.log(name1);

// let  st="hiii my name is harsh parmar";
// let name= st.replace('name','Name');
// console.log(name);

/* date time */


///console.log(r);

setInterval(()=>{ 
  let r= new Date();
  document.getElementById("time").innerHTML=r;
//  console.log(new Date().toDateString());
},1000)