import React from 'react';

import './NousRejoindre.css';
var validator = require("email-validator")


class NousRejoindre extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
      email: '',
      emailValid: false
  }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(event){

      this.setState({ 
          email: event.target.value.toString(),
          emailValid: validator.validate(event.target.value.toString())
      })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      email:'',
      emailValid:false
    })
  }

  render(){

    const { 
        email,
        emailValid,
    } = this.state

    return (
      <div class='nous-rejoindre'>
        <div class='nous-rejoindre_content'>
          <div class='nous-rejoindre_image'>
            <img
              src={require('./img/4.png')}
              alt=''
            ></img>
          </div>
          <div class='nous-rejoindre_form'>
            <form onSubmit={this.handleSubmit}>
              <h2 class='nous-rejoindre_title'>Une dernière chose...</h2>
              <input
                placeholder='Adresse email'
                class='nous-rejoindre_email-input form-control'
                type='text'
                value={email}
                onChange={this.handleEmailChange}
              >
              </input>
              <button type="submit" disabled={!emailValid} class={`${emailValid ? '' : 'disabled'} btn btn-success align-self-end`}>Nous rejoindre</button>
            </form>
          </div>
        </div>
      </div>
    );  
  }
}
 
export default NousRejoindre;