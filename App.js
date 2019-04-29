import React, { Component } from 'react';
import Upgrades from './upgrades';
import Clicker from './clicker';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      multiplicador: 0,
      pontos: 0,
      verdade: 0,
    }
  }

  pegaPontos = (pont) =>{
    this.setState({
      pontos: pont
    })
  }

  diminuiPontos = (pontos) => {
    this.setState({
      pontos: this.state.pontos - pontos
    })
  }

  verPontos = () => {
    return this.state.pontos
  }

  ver = () => {
    this.setState({
      verdade: this.state.verdade + 1
    })
  }

  pegaMult = (mult) => {
    this.setState({
      multiplicador: this.state.multiplicador + mult
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clicker verPontos={this.verPontos} verdade={this.state.verdade} pegaPontos={this.pegaPontos} mult={this.state.multiplicador}/>
          <Upgrades diminuiPontos={this.diminuiPontos} ver={this.ver} verPontos={this.verPontos} pegaMult = {this.pegaMult}/>
        </header>
      </div>
    );
  }
}

export default App;
