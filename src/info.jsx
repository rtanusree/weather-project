import './info.css'
//import './searchbox.css'
export function Info({data}){
    return(
      <>
     <div className="contentbox">
        <div className="content">
            <h1>Weather</h1>
             <p>{data.weather}</p>
          </div>
          <div className="content">
            <h1>Temp</h1>
            <p>{data.temp}</p>
          </div>
          <div className="content">
            <h1>Feels like</h1>
            <p>{data.feels_like}</p>
          </div>
          <div className="content">
            <h1>Humidity</h1>
            <p>{data.Humidity}</p>
          </div>
          <div className="content">
            <h1>Wind</h1>
            <p>{data.wind}</p>
          </div>
        </div>
       </>
    )
}
