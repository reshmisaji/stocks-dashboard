import "./App.css";
import { Chart } from "./components/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dashboard</header>
      <div className="chart-dashboard">
        <Chart type="candlestick" />
        <Chart type="candlestick" />
    
      </div>
    </div>
  );
}

export default App;
