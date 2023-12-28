import "./App.css";

const Chart = () => {
  return <div className="chart-container">Chart</div>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Dashboard</header>
      <div className="chart-dashboard">
        <Chart />
        <Chart />
        <Chart />
        <Chart />

      </div>
    </div>
  );
}

export default App;
