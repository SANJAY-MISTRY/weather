import React, {useState} from 'react';

const api = {
  key : "2ef01b4fbeb828ebc1343a2abd8ceb6c",
 
  base: "https://api.openweathermap.org/data/2.5/"
}


function App1() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result =>{
                setWeather(result); 
                setQuery('');
                console.log(result);
            })
        }
    }

  const date = (dat) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];

    let day = days[dat.getDay()];
    let month = months[dat.getMonth()];
    let year = dat.getFullYear();
    let date = dat.getDate();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : "App" }>
        <main>
        
          <div className="searchBox">
              <input 
              className="searchBar"
              type="text"
              placeholder="Search Your City & country name Here..."
              onChange={e => setQuery(e.target.value)}
              value = {query}
              onKeyPress={search}
              />
          </div>
          {(typeof weather.main != "undefined") ? (
        <div>
           <div className="location-Box">
                <div className="location">{weather.name},{weather.sys.country}</div>
                <div className="date">{date(new Date())}</div>
          </div>
          <div className="weatherBox">
            <div className="temp">
                {Math.round(weather.main.temp)}&deg; C
            </div>
                <div className="weather">{weather.weather[0].min}</div>
          </div>
        </div>
          ) : ('') }
          <div className="own"><h4>Created By : SANJAY SHARMA</h4></div>
        </main>
        
    </div>
  );
}

export default App1;
