import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import carrinho from './carrinho.png';
import './App.css';
class Upgrades extends Component {

  constructor(props){
    super(props)
    this.state={
      check: false,
      cor: ['secondary', 'inherit'],
      lista: [
        {
          'preco': 10,
          'desc': 'Cursinho do "cesi" de computação',
          'id': 1,
          'mult': 0.2,
          'recompensa': '0.2 senhas por segundo',
          'detalhes': 'Aprender fundamentos basicos da segurança da informação: Ativo, Ameaça, Vulnerabilidade',
        },
        {
          'preco': 25,
          'desc': 'Livro sobre SI',
          'id': 2,
          'mult': 0.5,
          'recompensa': '0.5 senhas por segundo',
          'detalhes': 'Aprender principios basicos de SI: Confidencialidade, Autenticidade, Disponibilidade, Integridade',
        },
        {
          'preco': 50,
          'desc': 'Bot para quebrar captcha',
          'id': 3,
          'mult': 0.8,
          'recompensa': '0.8 senhas por segundo',
          'detalhes': 'Aprendizado do conceito de não-repudio',
        },
        {
          'preco': 100,
          'desc': 'Computador novo',
          'id': 4,
          'mult': 0,
          'recompensa': 'Computador mais potente',
          'detalhes': 'Liberar mais upgrades',
        },
      ],
      lista2: [
        {
          'preco':150,
          'desc': 'Curso FIC IFMS',
          'id': 1,
          'mult': 1,
          'recompensa': '1 Senha por segundo',
          'detalhes': 'Aprendizado de conceitos como chave Simétrica e Assimetrica',
        },
        {
          'preco': 250,
          'desc': 'Aulas com o Prof. Guilhen',
          'id': 2,
          'mult': 1,
          'recompensa': '1 Senha por segundo',
          'detalhes': 'Conceitos de criptografia: Criptoanálise, Criptologia',
        },
        {
          'preco': 400,
          'desc': 'Palestra sobre criptografia simetrica',
          'id': 3,
          'mult': 1.5,
          'recompensa': '1.5 Senhas por segundo',
          'detalhes': 'Tecnicas de Substituição: Cifra de César, Monoalfabéticas e Vigenère',
        },
      ]
    }
  }

  listas = (lista) => {
    const a = lista.map((item)=>
      <div key={item.id}>
        <div className="upgrades">
          <div className="butCarrinho">
            <Fab onClick={()=>this.remCham(item.id)} color={this.state.cor[0]}>
              <img className="carrinho" src={carrinho} alt="logo" />
            </Fab>
          </div>
            <div className="tooltip">
              <div className="preco">
                <p> Preço: {item.preco}</p>
                <p> Bonus: {item.recompensa} </p>
              </div>
              <br>
              </br>
              <p className="item">
                {item.desc}
                <div className="tooltiptext">
                  {item.detalhes}
                </div>
              </p>
          </div>
        </div>
      </div>
    );
    return a
  }

  remCham = (id) => {
    console.log("foi")
    this.mapeando(id)
  }

  mapeando = (id) => {
    if (!this.state.check) {
      this.state.lista.map(
        (item) => {
          if (item.id === id){
            if(this.props.verPontos() >= item.preco){
              this.props.pegaMult(item.mult)
              this.props.diminuiPontos(item.preco)
              if(item.id === 4){
                this.props.ver()
                this.setState({
                  check: true,
                  cor: [this.state.cor[1], this.state.cor[0]]
                })
              }
              this.setState({
                lista: this.state.lista.filter(item => item.id !== id)
              })
            }
          }
        }
      )
    } else {
      this.state.lista2.map(
        (item) => {
          if (item.id === id){
            if(this.props.verPontos() >= item.preco){
              this.props.pegaMult(item.mult)
              this.props.diminuiPontos(item.preco)
              this.setState({
                lista2: this.state.lista2.filter(item => item.id !== id)
              })
            }
          }
        }
      )
    }
  }

  render(){
    const {lista, lista2, check} = this.state
    let a;

    if(!check) {
      a = this.listas(lista)
    }else{
      a = this.listas(lista2)
    }

    return(
      <div>
        {a}
      </div>
    );
  }

}
export default Upgrades;
