import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>IP address tracker</h1>
        <form>
          <input type="text" />
          <button type="submit">&#10095;</button>
        </form>
        <main>
          <ul>
            <li>
              <span>ip address</span>
              <p>192.212.174.101</p>
            </li>
            <li>
              <span>location</span>
              <p>Brooklyn, NY 10001</p>
            </li>
            <li>
              <span>timezone</span>
              <p>UTC -05:00</p>
            </li>
            <li>
              <span>isp</span>
              <p>SpaceX Starlink</p>
            </li>
          </ul>
        </main>   
      </header>
         
      <div className='map'></div>
    </div>
  );
}

export default App;
