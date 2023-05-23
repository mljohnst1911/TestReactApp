import React from 'react';
import './App.css';
import { useFetchWeather } from './weatherHook';
import ApiStatus from './ApiStatus';
import { WeatherForecast } from './types/WheatherForecast';

type props = {
  AppTitle: string
}

function App({AppTitle}: props) {

  const { data, status, isSuccess } = useFetchWeather();

  if (!isSuccess) return <ApiStatus status={status}></ApiStatus>;

  return (
    <>
    <h1>{AppTitle}</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Summary</th>
          <th>Temp F/C</th>          
        </tr>
      </thead>
      <tbody>
          {data &&
            data.map((w: WeatherForecast) => (
              <tr key={w.date}>
                <td>{w.date}</td>
                <td>{w.summary}</td>
                <td>{w.temperatureF.toString()}/{w.temperatureC.toString()}</td>                
              </tr>
            ))}
        </tbody>
    </table>
    </>
  );
}

export default App;
