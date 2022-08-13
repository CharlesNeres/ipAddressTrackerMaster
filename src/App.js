import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.loadIPGeolocationAPI = this.loadIPGeolocationAPI.bind(this);
    this.loadDataIPGeolocationAPI = this.loadDataIPGeolocationAPI.bind(this);
    this.state = {}
  }

  loadIPGeolocationAPI(e){
    e.preventDefault();
    let ip = e.target[0].value;

    let api_key = 'at_gKGA2OV6BNuarwVr7e8sr11qAPguc';
    var api_url = 'https://geo.ipify.org/api/v1?';    
    var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
    
    if(ip){
      fetch(url)
      .then(response => response.json())
      .then(data => this.loadDataIPGeolocationAPI(data));
    }
  }

  loadDataIPGeolocationAPI(data){
    let location = data.location;
    this.setState({
      ip: data.ip,
      isp: data.isp,
      city: location.city,
      country: location.country,
      postalCode: location.postalCode,
      region: location.region,
      timezone: location.timezone
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>IP address tracker</h1>
          <form onSubmit={this.loadIPGeolocationAPI}>
            <input type="text" />
            <button type="submit">&#10095;</button>
          </form>
          <main>
            <ul>
              <li>
                <span>ip address</span>
                <p>{this.state.ip}</p>
              </li>
              <li>
                <span>location</span>
                <p>{this.state.city}, {this.state.region} {this.state.postalCode}</p>
              </li>
              <li>
                <span>timezone</span>
                <p>UTC {this.state.timezone}</p>
              </li>
              <li>
                <span>isp</span>
                <p>{this.state.isp}</p>
              </li>
            </ul>
          </main>   
        </header>
          
        <div className='map'></div>
      </div>
    );
  }
}

export default App;
