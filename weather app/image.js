fetch("https://source.unsplash.com/random/?london").then((data)=>{
    data=data.json();

}).then((data)=>{
  console.log(data);
})