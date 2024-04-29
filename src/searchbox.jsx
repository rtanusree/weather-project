import { useState } from "react"
import './searchbox.css'
import {Info} from "./info"
export function Search(){
  let[city,setcity]=useState("")
  let[image,setimage]=useState("https://images.pexels.com/photos/1453485/pexels-photo-1453485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  let[icon,seticon]=useState("https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png")
  let[datas,setdata]=useState({
      temp:0,
       weather:"haze",
       feels_like:0,
       Humidity:0,
       name:"city",
       wind:0 })
  const url="https://api.openweathermap.org/data/2.5/weather";
  const API ="c02683c326a26bcf75bd4b2190db1260";
  function updatecity(event){
     setcity(event.target.value) }
async function getweather(){
    setcity("")
     let response= await axios.get(`${url}?q=${city}&appid=${API}&units=metric`);
     setdata({
      temp:response.data.main.temp,
        wind:response.data.wind.speed,
         Humidity:response.data.main.humidity,
         feels_like:response.data.main.feels_like,
        name:response.data.name,
        weather:response.data.weather[0].main }) 
     if(response.data.main.temp>15){
      setimage("https://images.pexels.com/photos/441663/pexels-photo-441663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      seticon("https://static.vecteezy.com/system/resources/previews/019/922/833/original/illustration-of-3d-sun-icon-png.png")
    } 
    else{
      setimage("https://us.123rf.com/450wm/jpdccouk/jpdccouk2210/jpdccouk221000206/192968788-3d-illustration-background-abstract-cold-weather-cold-weather-season-november-december.jpg?ver=6")
      seticon("https://cdn3d.iconscout.com/3d/premium/thumb/snowing-cloud-10937474-8824800.png?f=webp")
     } }
    return(
      <>
      <div className="background" style={{backgroundImage:`url(${image})`}}>
       </div>
      <div className="box">
        <h1>Weather Forecast</h1>
        <div className="box1">
          <div className="input">
            <input type="text" placeholder="enter city" value={city}onChange={updatecity}></input>
            <button onClick={getweather}>get weather</button>
            <h1>{datas.name}</h1>
           </div>
          <img src={icon}/>
        </div>
      </div>
      <Info data={datas}/>
      </>
    )
}