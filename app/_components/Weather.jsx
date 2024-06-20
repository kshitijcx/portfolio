import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WeatherIcon from "./WeatherIcon";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

const fetchWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${process.env.NEXT_PUBLIC_LOC}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER}`
  );
  const data = await response.json();
  return data;
};

const Weather = async () => {
  revalidatePath("/");
  const dt = await fetchWeather();
  const weather = dt.weather[0];
  const hum = dt.main.humidity;
  const pres = dt.main.pressure;
  const temp = Math.round(dt.main.temp);

  return (
    <Card className="md:h-full tracking-wide flex flex-col justify-between">
      <CardHeader className="flex flex-row justify-between items-center max-md:py-2">
        <div>
          <CardTitle className="font-semibold text-xl max-md:text-base">
            <p>{format(Date.now(), "eeee")}</p>
          </CardTitle>
          <CardDescription className="max-md:text-xs">
            {weather.description}
          </CardDescription>
        </div>
        <WeatherIcon icon={weather.icon} size={48} />
      </CardHeader>
      <CardContent className="text-3xl max-md:text-2xl font-bold flex items-center justify-center max-md:pb-4">
        <div>
          <p className="flex gap-5 items-center">
            {temp}&deg;
            <span className="text-xs text-neutral-400">
              pr: {pres} hu: {hum}
            </span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="max-md:pb-3">
        <p className="tracking-normal text-sm max-md:text-xs">
          Dharamshala, Himachal Pradesh
        </p>
      </CardFooter>
    </Card>
  );
};
export default Weather;
