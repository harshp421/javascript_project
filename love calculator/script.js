

const Checklove=(e)=>{
    let name =document.getElementById("name").value;
let crushname= document.getElementById('crushname').value;
  
    

  if(name==""){
    alert("please enter the name")
  }else if(crushname == ""){
    alert("enter your crush name")
  }
  else{
  const lovepersentage=Math.floor(Math.random()*100);
    document.getElementById("loveResult").value=lovepersentage+"%";
  }

   
}
