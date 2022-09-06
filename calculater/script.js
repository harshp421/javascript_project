
const calcdeg =()=>{
    const calval=document.getElementById("calnum").value;
    // console.log(calval);
   const selectionval=document.getElementById("temp_diff");
   const valtamp=temp_diff.options[selectionval.selectedIndex].value;
   console.log(valtamp);


const caltofern =(calcious)=>{
   const fernhit=Math.round(((calcious *9/5)+32));
   return fernhit;
}
const fertocal =(fernhit)=>{
    const calcious=Math.round(((fernhit-32)*5/9));
    return calcious;
 }
   let asnvalue;

   if(valtamp == 'cal')
   {
      asnvalue=caltofern(calval);
      document.getElementById("answer").innerHTML=` - (${asnvalue}  Fahrenheit)`;
    
   }
   else{
     
      asnvalue=fertocal(calval);
      document.getElementById("answer").innerHTML=` -( ${asnvalue} celsius)`;
       
   }
}
