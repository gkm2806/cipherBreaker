import React, { Component } from 'react';
import computador1 from './assets/computador1.svg';
import computador2 from './assets/computador3.svg';
import computador3 from './assets/computador3.svg';
import './styles/App.css';
class Clicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      pontos: 0,
      multiplicador: 0,
      verdade: 0,
      clicks: 0
    }
  }
  componentWillReceiveProps(next){
    if(next.verPontos){
      this.setState({
        pontos: next.verPontos()
      })
    }

    if(next.verdade === 1){
      this.setState({verdade: 1})
    }
    if(next.verdade === 2){
      this.setState({verdade: 2})
    }
    if(next.verdade === 3){
      this.setState({verdade: 3})
    }
    this.setState({multiplicador: next.mult})
  }

  componentDidMount() {
    this.modi()
  }

  modi = () => {
    this.interval = setInterval(()=>{
      const {multiplicador} = this.state
      this.setState(
        {
          pontos: this.state.pontos + multiplicador
        },
        ()=>this.props.pegaPontos(this.state.pontos)
      )
    }, 1000)
  }
  clickListener = () => {
    this.setState({
      pontos: this.state.pontos + 1,
      clicks: this.state.clicks + 1
    },
      ()=>this.props.pegaCoisas(this.state.pontos, this.state.clicks)
    )
  }

  render(){
    let img;
    switch (this.state.verdade) {
      case 0:
        img = <img src={computador1} className="App-logo" alt="logo" />
        break;
      case 1:
        img = <img src={computador2} className="App-logo" alt="logo" />
        break;
      case 2:
        img= <img src={computador3} className="App-logo" alt="logo" />
        break;
      default:
        img = <p>a</p>
        break;
    }
    return(
      <div className="clicker">
        <p>
          Senhas decripatadas: {Math.trunc(this.state.pontos)}
        </p>
        <p className="velocidade">
          Velocidade {this.state.multiplicador}/s
        </p>
        <div onClick={()=>this.clickListener()}>
          {img}
        </div>
      </div>
    );
  }
}
export default Clicker;
