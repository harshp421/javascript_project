const counters=document.querySelectorAll('.counter');
//console.log(counters);

counters.forEach((counter)=>{
      // console.log(counter);
       counter.innerHTML='0';
   
     const updatecounter=()=>{
         const maxval=+counter.getAttribute("data-target");
         const startval=+counter.innerHTML;
         const incr=maxval/100;
         if(startval<maxval)
           counter.innerHTML=`${Math.round(startval+incr)}`
           setTimeout(updatecounter,10)
         
             }
     
     
       updatecounter();
       
})