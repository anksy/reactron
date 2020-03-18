import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    countries: [],
    chosen: undefined
  }
  
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => this.setState({ countries }))
    .catch(error => console.log("error =>", error))
  }

  render(){
    const { countries, chosen } = this.state;
    return (
      <div className="App">
        <header className="App-header">
           Select Country <select onChange={(e) => this.setState({ chosen: e.target.value})}>
             {countries.map(country => <option value={country.name} key={country.name}>{country.name}</option>)}
           </select>

    {chosen && <i>You have chosen {chosen}</i>}
        </header>
      </div>
    );
  }
}

export default App;
