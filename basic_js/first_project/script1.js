var search = document.getElementById("search");
    button = document.querySelectorAll('button');
    var screanval='';
     for (const iterator of button) {

         iterator.addEventListener('click',(e)=>{
          var  buttonval= e.target.innerText;
           console.log(buttonval);
           search.value=buttonval;       
             if(buttonval=="X"){
                buttonval=='*';
                  screanval +=buttonval;
                 search.value=screanval;
             }
            else if(buttonval=="C"){
              screanval =" ";
               search.value=screanval;
           }
            else if(buttonval=="="){
               
               search.value=eval(screanval);
           }
            else{
               screanval +=buttonval;
               search.value=screanval;
          }
         })
          }
    

