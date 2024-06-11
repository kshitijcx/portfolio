import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSun, Cloudy, MoonStar, Snowflake, Sun } from "lucide-react"

const WeatherIcon = ({icon,size}) => {
  if(icon==='01d'){
    return <Sun size={size}/>
  }else if(icon==='01n'){
    return <MoonStar size={size}/>
  }else if(icon==='02d'){
    return <CloudSun size={size}/>
  }else if(icon==='02n'){
    return <CloudMoon size={size}/>
  }else if(icon==='03d' || icon==='03n'){
    return <Cloud size={size}/>
  }else if(icon==='04d' || icon==='04n'){
    return <Cloudy size={size}/>
  }else if(icon==='09d' || icon==='09n'){
    return <CloudDrizzle size={size}/>
  }else if(icon==='10d' || icon==='10n'){
    return <CloudRain size={size}/>
  }else if(icon==='11d' || icon==='11n'){
    return <CloudLightning size={size}/>
  }else if(icon==='13d' || icon==='13n'){
    return <Snowflake size={size}/>
  }else if(icon==='50d' || icon==='50n'){
    return <CloudFog size={size}/>
  }
}
export default WeatherIcon