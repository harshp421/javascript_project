const addbutton = document.querySelector("#btn");

const updateLocaldata=()=>{
    const textareadata=document.querySelectorAll('textarea');
    const notes=[];
    textareadata.forEach((note)=>{
         return notes.push(note.value);
    })
 //   savedata in local strorage
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addnotes =(text="")=>{
    const note=document.createElement('div');
    note.classList.add('note');
    const htmldata=`<div class="opration">
    <button class="edit" id="b1">Edit</button>
    <button class="delete" id="b1">del </button>
     </div>
      <div class="main ${text?"":"hidden"}" > </div>
    <textarea class="${text?"hidden":""}"></textarea>`;
    note.insertAdjacentHTML('afterbegin',htmldata);
    //console.log(note);

//getting thr reference

const editbutton=note.querySelector('.edit');
const delatebutton=note.querySelector('.delete')
const maindiv=note.querySelector('.main')
const textarea=note.querySelector('textarea')
//delate button
delatebutton.addEventListener('click',()=>{
    note.remove();
    updateLocaldata();
})
//edit 
textarea.value=text;
maindiv.innerHTML=text;


editbutton.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');     
})

textarea.addEventListener('change',(event)=>{
const value=event.target.value;
maindiv.innerHTML=value;
updateLocaldata();
})
document.body.appendChild(note);
}

//getting data from local storage
const notes= JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note)=>addnotes(note))}

addbutton.addEventListener('click',()=>addnotes());
