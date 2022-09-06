const options = {
	method: 'GET',
	headers: {
		'Accept':"application/json"
	}
};


  const  getjoke=()=>{
    fetch('https://icanhazdadjoke.com/', options)
	.then(response => response.json())
	.then(data => {
        document.getElementById('jokeidea').innerHTML=data.joke;
         console.log(data.joke);
        
    }
    )
	.catch(err => console.error(err));
}
