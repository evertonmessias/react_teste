import React, { Component } from 'react';

export default class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moeda1_valor: "",
            moeda2_valor: "R$ ?"
        };
        this.converter = this.converter.bind(this);
    }
    numberToReal(num) {
        var numero = num.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }
    converter() { 
        if(this.state.moeda1_valor){       
        let url = `https://api.exchangeratesapi.io/latest?base=${this.props.moeda1}`        
        fetch(url)
        .then(res=>{
            return res.json();
        })        
        .then(json=>{                      
            let cotacao = json.rates[this.props.moeda2];
            let saida = parseFloat(this.state.moeda1_valor) * cotacao;                        
            let real = this.numberToReal(saida);
            this.setState({moeda2_valor:real})
        })
    }}
    render() {
        return (
            <div className="conversor">
                <fieldset><legend><h3>Conversor US$ para R$</h3></legend>
                <input type="number" placeholder="US$" onChange={(event) => { this.setState({ moeda1_valor: event.target.value }) }}></input>&nbsp;
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h4>Cotaçao: {this.state.moeda2_valor}</h4>
                </fieldset>
            </div>
        );
    }
}