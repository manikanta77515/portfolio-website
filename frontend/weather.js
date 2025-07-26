const apiKey='7833b5253250a5e107ca64604f5eb312';
// document.getElementById('btn').addEventListener('click',getweather);

function getweather(){


    const city=document.getElementById('input')
    const result=document.getElementById('result')


    if(city.value  == ''){
        alert('enter your city name')
        return;
    
    }


     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;


    fetch(url)

    .then(response =>{
        if(!response.ok){
            throw new error('city not found');
        
        }
        return response.json();
    })


    .then(data => {
    const temp=data.main.temp;
    const weather=data.weather[0].main;
    const icon=data.weather[0].icon;


    result.innerHTML =`
    <h2> ${data.name} </h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
    <p> ${temp} </p>
    <p> ${weather}</p>
    `;
})

.catch(error =>{
    result.innerHTML=`<p> ${error.message} </p>`;
})


}






















