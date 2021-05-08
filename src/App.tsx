import React from 'react';
import Location from './components/ClassComponent';
import WeatherDisplay from './components/FunctionalComponent';

const App: React.FunctionComponent = () => {
  return (
    <div className = "App">
      <WeatherDisplay/>
      <Location/>
    </div>
  );
}

export default App;


