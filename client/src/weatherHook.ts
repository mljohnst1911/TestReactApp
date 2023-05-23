import { useQuery} from "react-query";
import { WeatherForecast } from "./types/WheatherForecast";
import axios, { AxiosError } from "axios";
import Config from "./Config";

const useFetchWeather = () => {
    return useQuery<WeatherForecast[], AxiosError>("weatherforecast", () =>
    axios.get(`${Config.baseApiUrl}/weatherforecast`).then((resp) => resp.data),
    {
        refetchInterval: 6000,
    }
  );
}

export  {useFetchWeather}