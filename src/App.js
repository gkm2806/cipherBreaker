import React, { Component } from 'react';
import Upgrades from './upgrades';
import Clicker from './clicker';
import './styles/App.css';
import Viewer from "./questoes/questoes.viewer.jsx"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      multiplicador: 0,
      pontos: 0,
      verdade: 0,
      clicks: 0,
    }
  }
  pegaCoisas = (pontos,clicks) => {
    this.setState({
      pontos: pontos,
      clicks: clicks
    })
  }
  pegaPontos = (pontos) => {
    this.setState({
      pontos: pontos
    })
  }

  nao = () =>{
    this.setState({
      pontos: this.state.pontos/2
    })
  }

  ok = () =>{
    this.setState({
      pontos: this.state.pontos*1.2
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
  getClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
  render() {
    return (
      <div className="App">
        <Clicker getClicks={this.getClicks} verPontos={this.verPontos} verdade={this.state.verdade} pegaPontos={this.pegaPontos} pegaCoisas={this.pegaCoisas} mult={this.state.multiplicador} />
        <Upgrades diminuiPontos={this.diminuiPontos} ver={this.ver} verPontos={this.verPontos} pegaMult={this.pegaMult} />
        <Viewer clicks={this.state.clicks} ok={this.ok} nao={this.nao} />
      </div>
    );
  }
}

export default App;
