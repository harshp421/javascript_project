let realdata="";
let Quotedata="";
const quotes= document.getElementById("quotes");
const author=document.getElementById("author")
const newQuote=document.getElementById("newQuote");






const getnewquotes=()=>{
    let rnumber=Math.floor(Math.random()*100);
    Quotedata=realdata[rnumber];
    quotes.innerText=`${Quotedata.text}`;
    author.innerText= `${Quotedata.author}`;

    Quotedata.author == null
    ?(author.innerText="unknown") 
    :(author.innerText=`${Quotedata.author}`) 

}

const getquotes=async()=>{
    const api="https://type.fit/api/quotes";
    try{
        let data=await fetch(api);
        realdata=await data.json();
      

    }catch(error){

    }
}
getquotes();
newQuote.addEventListener("click",getnewquotes)

