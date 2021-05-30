import { Provider } from "react-redux";
import store from './redux/store'
import image from './task2-image.svg'
import WeatherContainer from "./components/WeatherContainer"
import './App.css';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={image} className="back-icon" alt="image" style={{ top: "5vh", left: "3vw" }} />
      <WeatherContainer />
      <img src={image} className="back-icon" alt="image" style={{ bottom: "5vh", right: "3vw" }} />
    </div>
    </Provider>
    
  );
}

export default App;
