import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

const fetchWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${process.env.NEXT_PUBLIC_LOC}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER}`,
  );
  const data = await response.json();
  return data;
};

const Weather = async () => {
  const dt = await fetchWeather();
  const weather = dt.weather[0];
  const hum = dt.main.humidity;
  const pres = dt.main.pressure;
  const temp = Math.round(dt.main.temp);
  const loading = false;

  return (
    <Card className="md:h-full">
      <CardHeader className="flex flex-row justify-between items-center py-2 h-24">
        <div>
          <CardTitle className="font-semibold text-2xl tracking-wide flex justify-between">
            <p>{format(Date.now(),'eeee')}</p>
          </CardTitle>
          <CardDescription className="tracking-wide">
            {!loading && weather.description}
          </CardDescription>
        </div>
        <WeatherIcon icon={weather.icon} size={48} />
      </CardHeader>
      <Separator />
      <CardContent className="text-4xl font-bold tracking-wide py-3 h-20 flex items-center justify-center">
        <div>
          <p className="flex gap-5 items-center">
            {temp}&deg;
            <span className="text-xs text-neutral-400">
              pr: {pres} hu: {hum}
            </span>
          </p>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="py-3 align-center">
        <p className="underline-offset-2">
          Dharamshala
        </p>
      </CardFooter>
    </Card>
  );
};
export default Weather;
